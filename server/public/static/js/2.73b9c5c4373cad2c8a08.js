(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{395:function(t,e,i){i(445);var s=i(7)(i(446),i(450),null,null);t.exports=s.exports},405:function(t,e,i){i(479);var s=i(7)(i(480),i(481),null,null);t.exports=s.exports},406:function(t,e,i){i(482);var s=i(7)(i(483),i(484),null,null);t.exports=s.exports},407:function(t,e,i){i(485);var s=i(7)(i(486),i(487),null,null);t.exports=s.exports},415:function(t,e){"use strict";e.a={data:function(){var t=this;return{title:t.$t("niceLinksStr"),siteTitle:t.$t("niceLinksStr"),titleTemplate:"%s | "+this.$t("niceLinksStr"),keywords:t.$t("keywords"),description:t.$t("description")}},created:function(){},metaInfo:function(){var e=this,t=this.title?this.title+" - "+this.siteTitle:""+this.siteTitle;return{title:this.title,titleTemplate:function(t){return t?t+" - "+e.siteTitle:""+e.siteTitle},meta:[{vmid:"title",name:"title",content:t},{vmid:"keywords",name:"keywords",content:this.keywords},{vmid:"description",name:"description",content:this.description},{vmid:"og:type",property:"og:type",content:"website"},{vmid:"og:title",property:"og:title",content:t},{vmid:"og:image",property:"og:image",content:"https://static.nicelinks.site/static/img/favicons/favicon.png"},{vmid:"og:keywords",property:"og:keywords",content:this.keywords},{vmid:"og:description",property:"og:description",content:this.description}]}},mounted:function(){},methods:{}}},445:function(){},446:function(t,e,i){"use strict";i.r(e);var s=i(23),r=i.n(s),a=i(415),n=i(447),o=i.n(n),l=i(120),c=i.n(l);e["default"]={name:"Setting",mixins:[a.a],components:{UploadAvatar:o.a,Markdown:c.a},data:function(){var t=this;return{title:t.$t("accountSetting"),tipMessageObj:{},isLoading:!1,fillForm:{_id:"",email:"",username:"",profile:{nickname:"",website:"",description:""}},rules:{"profile.nickname":[{required:!1,validator:this.isTheLegalNick,trigger:"change,blur"}],"profile.website":[{required:!1,validator:this.isTheLegalUrl,trigger:"change,blur"}]},isShowUploadAvatar:!1,params:{token:"131421",name:"avatar"},headers:{imgname:"",username:""},imgDataUrl:"https://image.nicelinks.site/default-avatar.jpeg"}},mounted:function(){this.initFetch()},methods:{initFetch:function(){var s=this,a=this.userInfo._id;this.$apis.getProfile({_id:a}).then(function(t){r()(s.fillForm,t);var e=new Date(s.$util.getCurrentDate()).Format("yyyy-MM-dd"),i=s.$util.getCurrentDateHMS();t.profile.avatar&&(s.imgDataUrl="/api/avatar/"+t.profile.avatar),s.headers.imgname=[e,i,a].join("-"),s.headers.username=s.userInfo.username||""}).catch(function(t){s.errorAlertTip("Err: "+t,"error"),s.isLoading=!1})},errorAlertTip:function(t,e){var i=this;this.tipMessageObj={message:t,type:e},setTimeout(function(){i.tipMessageObj={}},2e3)},isTheLegalNick:function(t,e,i){e&&!this.$util.isLegalNick(e)?i(new Error(this.$t("enterLegalNick"))):i()},isTheLegalUrl:function(t,e,i){e&&!this.$util.isLegalUrl(e)?i(new Error(this.$t("enterLegalUrl"))):i()},onSaveClick:function(){var i=this;this.$gtagTracking("save-setting","setting","save-setting"),this.$refs.fillForm.validate(function(t){if(t){i.isLoading=!0;var e=i.$_.cloneDeep(i.fillForm);delete e.username,i.$apis.setProfile(e).then(function(t){i.$message({message:t,type:"success"}),i.$getUserInfo()}).catch(function(t){i.errorAlertTip(t,"error")}).finally(function(){i.isLoading=!1})}})},onUpdateAvatarClick:function(){this.$gtagTracking("update-avatar","setting","update-avatar"),this.isShowUploadAvatar=!0},onCropSuccess:function(t){this.imgDataUrl=t},onCropUploadFail:function(){console.log("Upload Avatar Fail.")},onCropUploadSuccess:function(t){this.imgDataUrl="/api/avatar/"+t,this.$getUserInfo()}},locales:{en:{enterLegalNick:"Please enter 3 ~ 15 arbitrary characters."},zh:{enterLegalNick:"请输入 3 ～ 15 位任意字符"}}}},447:function(t,e,i){i(448);var s=i(7)(i(510),i(449),null,null);t.exports=s.exports},448:function(){},449:function(t){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[i("div",{staticClass:"vicp-wrap"},[i("div",{staticClass:"vicp-close",on:{click:t.off}},[i("i",{staticClass:"vicp-icon4"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.step,expression:"step === 1"}],staticClass:"vicp-step1"},[i("div",{staticClass:"vicp-drop-area",on:{dragleave:t.preventDefault,dragover:t.preventDefault,dragenter:t.preventDefault,click:t.handleClick,drop:t.handleChange}},[i("i",{directives:[{name:"show",rawName:"v-show",value:1!==t.loading,expression:"loading !== 1"}],staticClass:"vicp-icon1"},[i("i",{staticClass:"vicp-icon1-arrow"}),t._v(" "),i("i",{staticClass:"vicp-icon1-body"}),t._v(" "),i("i",{staticClass:"vicp-icon1-bottom"})]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:1!==t.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[t._v(t._s(t.lang.hint))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[t._v(t._s(t.lang.noSupported))]),t._v(" "),1===t.step?i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:t.handleChange}}):t._e()]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),t._v(" "+t._s(t.errorMsg))]),t._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:t.off,mousedown:t.ripple}},[t._v(t._s(t.lang.btn.off))])])]),t._v(" "),2===t.step?i("div",{staticClass:"vicp-step2"},[i("div",{staticClass:"vicp-crop"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[i("div",{staticClass:"vicp-img-container"},[i("img",{ref:"img",staticClass:"vicp-img",style:t.sourceImgStyle,attrs:{src:t.sourceImgUrl,draggable:"false"},on:{drag:t.preventDefault,dragstart:t.preventDefault,dragend:t.preventDefault,dragleave:t.preventDefault,dragover:t.preventDefault,dragenter:t.preventDefault,drop:t.preventDefault,touchstart:t.imgStartMove,touchmove:t.imgMove,touchend:t.createImg,touchcancel:t.createImg,mousedown:t.imgStartMove,mousemove:t.imgMove,mouseup:t.createImg,mouseout:t.createImg}}),t._v(" "),i("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:t.sourceImgShadeStyle}),t._v(" "),i("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:t.sourceImgShadeStyle})]),t._v(" "),i("div",{staticClass:"vicp-range"},[i("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:t.scale.range},on:{input:t.zoomChange}}),t._v(" "),i("i",{staticClass:"vicp-icon5",on:{mousedown:t.startZoomSub,mouseout:t.endZoomSub,mouseup:t.endZoomSub}}),t._v(" "),i("i",{staticClass:"vicp-icon6",on:{mousedown:t.startZoomAdd,mouseout:t.endZoomAdd,mouseup:t.endZoomAdd}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[i("div",{staticClass:"vicp-preview"},[i("div",{staticClass:"vicp-preview-item"},[i("img",{style:t.previewStyle,attrs:{src:t.createImgUrl,alt:t.$t("niceLinksStr")}}),t._v(" "),i("span",[t._v(t._s(t.lang.preview))])]),t._v(" "),t.noCircle?t._e():i("div",{staticClass:"vicp-preview-item"},[i("img",{style:t.previewStyle,attrs:{src:t.createImgUrl,alt:t.$t("niceLinksStr")}}),t._v(" "),i("span",[t._v(t._s(t.lang.preview))])])])])]),t._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(){return t.setStep(1)},mousedown:t.ripple}},[t._v(t._s(t.lang.btn.back))]),t._v(" "),i("a",{staticClass:"vicp-operate-btn",on:{click:t.prepareUpload,mousedown:t.ripple}},[t._v(t._s(t.lang.btn.save))])])]):t._e(),t._v(" "),3===t.step?i("div",{staticClass:"vicp-step3"},[i("div",{staticClass:"vicp-upload"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===t.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[t._v(t._s(t.lang.loading))]),t._v(" "),i("div",{staticClass:"vicp-progress-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===t.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:t.progressStyle})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),t._v(" "+t._s(t.errorMsg))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[i("i",{staticClass:"vicp-icon3"}),t._v(" "+t._s(t.lang.success)+"\n        ")])]),t._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(){return t.setStep(2)},mousedown:t.ripple}},[t._v(t._s(t.lang.btn.back))]),t._v(" "),i("a",{on:{click:t.off,mousedown:t.ripple}},[t._v(t._s(t.lang.btn.close))])])]):t._e(),t._v(" "),i("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:t.width,height:t.height}})])])},staticRenderFns:[]}},450:function(t){t.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper",attrs:{id:"setting"}},[i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.isLoading,expression:"isLoading",modifiers:{body:!0}}],staticClass:"panel-default"},[i("div",{staticClass:"panel-body"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"entry-list setting"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v(e._s(e.$t("homePage")))]),e._v(" "),i("el-breadcrumb-item",[e._v(e._s(e.$t("accountSetting")))])],1)],1),e._v(" "),i("div",{staticClass:"form form-horizontal"},[i("el-form",{ref:"fillForm",attrs:{model:e.fillForm,rules:e.rules}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[e._v(e._s(e.$t("setUsername"))),i("em",[e._v("*")]),e._v(":")]),e._v(" "),i("div",{staticClass:"col-sm-9"},[i("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:e.fillForm.username,callback:function(t){e.$set(e.fillForm,"username",t)},expression:"fillForm.username"}})],1)]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[e._v(e._s(e.$t("setNickname"))+":")]),e._v(" "),i("div",{staticClass:"col-sm-9"},[i("el-form-item",{attrs:{prop:"profile.nickname"}},[i("el-input",{attrs:{placeholder:""},model:{value:e.fillForm.profile.nickname,callback:function(t){e.$set(e.fillForm.profile,"nickname",t)},expression:"fillForm.profile.nickname"}})],1)],1)]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[e._v(e._s(e.$t("personalWebsite"))+":")]),e._v(" "),i("div",{staticClass:"col-sm-9"},[i("el-form-item",{attrs:{prop:"profile.website"}},[i("el-input",{attrs:{placeholder:""},model:{value:e.fillForm.profile.website,callback:function(t){e.$set(e.fillForm.profile,"website",t)},expression:"fillForm.profile.website"}})],1)],1)]),e._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[e._v(e._s(e.$t("profile"))+":")]),e._v(" "),i("div",{staticClass:"col-sm-9"},[i("markdown",{model:{value:e.fillForm.profile.description,callback:function(t){e.$set(e.fillForm.profile,"description",t)},expression:"fillForm.profile.description"}})],1)])])],1),e._v(" "),i("div",{staticClass:"form-group operation-area"},[i("div",{staticClass:"col-sm-offset-3 col-sm-9 no-padding"},[i("el-button",{attrs:{loading:e.isLoading,type:"primary"},on:{click:e.onSaveClick}},[e._v(e._s(e.$t("saveSeting")))])],1)]),e._v(" "),e.tipMessageObj.message?i("el-alert",{attrs:{title:e.tipMessageObj.message,type:e.tipMessageObj.type}}):e._e(),e._v(" "),i("hr"),e._v(" "),i("div",{staticClass:"form-group"},[i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"update-avatar-area"},[i("img",{staticClass:"preview-avatar",attrs:{src:e.imgDataUrl,alt:e.$t("niceLinksStr")}}),e._v(" "),i("br"),e._v(" "),i("el-button",{attrs:{loading:e.isLoading,type:"text"},on:{click:e.onUpdateAvatarClick}},[e._v("\n                    "+e._s(e.$t("updateAvatar"))+"\n                  ")])],1)])])],1)],1),e._v(" "),i("aside-list")],1)])]),e._v(" "),i("upload-avatar",{attrs:{field:"image",width:100,height:100,url:"/api/uploadAvatar",params:e.params,headers:e.headers,"img-format":"png"},on:{"crop-success":e.onCropSuccess,"crop-upload-success":e.onCropUploadSuccess,"crop-upload-fail":e.onCropUploadFail},model:{value:e.isShowUploadAvatar,callback:function(t){e.isShowUploadAvatar=t},expression:"isShowUploadAvatar"}})],1)},staticRenderFns:[]}},479:function(){},480:function(t,e,i){"use strict";i.r(e);var s=i(5),a=i(50),r=i.n(a);e["default"]={name:"About",data:function(){return{aboutMarkdown:s["default"].about}},watch:{},components:{PreviewMd:r.a},mounted:function(){},methods:{}}},481:function(t){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper account"},[i("div",{staticClass:"panel-default"},[i("div",{staticClass:"panel-body"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"entry-list active-fail"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("h3",[i("strong",[t._v(t._s(t.$t("aboutNiceLinks")))])])]),t._v(" "),i("preview-md",{attrs:{value:t.aboutMarkdown}})],1)],1),t._v(" "),i("aside-list")],1)])])])},staticRenderFns:[]}},482:function(){},483:function(t,e,i){"use strict";i.r(e),e["default"]={name:"Sponsor",data:function(){return{}},watch:{},components:{},mounted:function(){},methods:{}}},484:function(t){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper account"},[i("div",{staticClass:"panel-default"},[i("div",{staticClass:"panel-body"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"entry-list active-fail"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("h3",[i("strong",[t._v(t._s(t.$t("sponsorNiceLinks")))])])]),t._v(" "),i("div",{staticClass:"donate"},[i("div",{staticClass:"wechat-pay"},[i("h4",[i("strong",[t._v("微信捐赠")])]),t._v(" "),i("img",{attrs:{src:"https://nicelinks.site/static/img/reward_wexin.jpg",alt:t.$t("niceLinksStr")}})]),t._v(" "),i("div",{staticClass:"zhifubao-pay"},[i("h4",[i("strong",[t._v("支付宝捐赠")])]),t._v(" "),i("img",{attrs:{src:"https://nicelinks.site/static/img/reward_zhifubao.jpg",alt:t.$t("niceLinksStr")}})]),t._v(" "),i("div",[i("h4",[i("strong",[t._v("访问小程序支持")])]),t._v(" "),i("img",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{src:"https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-Banner.png",alt:"倾城之链 - 小程序"}})])])])],1),t._v(" "),i("aside-list")],1)])])])},staticRenderFns:[]}},485:function(){},486:function(t,e,i){"use strict";i.r(e);var s=i(50),a=i.n(s);e["default"]={name:"Business",data:function(){return{introduce:"\n关于「[倾城之链](https://nicelinks.site/)」的访问量，可以参见 [alexa.com](https://www.alexa.com/siteinfo/nicelinks.site#trafficstats)；另有`小程序`、`快应用`等相关产品矩阵。目前，计划在产品详情页，开辟两个区域，来支持“广告投放”，如下图所示（广告 A 区、广告 B 区）：\n\n![倾城之链 - 商业合作](https://image.nicelinks.site/nicelinks.site-screenshots.png)\n\n如果您有意向在此投入广告，可以扫如下「小程序码」购买服务。\n"}},watch:{},components:{PreviewMd:a.a},mounted:function(){},methods:{}}},487:function(t){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper account"},[i("div",{staticClass:"panel-default"},[i("div",{staticClass:"panel-body"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"entry-list active-fail"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("h3",[i("strong",[t._v("广告投放")])])]),t._v(" "),i("div",{staticClass:"advertise"},[i("preview-md",{attrs:{value:t.introduce}}),t._v(" "),i("br"),t._v(" "),i("img",{staticClass:"contact-us",attrs:{src:"https://image.nicelinks.site/nice-small-store.jpeg",alt:"倾城之链 - 小商店"}}),t._v(" "),i("img",{staticStyle:{width:"100%",height:"auto","margin-top":"15px"},attrs:{src:"https://image.nicelinks.site/%E5%80%BE%E5%9F%8E%E4%B9%8B%E9%93%BE-Banner.png",alt:"倾城之链 - 小程序"}})],1)])],1),t._v(" "),i("aside-list")],1)])])])},staticRenderFns:[]}},510:function(t,e,i){"use strict";i.r(e);var s=i(121),h=i.n(s),a=i(3),v=i.n(a),r=i(111),g=i.n(r),n=i(23),d=i.n(n),m={dataURItoBlob:function(t){for(var e=atob(t.split(",")[1]),i=t.split(",")[0].split(":")[1].split(";")[0],s=new ArrayBuffer(e.length),a=new Uint8Array(s),r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return console.log(i),new Blob([s],{type:i})},getLangConf:function(){return{zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}}}},effectRipple:function(t,e){var i=d()({ele:t.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},e),s=i.ele;if(s){var a=s.getBoundingClientRect(),r=s.querySelector(".e-ripple");switch(r?r.className="e-ripple":(r=document.createElement("span"),r.className="e-ripple",r.style.height=r.style.width=Math.max(a.width,a.height)+"px",s.appendChild(r)),i.type){case"center":r.style.top=a.height/2-r.offsetHeight/2+"px",r.style.left=a.width/2-r.offsetWidth/2+"px";break;default:r.style.top=t.pageY-a.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=t.pageX-a.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=i.bgc,r.className="e-ripple z-active",!1}}},p=m.getLangConf(),u={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},o=e["default"]={name:"UploadAvatar",props:{field:{type:String,default:"avatar"},ki:{default:0},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noCircle:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"}},data:function(){var t=this,e=t.imgFormat,i=t.langType,s=t.langExt,a=t.width,r=t.height,n=!0,o=-1===["jpg","png"].indexOf(e)?"jpg":e,l=p[i]?p[i]:p.en,c=u[o];return t.imgFormat=o,s&&d()(l,s),"function"!=typeof FormData&&(n=!1),{mime:c,lang:l,isSupported:n,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:a/r,sourceImg:null,sourceImgUrl:"",createImgUrl:"",imgData:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:180},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var t=this.progress;return{width:t+"%"}},sourceImgStyle:function(){var t=this.scale,e=this.sourceImgMasking,i=t.y+e.y+"px",s=t.x+e.x+"px";return{top:i,left:s,width:t.width+"px",height:t.height+"px"}},sourceImgMasking:function(){var t=this.width,e=this.height,i=this.ratio,s=this.sourceImgContainer,a=s,r=a.width/a.height,n=0,o=0,l=a.width,c=a.height,d=1;return i<r&&(d=a.height/e,l=a.height*i,n=(a.width-l)/2),i>r&&(d=a.width/t,c=a.width/i,o=(a.height-c)/2),{scale:d,x:n,y:o,width:l,height:c}},sourceImgShadeStyle:function(){var t=this.sourceImgMasking,e=this.sourceImgContainer,i=e,s=t,a=s.width===i.width?s.width:(i.width-s.width)/2,r=s.height===i.height?s.height:(i.height-s.height)/2;return{width:a+"px",height:r+"px"}},previewStyle:function(){var t=this.width,e=this.height,i=this.ratio,s=this.previewContainer,a=s,r=a.width,n=a.height,o=r/n;return i<o&&(r=a.height*i),i>o&&(n=a.width/i),{width:r+"px",height:n+"px"}}},watch:{value:function(t){t&&1!==this.loading&&this.reset()}},methods:{ripple:function(t){m.effectRipple(t)},off:function(){var t=this;setTimeout(function(){t.$emit("input",!1),3===t.step&&2===t.loading&&t.setStep(1)},200)},setStep:function(t){var e=this;setTimeout(function(){e.step=t},200)},preventDefault:function(t){return t.preventDefault(),!1},handleClick:function(t){1!==this.loading&&t.target!==this.$refs.fileinput&&(t.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(t){if(t.preventDefault(),1!==this.loading){var e=t.target.files||t.dataTransfer.files;this.reset(),this.checkFile(e[0])&&this.setSourceImg(e[0])}},checkFile:function(t){var e=this,i=e.lang,s=e.maxSize;return-1===t.type.indexOf("image")?(e.hasError=!0,e.errorMsg=i.error.onlyImg,!1):!(t.size/1024>s)||(e.hasError=!0,e.errorMsg=i.error.outOfSize+s+"kb",!1)},reset:function(){this.loading=0,this.hasError=!1,this.errorMsg="",this.progress=0},setSourceImg:function(t){var e=this,i=new FileReader;i.onload=function(){e.sourceImgUrl=i.result,e.startCrop()},i.readAsDataURL(t)},startCrop:function(){var o=this,l=o.width,c=o.height,d=o.ratio,p=o.scale,t=o.sourceImgUrl,e=o.sourceImgMasking,u=o.lang,h=e,v=new Image;v.src=t,v.onload=function(){var t=v.naturalWidth,e=v.naturalHeight,i=t/e,s=h.width,a=h.height,r=0,n=0;return t<l||e<c?(o.hasError=!0,o.errorMsg=u.error.lowestPx+l+"*"+c,!1):void(d>i&&(a=s/i,n=(h.height-a)/2),d<i&&(s=a*i,r=(h.width-s)/2),p.range=0,p.x=r,p.y=n,p.width=s,p.height=a,p.minWidth=s,p.minHeight=a,p.maxWidth=t*h.scale,p.maxHeight=e*h.scale,p.naturalWidth=t,p.naturalHeight=e,o.sourceImg=v,o.createImg(),o.setStep(2))}},imgStartMove:function(t){if(t.preventDefault(),this.isSupportTouch&&!t.targetTouches)return!1;var e=t.targetTouches?t.targetTouches[0]:t,i=this.sourceImgMouseDown,s=this.scale,a=i;a.mX=e.screenX,a.mY=e.screenY,a.x=s.x,a.y=s.y,a.on=!0},imgMove:function(t){if(t.preventDefault(),this.isSupportTouch&&!t.targetTouches)return!1;var e=t.targetTouches?t.targetTouches[0]:t,i=this.sourceImgMouseDown,s=i.on,a=i.mX,r=i.mY,n=i.x,o=i.y,l=this.scale,c=this.sourceImgMasking,d=c,p=e.screenX,u=e.screenY,h=n+(p-a),v=o+(u-r);s&&(0<h&&(h=0),0<v&&(v=0),h<d.width-l.width&&(h=d.width-l.width),v<d.height-l.height&&(v=d.height-l.height),l.x=h,l.y=v)},startZoomAdd:function(){function e(){if(s.zoomAddOn){var t=100<=s.range?100:++s.range;i.zoomImg(t),setTimeout(function(){e()},60)}}var i=this,s=i.scale;s.zoomAddOn=!0,e()},endZoomAdd:function(){this.scale.zoomAddOn=!1},startZoomSub:function(){function e(){if(s.zoomSubOn){var t=0>=s.range?0:--s.range;i.zoomImg(t),setTimeout(function(){e()},60)}}var i=this,s=i.scale;s.zoomSubOn=!0,e()},endZoomSub:function(){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(t){this.zoomImg(t.target.value)},zoomImg:function(t){var e=this,i=this.sourceImgMasking,s=this.sourceImgMouseDown,a=this.scale,r=a.maxWidth,n=a.maxHeight,o=a.minWidth,l=a.minHeight,c=a.width,d=a.height,p=a.x,u=a.y,h=a.range,v=i,g=v.width,m=v.height,f=o+(r-o)*t/100,w=l+(n-l)*t/100,_=g/2-f/c*(g/2-p),C=m/2-w/d*(m/2-u);0<_&&(_=0),0<C&&(C=0),_<g-f&&(_=g-f),C<m-w&&(C=m-w),a.x=_,a.y=C,a.width=f,a.height=w,a.range=t,setTimeout(function(){a.range===t&&e.createImg()},300)},createImg:function(t){var e=this,i=e.mime,s=e.sourceImg,a=e.scale,r=a.x,n=a.y,o=a.width,l=a.height,c=e.sourceImgMasking.scale,d=e.$refs.canvas,p=d.getContext("2d");t&&(e.sourceImgMouseDown.on=!1),p.clearRect(0,0,e.width,e.height),p.drawImage(s,r/c,n/c,o/c,l/c),e.createImgUrl=d.toDataURL(i)},prepareUpload:function(){var t=this.url,e=this.createImgUrl,i=this.field,s=this.ki;this.$emit("crop-success",e,i,s),"string"==typeof t&&t?this.upload():this.off()},upload:function(){var s=this,e=this,i=this.lang,t=this.imgFormat,a=this.mime,r=this.url,n=this.params,o=this.headers,l=this.field,c=this.ki,d=this.createImgUrl;this.imgData=new FormData;var p=m.dataURItoBlob(d,a);this.imgData.append("file",p),this.imgData.append("user",this.userInfo._id||"");var u=function(t){t.lengthComputable&&(e.progress=100*Math.round(t.loaded)/t.total)};e.reset(),e.loading=1,e.setStep(3),new g.a(function(t,e){var i=new XMLHttpRequest;i.open("POST","/api/updateAvatar",!0),i.onreadystatechange=function(){200===this.status||201===this.status?t(o.imgname):e(this.status)},i.upload.addEventListener("progress",u,!1),"object"===("undefined"==typeof o?"undefined":v()(o))&&o&&h()(o).forEach(function(t){i.setRequestHeader(t,o[t])});({_id:s.userInfo._id||"",imgData:s.imgData});i.send(s.imgData)}).then(function(t){console.log(t),e.value&&(e.loading=2,e.reset(),s.$message({type:"success",message:"成功更新头像"}),e.$emit("crop-upload-success",t,l,c))},function(t){e.value&&(e.loading=3,e.reset(),e.hasError=!0,e.errorMsg=i.fail,e.$emit("crop-upload-fail",t,l,c))})}},created:function(){var e=this;document.addEventListener("keyup",function(t){e.value&&("Escape"===t.key||27===t.keyCode)&&e.off()})}}}}]);