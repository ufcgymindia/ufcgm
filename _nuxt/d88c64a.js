(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{279:function(e,t,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("86b44540",content,!0,{sourceMap:!1})},280:function(e,t,r){"use strict";var o={props:{imgSrc:{type:String,default:"",required:!0},imgAlt:{type:String,default:"UFC Image"},imageRatio:{type:String,default:"ratio-4-3"},isWhiteOverlay:{type:Boolean,default:!1},isVideo:{type:Boolean,default:!1}}},n=(r(283),r(3)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"img-w-anim image-ratio",class:e.imageRatio},[t("div",{class:e.isWhiteOverlay?"img-w-anim--overlay white-overlay":"img-w-anim--overlay"}),e._v(" "),e.isVideo?e._e():t("img",{staticClass:"animated-img",attrs:{src:e.imgSrc,alt:e.imgAlt}}),e._v(" "),e.isVideo?t("video",{staticClass:"animated-img",attrs:{muted:"",autoplay:"",loop:""},domProps:{muted:!0}},[t("source",{attrs:{src:e.imgSrc,type:"video/mp4"}}),e._v("\n    Your browser does not support the video tag.\n  ")]):e._e()])}),[],!1,null,null,null);t.a=component.exports},283:function(e,t,r){"use strict";r(279)},284:function(e,t,r){var o=r(7)(!1);o.push([e.i,".img-w-anim{position:relative;overflow:hidden}.img-w-anim .img-w-anim--overlay{background:#f6f6f6;height:100%;position:absolute;top:0;right:0;z-index:1}.img-w-anim .img-w-anim--overlay.white-overlay{background:#fff}.img-w-anim img,.img-w-anim video{opacity:0;z-index:0}.img-w-anim.in-view .img-w-anim--overlay{-webkit-animation:overlayAnim 2s ease both;-o-animation:overlayAnim 2s ease both;animation:overlayAnim 2s ease both}.img-w-anim.in-view img,.img-w-anim.in-view video{-webkit-animation:imgAnim .2s ease both;-o-animation:imgAnim .2s ease both;animation:imgAnim .2s ease both;-webkit-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes overlayAnim{0%{width:100%;-webkit-transform:translateX(100%);transform:translateX(100%)}50%{width:200%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}to{width:200%;-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@-o-keyframes overlayAnim{0%{width:100%;-o-transform:translateX(100%);transform:translateX(100%)}50%{width:200%;-o-transform:translateX(-50%);transform:translateX(-50%)}to{width:200%;-o-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes overlayAnim{0%{width:100%;-webkit-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}50%{width:200%;-webkit-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}to{width:200%;-webkit-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}}@-webkit-keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}@-o-keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}@keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}",""]),e.exports=o},289:function(e,t,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("37c7689e",content,!0,{sourceMap:!1})},297:function(e,t,r){"use strict";var o=r(65),n=r(280),l={components:{Button:o.a,ImageAnim:n.a},props:{pageTitle:{type:String,default:"",required:!0},pageTitleBold:{type:Boolean,default:!1,required:!1},pageSubText:{type:String,default:""},pageBackground:{type:String,default:"",require:!0},pageHeroButtonLink:{type:String,default:""},pageHeroButtonText:{type:String,default:""},videoBg:{type:Boolean,default:!1},imageAlt:{type:String,default:""}}},d=(r(300),r(3)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-hero"},[t("ImageAnim",{attrs:{"img-src":e.pageBackground,"image-ratio":"ratio-1-1","is-video":e.videoBg,"img-alt":e.imageAlt}}),e._v(" "),t("div",{staticClass:"overlay"}),e._v(" "),t("div",{directives:[{name:"vpanim",rawName:"v-vpanim",value:{delay:1},expression:"{ delay: 1 }"}],staticClass:"page-hero--content container vpanin-delayed"},[t("h1",{class:{"page-title":e.pageTitleBold}},[e._v(e._s(e.pageTitle))]),e._v(" "),e.pageSubText?t("p",{domProps:{innerHTML:e._s(e.pageSubText)}}):e._e(),e._v(" "),e.pageHeroButtonLink&&e.pageHeroButtonText?t("Button",{attrs:{"button-colors":"button-white","button-link-url":e.pageHeroButtonLink,"button-label":e.pageHeroButtonText}}):e._e()],1)],1)}),[],!1,null,null,null);t.a=component.exports},300:function(e,t,r){"use strict";r(289)},301:function(e,t,r){var o=r(7)(!1);o.push([e.i,".page-title{color:#d20a0a}.page-hero{min-height:248px;height:auto;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;padding-bottom:24px}.page-hero .img-w-anim{width:100%;height:100%;overflow:hidden;position:absolute!important;top:0;left:0}.page-hero .img-w-anim img,.page-hero .img-w-anim video{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.page-hero .page-hero--content{color:#fff;z-index:0;padding-top:16px}.page-hero .page-hero--content p{margin:0;max-width:696px}.page-hero .page-hero--content .button-text{margin-top:24px;display:inline-block}@media (min-width:768px){.page-hero{min-height:512px;padding-bottom:64px}.page-hero .page-hero--content{padding-top:150px}.page-hero .page-hero--content p{padding-top:16px}}@media (min-width:1024px){.page-hero{min-height:552px}.page-hero .page-hero--content{padding-top:250px}}",""]),e.exports=o},410:function(e,t,r){var content=r(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("4791064c",content,!0,{sourceMap:!1})},496:function(e,t,r){"use strict";r(410)},497:function(e,t,r){var o=r(7)(!1);o.push([e.i,'form{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}form h3{margin-bottom:24px}form .button-text{width:100%;margin-top:24px}@media (max-width:414px){form .button-text{display:block;max-width:200px;margin-left:auto;margin-right:auto}}form input:not([type=checkbox]),form textarea{border:none;background:#f6f6f6;padding:16px;width:100%;font-size:1.6rem;line-height:1.38;color:#999}form input:not([type=checkbox]).is-danger,form input:not([type=checkbox]):active,form input:not([type=checkbox]):focus,form textarea.is-danger,form textarea:active,form textarea:focus{border:2px solid #1a1a1a}form input:not([type=checkbox]):not(:-moz-placeholder-shown),form textarea:not(:-moz-placeholder-shown){border-bottom:2px solid #1a1a1a}form input:not([type=checkbox]):not(:-ms-input-placeholder),form textarea:not(:-ms-input-placeholder){border-bottom:2px solid #1a1a1a}form input:not([type=checkbox]):not(:placeholder-shown),form textarea:not(:placeholder-shown){border-bottom:2px solid #1a1a1a}form option{border-radius:0}form label{font-size:2.4rem;font-weight:500;line-height:1.33;font-family:urw-din-condensed,sans-serif}form .form-field{width:100%}form .form-field,form .form-field-half{margin-bottom:32px}form .form-field-half{width:45%}form .form-field-half--left{margin-right:16px}form .form-field-half--right{margin-left:16px}form .custom-checkbox{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;padding-left:40px;margin-bottom:16px;display:block}form .custom-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}form .custom-checkbox .checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#f6f6f6;border:2px solid #4d4d4d}form .custom-checkbox .checkmark:after{content:"";position:absolute;display:none;left:9px;top:0;width:10px;height:24px;border:solid #4d4d4d;border-width:0 4px 4px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}form .custom-checkbox input:checked~.checkmark:after{display:block}form .custom-dropdown{border-radius:0;height:48px;overflow:hidden;width:100%;display:inline-block;margin-right:32px;font-family:proxima-nova,"Montserrat",sans-serif;background:url(/baseline-arrow_drop_down.svg) #f6f6f6 no-repeat 100%}form .custom-dropdown select{background:rgba(0,0,0,0);border:none;font-size:16px;font-weight:400;line-height:2;height:48px;padding:5px 16px;width:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#999;border-radius:0}form .custom-dropdown select.is-danger,form .custom-dropdown select:focus{border:2px solid #1a1a1a}form .custom-dropdown select:valid{border-bottom:2px solid #1a1a1a}form .required-field-msg{font-size:1.4rem;font-family:proxima-nova,"Montserrat",sans-serif;line-height:1.14;color:#d20a0a;margin-top:8px;margin-bottom:8px}.contact-page--content{padding-top:56px}.contact-page--content h3{margin-bottom:24px}.contact-page--content_left .button-text{display:inline-block;margin-top:24px;margin-bottom:48px}.contact-page--content .contact-form{margin-top:24px}.contact-page--content .contact-form .selects{border:none;background:#f6f6f6;padding:16px;width:100%;font-size:1.6rem;line-height:1.38;color:#000}.contact-page--content .contact-form .selects.is-danger{border:2px solid #1a1a1a}',""]),e.exports=o},779:function(e,t,r){"use strict";r.r(t);r(33),r(15),r(30);var o=r(297),n=r(65),l={components:{PageHero:o.a,Button:n.a},head:function(){return{title:"Franchise | Gym & Fitness | MMA Training"}},data:function(){return{email:"",firstname:"",lastname:"",modeofint:"",state:"",city:"",zip:"",phone:"",desiredlocation:"",availablecapital:"",besttime:"",hearabout:"",agree:"",isSubmitted:!1}},methods:{validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then((function(t){if(t){var data={service_id:"service_h3fp05w",template_id:"template_dw2z1cg",user_id:"bSLJujOWphgi0ps_N",template_params:e.$data};e.$axios.$post("https://api.emailjs.com/api/v1.0/email/send",data).then((function(t){console.log(t),t&&(e.isSubmitted=!0)})).catch((function(e){console.error("onRejected function called: ".concat(e.message))}))}else;}))}}},d=(r(496),r(3)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"contact-page form-page-padding"},[t("div",{staticClass:"row fixed-width-content contact-page--content justify-content-center"},[e._m(0),e._v(" "),e.isSubmitted?e._e():t("div",{staticClass:"col-xl-10 col-lg-10 col-md-10"},[t("form",{staticClass:"contact-form",staticStyle:{display:"block"},on:{submit:function(t){return t.preventDefault(),e.validateBeforeSubmit.apply(null,arguments)}}},[t("div",{staticClass:"row fixed-width-content contact-page--content"},[t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"firstname"}},[e._v("First Name *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"},{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],class:{"is-danger":e.errors.has("firstname")},attrs:{type:"text",name:"firstname",placeholder:"First Name",id:"firstname"},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("firstname"),expression:"errors.has('firstname')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("firstname")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"lastname"}},[e._v("Last Name *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],class:{"is-danger":e.errors.has("lastname")},attrs:{type:"text",name:"lastname",placeholder:"Last Name",id:"lastname"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("lastname")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"modeofint"}},[e._v("Model of Interest *")]),e._v(" "),t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.modeofint,expression:"modeofint"}],staticClass:"selects",class:{"is-danger":e.errors.has("modeofint")},attrs:{name:"modeofint",id:"modeofint"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.modeofint=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"UFC GYM / FIT"}},[e._v("UFC GYM")]),e._v(" "),t("option",{attrs:{value:"UFC CORE"}},[e._v("UFC FIT")]),e._v(" "),t("option",{attrs:{value:"CLASS UFC GYM"}},[e._v("CLASS UFC GYM")]),e._v(" "),t("option",{attrs:{value:"Not Sure"}},[e._v("Not Sure")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("modeofint"),expression:"errors.has('modeofint')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("modeofint")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"phone"}},[e._v("Phone Number *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"},{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],class:{"is-danger":e.errors.has("phone")},attrs:{type:"tel",name:"phone",placeholder:"Phone Number",id:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("phone")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"email"}},[e._v("Email Address *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{"is-danger":e.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"Email Address",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("email")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"state"}},[e._v("State *")]),e._v(" "),t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.state,expression:"state"}],staticClass:"selects",class:{"is-danger":e.errors.has("state")},attrs:{name:"state",id:"state"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.state=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:""}},[e._v("Select State")]),e._v(" "),t("option",{attrs:{value:"Andaman and Nicobar Islands"}},[e._v("Andaman and Nicobar Islands")]),e._v(" "),t("option",{attrs:{value:"Andhra Pradesh"}},[e._v("Andhra Pradesh")]),e._v(" "),t("option",{attrs:{value:"Arunachal Pradesh"}},[e._v("Arunachal Pradesh")]),e._v(" "),t("option",{attrs:{value:"Assam"}},[e._v("Assam")]),e._v(" "),t("option",{attrs:{value:"Bihar"}},[e._v("Bihar")]),e._v(" "),t("option",{attrs:{value:"Chandigarh"}},[e._v("Chandigarh")]),e._v(" "),t("option",{attrs:{value:"Chhattisgarh"}},[e._v("Chhattisgarh")]),e._v(" "),t("option",{attrs:{value:"Dadra and Nagar Haveli"}},[e._v("Dadra and Nagar Haveli")]),e._v(" "),t("option",{attrs:{value:"Daman and Diu"}},[e._v("Daman and Diu")]),e._v(" "),t("option",{attrs:{value:"Delhi"}},[e._v("Delhi")]),e._v(" "),t("option",{attrs:{value:"Goa"}},[e._v("Goa")]),e._v(" "),t("option",{attrs:{value:"Gujarat"}},[e._v("Gujarat")]),e._v(" "),t("option",{attrs:{value:"Haryana"}},[e._v("Haryana")]),e._v(" "),t("option",{attrs:{value:"Himachal Pradesh"}},[e._v("Himachal Pradesh")]),e._v(" "),t("option",{attrs:{value:"Jammu and Kashmir"}},[e._v("Jammu and Kashmir")]),e._v(" "),t("option",{attrs:{value:"Jharkhand"}},[e._v("Jharkhand")]),e._v(" "),t("option",{attrs:{value:"Karnataka"}},[e._v("Karnataka")]),e._v(" "),t("option",{attrs:{value:"Kerala"}},[e._v("Kerala")]),e._v(" "),t("option",{attrs:{value:"Lakshadweep"}},[e._v("Lakshadweep")]),e._v(" "),t("option",{attrs:{value:"Madhya Pradesh"}},[e._v("Madhya Pradesh")]),e._v(" "),t("option",{attrs:{value:"Maharashtra"}},[e._v("Maharashtra")]),e._v(" "),t("option",{attrs:{value:"Manipur"}},[e._v("Manipur")]),e._v(" "),t("option",{attrs:{value:"Meghalaya"}},[e._v("Meghalaya")]),e._v(" "),t("option",{attrs:{value:"Mizoram"}},[e._v("Mizoram")]),e._v(" "),t("option",{attrs:{value:"Nagaland"}},[e._v("Nagaland")]),e._v(" "),t("option",{attrs:{value:"Orissa"}},[e._v("Orissa")]),e._v(" "),t("option",{attrs:{value:"Pondicherry"}},[e._v("Pondicherry")]),e._v(" "),t("option",{attrs:{value:"Punjab"}},[e._v("Punjab")]),e._v(" "),t("option",{attrs:{value:"Rajasthan"}},[e._v("Rajasthan")]),e._v(" "),t("option",{attrs:{value:"Sikkim"}},[e._v("Sikkim")]),e._v(" "),t("option",{attrs:{value:"Tamil Nadu"}},[e._v("Tamil Nadu")]),e._v(" "),t("option",{attrs:{value:"Tripura"}},[e._v("Tripura")]),e._v(" "),t("option",{attrs:{value:"Uttaranchal"}},[e._v("Uttaranchal")]),e._v(" "),t("option",{attrs:{value:"Uttar Pradesh"}},[e._v("Uttar Pradesh")]),e._v(" "),t("option",{attrs:{value:"West Bengal"}},[e._v("West Bengal")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("state"),expression:"errors.has('state')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("state")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"city"}},[e._v("City *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.city,expression:"city"}],class:{"is-danger":e.errors.has("city")},attrs:{type:"text",name:"city",placeholder:"Last Name",id:"city"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("city"),expression:"errors.has('city')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("city")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"zip"}},[e._v("Zip *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.zip,expression:"zip"}],class:{"is-danger":e.errors.has("zip")},attrs:{type:"text",name:"zip",placeholder:"Enter zip",id:"zip"},domProps:{value:e.zip},on:{input:function(t){t.target.composing||(e.zip=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("zip"),expression:"errors.has('zip')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("zip")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"desiredlocation"}},[e._v("Desired Location *")]),e._v(" "),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.desiredlocation,expression:"desiredlocation"}],class:{"is-danger":e.errors.has("desiredlocation")},attrs:{type:"text",name:"desiredlocation",placeholder:"Enter desired location",id:"desiredlocation"},domProps:{value:e.desiredlocation},on:{input:function(t){t.target.composing||(e.desiredlocation=t.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("desiredlocation"),expression:"errors.has('desiredlocation')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("desiredlocation")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"availablecapital"}},[e._v("Available Capital *")]),e._v(" "),t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.availablecapital,expression:"availablecapital"}],staticClass:"selects",class:{"is-danger":e.errors.has("availablecapital")},attrs:{name:"availablecapital",id:"availablecapital"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.availablecapital=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"75 L to 1 Cr"}},[e._v("75 L to 1 Cr")]),e._v(" "),t("option",{attrs:{value:"1Cr to 1.5 Cr"}},[e._v("1Cr to 1.5 Cr")]),e._v(" "),t("option",{attrs:{value:"1.5 Cr to 2.5 Cr"}},[e._v("1.5 Cr to 2.5 Cr")]),e._v(" "),t("option",{attrs:{value:"Above 2.5 Cr"}},[e._v("Above 2.5 Cr")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("availablecapital"),expression:"errors.has('availablecapital')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("availablecapital")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"besttime"}},[e._v("Best Time to call *")]),e._v(" "),t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.besttime,expression:"besttime"}],staticClass:"selects",class:{"is-danger":e.errors.has("besttime")},attrs:{name:"besttime",id:"besttime"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.besttime=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"8-10am"}},[e._v("8-10am")]),e._v(" "),t("option",{attrs:{value:"10am-12pm"}},[e._v("10am-12pm")]),e._v(" "),t("option",{attrs:{value:"12-2pm"}},[e._v("12-2pm")]),e._v(" "),t("option",{attrs:{value:"2-4pm"}},[e._v("2-4pm")]),e._v(" "),t("option",{attrs:{value:"4-6pm"}},[e._v("4-6pm")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("besttime"),expression:"errors.has('besttime')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("besttime")))])])]),e._v(" "),t("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[t("div",{staticClass:"form-field"},[t("label",{attrs:{for:"hearabout"}},[e._v("How Did You Hear About Us? *")]),e._v(" "),t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.hearabout,expression:"hearabout"}],staticClass:"selects",class:{"is-danger":e.errors.has("hearabout")},attrs:{name:"hearabout",id:"hearabout"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.hearabout=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"Social Media"}},[e._v("Social Media")]),e._v(" "),t("option",{attrs:{value:"Google"}},[e._v("Google")]),e._v(" "),t("option",{attrs:{value:"Referral"}},[e._v("Referral")]),e._v(" "),t("option",{attrs:{value:"Member of a UFC GYM club"}},[e._v("Member of a UFC GYM club")]),e._v(" "),t("option",{attrs:{value:"UFC Fan"}},[e._v("UFC Fan")]),e._v(" "),t("option",{attrs:{value:"Other"}},[e._v("Other")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("hearabout"),expression:"errors.has('hearabout')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("hearabout")))])])]),e._v(" "),t("div",{staticClass:"col-xl-12 col-lg-12 col-md-12"},[t("div",{staticClass:"form-field"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],class:{"is-danger":e.errors.has("agree")},attrs:{type:"checkbox",name:"agree",id:"agree"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var r=e.agree,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&(e.agree=r.concat([null])):l>-1&&(e.agree=r.slice(0,l).concat(r.slice(l+1)))}else e.agree=n}}}),e._v(" "),t("label",{attrs:{for:"agree"}},[e._v("I agree to the "),t("nuxt-link",{staticStyle:{color:"red"},attrs:{to:"/terms/"}},[e._v("Terms & Conditions")]),e._v(" and know I will be contacted after I submit this form.")],1),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("agree"),expression:"errors.has('agree')"}],staticClass:"required-field-msg",attrs:{role:"alert"}},[e._v(e._s(e.errors.first("agree")))])])]),e._v(" "),e._m(1)])])]),e._v(" "),e.isSubmitted?t("div",{staticClass:"col-xl-4 col-lg-5 col-md-6"},[t("h3",{staticClass:"text-initial text-light",staticStyle:{color:"green"}},[e._v("We'll Be In Touch!")]),e._v(" "),t("p",{staticStyle:{color:"green"}},[e._v("Thanks for reaching out. We look forward to connecting with you soon.")])]):e._e()])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-lg-8 col-md-12"},[t("div",{staticStyle:{"text-align":"center"}},[t("h3",{staticClass:"text-initial text-light"},[e._v("REQUEST MORE INFO")]),e._v(" "),t("p",[e._v("Fill out the form below – it only takes a few seconds and we’ll reach out with more info about franchising with UFC GYM.")])])])},function(){var e=this._self._c;return e("div",{staticClass:"col-xl-6 col-lg-6 col-md-12"},[e("button",{staticClass:"button-text button-primary button-lg-text",attrs:{type:"submit"}},[e("span",[this._v("Send Message")])])])}],!1,null,null,null);t.default=component.exports}}]);