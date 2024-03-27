(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1319:function(e,t,n){"use strict";n.r(t);n(110),n(50),n(43),n(87),n(88);var canvas,o,r,c,d,l=n(10),h=n(284),f=n(33),m=(n(60),n(45),n(15),n(62),n(65),n(34),n(314),n(208),n(46),n(383),n(203),n(303),[]),v=0,x=0,w=[[204,200,241],[50,213,202],[242,187,128]];function y(e,t,n,o,r,c){this.x=e,this.y=t,this.xSpeed=n,this.ySpeed=o,this.radius=r,this.opacity=c,this.color=w[Math.floor(Math.random()*w.length)]}function I(){r=window.innerWidth*d,c=window.innerHeight*d,canvas.width=r,canvas.height=c}var S={drawParticles:function(e,t){var n=Math.min(e-v,30);v=e,m.forEach((function(e){e.x+=e.xSpeed*n,e.y+=e.ySpeed*n,e.x<0&&(e.x=r),e.x>r&&(e.x=10),e.y<0&&(e.y=c),e.y>c&&(e.y=10)})),o.clearRect(0,0,r,c),o.lineWidth=1,m.forEach((function(e,i){o.beginPath(),o.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),o.fillStyle="rgba(0, 0, 0, ".concat(e.opacity,")"),o.fill()})),m.forEach((function(e,i){for(var t=x;t<Math.min(m.length,x+4);t++)if(i!==t){var n=m[t],o=e.x-n.x,r=e.y-n.y;Math.sqrt(o*o+r*r)<100&&(e.xSpeed+=o/1e5,e.ySpeed+=r/1e5,e.xSpeed=Math.min(Math.max(e.xSpeed,-.01),.01),e.ySpeed=Math.min(Math.max(e.ySpeed,-.01),.01))}})),x=(x+4)%m.length,window.innerWidth<800||(t.forEach((function(e,i){t.forEach((function(t,n){if(i!==n){var r=(e.left+e.width/2)*d,c=(e.top+e.height/2)*d,l=(t.left+t.width/2)*d,h=(t.top+t.height/2)*d,f=r-l,m=c-h,v=Math.sqrt(f*f+m*m);v<500&&(o.beginPath(),o.moveTo(r,c),o.lineTo(l,h),o.strokeStyle="rgba(200, 200, 200, ".concat(Math.min(1,1-v/500),")"),o.stroke())}}))})),t.forEach((function(e){m.forEach((function(t){var n=(e.left+e.width/2)*d,r=(e.top+e.height/2)*d,c=t.x-n,l=t.y-r,h=Math.sqrt(c*c+l*l);h<250&&(o.beginPath(),o.moveTo(t.x,t.y),o.lineTo(n,r),o.strokeStyle="rgba(200, 200, 200, ".concat(Math.min(1,1-h/250),")"),o.stroke())}))})))},createParticles:function(e){canvas=e,d=Math.min(window.devicePixelRatio,2),r=window.innerWidth*d,c=window.innerHeight*d,canvas.width=r,canvas.height=c,o=canvas.getContext("2d"),window.addEventListener("resize",I);for(var t=Math.min(150,window.innerWidth*window.innerHeight/12e3),i=0;i<t;i++){var n=Math.random(),l=n*(1.2*d)+1.1*d,h=.4*(1-n)+.1;m.push(new y(Math.random()*r,Math.random()*c,.03*Math.random()-.015,.03*Math.random()-.015,l,h))}},beforeDestroy:function(){window.removeEventListener("resize",I),m=[],v=0,x=0}},k=n(336);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function z(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var M,j,E,_=null,P={data:function(){return{elements:[{text:"Water",emoji:"💧",discovered:!1},{text:"Fire",emoji:"🔥",discovered:!1},{text:"Wind",emoji:"🌬️",discovered:!1},{text:"Earth",emoji:"🌍",discovered:!1}],instances:[{id:0,text:"Water",emoji:"💧",disabled:!1,zIndex:0,isNew:!1,discovered:!1,hide:!0}],selectedInstance:null,instanceId:10,hoverId:-1,firstSelected:"",secondSelected:"",mouseDown:!1,moveListener:null,sortByTime:!0,mobileCraftedElement:{},hasCrafted:!1,sidebarSize:305,pinwheelCoords:{x:0,y:0},discoveries:[],mobileIsCrafting:!1,instanceSound:null,rewardSound:null,deleteSound:null,errorSound:null,discoverySound:null,instanceSoundRate:1,isMuted:!1,isActive:!0,searchQuery:""}},computed:{sortedElements:function(){var e=this;return this.searchQuery?this.elements.filter((function(element){return element.text.toLowerCase().includes(e.searchQuery.toLowerCase())})):this.elements},showPinwheel:function(){return this.instances.some((function(e){return e.isNew}))}},created:function(){var e=JSON.parse(localStorage.getItem("infinite-craft-data"));e&&e.elements&&(this.elements=e.elements,this.hasCrafted=!0)},mounted:function(){var e=this;this.instanceSound=new k.Howl({src:["/infinite-craft/instance.mp3"],volume:.5}),this.rewardSound=new k.Howl({src:["/infinite-craft/reward.mp3"],volume:.4}),this.deleteSound=new k.Howl({src:["/infinite-craft/delete.mp3"],volume:.45}),this.errorSound=new k.Howl({src:["/infinite-craft/error.mp3"],volume:.4}),this.discoverySound=new k.Howl({src:["/infinite-craft/discovery.mp3"],volume:.1,rate:1.1}),S.createParticles(this.$refs.particles);requestAnimationFrame((function t(time){e.isActive&&(S.drawParticles(time,e.instances),requestAnimationFrame(t))})),this.$addEventListener("mousemove",this.moveInstance),this.$addEventListener("touchmove",this.moveInstance),this.$addEventListener("mouseup",this.dropElement),this.$addEventListener("touchend",this.dropElement),this.$addEventListener("resize",this.onResize),this.onResize()},beforeDestroy:function(){S.beforeDestroy(),k.Howler.mute(!1),k.Howler.unload(),this.isActive=!1},methods:{selectElement:function(e,t){var n=this;this.playInstanceSound();var o,r,c,d,l=e.target.getBoundingClientRect();e.touches?(c=e.touches[0].clientX,d=e.touches[0].clientY):(c=e.clientX,d=e.clientY),o=(c-l.left)/(l.right-l.left),r=(d-l.top)/(l.bottom-l.top);var h=this.instanceId++,f=this.discoveries.includes(t.text),data=z({left:l.left-4,top:l.top-4,offsetX:o,offsetY:r,id:h,disabled:!1,hasMoved:!1,fromPanel:!0,discovered:f},t);this.selectedInstance=data,this.instances.push(this.selectedInstance),this.$nextTick((function(){n.setInstancePosition(n.selectedInstance,l.left-6,l.top-6),n.setInstanceZIndex(n.selectedInstance,n.instanceId)})),this.mouseDown=!0,e.preventDefault()},selectInstance:function(e,t){if(3===e.which)return e.preventDefault(),this.instances=this.instances.filter((function(i){return i.id!==t.id})),this.deleteSound.play(),!1;this.playInstanceSound(.09);var n=this.getEventCoords(e),o=n.x,r=n.y;t.disabled||(this.mouseDown=!0,this.selectedInstance=t,this.setInstanceZIndex(this.selectedInstance,++this.instanceId),t.offsetX=(o-t.left)/t.width,t.offsetY=(r-t.top)/t.height),e.preventDefault()},mobileSelect:function(e,t){if(this.mobileCraftedElement={},this.playInstanceSound(),this.firstSelected){if(!this.secondSelected){this.secondSelected=t,document.getElementById("item-"+this.secondSelected.text).style="animation: itemMobileJiggle 0.35s linear infinite;",this.craftMobile()}}else this.firstSelected=t,document.getElementById("item-"+this.firstSelected.text).style="animation: itemMobileJiggle 0.35s linear infinite;"},reset:function(){confirm("Are you sure? This will delete all your progress!")&&(localStorage.removeItem("infinite-craft-data"),location.reload())},getEventCoords:function(e){var t,n;return e.touches?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY),{x:t,y:n}},duplicateInstance:function(e){var t=this,n=z({},e);n.id=this.instanceId++,n.elem=null,n.hasMoved=!1,n.fromPanel=!1,this.instances.push(n),this.$nextTick((function(){n.elem=document.getElementById("instance-"+n.id),t.setInstancePosition(n,n.left+10,n.top-10),t.setInstanceZIndex(n,t.instanceId)}))},onResize:function(){var e=this;this.sidebarSize=window.innerWidth>=1150?360:310,this.instances.forEach((function(t){t.width||e.calcInstanceSize(t),t.left+t.width>window.innerWidth-e.sidebarSize&&e.setInstancePosition(t,window.innerWidth-e.sidebarSize-t.width,t.top),t.top+t.height>window.innerHeight&&e.setInstancePosition(t,t.left,window.innerHeight-t.height)}))},dropElement:function(){var e=this;if(this.mouseDown=!1,this.selectedInstance&&!(window.innerWidth<800)){if(!this.selectedInstance.hasMoved&&this.selectedInstance.fromPanel){var t=Math.random()*Math.PI*2,n=50*Math.cos(t),o=50*Math.sin(t);return this.setInstancePosition(this.selectedInstance,(window.innerWidth-this.sidebarSize)/2+n,window.innerHeight/2-40+o),this.selectedInstance.hasMoved=!0,void this.calcInstanceSize(this.selectedInstance)}this.selectedInstance.hasMoved&&(this.selectedInstance.left+this.selectedInstance.width>window.innerWidth-this.sidebarSize||!this.selectedInstance.width||!this.selectedInstance.left?(this.instances=this.instances.filter((function(t){return t.id!==e.selectedInstance.id})),this.deleteSound.play()):this.checkIntersections(this.selectedInstance))}},clearInstances:function(){this.instances=[],this.deleteSound.play()},setInstancePosition:function(e,t,n){e.left=t,e.top=n,e.elem||(e.elem=document.getElementById("instance-"+e.id)),e.elem.style.translate="".concat(t,"px ").concat(n,"px")},setInstanceZIndex:function(e,t){e.zIndex=t,e.elem.style.zIndex=t},moveInstance:function(e){if(this.mouseDown){var t=this.getEventCoords(e),n=t.x,o=t.y;this.selectedInstance.hasMoved=!0,this.setInstancePosition(this.selectedInstance,n-this.selectedInstance.offsetX*this.selectedInstance.width,o-this.selectedInstance.offsetY*this.selectedInstance.height),this.selectedInstance.isNew&&(this.pinwheelCoords={x:this.selectedInstance.left+this.selectedInstance.width/2,y:this.selectedInstance.top+this.selectedInstance.height/2});var r=this.checkIntersections(this.selectedInstance,!0);this.hoverId=r?r.id:-1}},calcInstanceSize:function(e){var element=document.getElementById("instance-"+e.id);element&&(e.width=element.offsetWidth,e.height=element.offsetHeight)},checkIntersections:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.width&&e.height||this.calcInstanceSize(e);for(var n=Object(h.a)(this.instances).sort((function(a,b){return b.zIndex-a.zIndex})),i=0;i<n.length;i++)if(n[i].id!==e.id){var o=n[i];if(o.width&&o.height||this.calcInstanceSize(o),e.left<o.left+o.width&&e.left+e.width>o.left&&e.top<o.top+o.height&&e.top+e.height>o.top){if(t&&!o.disabled)return o;this.craft(e,o)}}return!1},getCenterOfCraft:function(e,t){var n=e.left+e.width/2,o=e.top+e.height/2;return{x:(n+(t.left+t.width/2))/2,y:(o+(t.top+t.height/2))/2}},getCraftResponse:(E=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var o,r,c,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=new AbortController,this.$setTimeout((function(){return o.abort()}),12e3),r=[t,n].sort((function(a,b){return a.text.localeCompare(b.text)})),c="/api/infinite-craft/pair?first=".concat(encodeURIComponent(r[0].text),"&second=").concat(encodeURIComponent(r[1].text)),e.next=7,fetch(c,{signal:o.signal});case 7:return d=e.sent,e.next=10,d.json();case 10:return"Pigpen"===(l=e.sent).result&&(l.emoji="🐷"),e.abrupt("return",l);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{result:"Nothing"});case 18:case"end":return e.stop()}}),e,this,[[0,15]])}))),function(e,t){return E.apply(this,arguments)}),craftMobile:(j=Object(l.a)(regeneratorRuntime.mark((function e(){var t,n,element,o,r,c,d=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.mobileIsCrafting){e.next=2;break}return e.abrupt("return");case 2:if(this.mobileIsCrafting=!0,this.hasCrafted=!0,!this.firstSelected||!this.secondSelected){e.next=17;break}return t=function e(t){t.target.style="animation: none",t.target.removeEventListener("animationiteration",e)},e.next=8,this.getCraftResponse(this.firstSelected,this.secondSelected);case 8:"Nothing"!==(n=e.sent).result&&((element=this.elements.find((function(element){return element.text===n.result})))?this.playInstanceSound():(element={text:n.result,emoji:n.emoji},this.elements.push(element),this.saveItems(),o=[.9,1],this.rewardSound.rate(o[Math.floor(Math.random()*o.length)]),this.rewardSound.play()),this.mobileCraftedElement=element,_&&clearTimeout(_),_=setTimeout((function(){d.mobileCraftedElement=null}),1700)),r=document.getElementById("item-"+this.firstSelected.text),c=document.getElementById("item-"+this.secondSelected.text),r.addEventListener("animationiteration",t),c.addEventListener("animationiteration",t),this.firstSelected=null,this.secondSelected=null,this.mobileIsCrafting=!1;case 17:case"end":return e.stop()}}),e,this)}))),function(){return j.apply(this,arguments)}),playInstanceSound:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3;this.instanceSoundRate+=.1,this.instanceSoundRate>1.3&&(this.instanceSoundRate=.9),this.instanceSound.rate(this.instanceSoundRate),this.instanceSound.volume(e),this.instanceSound.play()},toggleSound:function(){this.isMuted=!this.isMuted,this.isMuted?k.Howler.mute(!0):k.Howler.mute(!1)},saveItems:function(){localStorage.setItem("infinite-craft-data",JSON.stringify({elements:this.elements}))},craft:(M=Object(l.a)(regeneratorRuntime.mark((function e(t,n){var o,r,c,d,element,l,h,f,m=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hasCrafted=!0,!t.disabled&&!n.disabled){e.next=3;break}return e.abrupt("return");case 3:return this.hoverId=-1,t.disabled=!0,n.disabled=!0,e.next=8,this.getCraftResponse(t,n);case 8:"Nothing"!==(o=e.sent).result?(r=this.getCenterOfCraft(t,n),c=this.instanceId++,d={id:c,text:o.result,emoji:o.emoji,disabled:!1,zIndex:c,discovered:o.isNew},o.isNew&&this.discoveries.push(o.result),(element=this.elements.find((function(element){return element.text.toLowerCase()===d.text.toLowerCase()})))&&(d.text=element.text,d.emoji=element.emoji,d.discovered=element.discovered),element?this.playInstanceSound():(this.elements.push({text:d.text,emoji:d.emoji,discovered:o.isNew}),this.saveItems(),this.pinwheelCoords=r,d.isNew=!0,o.isNew&&this.discoverySound.play(),l=[.9,1],this.rewardSound.rate(l[Math.floor(Math.random()*l.length)]),this.rewardSound.play(),this.$setTimeout((function(){d.isNew=!1}),1200)),h=this.instances.findIndex((function(e){return e.id===t.id})),this.instances.splice(h,1),f=this.instances.findIndex((function(e){return e.id===n.id})),this.instances.splice(f,1),this.instances.push(d),this.$nextTick((function(){m.calcInstanceSize(d),m.setInstancePosition(d,r.x-d.width/2,r.y-d.height/2),m.setInstanceZIndex(d,c)}))):(this.errorSound.play(),t.disabled=!1,n.disabled=!1);case 10:case"end":return e.stop()}}),e,this)}))),function(e,t){return M.apply(this,arguments)})}},O=P,R=(n(985),n(987),n(28)),component=Object(R.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{staticClass:"site-title",attrs:{src:"/general/logo.svg"}})]),e._v(" "),t("div",{staticClass:"side-controls"},[e._m(0),e._v(" "),t("img",{staticClass:"clear",attrs:{src:"/infinite-craft/clear.svg"},on:{click:e.clearInstances}}),e._v(" "),t("img",{staticClass:"sound",attrs:{src:e.isMuted?"/infinite-craft/mute.svg":"/infinite-craft/sound.svg"},on:{click:e.toggleSound}})]),e._v(" "),t("canvas",{ref:"particles",staticClass:"particles"}),e._v(" "),t("div",{staticClass:"sidebar"},[t("div",{staticClass:"items"},[e._l(e.sortedElements,(function(element,i){return t("div",{key:element.text,staticClass:"item",class:{"item-selected":e.firstSelected===element.text||e.secondSelected===element.text,"item-discovered":element.discovered},on:{mousedown:function(t){return e.selectElement(t,element)},touchstart:function(t){return e.selectElement(t,element)}}},[t("span",{staticClass:"item-emoji"},[e._v(e._s(element.emoji||"⬜"))]),e._v("\n        "+e._s(element.text)+"\n      ")])})),e._v(" "),e.hasCrafted?e._e():t("div",{staticClass:"instruction"},[e._v("Drag elements to craft")])],2),e._v(" "),t("div",{staticClass:"sidebar-controls"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"sidebar-input",attrs:{placeholder:"Search items..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"instances",on:{contextmenu:function(e){return e.preventDefault(),!1}}},[t("transition-group",{attrs:{name:"instance-anim",tag:"div"}},e._l(e.instances,(function(n,i){return t("div",{key:n.id,staticClass:"item instance",class:{"instance-disabled":n.disabled,"instance-hover":e.hoverId===n.id||-1!==e.hoverId&&e.selectedInstance.id===n.id,"instance-new":n.isNew,"instance-hide":n.hide,"instance-discovered":n.discovered},attrs:{id:"instance-"+n.id},on:{mousedown:function(t){return e.selectInstance(t,n)},touchstart:function(t){return e.selectInstance(t,n)},dblclick:function(t){return e.duplicateInstance(n)}}},[t("span",{staticClass:"instance-emoji"},[e._v(e._s(n.emoji||"⬜"))]),e._v("\n        "+e._s(n.text)+"\n        "),n.discovered?t("div",{staticClass:"instance-discovered-text"},[e._v("\n          First Discovery\n        ")]):e._e()])})),0)],1),e._v(" "),t("transition",{attrs:{name:"pinwheel-animation"}},[e.showPinwheel?t("img",{staticClass:"pinwheel",style:{translate:"calc(".concat(e.pinwheelCoords.x,"px - 48%) calc(").concat(e.pinwheelCoords.y,"px - 50%)")},attrs:{src:"/infinite-craft/pinwheel.png"}}):e._e()]),e._v(" "),t("div",{staticClass:"mobile-sound",on:{click:e.toggleSound}},[t("img",{staticClass:"sound",attrs:{src:e.isMuted?"/infinite-craft/mute.svg":"/infinite-craft/sound.svg"}})]),e._v(" "),t("img",{staticClass:"logo",attrs:{src:"/infinite-craft/logo.svg"}}),e._v(" "),t("div",{staticClass:"reset",on:{click:e.reset}},[e._v("Reset")]),e._v(" "),t("transition-group",{staticClass:"mobile-items",attrs:{name:"list",tag:"div"}},e._l(e.sortedElements,(function(element,i){var n,o,r;return t("div",{key:element.text,staticClass:"mobile-item"},[t("div",{staticClass:"item",class:{"item-selected-mobile":(null===(n=e.firstSelected)||void 0===n?void 0:n.text)===element.text||(null===(o=e.secondSelected)||void 0===o?void 0:o.text)===element.text,"item-crafted-mobile":(null===(r=e.mobileCraftedElement)||void 0===r?void 0:r.text)===element.text,"mobile-is-crafting":e.mobileIsCrafting},attrs:{id:"item-"+element.text},on:{click:function(t){return e.mobileSelect(t,element)}}},[t("span",{staticClass:"item-emoji-mobile"},[e._v(e._s(element.emoji||"⬜"))]),e._v("\n        "+e._s(element.text)+"\n      ")])])})),0),e._v(" "),e.hasCrafted?e._e():t("div",{staticClass:"mobile-instruction"},[e._v("\n    Tap two elements to craft\n  ")])],1)}),[function(){var e=this._self._c;return e("a",{staticClass:"coffee-link",attrs:{target:"_blank",href:"https://ko-fi.com/nealfun"}},[e("img",{staticClass:"coffee",attrs:{src:"/infinite-craft/coffee.svg"}})])}],!1,null,"32430ce5",null);t.default=component.exports},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(111);var r=n(137),c=n(82);function d(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||Object(r.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},303:function(e,t,n){var o=n(2),r=n(304),c=n(112);o({target:"Array",proto:!0},{fill:r}),c("fill")},304:function(e,t,n){"use strict";var o=n(25),r=n(84),c=n(31);e.exports=function(e){for(var t=o(this),n=c(t),d=arguments.length,l=r(d>1?arguments[1]:void 0,n),h=d>2?arguments[2]:void 0,f=void 0===h?n:r(h,n);f>l;)t[l++]=e;return t}},311:function(e,t,n){var o=n(61).match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},312:function(e,t,n){var o=n(61);e.exports=/MSIE|Trident/.test(o)},313:function(e,t,n){var o=n(61).match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},314:function(e,t,n){"use strict";var o=n(2),r=n(4),c=n(35),d=n(25),l=n(31),h=n(206),f=n(13),m=n(3),v=n(205),x=n(141),w=n(311),y=n(312),I=n(85),S=n(313),k=[],C=r(k.sort),z=r(k.push),M=m((function(){k.sort(void 0)})),j=m((function(){k.sort(null)})),E=x("sort"),_=!m((function(){if(I)return I<70;if(!(w&&w>3)){if(y)return!0;if(S)return S<603;var code,e,t,n,o="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)k.push({k:e+n,v:t})}for(k.sort((function(a,b){return b.v-a.v})),n=0;n<k.length;n++)e=k[n].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:M||!j||!E||!_},{sort:function(e){void 0!==e&&c(e);var t=d(this);if(_)return void 0===e?C(t):C(t,e);var n,o,r=[],m=l(t);for(o=0;o<m;o++)o in t&&z(r,t[o]);for(v(r,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:f(t)>f(n)?1:-1}}(e)),n=l(r),o=0;o<n;)t[o]=r[o++];for(;o<m;)h(t,o++);return t}})},383:function(e,t,n){"use strict";var o=n(2),r=n(66).findIndex,c=n(112),d="findIndex",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c(d)},506:function(e,t,n){var content=n(986);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(108).default)("24e97d73",content,!0,{sourceMap:!1})},507:function(e,t,n){var content=n(988);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(108).default)("92b2cb02",content,!0,{sourceMap:!1})},985:function(e,t,n){"use strict";n(506)},986:function(e,t,n){var o=n(107)(!1);o.push([e.i,"@keyframes itemMobileJiggle{0%{transform:rotate(0deg)}25%{transform:rotate(2deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-2deg)}to{transform:rotate(0deg)}}",""]),e.exports=o},987:function(e,t,n){"use strict";n(507)},988:function(e,t,n){var o=n(107)(!1);o.push([e.i,'.container[data-v-32430ce5]{left:0;width:100%;height:100%;font-family:"Roboto",sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#040404}.container[data-v-32430ce5],.sidebar[data-v-32430ce5]{position:fixed;top:0}.sidebar[data-v-32430ce5]{right:0;width:305px;height:100vh;background:hsla(0,0%,100%,.93);z-index:10;overflow-y:scroll;overflow-x:visible;border-left:1px solid #c8c8c8}.logo[data-v-32430ce5]{position:fixed;top:10px;right:320px;width:80px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.mobile-items[data-v-32430ce5]{display:none}.items[data-v-32430ce5]{max-width:900px;margin-left:auto;margin-right:auto;padding:9px;min-height:calc(100svh - 40px)}.item[data-v-32430ce5]{margin:4px;cursor:pointer;padding:8px 8px 7px;border-radius:5px;display:inline-block;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:1px solid #c8c8c8;transition:background .15s linear;background:#fff;line-height:1em}.item[data-v-32430ce5],.item-emoji[data-v-32430ce5]{font-size:15.4px}.instance[data-v-32430ce5]{position:fixed;font-size:18px;z-index:11;left:0;top:0;padding:11px 10px 10px;transition:scale .15s ease-in;border-radius:5px;transform-origin:center center;display:flex;align-items:center;contain:layout;border:1px solid #91a8c1;background:linear-gradient(0deg,#f7feff,#fff 70%)}.instance[data-v-32430ce5],.instance-discovered-text[data-v-32430ce5]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.instance-discovered-text[data-v-32430ce5]{position:absolute;bottom:-3px;transform:translate(-50%,100%);left:50%;width:100%;text-align:center;font-size:12px;width:100px}.pinwheel[data-v-32430ce5]{position:fixed;top:0;left:0;width:130px;height:130px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1;animation:pinwheelSpin-32430ce5 2s linear infinite;transition:scale .4s ease-in-out,opacity .4s ease-in-out;scale:0;opacity:0;transform-origin:center center}.pinwheel-animation-enter-active[data-v-32430ce5],.pinwheel-animation-leave-active[data-v-32430ce5]{scale:1;opacity:1}.pinwheel-animation-enter-from[data-v-32430ce5],.pinwheel-animation-leave-to[data-v-32430ce5]{scale:0;opacity:0}@keyframes pinwheelSpin-32430ce5{to{rotate:90deg}}@keyframes scaleIn-32430ce5{0%{scale:.5}to{scale:1}}@media (hover:hover){.item[data-v-32430ce5]:hover{background:linear-gradient(0deg,#d6fcff,#fff 90%);border:1px solid #91a8c1}}.item-selected[data-v-32430ce5]{background:#e3e3e3}.instruction[data-v-32430ce5]{font-size:15px;text-align:center;margin-top:25px;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.instance-disabled[data-v-32430ce5]{pointer-events:none;opacity:.7;transition:.15s linear;animation:pulse-32430ce5 .8s ease-in-out .15s infinite alternate-reverse}@keyframes pulse-32430ce5{0%{opacity:.2}to{opacity:.7}}.instance-disabled[data-v-32430ce5]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.instance-hover[data-v-32430ce5]{scale:1.04;background:linear-gradient(0deg,#d6fcff,#fff 90%);border:1px solid #91a8c1}.site-title[data-v-32430ce5]{position:fixed;top:13px;left:13px;width:110px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.site-title[data-v-32430ce5]:hover{transform:scale(1.03)}.side-controls[data-v-32430ce5]{position:fixed;right:314px;bottom:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;grid-gap:19px}.clear[data-v-32430ce5],.sound[data-v-32430ce5]{width:21px;cursor:pointer;opacity:.8;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sound[data-v-32430ce5]{transform:scale(.92)}.coffee[data-v-32430ce5]{width:15px}.coffee-link[data-v-32430ce5]{line-height:0}.clear[data-v-32430ce5]:hover,.coffee[data-v-32430ce5]:hover,.sound[data-v-32430ce5]:hover{transform:scale(1.05)}.mobile-sound[data-v-32430ce5]{position:fixed;bottom:10px;right:10px;width:40px;border-radius:5px;z-index:10;display:flex;justify-content:center;border:1px solid #9f9f9f;display:none}.mobile-sound[data-v-32430ce5],.sidebar-controls[data-v-32430ce5]{height:40px;background:#fff;align-items:center}.sidebar-controls[data-v-32430ce5]{position:sticky;bottom:0;left:0;width:100%;font-size:13px;text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:right}.sidebar-input[data-v-32430ce5]{width:100%;font-size:16px;border:none;border-top:1px solid #c8c8c8;outline:none;padding:0 20px 0 40px;height:40px;line-height:18px;position:relative;background:url(/infinite-craft/search.svg) no-repeat 22px 22px;background-size:21px 21px;background-position:10px 10px}.sidebar-input[data-v-32430ce5]::-moz-placeholder{opacity:.5}.sidebar-input[data-v-32430ce5]::placeholder{opacity:.5}.sidebar-input[data-v-32430ce5]:after{content:"";position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:20px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sort[data-v-32430ce5]{cursor:pointer;padding:2px;opacity:.9;font-size:14px}.sort-img[data-v-32430ce5]{height:15px;top:2px;padding:2px;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative}.instance-emoji[data-v-32430ce5]{font-size:21px;margin-right:5px}.instance-hide[data-v-32430ce5]{display:none!important;pointer-events:none!important}.mobile-instruction[data-v-32430ce5]{display:none}.list-enter[data-v-32430ce5],.list-leave-to[data-v-32430ce5]{transform:scale(0)}.particles[data-v-32430ce5]{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none}.instance-anim-enter-active[data-v-32430ce5]{animation:scaleIn-32430ce5 .13s ease-in 1 forwards}.instance-anim-leave-to[data-v-32430ce5]{opacity:0;scale:0}.instance-anim-leave-active[data-v-32430ce5]{transition:opacity .16s linear,scale .16s linear}.reset[data-v-32430ce5]{position:fixed;left:10px;bottom:10px;cursor:pointer;opacity:.7;font-size:15px}@media screen and (min-width:1150px){.sidebar[data-v-32430ce5]{width:350px}.logo[data-v-32430ce5]{right:362px;width:85px}.item[data-v-32430ce5]{font-size:16.4px;padding:9px 10px 8px}.items[data-v-32430ce5]{min-height:calc(100svh - 45px)}.item-emoji[data-v-32430ce5]{font-size:16.4px}.instance[data-v-32430ce5]{font-size:19.5px;padding:11px 11px 10px}.instruction[data-v-32430ce5]{font-size:16px}.pinwheel[data-v-32430ce5]{width:145px;height:145px}.instance-discovered-text[data-v-32430ce5]{font-size:13px}.side-controls[data-v-32430ce5]{right:361px}.clear[data-v-32430ce5],.sound[data-v-32430ce5]{width:23px}.coffee[data-v-32430ce5]{width:16px}.sidebar-input[data-v-32430ce5]{background-size:23px 23px;background-position:11px 12px;height:45px;font-size:17px;line-height:21px;padding-left:43px;padding-top:2px}}@media screen and (max-width:800px){.container[data-v-32430ce5]{position:static}.site-title[data-v-32430ce5]{position:absolute}.sidebar[data-v-32430ce5]{display:none}.mobile-items[data-v-32430ce5]{display:flex;flex-wrap:wrap;margin-top:105px;justify-content:center;grid-gap:5px 5px;margin-bottom:20px;padding:0 5px;position:relative;z-index:2}.instance[data-v-32430ce5]{display:none}.mobile-item[data-v-32430ce5]{transition:transform .4s ease}.item[data-v-32430ce5]{display:flex;align-items:center;min-height:37px;grid-gap:5px;line-height:0;font-size:15.5px;padding:1px 9px 0;border:1px solid #9f9f9f;color:#000;transition:background .1s linear}.item-selected-mobile[data-v-32430ce5]{top:5px}.item-crafted-mobile[data-v-32430ce5],.item-selected-mobile[data-v-32430ce5]{background-color:#fffae6;border-color:#877f64;position:sticky;bottom:5px}.item-crafted-mobile[data-v-32430ce5]{z-index:10;transition:background .2s linear}.item-emoji-mobile[data-v-32430ce5]{margin-right:1px}.particles[data-v-32430ce5]{z-index:1}.side-controls[data-v-32430ce5],.sidebar-controls[data-v-32430ce5]{display:none}.logo[data-v-32430ce5]{position:absolute;right:10px;left:auto;top:10px}.mobile-instruction[data-v-32430ce5]{display:block;max-width:200px;text-align:center;border:1px solid #c8c8c8;background-color:#fffae6;padding:7px;margin-left:auto;margin-right:auto;font-size:15px;border-radius:5px}.mobile-sound[data-v-32430ce5]{display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent}}',""]),e.exports=o}}]);