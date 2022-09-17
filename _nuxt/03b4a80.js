(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{429:function(e,t,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("4445d532",content,!0,{sourceMap:!1})},537:function(e,t,r){"use strict";r(429)},538:function(e,t,r){var o=r(7)(!1);o.push([e.i,'form{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}form h3{margin-bottom:24px}form .button-text{width:100%;margin-top:24px}@media (max-width:414px){form .button-text{display:block;max-width:200px;margin-left:auto;margin-right:auto}}form input:not([type=checkbox]),form textarea{border:none;background:#f6f6f6;padding:16px;width:100%;font-size:1.6rem;line-height:1.38;color:#999}form input:not([type=checkbox]).is-danger,form input:not([type=checkbox]):active,form input:not([type=checkbox]):focus,form textarea.is-danger,form textarea:active,form textarea:focus{border:2px solid #1a1a1a}form input:not([type=checkbox]):not(:-moz-placeholder-shown),form textarea:not(:-moz-placeholder-shown){border-bottom:2px solid #1a1a1a}form input:not([type=checkbox]):not(:-ms-input-placeholder),form textarea:not(:-ms-input-placeholder){border-bottom:2px solid #1a1a1a}form input:not([type=checkbox]):not(:placeholder-shown),form textarea:not(:placeholder-shown){border-bottom:2px solid #1a1a1a}form option{border-radius:0}form label{font-size:2.4rem;font-weight:500;line-height:1.33;font-family:urw-din-condensed,sans-serif}form .form-field{width:100%}form .form-field,form .form-field-half{margin-bottom:32px}form .form-field-half{width:45%}form .form-field-half--left{margin-right:16px}form .form-field-half--right{margin-left:16px}form .custom-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;padding-left:40px;margin-bottom:16px;display:block}form .custom-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}form .custom-checkbox .checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#f6f6f6;border:2px solid #4d4d4d}form .custom-checkbox .checkmark:after{content:"";position:absolute;display:none;left:9px;top:0;width:10px;height:24px;border:solid #4d4d4d;border-width:0 4px 4px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}form .custom-checkbox input:checked~.checkmark:after{display:block}form .custom-dropdown{border-radius:0;height:48px;overflow:hidden;width:100%;display:inline-block;margin-right:32px;font-family:proxima-nova,"Montserrat",sans-serif;background:url(/baseline-arrow_drop_down.svg) #f6f6f6 no-repeat 100%}form .custom-dropdown select{background:rgba(0,0,0,0);border:none;font-size:16px;font-weight:400;line-height:2;height:48px;padding:5px 16px;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#999;border-radius:0}form .custom-dropdown select.is-danger,form .custom-dropdown select:focus{border:2px solid #1a1a1a}form .custom-dropdown select:valid{border-bottom:2px solid #1a1a1a}form .required-field-msg{font-size:1.4rem;font-family:proxima-nova,"Montserrat",sans-serif;line-height:1.14;color:#d20a0a;margin-top:8px;margin-bottom:8px}@media (max-width:414px){.free-pass-page .section-intro{text-align:left}}.free-pass-page .consent-text{overflow:hidden;font-size:12px;margin:0 0 20px}.free-pass-page .location-address{font-size:18px;margin:32px 0;background:#f6f6f6;padding:32px;width:100%}.free-pass-page .location-address h5{color:#d20a0a;font-size:24px;text-transform:none;font-weight:400;margin-bottom:8px}',""]),e.exports=o},794:function(e,t,r){"use strict";r.r(t);r(10),r(51),r(52),r(18);var o=r(2),n=(r(20),r(293)),l=r(65),d={mixins:[r(84).b],components:{LocationSection:n.a,Button:l.a},data:function(){return{firstname:"",lastname:"",email:"",phone:"",state:"",zipcode:"",loading:!1,submitError:"",consentChecked:!1}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$recaptcha.init();case 2:case"end":return t.stop()}}),t)})))()},methods:{onSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return e.loading=!0,r="",o="prospect",t.prev=8,t.next=11,e.$recaptcha.execute(o);case 11:r=t.sent,t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(8),console.error("ReCaptcha error:",t.t0),t.abrupt("return");case 18:e.$store.dispatch("SEND_PROSPECT",{storeId:e.location.id,firstName:e.firstname,lastName:e.lastname,email:e.email,phone:e.phone,state:e.state,zipcode:e.zipcode,recaptcha:{token:r,action:o}}),e.$router.push({path:"/locations/"+e.location.code+"/schedule?type=pass"});case 20:case"end":return t.stop()}}),t,null,[[8,14]])})))()}}},c=(r(537),r(3)),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"free-pass-page form-page-padding"},[t("div",{staticClass:"fixed-width-content"},[e._m(0),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-4 col-lg-5 offset-lg-1 offset-xl-2 col-md-6"},[t("form",{staticClass:"free-pass-form",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"firstname"}},[e._v("First Name")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"},{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],class:{"is-danger":e.errors.has("firstname")},attrs:{type:"text",name:"firstname",placeholder:"​",id:"firstname"},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("firstname"),expression:"errors.has('firstname')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("firstname")))])]),e._v(" "),t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"lastname"}},[e._v("Last Name")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],class:{"is-danger":e.errors.has("lastname")},attrs:{type:"text",name:"lastname",placeholder:"​",id:"lastname"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("lastname")))])]),e._v(" "),t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"email"}},[e._v("Email Address")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{"is-danger":e.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"​",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("email")))])]),e._v(" "),t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"phone"}},[e._v("Phone Number")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"},{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],class:{"is-danger":e.errors.has("phone")},attrs:{type:"tel",name:"phone",placeholder:"​",id:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("phone")))])]),e._v(" "),t("div",{staticClass:"form-field-half form-field-half--left"},[t("label",{attrs:{for:"state"}},[e._v("State/Province")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"},{name:"validate",rawName:"v-validate",value:"required|alpha|length:2",expression:"'required|alpha|length:2'"}],class:{"is-danger":e.errors.has("state")},attrs:{type:"text",name:"state",placeholder:"​",id:"state"},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("state"),expression:"errors.has('state')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("state")))])]),e._v(" "),t("div",{staticClass:"form-field-half form-field-half--right"},[t("label",{attrs:{for:"city"}},[e._v("City")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"},{name:"validate",rawName:"v-validate",value:"required|alpha|length:2",expression:"'required|alpha|length:2'"}],class:{"is-danger":e.errors.has("city")},attrs:{type:"text",name:"city",placeholder:"​",id:"city"},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("state"),expression:"errors.has('state')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("state")))])]),e._v(" "),t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"zipcode"}},[e._v("Zip Code")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":e.errors.has("zipcode")},attrs:{type:"text",name:"zipcode",placeholder:"​",id:"zipcode"},domProps:{value:e.zipcode},on:{input:function(t){t.target.composing||(e.zipcode=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("zipcode"),expression:"errors.has('zipcode')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("zipcode")))])]),e._v(" "),t("p",{staticClass:"consent-text"},[e._v("\n            Stay updated on club news! By checking the box below you are providing your signature\n            as your acknowledgment that you give your express written consent to receive SMS text\n            alerts from UFC GYM, even if such communications are considered advertisements, and you\n            further confirm that you are the authorized subscriber or customary user of any phone\n            number you submit through the UFC GYM website. You further acknowledge that by checking\n            the box below you agree to have your information used as described here and according to\n            the UFC GYM Privacy Policy and Terms of Service contained herein. Your acknowledgment\n            below indicates your express written consent that you understand and agree that text\n            alerts may be sent using an automated dialing system, that message and data rates may\n            apply, that your consent is not a condition of purchasing any goods or services.\n          ")]),e._v(" "),t("label",{staticClass:"custom-checkbox",attrs:{role:"checkbox","aria-checked":e.consentChecked.toString(),"aria-labelledby":"consent",tabindex:"0"}},[e._v("\n            I Agree to Member Consent & Release\n            "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"checkbox",name:"consent",id:"consent","aria-labelledby":"consent"}}),e._v(" "),t("span",{staticClass:"checkmark",on:{click:function(t){e.consentChecked=!e.consentChecked}}})]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("consent"),expression:"errors.has('consent')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("consent")))]),e._v(" "),t("button",{staticClass:"button-text button-secondary button-lg-text",attrs:{type:"submit",disabled:e.loading}},[t("span",[e._v("Get My Free Pass")])]),e._v(" "),t("div",{staticClass:"location-address"},[t("h5",{staticClass:"text-initial"},[e._v("UFC GYM "+e._s(e.location.city===e.location.name?e.location.city:"".concat(e.location.city," - ").concat(e.location.name)))]),e._v("\n            "+e._s(e.location.street)+"\n            "),t("br"),e._v("\n            "+e._s(e.location.city)+", "+e._s(e.location.state)+" "+e._s(e.location.zip)+"\n          ")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.submitError,expression:"submitError"}],staticClass:"is-danger"},[e._v(e._s(e.submitError))])])]),e._v(" "),t("div",{staticClass:"d-md-flex col-xl-4 col-lg-5 col-md-6 d-none"},[t("img",{staticClass:"image-fit",attrs:{src:"/images/other/freepass_image.jpg",alt:"Close up shot of member"}})])])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"section-intro padding-top-56"},[t("h3",[e._v("Try UFC GYM For Free")]),e._v(" "),t("p",[e._v("\n        Fill out the form below to access our unique Train Different\n        experience and try our classes led by world-class coaches. You will receive\n        an email with all of the information needed to redeem your free pass.\n      ")])])}],!1,null,null,null);t.default=component.exports}}]);