(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3tZb":function(e,_,t){e.exports=t.p+"7d89a04386b63020ee3a5011059eedc6.png"},"9mub":function(e,_,t){e.exports=t.p+"374af6e16120bebcbbb0364a125eb732.png"},Bpb9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var slucky_component_lrchange__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("Hw07"),slucky_component_lrchange__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(slucky_component_lrchange__WEBPACK_IMPORTED_MODULE_0__),babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("14Xm"),babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),slucky_component_toast__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("R5rc"),slucky_component_toast__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(slucky_component_toast__WEBPACK_IMPORTED_MODULE_2__),babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("D3Ub"),babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__),babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("iCc5"),babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__),babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("V7oC"),babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__),babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("FYw3"),babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__),babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("mRg0"),babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_app_scss__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("vjBg"),_app_scss__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__),enterModule;enterModule=__webpack_require__("0cfB").enterModule,enterModule&&enterModule(module);var CANVANS_SIZE=256,App=function(_Component){function App(){babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this,App);var e=babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this,(App.__proto__||Object.getPrototypeOf(App)).call(this)),_=[{source:__webpack_require__("FVwy"),style:{width:128,height:128,top:""+(CANVANS_SIZE-128),left:""+(CANVANS_SIZE-128)}},{source:__webpack_require__("Wq8K"),style:{width:96,height:128,top:""+(CANVANS_SIZE-128),left:""+(CANVANS_SIZE-96)}},{source:__webpack_require__("3tZb"),style:{width:CANVANS_SIZE,height:96,top:-8,left:0}},{source:__webpack_require__("9mub"),style:{width:128,height:120,top:""+(CANVANS_SIZE-120),left:""+(CANVANS_SIZE-128)}},{source:__webpack_require__("lmTN"),style:{width:128,height:128,top:""+(CANVANS_SIZE-128),left:""+(CANVANS_SIZE-128)}},{source:"",style:{width:0,height:0,top:0,left:0}}];return e.state={sourceImage:"",sourceImageUrl:"",imgUrl:"",targetUrl:"",decorationCurrent:_[0],decorationList:_,border:{name:"圆角边框",value:"rect"},loading:!1},e}return babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(App,_Component),babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(App,[{key:"componentDidMount",value:function(){var e=this,_=this.state.decorationCurrent;this.initCanvas(),this.handleMakeImage(null,_).then(function(_){e.setState({targetUrl:_})})}},{key:"initCanvas",value:function(){var e=this.refs.canvas;e.width=CANVANS_SIZE,e.height=CANVANS_SIZE}},{key:"handleChangeUpload",value:function(){var e=babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function e(_){var t,a,r,n,l,i,c,s,u,o,E=this;return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.refs.canvas,a=t.getContext("2d"),r=_.target.files[0],n=this.state.decorationCurrent,r){e.next=6;break}return e.abrupt("return",!1);case 6:if(/image/gi.test(r.type)){e.next=9;break}return slucky_component_toast__WEBPACK_IMPORTED_MODULE_2___default.a.warn("仅支持上传图片"),e.abrupt("return",!1);case 9:return this.setState({loading:!0}),e.next=12,this.file2Base64(r);case 12:return l=e.sent,e.next=15,this.createImage(l);case 15:i=e.sent,(c=i.width-i.height)>0?(s=i.width*CANVANS_SIZE/i.height,a.drawImage(i,0,0,s,CANVANS_SIZE)):c<0?(u=i.height*CANVANS_SIZE/i.width,a.drawImage(i,0,0,CANVANS_SIZE,u)):a.drawImage(i,0,0,CANVANS_SIZE,CANVANS_SIZE),o=t.toDataURL("image/png"),this.setState({imgUrl:o}),this.handleMakeImage(o,n).then(function(e){E.setState({targetUrl:e,loading:!1})});case 21:case"end":return e.stop()}},e,this)}));return function(_){return e.apply(this,arguments)}}()},{key:"handleChangeDecorate",value:function(e){var _=this,t=this.state.imgUrl;this.setState({decorationCurrent:e,loading:!0}),this.handleMakeImage(t,e).then(function(e){_.setState({targetUrl:e,loading:!1})})}},{key:"handleChangeBorder",value:function(e){var _=this,t=this.state,a=t.imgUrl,r=t.decorationCurrent;this.setState({border:e,loading:!0},function(){_.handleMakeImage(a,r).then(function(e){_.setState({targetUrl:e,loading:!1})})})}},{key:"handleMakeImage",value:function(){var e=babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function e(_,t){var a,r,n,l,i,c,s,u,o,E,p,d,h;return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(_||t){e.next=2;break}return e.abrupt("return","");case 2:if(a=this.state.border,r=a.value,n=t.source,l=t.style,i=l.width,c=l.height,s=l.top,u=l.left,o=this.refs.canvas,this.clearCanvas(o),E=o.getContext("2d"),!_){e.next=14;break}return e.next=12,this.createImage(_);case 12:p=e.sent,E.drawImage(p,0,0,p.width,p.height);case 14:if(this.drawBorder(r,E),!t||!n){e.next=20;break}return e.next=18,this.createImage(n);case 18:d=e.sent,E.drawImage(d,u,s,i,c);case 20:return h=o.toDataURL("image/png"),e.abrupt("return",h);case 22:case"end":return e.stop()}},e,this)}));return function(_,t){return e.apply(this,arguments)}}()},{key:"drawBorder",value:function(e,_){var t={};switch(e){case"rect":t=this.Rect(-5,-5,CANVANS_SIZE+10,CANVANS_SIZE+10),this.drawUsingArc(t,40,_);break;case"circle":t=this.Rect(-22,-22,300,300),this.drawUsingArc(t,150,_,60)}}},{key:"Rect",value:function(e,_,t,a){return{x:e,y:_,width:t,height:a}}},{key:"drawUsingArc",value:function(e,_,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,r=new Path2D;r.moveTo(e.x+_,e.y),r.lineTo(e.x+e.width-_,e.y),r.arc(e.x+e.width-_,e.y+_,_,Math.PI/180*270,0,!1),r.lineTo(e.x+e.width,e.y+e.height-_),r.arc(e.x+e.width-_,e.y+e.height-_,_,0,Math.PI/180*90,0,!1),r.lineTo(e.x+_,e.y+e.height),r.arc(e.x+_,e.y+e.height-_,_,Math.PI/180*90,Math.PI/180*180,!1),r.lineTo(e.x,e.y+_),r.arc(e.x+_,e.y+_,_,Math.PI/180*180,Math.PI/180*270,!1),t.lineWidth=a,t.strokeStyle="#fff",t.stroke(r)}},{key:"file2Base64",value:function(e){return new Promise(function(_,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(e){_(a.result)}})}},{key:"createImage",value:function(e){return new Promise(function(_,t){var a=new Image;a.src=e,a.onload=function(e){_(a)}})}},{key:"clearCanvas",value:function(e){e.getContext("2d").clearRect(0,0,e.width,e.height)}},{key:"downloadImage",value:function(e){if(!this.state.imgUrl)return slucky_component_toast__WEBPACK_IMPORTED_MODULE_2___default.a.warn("请先上传头像"),!1;if(e){var _=document.createElement("a");document.createEvent("HTMLEvents").initEvent("click",!0,!0),_.download="protrait.png",_.href=e,_.click()}}},{key:"num2px",value:function(e){var _={};for(var t in e)if(e.hasOwnProperty(t)){var a=e[t];_[t]=a+"px"}return _}},{key:"render",value:function(){var e=this,_=this.state,t=_.decorationList,a=_.targetUrl;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"d-f fullscreen ac app-bg"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"w-full p-r z9"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"fs18 ta-c pb32"},"制作你的专属头像"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(slucky_component_lrchange__WEBPACK_IMPORTED_MODULE_0___default.a,{option:t,onChange:function(_){return e.handleChangeDecorate(_)}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"w256 h256 shadow p-r","loader-inline":this.state.loading?"circle":""},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img",{src:a,alt:""}))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(slucky_component_lrchange__WEBPACK_IMPORTED_MODULE_0___default.a,{option:[{name:"圆角边框",value:"rect"},{name:"圆框",value:"circle"},{name:"无边框",value:""}],onChange:function(_){return e.handleChangeBorder(_)}},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"w256 ta-c pt32 pb8 fs18"},this.state.border.name)),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"ta-c pt32"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"fileup-container mr8"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"fileup"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label",{htmlFor:"input_file",className:"fileup-in btn ptb4 plr16 c-text-w bg-theme"},"上传头像"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input",{type:"file",id:"input_file",ref:"upload_file",onChange:function(_){return e.handleChangeUpload(_)}}))),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button",{className:"btn btn-w plr16 ptb4 ml8",onClick:function(){return e.downloadImage(a)}},"浏览器/PC端点击下载")),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"c-hint-b ta-c pt16"},"移动端长按图片即可保存"),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("canvas",{className:"w256 h256 shadow d-n",ref:"canvas"})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_8__.Component),_default=App,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__("0cfB").default,leaveModule=__webpack_require__("0cfB").leaveModule,reactHotLoader&&(reactHotLoader.register(CANVANS_SIZE,"CANVANS_SIZE","/Users/flyteng/Desktop/workspace/project/portrait/src/pages/app.jsx"),reactHotLoader.register(App,"App","/Users/flyteng/Desktop/workspace/project/portrait/src/pages/app.jsx"),reactHotLoader.register(_default,"default","/Users/flyteng/Desktop/workspace/project/portrait/src/pages/app.jsx"),leaveModule(module))}.call(this,__webpack_require__("3UD+")(module))},FVwy:function(e,_,t){e.exports=t.p+"94d662e6c4320af8e520a1a9b5f077a4.png"},Wq8K:function(e,_,t){e.exports=t.p+"f3f3442b34d4a32e71195bcbd4a9e63e.png"},lmTN:function(e,_,t){e.exports=t.p+"34393cf8e9380735e89ab4ea2f450375.png"},vjBg:function(e,_,t){}}]);