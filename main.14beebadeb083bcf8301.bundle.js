webpackJsonp([1],{0:function(n,t,l){n.exports=l("cDNt")},cDNt:function(n,t,l){"use strict";function e(n){return s._16(0,[(n()(),s._3(0,null,null,0,"div",[["id","behind"]],null,null,null,null,null)),(n()(),s._15(null,["\n"])),(n()(),s._3(0,null,null,45,"div",[["id","config"]],null,null,null,null,null)),(n()(),s._15(null,["\n  "])),(n()(),s._3(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),s._15(null,["Simon"])),(n()(),s._15(null,["  \n  "])),(n()(),s._3(0,null,null,30,"div",[["class","container-button"]],null,null,null,null,null)),(n()(),s._15(null,["\n    "])),(n()(),s._3(0,null,null,6,"div",[],null,null,null,null,null)),(n()(),s._15(null,["\n        "])),(n()(),s._3(0,null,null,0,"button",[["class","item-button"],["id","start"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.start()&&e}return e},null,null)),(n()(),s._15(null,["\n        "])),(n()(),s._3(0,null,null,1,"h4",[["class","label"]],null,null,null,null,null)),(n()(),s._15(null,["START"])),(n()(),s._15(null,["\n    "])),(n()(),s._15(null,["\n    "])),(n()(),s._3(0,null,null,6,"div",[],null,null,null,null,null)),(n()(),s._15(null,["\n        "])),(n()(),s._3(0,null,null,0,"button",[["class","item-button"],["id","strict"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.turnOnStrict()&&e}return e},null,null)),(n()(),s._15(null,["\n        "])),(n()(),s._3(0,null,null,1,"h4",[["class","label"]],null,null,null,null,null)),(n()(),s._15(null,["STRICT"])),(n()(),s._15(null,["\n    "])),(n()(),s._15(null,["\n    "])),(n()(),s._3(0,null,null,11,"div",[],null,null,null,null,null)),(n()(),s._15(null,["\n        "])),(n()(),s._3(0,null,null,5,"label",[["class","switch"]],null,null,null,null,null)),(n()(),s._15(null,["\n            "])),(n()(),s._3(0,null,null,0,"input",[["type","checkbox"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.turnOnOff()&&e}return e},null,null)),(n()(),s._15(null,["\n            "])),(n()(),s._3(0,null,null,0,"span",[["class","slider"]],null,null,null,null,null)),(n()(),s._15(null,["\n        "])),(n()(),s._15(null,["\n        "])),(n()(),s._3(0,null,null,1,"h4",[["class","label"]],null,null,null,null,null)),(n()(),s._15(null,["ON/OFF"])),(n()(),s._15(null,["\n    "])),(n()(),s._15(null,["\n  "])),(n()(),s._15(null,["\n  "])),(n()(),s._3(0,null,null,7,"div",[["class","container-button"]],null,null,null,null,null)),(n()(),s._15(null,["\n    "])),(n()(),s._3(0,null,null,4,"div",[["class","item-button"],["id","count"]],null,null,null,null,null)),(n()(),s._15(null,["\n      "])),(n()(),s._3(0,null,null,1,"div",[["id","count-text"]],null,null,null,null,null)),(n()(),s._15(null,["--"])),(n()(),s._15(null,["\n    "])),(n()(),s._15(null,["  \n  "])),(n()(),s._15(null,["\n"])),(n()(),s._15(null,["\n\n\n"])),(n()(),s._3(0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(n()(),s._15(null,["\n  "])),(n()(),s._3(0,null,null,0,"div",[["class","item"],["id","green"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.recordUserPattern(l)&&e}return e},null,null)),(n()(),s._15(null,["\n  "])),(n()(),s._3(0,null,null,0,"div",[["class","item"],["id","red"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.recordUserPattern(l)&&e}return e},null,null)),(n()(),s._15(null,["\n"])),(n()(),s._15(null,["\n\n"])),(n()(),s._3(0,null,null,5,"div",[["class","container"]],null,null,null,null,null)),(n()(),s._15(null,["\n  "])),(n()(),s._3(0,null,null,0,"div",[["class","item"],["id","yellow"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.recordUserPattern(l)&&e}return e},null,null)),(n()(),s._15(null,["\n  "])),(n()(),s._3(0,null,null,0,"div",[["class","item"],["id","blue"]],null,[[null,"click"]],function(n,t,l){var e=!0,o=n.component;if("click"===t){e=!1!==o.recordUserPattern(l)&&e}return e},null,null)),(n()(),s._15(null,["\n"])),(n()(),s._15(null,["\n\n\n\n"]))],null,null)}function o(n){return s._16(0,[(n()(),s._3(0,null,null,1,"app-root",[],null,null,null,e,d)),s._1(49152,null,0,r,[],null,null)],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var u={production:!0},i=function(){function n(){}return n}(),r=function(){function n(){this.stepCount=0,this.randomNum=0,this.userPattern=[],this.randomPattern=[],this.colorPattern=[],this.isOn=!1,this.isStrict=!1,this.isRetry=!1}return n.prototype.turnOnOff=function(){this.isOn=!this.isOn;var n=window.document.querySelector("#count-text");n.textContent="--",this.isOn?n.className="count-glow":n.className="",this.reset()},n.prototype.reset=function(){this.stepCount=0,this.randomNum=0,this.userPattern=[],this.randomPattern=[],this.colorPattern=[]},n.prototype.start=function(){if(this.isOn&&!(this.stepCount>=1)){this.randomNum=this.getRandomNumber(4);var n=this.assignColor(this.randomNum);this.colorPattern.push(n),this.glow(n),this.playAudio(n),this.randomPattern.push(this.randomNum)}},n.prototype.recordUserPattern=function(n){if(this.isOn){var t=this.assignId(n.target.id);this.userPattern.push(t);var l=this.assignColor(t),e=this;if(this.glow(l),this.playAudio(l),this.userPattern.length>=20)return void this.displayWinner();this.userPattern.length===this.randomPattern.length&&setTimeout(function(){e.checkPattern(e.userPattern,e.randomPattern)},600)}},n.prototype.turnOnStrict=function(){if(!(this.stepCount>=1)){this.isStrict=!this.isStrict;var n=window.document.querySelector("#strict");this.isStrict?n.className="item-button strict-glow":n.className="item-button"}},n.prototype.takeNextTurn=function(n,t){this.updateStepCount();var l=this;if(!this.isRetry){var e=this.getRandomNumber(4);t.push(e);var o=this.assignColor(e);this.colorPattern.push(o)}this.wait(1250),this.isRetry=!1;for(var u=0;u<this.colorPattern.length;u++)!function(n){setTimeout(function(){l.glow(l.colorPattern[n]),l.playAudio(l.colorPattern[n])},1e3*n)}(u)},n.prototype.updateStepCount=function(){this.stepCount++,this.displayStepCount(this.stepCount)},n.prototype.getRandomNumber=function(n){return Math.floor(Math.random()*n)+1},n.prototype.glow=function(n){var t=window.document.querySelector("#"+n);t.className="item "+n+"-glow",setTimeout(function(){t.className="item"},600)},n.prototype.playAudio=function(n){var t=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),l=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),e=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),o=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");switch(n){case"green":t.play();break;case"red":l.play();break;case"yellow":e.play();break;case"blue":o.play();break;case"lost":t.play(),l.play(),e.play(),o.play()}},n.prototype.displayStepCount=function(n){var t=window.document.querySelector("#count-text");t.textContent=n<=9?String("0"+n):String(n)},n.prototype.displayWinner=function(){this.reset(),window.document.querySelector("#count-text").textContent="00",alert("Congrats! You have won!")},n.prototype.assignColor=function(n){var t="";switch(n){case 1:t="green";break;case 2:t="red";break;case 3:t="yellow";break;case 4:t="blue"}return t},n.prototype.assignId=function(n){var t=0;switch(n){case"green":t=1;break;case"red":t=2;break;case"yellow":t=3;break;case"blue":t=4}return t},n.prototype.checkPattern=function(n,t){if(n.toString()===t.toString())this.takeNextTurn(n,t),this.userPattern=[];else if(this.isStrict){var l=this;this.strictIncorrectPattern(),setTimeout(function(){l.start()},1e3)}else{var l=this;this.incorrectPattern(),setTimeout(function(){l.takeNextTurn(n,t)},1e3)}},n.prototype.incorrectPattern=function(){this.playAudio("lost"),this.isRetry=!0,this.userPattern=[],this.stepCount=this.stepCount-1;var n=window.document.querySelector("#count-text");n.textContent="!!";var t=this;setTimeout(function(){t.stepCount>9?n.textContent=t.stepCount.toString():n.textContent="0"+t.stepCount},1e3)},n.prototype.strictIncorrectPattern=function(){this.playAudio("lost");var n=window.document.querySelector("#count-text");n.textContent="!!",this.reset(),setTimeout(function(){n.textContent="00"},1e3)},n.prototype.wait=function(n){for(var t=(new Date).getTime(),l=t;l<t+n;)l=(new Date).getTime()},n}(),a=['.container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:50vh;width:100vw}.item[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer}.container-button[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:distribute;height:70px;-ms-flex-line-pack:center;align-content:center;justify-content:space-around}.container-button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:60px}.item-button[_ngcontent-%COMP%]{margin-top:0;font-size:.18em;pointer-events:auto;cursor:pointer;width:30px;height:30px;position:relative;border-radius:100%;border:4px solid #2e2b2b;box-shadow:0 2px 3px #2e2b2b;margin:auto;background-color:#94940e}.strict-glow[_ngcontent-%COMP%]{background-color:#ff0;box-shadow:0 0 2px 2px rgba(255,255,4,.28)}button[_ngcontent-%COMP%]:focus{outline:0}.label[_ngcontent-%COMP%]{color:#2e2b2b;font-family:Oswald,Arial,sans;text-align:center;margin-top:5px}#start[_ngcontent-%COMP%]{background-color:#ed0b0b}#config[_ngcontent-%COMP%]{position:absolute;width:300px;height:250px;z-index:15;top:50%;left:50%;margin:-125px 0 0 -150px;background:grey;text-align:center;border-radius:10px;font-family:Alfa Slab One;color:#2e2b2b;box-shadow:0 2px 3px #2e2b2b;padding-bottom:10px}#config[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4em;margin:10px 5px}#behind[_ngcontent-%COMP%]{position:absolute;width:325px;height:285px;margin:-137.5px 0 0 -162.5px;z-index:10;top:50%;left:50%;background:#2e2b2b;border-radius:20px}#count[_ngcontent-%COMP%]{width:60px;height:60px;background:#430710;border-radius:15px;font-size:2em;text-align:center;border:4px solid #2e2b2b;color:rgba(96,5,5,.65);font-family:Orbitron,sans-serif;cursor:not-allowed}.count-glow[_ngcontent-%COMP%]{color:rgba(187,4,4,.92)}#count[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-top:9px}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:60px;height:25px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.slider[_ngcontent-%COMP%]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#2e2b2b}.slider[_ngcontent-%COMP%], .slider[_ngcontent-%COMP%]:before{position:absolute;transition:.4s}.slider[_ngcontent-%COMP%]:before{content:"";height:17px;width:26px;left:4px;bottom:4px;background-color:#52c1fc}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{-webkit-transform:translateX(26px);transform:translateX(26px)}#green[_ngcontent-%COMP%]{background:#00a74a}.green-glow[_ngcontent-%COMP%]{-webkit-animation:greenGlow .5s ease-in-out;animation:greenGlow .5s ease-in-out}@-webkit-keyframes greenGlow{0%{background:#00a74a}to{background:#31cd76}}@keyframes greenGlow{0%{background:#00a74a}to{background:#31cd76}}#red[_ngcontent-%COMP%]{background:#9f0f17}.red-glow[_ngcontent-%COMP%]{-webkit-animation:redGlow .5s ease-in-out;animation:redGlow .5s ease-in-out}@-webkit-keyframes redGlow{0%{background:#9f0f17}to{background:#cf232c}}@keyframes redGlow{0%{background:#9f0f17}to{background:#cf232c}}#yellow[_ngcontent-%COMP%]{background:#cca707}.yellow-glow[_ngcontent-%COMP%]{-webkit-animation:yellowGlow .5s ease-in-out;animation:yellowGlow .5s ease-in-out}@-webkit-keyframes yellowGlow{0%{background:#c29e05}to{background:#f3d44e}}@keyframes yellowGlow{0%{background:#c29e05}to{background:#f3d44e}}#blue[_ngcontent-%COMP%]{background:#094a8f}.blue-glow[_ngcontent-%COMP%]{-webkit-animation:blueGlow .5s ease-in-out;animation:blueGlow .5s ease-in-out}@-webkit-keyframes blueGlow{0%{background:#094a8f}to{background:#2f83dd}}@keyframes blueGlow{0%{background:#094a8f}to{background:#2f83dd}}'],s=l("/oeL"),c=[a],d=s._0({encapsulation:0,styles:c,data:{}}),p=s.Y("app-root",r,o,{},{},[]),b=l("/oeL"),g=l("qbdv"),_=l("fc+i"),f=b.Z(i,[r],function(n){return b._12([b._13(512,b.i,b.W,[[8,[p]],[3,b.i],b.x]),b._13(5120,b.v,b._11,[[3,b.v]]),b._13(4608,g.d,g.c,[b.v]),b._13(4608,b.h,b.h,[]),b._13(5120,b.a,b._4,[]),b._13(5120,b.t,b._9,[]),b._13(5120,b.u,b._10,[]),b._13(4608,_.b,_.s,[g.b]),b._13(6144,b.H,null,[_.b]),b._13(4608,_.e,_.f,[]),b._13(5120,_.c,function(n,t,l,e){return[new _.k(n),new _.o(t),new _.n(l,e)]},[g.b,g.b,g.b,_.e]),b._13(4608,_.d,_.d,[_.c,b.z]),b._13(135680,_.m,_.m,[g.b]),b._13(4608,_.l,_.l,[_.d,_.m]),b._13(6144,b.F,null,[_.l]),b._13(6144,_.p,null,[_.m]),b._13(4608,b.L,b.L,[b.z]),b._13(4608,_.g,_.g,[g.b]),b._13(4608,_.i,_.i,[g.b]),b._13(512,g.a,g.a,[]),b._13(1024,b.l,_.q,[]),b._13(1024,b.b,function(n,t){return[_.r(n,t)]},[[2,_.h],[2,b.y]]),b._13(512,b.c,b.c,[[2,b.b]]),b._13(131584,b._2,b._2,[b.z,b.X,b.r,b.l,b.i,b.c]),b._13(2048,b.e,null,[b._2]),b._13(512,b.d,b.d,[b.e]),b._13(512,_.a,_.a,[[3,_.a]]),b._13(512,i,i,[])])}),h=l("/oeL"),m=l("fc+i");u.production&&Object(h.R)(),Object(m.j)().bootstrapModuleFactory(f)},gFIY:function(n,t){function l(n){return new Promise(function(t,l){l(new Error("Cannot find module '"+n+"'."))})}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="gFIY"}},[0]);