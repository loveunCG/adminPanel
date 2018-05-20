webpackJsonp([1],Array(79).concat([function(e,t,n){"use strict";t.a={name:"app"}},function(e,t,n){"use strict";var a=n(232),s=n(233);t.a={name:"full",components:{AppHeader:s.d,Sidebar:s.e,AppAside:s.a,AppFooter:s.c,Breadcrumb:s.b},data:function(){return{nav:a.a.items}},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched}}}},function(e,t,n){"use strict";t.a={name:"c-aside"}},function(e,t,n){"use strict";t.a={props:{list:{type:Array,required:!0,default:function(){return[]}}},methods:{isLast:function(e){return e===this.list.length-1},showName:function(e){return e.meta&&e.meta.label&&(e=e.meta&&e.meta.label),e.name&&(e=e.name),e}}}},function(e,t,n){"use strict";t.a={props:{variant:{type:String}},computed:{classList:function(){return["callout",this.calloutVariant]},calloutVariant:function(){return this.variant?"callout-"+this.variant:""}}}},function(e,t,n){"use strict";t.a={name:"c-footer"}},function(e,t,n){"use strict";t.a={name:"c-header",methods:{sidebarToggle:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-hidden")},sidebarMinimize:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-minimized")},mobileSidebarToggle:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-mobile-show")},asideToggle:function(e){e.preventDefault(),document.body.classList.toggle("aside-menu-hidden")}}}},function(e,t,n){"use strict";var a=n(246),s=n(248),r=n(250),i=n(252),u=n(254),l=n(282),o=n(106),c=n(285),d=n(109),f=n(288);t.a={name:"sidebar",props:{navItems:{type:Array,required:!0,default:function(){return[]}}},components:{SidebarFooter:a.a,SidebarForm:s.a,SidebarHeader:r.a,SidebarMinimizer:i.a,SidebarNavDivider:u.a,SidebarNavDropdown:l.a,SidebarNavLink:o.a,SidebarNavTitle:c.a,SidebarNavItem:d.a,SidebarNavLabel:f.a},methods:{handleClick:function(e){e.preventDefault(),e.target.parentElement.classList.toggle("open")}}}},function(e,t,n){"use strict";t.a={name:"sidebar-footer"}},function(e,t,n){"use strict";t.a={name:"sidebar-form"}},function(e,t,n){"use strict";t.a={name:"sidebar-header"}},function(e,t,n){"use strict";t.a={name:"sidebar-minimizer",methods:{sidebarMinimize:function(){document.body.classList.toggle("sidebar-minimized")},brandMinimize:function(){document.body.classList.toggle("brand-minimized")}}}},function(e,t,n){"use strict";var a=n(19),s=n.n(a);t.a={name:"sidebar-nav-divider",props:{classes:{type:String,default:""}},computed:{classList:function(){return["divider"].concat(s()(this.itemClasses))},itemClasses:function(){return this.classes?this.classes.split(" "):""}}}},,,,,,,,,,,,,,function(e,t,n){"use strict";t.a={props:{name:{type:String,default:""},url:{type:String,default:""},icon:{type:String,default:""}},methods:{handleClick:function(e){e.preventDefault(),e.target.parentElement.classList.toggle("open")}}}},function(e,t,n){"use strict";var a=n(107),s=n(284),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";var a=n(19),s=n.n(a);t.a={name:"sidebar-nav-link",props:{name:{type:String,default:""},url:{type:String,default:""},icon:{type:String,default:""},badge:{type:Object,default:function(){}},variant:{type:String,default:""},classes:{type:String,default:""}},computed:{classList:function(){return["nav-link",this.linkVariant].concat(s()(this.itemClasses))},linkVariant:function(){return this.variant?"nav-link-"+this.variant:""},itemClasses:function(){return this.classes?this.classes.split(" "):[]},isExternalLink:function(){return"http"===this.url.substring(0,4)}}}},function(e,t,n){"use strict";var a=n(19),s=n.n(a);t.a={props:{name:{type:String,default:""},classes:{type:String,default:""},wrapper:{type:Object,default:function(){}}},computed:{classList:function(){return["nav-title"].concat(s()(this.itemClasses))},itemClasses:function(){return this.classes?this.classes.split(" "):""}}}},function(e,t,n){"use strict";var a=n(110),s=n(287),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";var a=n(19),s=n.n(a);t.a={name:"sidebar-nav-item",props:{classes:{type:String,default:""}},computed:{classList:function(){return["nav-item"].concat(s()(this.itemClasses))},itemClasses:function(){return this.classes?this.classes.split(" "):""}},methods:{hideMobile:function(){document.body.classList.contains("sidebar-mobile-show")&&document.body.classList.toggle("sidebar-mobile-show")}}}},function(e,t,n){"use strict";var a=n(19),s=n.n(a),r=n(109),i=n(106);t.a={name:"sidebar-nav-label",components:{SidebarNavItem:r.a,SidebarNavLink:i.a},props:{name:{type:String,default:""},url:{type:String,default:"#"},icon:{type:String,default:"fa fa-circle"},classes:{type:String,default:""},label:{type:Object,required:!0,default:function(){}}},computed:{classList:function(){return{navItem:["hidden-cn"].concat(s()(this.getClasses(this.classes))).join(" "),navLink:"nav-label",icon:[this.icon?this.icon:"fa fa-circle",this.label.variant?"text-"+this.label.variant:"",this.label.class?this.label.class:""].join(" ")}}},methods:{getClasses:function(e){return e?e.split(" "):[]}}}},function(e,t,n){"use strict";t.a={model:{prop:"checked",event:"change"},props:{value:{default:!0},uncheckedValue:{default:!1},checked:{default:!1},type:{type:String,default:"default"},variant:{type:String,default:""},pill:{type:Boolean,default:!1},on:{type:String,default:null},off:{type:String,default:null},size:{type:String,default:null}},computed:{classList:function(){return["switch",this.switchType,this.switchVariant,this.switchPill,this.switchSize]},switchType:function(){return this.type?"switch-"+this.type:"switch-default"},switchVariant:function(){return this.variant?"switch-"+this.variant:"switch-secondary"},switchPill:function(){return this.pill?"switch-pill":null},switchSize:function(){return this.size?"switch-"+this.size:""},isChecked:function(){return this.checked===this.value},isOn:function(){return!!this.on||null}},methods:{handleChange:function(e){var t=e.target.checked;this.$emit("change",t?this.value:this.uncheckedValue)}}}},function(e,t,n){"use strict";t.a={name:"dashboard"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(47),s=n(118),r=n(225),i=n(229);a.a.use(s.a),new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,,,,,,,,,,,,,,,,function(e,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,,,,,,,,,,,,function(e,t,n){"use strict";function a(e){n(226),n(227)}var s=n(79),r=n(228),i=n(4),u=a,l=Object(i.a)(s.a,r.a,r.b,!1,u,null,null);t.a=l.exports},function(e,t){},function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, scandir 'H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\vendor'\n    at Object.fs.readdirSync (fs.js:904:18)\n    at Object.getInstalledBinaries (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\lib\\extensions.js:128:13)\n    at foundBinariesList (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\lib\\errors.js:20:15)\n    at foundBinaries (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\lib\\errors.js:15:5)\n    at Object.module.exports.missingBinary (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\lib\\errors.js:45:5)\n    at module.exports (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\lib\\binding.js:15:30)\n    at Object.<anonymous> (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (module.js:652:30)\n    at runLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:170:18\n    at loadLoader (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\loadLoader.js:27:11)\n    at iteratePitchingLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (H:\\wamp64\\www\\pannel\\resources\\assets\\node_modules\\webpack\\lib\\NormalModule.js:275:15)")},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},s=[]},function(e,t,n){"use strict";var a=n(47),s=n(230),r=n(231),i=n(294);a.a.use(s.a),t.a=new s.a({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/dashboard",name:"Home",component:r.a,children:[{path:"dashboard",name:"Dashboard",component:i.a}]}]})},,function(e,t,n){"use strict";var a=n(80),s=n(293),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";t.a={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"}]}},function(e,t,n){"use strict";var a=n(234),s=n(236),r=(n(238),n(240)),i=n(242),u=n(244);n(291);n.d(t,"a",function(){return a.a}),n.d(t,"b",function(){return s.a}),n.d(t,"c",function(){return r.a}),n.d(t,"d",function(){return i.a}),n.d(t,"e",function(){return u.a})},function(e,t,n){"use strict";var a=n(81),s=n(235),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("aside",{staticClass:"aside-menu"})},s=[]},function(e,t,n){"use strict";var a=n(82),s=n(237),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"breadcrumb"},e._l(e.list,function(t,a){return n("li",{staticClass:"breadcrumb-item"},[e.isLast(a)?n("span",{staticClass:"active"},[e._v(e._s(e.showName(t)))]):n("router-link",{attrs:{to:t}},[e._v(e._s(e.showName(t)))])],1)}))},s=[]},function(e,t,n){"use strict";var a=n(83),s=n(239),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classList},[e._t("default")],2)},s=[]},function(e,t,n){"use strict";var a=n(84),s=n(241),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("span",[n("a",{attrs:{href:"http://coreui.io"}},[e._v("CoreUI")]),e._v(" © 2018 creativeLabs.")]),e._v(" "),n("span",{staticClass:"ml-auto"},[e._v("Powered by "),n("a",{attrs:{href:"http://coreui.io"}},[e._v("CoreUI")])])])}]},function(e,t,n){"use strict";var a=n(85),s=n(243),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header navbar"},[n("button",{staticClass:"navbar-toggler mobile-sidebar-toggler d-lg-none",attrs:{type:"button"},on:{click:e.mobileSidebarToggle}},[n("span",{staticClass:"navbar-toggler-icon"})]),e._v(" "),n("b-link",{staticClass:"navbar-brand",attrs:{to:"#"}}),e._v(" "),n("button",{staticClass:"navbar-toggler sidebar-toggler d-md-down-none mr-auto",attrs:{type:"button"},on:{click:e.sidebarToggle}},[n("span",{staticClass:"navbar-toggler-icon"})]),e._v(" "),n("button",{staticClass:"navbar-toggler aside-menu-toggler d-md-down-none",attrs:{type:"button"},on:{click:e.asideToggle}},[n("span",{staticClass:"navbar-toggler-icon"})])],1)},s=[]},function(e,t,n){"use strict";function a(e){n(245)}var s=n(86),r=n(290),i=n(4),u=a,l=Object(i.a)(s.a,r.a,r.b,!1,u,null,null);t.a=l.exports},function(e,t){},function(e,t,n){"use strict";var a=n(87),s=n(247),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},s=[]},function(e,t,n){"use strict";var a=n(88),s=n(249),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},s=[]},function(e,t,n){"use strict";var a=n(89),s=n(251),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},s=[]},function(e,t,n){"use strict";var a=n(90),s=n(253),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"sidebar-minimizer",attrs:{type:"button"},on:{click:function(t){e.sidebarMinimize(),e.brandMinimize()}}})},s=[]},function(e,t,n){"use strict";var a=n(91),s=n(281),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{class:e.classList})},s=[]},function(e,t,n){"use strict";var a=n(105),s=n(283),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav-item nav-dropdown",attrs:{tag:"li",to:e.url,disabled:""}},[n("div",{staticClass:"nav-link nav-dropdown-toggle",on:{click:e.handleClick}},[n("i",{class:e.icon}),e._v(" "+e._s(e.name))]),e._v(" "),n("ul",{staticClass:"nav-dropdown-items"},[e._t("default")],2)])},s=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternalLink?n("div",[n("a",{class:e.classList,attrs:{href:e.url}},[n("i",{class:e.icon}),e._v(" "+e._s(e.name)+"\n    "),e.badge&&e.badge.text?n("b-badge",{attrs:{variant:e.badge.variant}},[e._v(e._s(e.badge.text))]):e._e()],1)]):n("div",[n("router-link",{class:e.classList,attrs:{to:e.url}},[n("i",{class:e.icon}),e._v(" "+e._s(e.name)+"\n    "),e.badge&&e.badge.text?n("b-badge",{attrs:{variant:e.badge.variant}},[e._v(e._s(e.badge.text))]):e._e()],1)],1)},s=[]},function(e,t,n){"use strict";var a=n(108),s=n(286),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:e.classList},[e.wrapper&&e.wrapper.element?[n(e.wrapper.element,e._b({tag:"component"},"component",e.wrapper.attributes,!1),[e._v("\n      "+e._s(e.name)+"\n    ")])]:[e._v("\n    "+e._s(e.name)+"\n  ")]],2)},s=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{class:e.classList,on:{click:e.hideMobile}},[e._t("default")],2)},s=[]},function(e,t,n){"use strict";var a=n(111),s=n(289),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SidebarNavItem",{attrs:{classes:e.classList.navItem}},[n("a",{class:e.classList.navLink,attrs:{href:e.url}},[n("i",{class:e.classList.icon}),e._v(" "+e._s(e.name))])])},s=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("SidebarHeader"),e._v(" "),n("SidebarForm"),e._v(" "),n("nav",{staticClass:"sidebar-nav"},[n("div",{attrs:{slot:"header"},slot:"header"}),e._v(" "),n("ul",{staticClass:"nav"},[e._l(e.navItems,function(t,a){return[t.title?[n("SidebarNavTitle",{attrs:{name:t.name,classes:t.class,wrapper:t.wrapper}})]:t.divider?[n("SidebarNavDivider",{attrs:{classes:t.class}})]:t.label?[n("SidebarNavLabel",{attrs:{name:t.name,url:t.url,icon:t.icon,label:t.label,classes:t.class}})]:[t.children?[n("SidebarNavDropdown",{attrs:{name:t.name,url:t.url,icon:t.icon}},[e._l(t.children,function(a,s){return[a.children?[n("SidebarNavDropdown",{attrs:{name:a.name,url:a.url,icon:a.icon}},e._l(a.children,function(e,a){return n("li",{staticClass:"nav-item"},[n("SidebarNavLink",{attrs:{name:e.name,url:e.url,icon:e.icon,badge:e.badge,variant:t.variant}})],1)}))]:[n("SidebarNavItem",{attrs:{classes:t.class}},[n("SidebarNavLink",{attrs:{name:a.name,url:a.url,icon:a.icon,badge:a.badge,variant:t.variant}})],1)]]})],2)]:[n("SidebarNavItem",{attrs:{classes:t.class}},[n("SidebarNavLink",{attrs:{name:t.name,url:t.url,icon:t.icon,badge:t.badge,variant:t.variant}})],1)]]]})],2),e._v(" "),e._t("default")],2),e._v(" "),n("SidebarFooter"),e._v(" "),n("SidebarMinimizer")],1)},s=[]},function(e,t,n){"use strict";var a=n(112),s=n(292),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.classList},[n("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{value:e.value,checked:e.isChecked},on:{change:e.handleChange}}),e._v(" "),e.isOn?[n("span",{staticClass:"switch-label",attrs:{"data-on":e.on,"data-off":e.off}})]:[n("span",{staticClass:"switch-label"})],e._v(" "),n("span",{staticClass:"switch-handle"})],2)},s=[]},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("AppHeader"),e._v(" "),n("div",{staticClass:"app-body"},[n("Sidebar",{attrs:{navItems:e.nav}}),e._v(" "),n("main",{staticClass:"main"},[n("breadcrumb",{attrs:{list:e.list}}),e._v(" "),n("div",{staticClass:"container-fluid"},[n("router-view")],1)],1),e._v(" "),n("AppAside")],1),e._v(" "),n("AppFooter")],1)},s=[]},function(e,t,n){"use strict";var a=n(113),s=n(295),r=n(4),i=Object(r.a)(a.a,s.a,s.b,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s});var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n("p",{staticClass:"text-info"},[e._v("Hello World")])])}]}]),[114]);
//# sourceMappingURL=app.5c219605a9ba7f6b6985.js.map