(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"14ce":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("FeedbackPage")],1)},n=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("header",{staticClass:"header"},[t("div",{staticClass:"logo"},[e._v("ANN TRADERS")]),t("div",{staticClass:"search-bar"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.searchQuery},on:{click:e.triggerSearch,input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),e._m(0)]),t("main",{staticClass:"main-content"},[t("div",{staticClass:"feedback-page"},[t("h1",[e._v("Submit Your Feedback")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitFeedback.apply(null,arguments)}}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.feedbackText,expression:"feedbackText"}],attrs:{placeholder:"Write your feedback here...",required:""},domProps:{value:e.feedbackText},on:{input:function(t){t.target.composing||(e.feedbackText=t.target.value)}}}),t("div",{staticClass:"rating-section"},[t("label",{attrs:{for:"rating"}},[e._v("Rate Us:")]),t("div",{staticClass:"stars"},e._l(5,(function(a){return t("span",{key:a,staticClass:"star",class:{filled:a<=e.rating},on:{click:function(t){return e.setRating(a)}}},[e._v("★")])})),0)]),t("div",{staticClass:"upload-section"},[t("label",{attrs:{for:"media-upload"}},[e._v("Upload Image:")]),t("input",{attrs:{type:"file",id:"media-upload",accept:"image/*,video/*"},on:{change:e.handleFileUpload}}),e.file?t("p",[e._v("Selected File: "+e._s(e.file.name))]):e._e()]),t("button",{attrs:{type:"submit"}},[e._v("Submit")])]),e.successMessage?t("p",{staticClass:"success-message"},[e._v(e._s(e.successMessage))]):e._e()])]),e._m(1)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"cart-icon"},[t("img",{attrs:{src:a("9f62"),alt:"Cart"}})])},function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"},[t("p",[t("a",{attrs:{href:"#"}},[e._v("About")]),e._v(" | "),t("a",{attrs:{href:"#"}},[e._v("Contact")])])])}],c=a("cee4"),l={data(){return{feedbackText:"",rating:0,file:null,successMessage:"",errorMessage:"",searchQuery:"",submittedRating:null}},methods:{setRating(e){this.rating=e},handleFileUpload(e){const t=e.target.files[0];t&&(this.file=t)},async submitFeedback(){if(!this.rating)return void(this.errorMessage="Please provide a rating.");this.errorMessage="";const e={feedback:this.feedbackText,rating:this.rating,media:this.file||""};try{await c["a"].post("https://4p12zrz1el.execute-api.ap-south-1.amazonaws.com/prod",e,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});this.submittedRating=this.rating,this.feedbackText="",this.rating=0,this.file=null}catch(a){console.error("Error submitting feedback",a)}const t=document.getElementById("media-upload");t&&(t.value=""),this.successMessage="Feedback submitted successfully!"},search(){alert("Searching for: "+this.searchQuery)}}},u=l,d=(a("5de9"),a("2877")),p=Object(d["a"])(u,i,o,!1,null,"2d57dc33",null),f=p.exports,h={name:"App",components:{FeedbackPage:f}},g=h,v=(a("6884"),Object(d["a"])(g,s,n,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(b)}).$mount("#app")},"5de9":function(e,t,a){"use strict";a("8246")},6884:function(e,t,a){"use strict";a("14ce")},8246:function(e,t,a){},"9f62":function(e,t,a){e.exports=a.p+"img/cart.5e74de86.png"}});
//# sourceMappingURL=app.f5198f89.js.map