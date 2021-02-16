(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{407:function(e,t,i){i(459);var a=i(5)(i(460),i(464),null,null);e.exports=a.exports},428:function(e,t){"use strict";t.a={data:function(){var e=this;return{title:e.$t("niceLinksStr"),siteTitle:e.$t("niceLinksStr"),titleTemplate:"%s | "+this.$t("niceLinksStr"),keywords:e.$t("keywords"),description:e.$t("description")}},created:function(){},metaInfo:function(){var t=this,e=this.title?this.title+" - "+this.siteTitle:""+this.siteTitle;return{title:this.title,titleTemplate:function(e){return e?e+" - "+t.siteTitle:""+t.siteTitle},meta:[{vmid:"title",name:"title",content:e},{vmid:"keywords",name:"keywords",content:this.keywords},{vmid:"description",name:"description",content:this.description},{vmid:"og:type",property:"og:type",content:"website"},{vmid:"og:title",property:"og:title",content:e},{vmid:"og:image",property:"og:image",content:"https://static.nicelinks.site/static/img/favicons/favicon.png"},{vmid:"og:keywords",property:"og:keywords",content:this.keywords},{vmid:"og:description",property:"og:description",content:this.description}]}},mounted:function(){},methods:{}}},459:function(){},460:function(e,t,i){"use strict";i.r(t);var a=i(23),r=i.n(a),s=i(428),o=i(461),n=i.n(o),l=i(120),c=i.n(l);t["default"]={name:"Setting",mixins:[s.a],components:{UploadAvatar:n.a,Markdown:c.a},data:function(){var e=this;return{title:e.$t("accountSetting"),tipMessageObj:{},isLoading:!1,fillForm:{_id:"",email:"",username:"",profile:{nickname:"",website:"",description:""}},rules:{"profile.nickname":[{required:!1,validator:this.isTheLegalNick,trigger:"change,blur"}],"profile.website":[{required:!1,validator:this.isTheLegalUrl,trigger:"change,blur"}]},isShowUploadAvatar:!1,params:{token:"131421",name:"avatar"},headers:{imgname:"",username:""},imgDataUrl:"https://image.nicelinks.site/default-avatar.jpeg"}},metaInfo:function(){return{title:"倾城设置 - "+this.$t("niceLinksStr"),meta:[{name:"keywords",content:this.$t("keywords")},{name:"description",content:this.$t("description")}]}},mounted:function(){this.initFetch()},methods:{initFetch:function(){var a=this,s=this.userInfo._id;this.$apis.getProfile({_id:s}).then(function(e){r()(a.fillForm,e);var t=new Date(a.$util.getCurrentDate()).Format("yyyy-MM-dd"),i=a.$util.getCurrentDateHMS();e.profile.avatar&&(a.imgDataUrl="/api/avatar/"+e.profile.avatar),a.headers.imgname=[t,i,s].join("-"),a.headers.username=a.userInfo.username||""}).catch(function(e){a.errorAlertTip("Err: "+e,"error"),a.isLoading=!1})},errorAlertTip:function(e,t){var i=this;this.tipMessageObj={message:e,type:t},setTimeout(function(){i.tipMessageObj={}},2e3)},isTheLegalNick:function(e,t,i){t&&!this.$util.isLegalNick(t)?i(new Error(this.$t("enterLegalNick"))):i()},isTheLegalUrl:function(e,t,i){t&&!this.$util.isLegalUrl(t)?i(new Error(this.$t("enterLegalUrl"))):i()},onSaveClick:function(){var i=this;this.$gtagTracking("save-setting","setting","save-setting"),this.$refs.fillForm.validate(function(e){if(e){i.isLoading=!0;var t=i.$_.cloneDeep(i.fillForm);delete t.username,i.$apis.setProfile(t).then(function(e){i.$message({message:e,type:"success"}),i.$getUserInfo()}).catch(function(e){i.errorAlertTip(e,"error")}).finally(function(){i.isLoading=!1})}})},onUpdateAvatarClick:function(){this.$gtagTracking("update-avatar","setting","update-avatar"),this.isShowUploadAvatar=!0},onCropSuccess:function(e){this.imgDataUrl=e},onCropUploadFail:function(){console.log("Upload Avatar Fail.")},onCropUploadSuccess:function(e){this.imgDataUrl="/api/avatar/"+e,this.$getUserInfo(),this.isShowUploadAvatar=!1}},locales:{en:{enterLegalNick:"Please enter 3 ~ 15 arbitrary characters."},zh:{enterLegalNick:"请输入 3 ～ 15 位任意字符"}}}},461:function(e,t,i){i(462);var a=i(5)(i(529),i(463),null,null);e.exports=a.exports},462:function(){},463:function(e){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.value?i("div",{staticClass:"vue-image-crop-upload"},[i("div",{staticClass:"vicp-wrap"},[i("div",{staticClass:"vicp-close",on:{click:e.off}},[i("i",{staticClass:"vicp-icon4"})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step === 1"}],staticClass:"vicp-step1"},[i("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[i("i",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-icon1"},[i("i",{staticClass:"vicp-icon1-arrow"}),e._v(" "),i("i",{staticClass:"vicp-icon1-body"}),e._v(" "),i("i",{staticClass:"vicp-icon1-bottom"})]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),e._v(" "),1===e.step?i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg))]),e._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),e._v(" "),2===e.step?i("div",{staticClass:"vicp-step2"},[i("div",{staticClass:"vicp-crop"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[i("div",{staticClass:"vicp-img-container"},[i("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),e._v(" "),i("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),e._v(" "),i("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),e._v(" "),i("div",{staticClass:"vicp-range"},[i("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{input:e.zoomChange}}),e._v(" "),i("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),e._v(" "),i("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[i("div",{staticClass:"vicp-preview"},[i("div",{staticClass:"vicp-preview-item"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl,alt:e.$t("niceLinksStr")}}),e._v(" "),i("span",[e._v(e._s(e.lang.preview))])]),e._v(" "),e.noCircle?e._e():i("div",{staticClass:"vicp-preview-item"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl,alt:e.$t("niceLinksStr")}}),e._v(" "),i("span",[e._v(e._s(e.lang.preview))])])])])]),e._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),i("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),e._v(" "),3===e.step?i("div",{staticClass:"vicp-step3"},[i("div",{staticClass:"vicp-upload"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),e._v(" "),i("div",{staticClass:"vicp-progress-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg))]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[i("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+"\n        ")])]),e._v(" "),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),e._v(" "),i("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])]):e._e()},staticRenderFns:[]}},464:function(e){e.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper",attrs:{id:"setting"}},[i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.isLoading,expression:"isLoading",modifiers:{body:!0}}],staticClass:"panel-default"},[i("div",{staticClass:"panel-body"},[i("div",{staticClass:"main-container"},[i("div",{staticClass:"entry-list setting"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v(t._s(t.$t("homePage")))]),t._v(" "),i("el-breadcrumb-item",[t._v(t._s(t.$t("accountSetting")))])],1)],1),t._v(" "),i("div",{staticClass:"form form-horizontal"},[i("el-form",{ref:"fillForm",attrs:{model:t.fillForm,rules:t.rules}},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[t._v(t._s(t.$t("setUsername"))),i("em",[t._v("*")]),t._v(":")]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:t.fillForm.username,callback:function(e){t.$set(t.fillForm,"username",e)},expression:"fillForm.username"}})],1)]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[t._v(t._s(t.$t("setNickname"))+":")]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("el-form-item",{attrs:{prop:"profile.nickname"}},[i("el-input",{attrs:{placeholder:""},model:{value:t.fillForm.profile.nickname,callback:function(e){t.$set(t.fillForm.profile,"nickname",e)},expression:"fillForm.profile.nickname"}})],1)],1)]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[t._v(t._s(t.$t("personalWebsite"))+":")]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("el-form-item",{attrs:{prop:"profile.website"}},[i("el-input",{attrs:{placeholder:""},model:{value:t.fillForm.profile.website,callback:function(e){t.$set(t.fillForm.profile,"website",e)},expression:"fillForm.profile.website"}})],1)],1)]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-3 control-label"},[t._v(t._s(t.$t("profile"))+":")]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("markdown",{model:{value:t.fillForm.profile.description,callback:function(e){t.$set(t.fillForm.profile,"description",e)},expression:"fillForm.profile.description"}})],1)])])],1),t._v(" "),i("div",{staticClass:"form-group operation-area"},[i("el-button",{attrs:{loading:t.isLoading,type:"primary"},on:{click:t.onSaveClick}},[t._v(t._s(t.$t("saveSeting")))])],1),t._v(" "),t.tipMessageObj.message?i("el-alert",{attrs:{title:t.tipMessageObj.message,type:t.tipMessageObj.type}}):t._e(),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"form-group"},[i("div",{staticClass:"update-avatar-area"},[i("img",{staticClass:"preview-avatar",attrs:{src:t.imgDataUrl,alt:t.$t("niceLinksStr")}}),t._v(" "),i("br"),t._v(" "),i("el-button",{attrs:{loading:t.isLoading,type:"text"},on:{click:t.onUpdateAvatarClick}},[t._v("\n                  "+t._s(t.$t("updateAvatar"))+"\n                ")])],1)])],1)],1),t._v(" "),i("aside-list")],1)])]),t._v(" "),i("upload-avatar",{attrs:{field:"image",width:100,height:100,url:"/api/uploadAvatar",params:t.params,headers:t.headers,"img-format":"png"},on:{"crop-success":t.onCropSuccess,"crop-upload-success":t.onCropUploadSuccess,"crop-upload-fail":t.onCropUploadFail},model:{value:t.isShowUploadAvatar,callback:function(e){t.isShowUploadAvatar=e},expression:"isShowUploadAvatar"}})],1)},staticRenderFns:[]}},529:function(e,t,i){"use strict";i.r(t);var a=i(121),h=i.n(a),s=i(3),g=i.n(s),r=i(111),m=i.n(r),o=i(23),p=i.n(o),v={dataURItoBlob:function(e){for(var t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),s=new Uint8Array(a),r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return console.log(i),new Blob([a],{type:i})},getLangConf:function(){return{zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}}}},effectRipple:function(e,t){var i=p()({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),a=i.ele;if(a){var s=a.getBoundingClientRect(),r=a.querySelector(".e-ripple");switch(r?r.className="e-ripple":(r=document.createElement("span"),r.className="e-ripple",r.style.height=r.style.width=Math.max(s.width,s.height)+"px",a.appendChild(r)),i.type){case"center":r.style.top=s.height/2-r.offsetHeight/2+"px",r.style.left=s.width/2-r.offsetWidth/2+"px";break;default:r.style.top=e.pageY-s.top-r.offsetHeight/2-document.body.scrollTop+"px",r.style.left=e.pageX-s.left-r.offsetWidth/2-document.body.scrollLeft+"px"}return r.style.backgroundColor=i.bgc,r.className="e-ripple z-active",!1}}},d=v.getLangConf(),u={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},n=t["default"]={name:"UploadAvatar",props:{field:{type:String,default:"avatar"},ki:{default:0},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noCircle:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"}},data:function(){var e=this,t=e.imgFormat,i=e.langType,a=e.langExt,s=e.width,r=e.height,o=!0,n=-1===["jpg","png"].indexOf(t)?"jpg":t,l=d[i]?d[i]:d.en,c=u[n];return e.imgFormat=n,a&&p()(l,a),"function"!=typeof FormData&&(o=!1),{mime:c,lang:l,isSupported:o,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:s/r,sourceImg:null,sourceImgUrl:"",createImgUrl:"",imgData:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:180},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,i=e.y+t.y+"px",a=e.x+t.x+"px";return{top:i,left:a,width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,t=this.height,i=this.ratio,a=this.sourceImgContainer,s=a,r=s.width/s.height,o=0,n=0,l=s.width,c=s.height,p=1;return i<r&&(p=s.height/t,l=s.height*i,o=(s.width-l)/2),i>r&&(p=s.width/e,c=s.width/i,n=(s.height-c)/2),{scale:p,x:o,y:n,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,i=t,a=e,s=a.width===i.width?a.width:(i.width-a.width)/2,r=a.height===i.height?a.height:(i.height-a.height)/2;return{width:s+"px",height:r+"px"}},previewStyle:function(){var e=this.width,t=this.height,i=this.ratio,a=this.previewContainer,s=a,r=s.width,o=s.height,n=r/o;return i<n&&(r=s.height*i),i>n&&(o=s.width/i),{width:r+"px",height:o+"px"}}},watch:{value:function(e){e&&1!==this.loading&&this.reset()}},methods:{ripple:function(e){v.effectRipple(e)},off:function(){var e=this;setTimeout(function(){e.$emit("input",!1),3===e.step&&2===e.loading&&e.setStep(1)},200)},setStep:function(e){var t=this;setTimeout(function(){t.step=e},200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this,i=t.lang,a=t.maxSize;return-1===e.type.indexOf("image")?(t.hasError=!0,t.errorMsg=i.error.onlyImg,!1):!(e.size/1024>a)||(t.hasError=!0,t.errorMsg=i.error.outOfSize+a+"kb",!1)},reset:function(){this.loading=0,this.hasError=!1,this.errorMsg="",this.progress=0},setSourceImg:function(e){var t=this,i=new FileReader;i.onload=function(){t.sourceImgUrl=i.result,t.startCrop()},i.readAsDataURL(e)},startCrop:function(){var n=this,l=n.width,c=n.height,p=n.ratio,d=n.scale,e=n.sourceImgUrl,t=n.sourceImgMasking,u=n.lang,h=t,g=new Image;g.src=e,g.onload=function(){var e=g.naturalWidth,t=g.naturalHeight,i=e/t,a=h.width,s=h.height,r=0,o=0;return e<l||t<c?(n.hasError=!0,n.errorMsg=u.error.lowestPx+l+"*"+c,!1):void(p>i&&(s=a/i,o=(h.height-s)/2),p<i&&(a=s*i,r=(h.width-a)/2),d.range=0,d.x=r,d.y=o,d.width=a,d.height=s,d.minWidth=a,d.minHeight=s,d.maxWidth=e*h.scale,d.maxHeight=t*h.scale,d.naturalWidth=e,d.naturalHeight=t,n.sourceImg=g,n.createImg(),n.setStep(2))}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=this.scale,s=i;s.mX=t.screenX,s.mY=t.screenY,s.x=a.x,s.y=a.y,s.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=i.on,s=i.mX,r=i.mY,o=i.x,n=i.y,l=this.scale,c=this.sourceImgMasking,p=c,d=t.screenX,u=t.screenY,h=o+(d-s),g=n+(u-r);a&&(0<h&&(h=0),0<g&&(g=0),h<p.width-l.width&&(h=p.width-l.width),g<p.height-l.height&&(g=p.height-l.height),l.x=h,l.y=g)},startZoomAdd:function(){function t(){if(a.zoomAddOn){var e=100<=a.range?100:++a.range;i.zoomImg(e),setTimeout(function(){t()},60)}}var i=this,a=i.scale;a.zoomAddOn=!0,t()},endZoomAdd:function(){this.scale.zoomAddOn=!1},startZoomSub:function(){function t(){if(a.zoomSubOn){var e=0>=a.range?0:--a.range;i.zoomImg(e),setTimeout(function(){t()},60)}}var i=this,a=i.scale;a.zoomSubOn=!0,t()},endZoomSub:function(){var e=this.scale;e.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,i=this.sourceImgMasking,a=this.sourceImgMouseDown,s=this.scale,r=s.maxWidth,o=s.maxHeight,n=s.minWidth,l=s.minHeight,c=s.width,p=s.height,d=s.x,u=s.y,h=s.range,g=i,m=g.width,v=g.height,f=n+(r-n)*e/100,w=l+(o-l)*e/100,y=m/2-f/c*(m/2-d),C=v/2-w/p*(v/2-u);0<y&&(y=0),0<C&&(C=0),y<m-f&&(y=m-f),C<v-w&&(C=v-w),s.x=y,s.y=C,s.width=f,s.height=w,s.range=e,setTimeout(function(){s.range===e&&t.createImg()},300)},createImg:function(e){var t=this,i=t.mime,a=t.sourceImg,s=t.scale,r=s.x,o=s.y,n=s.width,l=s.height,c=t.sourceImgMasking.scale,p=t.$refs.canvas,d=p.getContext("2d");e&&(t.sourceImgMouseDown.on=!1),d.clearRect(0,0,t.width,t.height),d.drawImage(a,r/c,o/c,n/c,l/c),t.createImgUrl=p.toDataURL(i)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,i=this.field,a=this.ki;this.$emit("crop-success",t,i,a),"string"==typeof e&&e?this.upload():this.off()},upload:function(){var a=this,t=this,i=this.lang,e=this.imgFormat,s=this.mime,r=this.url,o=this.params,n=this.headers,l=this.field,c=this.ki,p=this.createImgUrl;this.imgData=new FormData;var d=v.dataURItoBlob(p,s);this.imgData.append("file",d),this.imgData.append("user",this.userInfo._id||"");var u=function(e){e.lengthComputable&&(t.progress=100*Math.round(e.loaded)/e.total)};t.reset(),t.loading=1,t.setStep(3),new m.a(function(e,t){var i=new XMLHttpRequest;i.open("POST","/api/updateAvatar",!0),i.onreadystatechange=function(){200===this.status||201===this.status?e(n.imgname):t(this.status)},i.upload.addEventListener("progress",u,!1),"object"===("undefined"==typeof n?"undefined":g()(n))&&n&&h()(n).forEach(function(e){i.setRequestHeader(e,n[e])});({_id:a.userInfo._id||"",imgData:a.imgData});i.send(a.imgData)}).then(function(e){console.log(e),t.value&&(t.loading=2,t.reset(),a.$message({type:"success",message:"成功更新头像"}),t.$emit("crop-upload-success",e,l,c))},function(e){t.value&&(t.loading=3,t.reset(),t.hasError=!0,t.errorMsg=i.fail,t.$emit("crop-upload-fail",e,l,c))})}},created:function(){var t=this;document.addEventListener("keyup",function(e){t.value&&("Escape"===e.key||27===e.keyCode)&&t.off()})}}}}]);