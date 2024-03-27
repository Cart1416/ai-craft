#replace this with your openai key
OPENAI_API_KEY = "OPENAI_KEY_HERE"

import flask
from flask import Flask, send_from_directory, request, jsonify, redirect, render_template, url_for, flash
import json
import hashlib
import openai

app = Flask(__name__)
openai.api_key = OPENAI_API_KEY

file_path = 'discovered_combinations.json'

try:
    with open('possible_combinations.json', 'r') as file:
        possible_combinations = json.load(file)
    pair_lookup = {(pair[0], pair[1]): {'result': entry['result'], 'emoji': entry['emoji']} for entry in possible_combinations for pair in [entry['pair']]}
    discovered_objects = set()
except FileNotFoundError:
    pass

try:
    with open("discovered_combinations.json", 'r') as file:
        discovered_objects = set(json.load(file))
except FileNotFoundError:
    pass

try:
    with open('possible_combinations.json', 'r') as file:
        initial_data = json.load(file)
    initial_data_formatted = json.dumps(initial_data, indent=4)
except FileNotFoundError:
    pass

with open('password.txt', 'r', encoding='utf-8') as password_file:
    HASHED_PASSWORD = password_file.read().strip()

@app.route('/')
def index():
    return send_from_directory('', 'index.html')

@app.route('/infinite-craft/')
def index2():
    return send_from_directory('neal', 'index.html')

@app.route('/<path:path>')
def everything(path):
    return send_from_directory('neal', path)

@app.route('/api/infinite-craft/pair', methods=['GET'])
def get_pair():
    try:
        with open('possible_combinations.json', 'r') as file:
            possible_combinations = json.load(file)
    except FileNotFoundError:
        possible_combinations = []

    # Create pair lookup dictionary
    pair_lookup = {}
    for entry in possible_combinations:
        if 'pair' in entry:
            pair = entry['pair']
            result = entry.get('result', '')
            emoji = entry.get('emoji', '')
            if isinstance(pair, list) and len(pair) == 2:
                pair_lookup[(pair[0], pair[1])] = {'result': result, 'emoji': emoji}
    discovered_objects = set()
    try:
        with open(file_path, 'r') as file:
            discovered_objects = set(json.load(file))
    except FileNotFoundError:
        pass
    first = request.args.get('first')
    second = request.args.get('second')

    # Check if both 'first' and 'second' parameters are provided
    if not first or not second:
        return jsonify({'error': 'Both "first" and "second" parameters are required.'}), 400

    # Look up the result for the pair
    pair_key = (first, second)
    if pair_key in pair_lookup:
        pair_result = pair_lookup[pair_key]
        # Check if the object is discovered for the first time
        isNew = pair_result['result'] not in discovered_objects
        pair_result['isNew'] = isNew
        # Add the discovered object to the set and save to JSON file
        if isNew:
            discovered_objects.add(pair_result['result'])
            with open(file_path, 'w') as file:
                json.dump(list(discovered_objects), file)
        return jsonify(pair_result)
    else:
        # If no result found for the pair, use OpenAI library
        message = "you are in the server of a game called ai craft where a user will combine 2 items like little alchemy and it will send a message to you and you have to say what the combination will make and an emoji, ALL you have to say is the emoji then a newline and then the result"
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": message}, {"role": "user", "content": f"{first} + {second}"}],
            temperature=0,
            max_tokens=100
        )
        print(response)
        if response and 'choices' in response and len(response['choices']) > 0:
            emoji = response['choices'][0]['message']['content'].split('\n', 1)[0]
            result = response['choices'][0]['message']['content'].split('\n', 1)[1]
            pair_result = {'result': result.strip(), 'emoji': emoji.strip()}
            # Save the pair result to JSON file
            new_combination = {
                "pair": [first, second],
                "result": result.strip(),
                "emoji": emoji.strip()
            }
            possible_combinations.append(new_combination)
            with open('possible_combinations.json', 'w', encoding='utf-8') as file:
                json.dump(possible_combinations, file, indent=4, ensure_ascii=False)
            isNew = pair_result['result'] not in discovered_objects
            pair_result['isNew'] = isNew
            if isNew:
                discovered_objects.add(pair_result['result'])
                with open(file_path, 'w') as file:
                    json.dump(list(discovered_objects), file)
            return jsonify(pair_result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
