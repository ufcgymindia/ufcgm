(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{279:function(t,e,o){var content=o(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("86b44540",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";var n={props:{imgSrc:{type:String,default:"",required:!0},imgAlt:{type:String,default:"UFC Image"},imageRatio:{type:String,default:"ratio-4-3"},isWhiteOverlay:{type:Boolean,default:!1},isVideo:{type:Boolean,default:!1}}},r=(o(283),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"img-w-anim image-ratio",class:t.imageRatio},[e("div",{class:t.isWhiteOverlay?"img-w-anim--overlay white-overlay":"img-w-anim--overlay"}),t._v(" "),t.isVideo?t._e():e("img",{staticClass:"animated-img",attrs:{src:t.imgSrc,alt:t.imgAlt}}),t._v(" "),t.isVideo?e("video",{staticClass:"animated-img",attrs:{muted:"",autoplay:"",loop:""},domProps:{muted:!0}},[e("source",{attrs:{src:t.imgSrc,type:"video/mp4"}}),t._v("\n    Your browser does not support the video tag.\n  ")]):t._e()])}),[],!1,null,null,null);e.a=component.exports},281:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("60b572bc",content,!0,{sourceMap:!1})},282:function(t,e,o){"use strict";var n=o(65),r={props:{title:{type:String,default:""},smallTitle:{type:String,default:""},subTitle:{type:String,default:""},sectionBgImg:{type:String,default:""},sectionCtaLink:{type:String,default:""},sectionCtaText:{type:String,default:""},buttonSize:{type:String,default:"button-md-text"}},components:{Button:n.a},data:function(){return{backgroundStyle:""}},mounted:function(){""!==this.sectionBgImg&&(this.backgroundStyle="background: linear-gradient(rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6)), url("+this.sectionBgImg+");")}},l=(o(286),o(3)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"vpanim",rawName:"v-vpanim"}],staticClass:"section-cta",class:{"section-bg":""!==t.sectionBgImg},style:t.backgroundStyle,attrs:{role:"img","aria-label":t.sectionCtaText+" Background Image"}},[""!==t.title?e("h2",[t._v(t._s(t.title))]):t._e(),t._v(" "),""!==t.smallTitle?e("h6",[t._v(t._s(t.smallTitle))]):t._e(),t._v(" "),""!==t.subTitle?e("p",{domProps:{innerHTML:t._s(t.subTitle)}}):t._e(),t._v(" "),e("Button",{attrs:{buttonLinkUrl:t.sectionCtaLink,buttonLabel:t.sectionCtaText,buttonColors:"button-primary",buttonSizing:t.buttonSize}})],1)}),[],!1,null,null,null);e.a=component.exports},283:function(t,e,o){"use strict";o(279)},284:function(t,e,o){var n=o(7)(!1);n.push([t.i,".img-w-anim{position:relative;overflow:hidden}.img-w-anim .img-w-anim--overlay{background:#f6f6f6;height:100%;position:absolute;top:0;right:0;z-index:1}.img-w-anim .img-w-anim--overlay.white-overlay{background:#fff}.img-w-anim img,.img-w-anim video{opacity:0;z-index:0}.img-w-anim.in-view .img-w-anim--overlay{-webkit-animation:overlayAnim 2s ease both;-o-animation:overlayAnim 2s ease both;animation:overlayAnim 2s ease both}.img-w-anim.in-view img,.img-w-anim.in-view video{-webkit-animation:imgAnim .2s ease both;-o-animation:imgAnim .2s ease both;animation:imgAnim .2s ease both;-webkit-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes overlayAnim{0%{width:100%;-webkit-transform:translateX(100%);transform:translateX(100%)}50%{width:200%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}to{width:200%;-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@-o-keyframes overlayAnim{0%{width:100%;-o-transform:translateX(100%);transform:translateX(100%)}50%{width:200%;-o-transform:translateX(-50%);transform:translateX(-50%)}to{width:200%;-o-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes overlayAnim{0%{width:100%;-webkit-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}50%{width:200%;-webkit-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}to{width:200%;-webkit-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}}@-webkit-keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}@-o-keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}@keyframes imgAnim{0%{opacity:0}20%{opacity:0}50%{opacity:0}to{opacity:1}}",""]),t.exports=n},285:function(t,e,o){"use strict";var n={components:{TitleWButton:o(282).a},computed:{link:function(){if(!this.$store.state.location)return"/locations/";var code=this.$store.state.location.code;return"/locations/".concat(code,"/pass/")}}},r=o(3),component=Object(r.a)(n,(function(){return(0,this._self._c)("TitleWButton",{attrs:{title:"Train For Free Today","section-cta-text":"Free Pass","section-bg-img":"/images/home/UFCGym_Webpage_Background_TrainForFree.jpg","section-cta-link":"/getpass/"}})}),[],!1,null,null,null);e.a=component.exports},286:function(t,e,o){"use strict";o(281)},287:function(t,e,o){var n=o(7)(!1);n.push([t.i,".section-cta{padding:48px 36px;text-align:center;position:relative;overflow:hidden;background:#fff}.section-cta h6{margin-bottom:16px}.section-cta p{margin-bottom:32px;max-width:560px}.section-cta h2{margin-bottom:24px}.section-cta.section-bg{color:#fff;padding:96px 0}@media (min-width:768px){.section-cta{padding:56px 0}}@media (min-width:1024px){.section-cta{padding:80px 0}.section-cta p{max-width:800px}}",""]),t.exports=n},290:function(t,e,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("301568ec",content,!0,{sourceMap:!1})},291:function(t,e,o){"use strict";var n=o(65),r=o(280),l={components:{Button:n.a,imageAnim:r.a},props:{cardFeaturedImage:{type:String,required:!0,default:""},cardTitle:{type:String,required:!0,default:""},cardLink:{type:String,default:""},smallCTA:{type:Boolean,default:!1},imageRatio:{type:String,default:"ratio-4-3"},buttonColor:{type:String,default:"button-primary"},buttonTextSize:{type:String,default:"button-md-text"},buttonLabel:{type:String,default:""},buttonIcon:{type:String,default:""},isExternalLink:Boolean,cardContent:{type:String,default:""}}},c=(o(302),o(3)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-card",class:{"small-card":t.smallCTA},attrs:{tabindex:"0"}},[e("imageAnim",{attrs:{"img-src":t.cardFeaturedImage,"img-alt":t.cardTitle+" Featured Image","image-ratio":t.imageRatio}}),t._v(" "),e("div",{staticClass:"button-card--content"},[t.smallCTA?e("h5",[t._v(t._s(t.cardTitle))]):e("h4",[t._v(t._s(t.cardTitle))]),t._v(" "),""!==t.cardContent?e("p",{domProps:{innerHTML:t._s(t.cardContent)}}):t._e(),t._v(" "),""!==t.buttonLabel?e("Button",{attrs:{"button-label":t.buttonLabel,"button-link-url":t.cardLink,"button-colors":t.buttonColor,"button-sizing":t.buttonTextSize,"icon-path":t.buttonIcon,"is-external":t.isExternalLink}}):t._e()],1)],1)}),[],!1,null,null,null);e.a=component.exports},302:function(t,e,o){"use strict";o(290)},303:function(t,e,o){var n=o(7)(!1);n.push([t.i,".button-card{background:#fff;width:100%;-ms-flex-direction:column;flex-direction:column}.button-card,.button-card--content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal}.button-card--content{padding:32px;-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.button-card p{font-size:1.6rem;margin-left:0;margin-right:0}.button-card h4{margin-bottom:24px;text-transform:none}.button-card h5{font-weight:500;margin-bottom:8px;text-transform:none}.button-card .button-primary{margin-top:auto}.button-card .button-with-icon{margin-top:16px}.button-card.small-card .button-card--content{padding:24px}.button-card.small-card .button-card--content p{margin-top:0}@media (min-width:414px){.button-card{margin-bottom:32px}}@media (min-width:768px){.button-card{margin-bottom:16px}}",""]),t.exports=n},312:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("55760c0f",content,!0,{sourceMap:!1})},313:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("bc5e1bba",content,!0,{sourceMap:!1})},318:function(t,e,o){"use strict";var n=o(6),r=o(36),l=o(37),c=o(171),d=o(83),m=o(16),f=o(66).f,h=o(67).f,v=o(19).f,x=o(319).trim,y="Number",w=n.Number,_=w,k=w.prototype,C=l(o(112)(k))==y,S="trim"in String.prototype,T=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,l=(e=S?e.trim():x(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(C?m((function(){k.valueOf.call(o)})):l(o)!=y)?c(new _(T(e)),o,w):T(e)};for(var I,M=o(13)?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;M.length>A;A++)r(_,I=M[A])&&!r(w,I)&&v(w,I,h(_,I));w.prototype=k,k.constructor=w,o(23)(n,y,w)}},319:function(t,e,o){var n=o(5),r=o(44),l=o(16),c=o(320),d="["+c+"]",m=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,e,o){var r={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),m=r[t]=d?e(v):c[t];o&&(r[o]=m),n(n.P+n.F*d,"String",r)},v=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},320:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},336:function(t,e,o){"use strict";o(312)},337:function(t,e,o){var n=o(7)(!1);n.push([t.i,".modal-mask{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;transition:opacity .3s ease}.modal-wrapper{display:table-cell;vertical-align:middle}.modal-container{height:auto;max-width:70vw;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.close-button-container{-ms-flex-item-align:end;align-self:flex-end;margin-bottom:27px}.close-button{padding:11px 14px!important;cursor:pointer;background:#fff}@media (max-width:550px){.close-button{padding:8px!important}}.modal-main-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.modal-body{width:auto;max-width:70vw;max-height:80vh;background:#fff;margin:0;padding:32px}@media (max-width:550px){.modal-body{padding:16px;max-width:85vw}}.main-img{width:auto;max-width:60vw;max-height:70vh}@media (max-width:550px){.main-img{max-width:75vw}}.modal-nav{height:72px;width:72px;margin:0 32px;background:#fff;border-radius:100%;cursor:pointer}@media (max-width:550px){.modal-nav{display:none}}.mobile-nav-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:10px}@media (min-width:550px){.mobile-nav-buttons{display:none}}.mobile-nav{height:50px;width:50px;margin:0 32px;background:#fff;border-radius:100%;cursor:pointer}.nav-icon{margin:24px}@media (max-width:550px){.nav-icon{margin:13px!important}}.image-update-enter-active{-webkit-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s;opacity:0}.image-update-enter-to{opacity:1}.image-update-leave-to{opacity:0;height:0}",""]),t.exports=n},338:function(t,e,o){"use strict";o(313)},339:function(t,e,o){var n=o(7)(!1);n.push([t.i,".photo-gallery{padding-bottom:68px}.photo-gallery .gallery-title{text-align:center;font-weight:500;margin-bottom:48px}.photo-gallery .small-photo-gallery{margin-top:32px}@media (min-width:768px){.photo-gallery .large-photo-gallery{margin-right:32px}}@media (max-width:414px){.photo-gallery--right [class*=col-]{padding-left:0;padding-right:0}.photo-gallery--right .col-6{margin-top:32px}.photo-gallery--right .col-6.square-1-gallery-photo{padding-right:16px}.photo-gallery--right .col-6.square-2-gallery-photo{padding-left:16px}}",""]),t.exports=n},344:function(t,e,o){"use strict";o(318);var n=o(65),r={props:{currentPhoto:{type:String,required:!0,default:""},currentID:{type:Number,required:!0,default:0}},components:{Button:n.a}},l=(o(336),o(3)),c=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-nav",on:{click:function(e){return t.$emit("navPrev")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_back")])]),t._v(" "),e("div",{staticClass:"modal-main-content"},[e("div",{staticClass:"close-button-container",on:{click:function(e){return t.$emit("closeModal")}}},[e("Button",{staticClass:"close-button",attrs:{buttonLabel:"CLOSE",buttonColors:"button-with-icon",buttonSizing:"button-sm-text","icon-path":"/baseline-close-24px.svg","has-icon":"","icon-on-left":"","aria-label":"Close"}})],1),t._v(" "),e("div",{staticClass:"modal-body"},[e("transition",{attrs:{name:"image-update"}},[e("img",{key:t.currentID,staticClass:"main-img",attrs:{src:t.currentPhoto}})])],1),t._v(" "),e("div",{staticClass:"mobile-nav-buttons",attrs:{"aria-label":"Previous"}},[e("div",{staticClass:"mobile-nav",on:{click:function(e){return t.$emit("navPrev")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_back")])]),t._v(" "),e("div",{staticClass:"mobile-nav",attrs:{"aria-label":"Next"},on:{click:function(e){return t.$emit("navNext")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_forward")])])])]),t._v(" "),e("div",{staticClass:"modal-nav",attrs:{"aria-label":"Next"},on:{click:function(e){return t.$emit("navNext")}}},[e("i",{staticClass:"material-icons nav-icon"},[t._v("arrow_forward")])])])])])}),[],!1,null,null,null).exports,d={props:{galleryTitle:{type:String,required:!0,default:""},photos:{type:Array,required:!0,default:[]}},data:function(){return{showModal:!1,currentId:0}},methods:{openModal:function(t){this.currentId=t,this.showModal=!0},handleCloseModal:function(){this.showModal=!1},previousPhoto:function(){this.currentId>0?this.currentId--:this.currentId=this.photos.length-1},nextPhoto:function(){this.currentId<this.photos.length-1?this.currentId++:this.currentId=0}},components:{Modal:c}},m=(o(338),Object(l.a)(d,(function(){var t,e,o,n,r,l=this,c=l._self._c;return c("div",{staticClass:"photo-gallery"},[c("h3",{staticClass:"gallery-title text-initial"},[l._v(l._s(l.galleryTitle))]),l._v(" "),c("div",{staticClass:"row no-gutters"},[c("div",{staticClass:"col-md-6 gallery-photos d-flex",on:{click:function(t){return l.openModal(0)}}},[c("div",{staticClass:"image-ratio large-photo-gallery"},[c("img",{staticClass:"gallery-photo",attrs:{src:null===(t=l.photos[0])||void 0===t?void 0:t.src,alt:"".concat(l.galleryTitle," Photo #1")}})])]),l._v(" "),c("div",{staticClass:"col-md-6 row align-content-between photo-gallery--right m-auto"},[c("div",{staticClass:"col-6 square-1-gallery-photo",on:{click:function(t){return l.openModal(1)}}},[c("div",{staticClass:"image-ratio ratio-1-1"},[c("img",{staticClass:"gallery-photo",attrs:{src:null===(e=l.photos[1])||void 0===e?void 0:e.src,alt:"".concat(l.galleryTitle," Photo #2")}})])]),l._v(" "),c("div",{staticClass:"col-6 square-2-gallery-photo",on:{click:function(t){return l.openModal(2)}}},[c("div",{staticClass:"image-ratio ratio-1-1"},[c("img",{staticClass:"gallery-photo",attrs:{src:null===(o=l.photos[2])||void 0===o?void 0:o.src,alt:"".concat(l.galleryTitle," Photo #3")}})])]),l._v(" "),c("div",{staticClass:"col-md-12",on:{click:function(t){return l.openModal(3)}}},[c("div",{staticClass:"image-ratio small-photo-gallery"},[c("img",{staticClass:"gallery-photo",attrs:{src:null===(n=l.photos[3])||void 0===n?void 0:n.src,alt:"".concat(l.galleryTitle," Photo #4")}})])])])]),l._v(" "),c("transition",{attrs:{name:"modal-fade"}},[l.showModal?c("Modal",{attrs:{currentPhoto:null===(r=l.photos[l.currentId])||void 0===r?void 0:r.src,currentID:l.currentId},on:{closeModal:l.handleCloseModal,navPrev:l.previousPhoto,navNext:l.nextPhoto}}):l._e()],1)],1)}),[],!1,null,null,null));e.a=m.exports},419:function(t,e,o){var content=o(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("6a24be39",content,!0,{sourceMap:!1})},516:function(t,e,o){"use strict";o(419)},517:function(t,e,o){var n=o(7)(!1);n.push([t.i,'.class-details--content{padding:8px 0 40px}.class-details--content-overview h3{font-weight:500;margin-bottom:16px}.class-details--content-overview p{max-width:none}.class-details--content-info{font-size:18px;padding-top:24px}.class-details--content-info>div{margin-bottom:16px}.class-details--content-info ul{margin:16px 0 0}.class-details--content-info .class-details--equipment li{text-transform:capitalize}.class-details--content-info h6:not(:first-of-type){margin-top:48px}.class-details .share-buttons .class-details--social{list-style:none;padding-left:0}.class-details .share-buttons .class-details--social li{display:inline-block;font-size:36px;width:48px;height:48px;background:#f6f6f6;text-align:center;margin-right:24px;cursor:pointer}.class-details .share-buttons .class-details--social li i{vertical-align:center;margin-top:6px}@media (min-width:1024px){.class-details--content{padding:72px 0}}@media (max-width:768px){.class-details .share-buttons{margin-top:40px;background:#f6f6f6;text-align:center;padding-top:24px;padding-bottom:28px;position:relative;z-index:1}.class-details .share-buttons:before{content:"";height:100%;width:300vw;background:#f6f6f6;position:absolute;left:-50vw;top:0;z-index:-1}}@media (max-width:414px){.class-details--content-overview{padding-top:32px}.class-details--content-info h6{margin-top:32px}}',""]),t.exports=n},791:function(t,e,o){"use strict";o.r(e);o(176),o(30),o(15),o(114),o(33);var n=o(324),r=o(111),l=o(344),c=o(291),d=o(293),m=o(282),f={components:{PassCTA:o(285).a,PhotoGallery:l.a,VideoComponent:r.a,ButtonCard:c.a,LocationSection:d.a,TitleWButton:m.a},asyncData:function(t){var code=t.params.code,e=t.error,details=n.find((function(t){return t.code===code}));if(!details)return e({statusCode:404,message:"Page Not Found"});var o=n.filter((function(t){return t.category===details.category})).filter((function(t){return t.id!==details.id})).slice(0,3);return{details:details,related:o,shareLink:""}},computed:{equipment:function(){return this.details.equipment.split(/, ?/)},info:function(){return this.details.info.split(/, ?/)},photos:function(){var t=this,e=this.details,code=e.code,o=e.gallery,n=void 0===o?[]:o;if(n.length)return n.map((function(e){return{src:"".concat(t.mediaUrl,"classes/detail/").concat(code,"/").concat(e)}}))}},mounted:function(){this.shareLink=window.location.href}},h=(o(516),o(3)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"class-details no-padding"},[e("div",{staticClass:"fixed-width-content"},[e("div",{staticClass:"page-intro"},[e("h1",[t._v(t._s(t.details.title))]),t._v(" "),e("p",[t._v(t._s(t.details.summary))])]),t._v(" "),/\.mp4$/.test(t.details.banner)?[e("VideoComponent",{attrs:{videoLink:"".concat(t.mediaUrl,"classes/detail/").concat(t.details.code,"/").concat(t.details.banner)}})]:/\.jpe?g$/.test(t.details.banner)?[e("img",{attrs:{src:"".concat(t.mediaUrl,"classes/detail/").concat(t.details.code,"/").concat(t.details.banner),alt:"".concat(t.details.title," Featured Image")}})]:t._e(),t._v(" "),e("div",{staticClass:"class-details--content row"},[e("div",{staticClass:"col-lg-7 order-5 order-md-1 class-details--content-overview"},[e("h3",{staticClass:"text-initial"},[t._v("Overview")]),t._v(" "),e("p",[t._v(t._s(t.details.description))])]),t._v(" "),e("div",{staticClass:"col-lg-5 order-1 order-md-7 class-details--content-info row"},[e("div",{staticClass:"col-lg-12 col-md-6"},[e("h6",[t._v("Access")]),t._v(" "),e("ul",[e("li",[t._v("Champion Members")]),t._v(" "),e("li",[t._v("Ultimate Members")]),t._v(" "),"ULTIMATE"!==t.details.access?[e("li",[t._v("Fitness Members")])]:t._e()],2)]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-6"},[e("h6",[t._v("What to Bring")]),t._v(" "),e("ul",{staticClass:"class-details--equipment"},t._l(t.equipment,(function(o,n){return e("li",{key:"equipment-".concat(n)},[t._v("\n              "+t._s(o)+"\n            ")])})),0)]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-6"},[e("h6",[t._v("Key Details")]),t._v(" "),e("ul",t._l(t.info,(function(o,n){return e("li",{key:"info-".concat(n)},[t._v("\n              "+t._s(o)+"\n            ")])})),0)])]),t._v(" "),e("div",{staticClass:"col-lg-5 offset-lg-7 col-md-12 order-7 order-md-7 share-buttons"},[e("h6",[t._v("Share This Class")]),t._v(" "),e("no-ssr",[e("social-sharing",{attrs:{url:t.shareLink},inlineTemplate:{render:function(){var t=this._self._c;return t("ul",{staticClass:"class-details--social"},[t("li",[t("network",{attrs:{network:"facebook"}},[t("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])],1),this._v(" "),t("li",[t("network",{attrs:{network:"twitter"}},[t("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])],1)])},staticRenderFns:[]}})],1)],1)]),t._v(" "),t.photos?e("PhotoGallery",{attrs:{"gallery-title":"Class Photos",photos:t.photos}}):t._e()],2),t._v(" "),e("div",{staticClass:"gray-background padding-top-bottom-72"},[e("div",{staticClass:"fixed-width-content row"},[e("h6",{staticClass:"col-12 center-align padding-bottom-32"},[t._v("More Classes to Try")]),t._v(" "),t._l(t.related,(function(o){var code=o.code,title=o.title,summary=o.summary,n=o.thumbnail;return[e("div",{key:"related-".concat(code),staticClass:"col-lg-4 col-md-6 d-flex"},[e("ButtonCard",{attrs:{smallCTA:"","button-label":"See Details","image-ratio":"ratio-16-9","card-featured-image":n?"".concat(t.mediaUrl,"classes/detail/").concat(code,"/").concat(n):"".concat(t.mediaUrl,"classes/detail/1_ClassDetail_Gallery_Default.jpg"),"card-title":title,"card-content":summary,"card-link":"/classes/detail/".concat(code,"/")}})],1)]}))],2)]),t._v(" "),e("LocationSection"),t._v(" "),e("PassCTA")],1)}),[],!1,null,null,null);e.default=component.exports}}]);