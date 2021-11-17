"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{7778:function(e,t,r){var n=r(2322),o=r(2784);t.Z={github:"https://github.com/platzily/platzily-ui",docsRepositoryBase:"https://github.com/platzily/platzily-ui/blob/main",titleSuffix:"",nextLinks:!0,prevLinks:!0,search:!0,customSearch:null,darkMode:!0,footer:!0,footerText:"MIT ".concat((new Date).getFullYear()," \xa9 Platzily."),footerEditLink:"",logo:(0,n.jsx)("p",{children:"Platzily UI"}),head:(0,n.jsx)(o.Fragment,{children:(0,n.jsx)("title",{children:"Platzily UI - Docs"})}),unstable_faviconGlyph:"\ud83d\udcda"}},4236:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1260)),a=n(r(2220)),c=r(2784),i=r(4017),l=r(3980),u=r(2322),f=["variant","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?p(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}var d=(0,i.createStyleSheet)((function(e){return{contained:{backgroundColor:e.palette.secondary.main,borderRadius:5,paddingTop:10,paddingLeft:15,paddingBottom:9,paddingRight:15,textAlign:"center",fontWeight:500,fontSize:"0.875rem",textTransform:"uppercase",lineHeight:"1rem",letterSpacing:"0.02em",color:e.palette.primary.main,"&:hover":{color:e.palette.neutral.light,backgroundColor:(0,i.alpha)(e.palette.secondary.main,.6)},"&:focus":{backgroundColor:(0,i.alpha)(e.palette.secondary.main,.6)},"&:disabled":{backgroundColor:e.palette.neutral.secondary,color:e.palette.neutral.tertiary,cursor:"not-allowed"}},outlined:{backgroundColor:"transparent",borderRadius:5,borderWidth:1.5,borderStyle:"solid",borderColor:e.palette.primary.main,paddingTop:10,paddingLeft:15,paddingBottom:9,paddingRight:15,textAlign:"center",fontWeight:500,fontSize:"0.875rem",textTransform:"uppercase",lineHeight:"1rem",letterSpacing:"0.02em",color:e.palette.primary.main,"&:hover":{backgroundColor:(0,i.alpha)(e.palette.secondary.main,.6)},"&:focus":{backgroundColor:e.palette.neutral.light,borderColor:e.palette.secondary.main},"&:disabled":{backgroundColor:"transparent",color:e.palette.neutral.secondary,borderColor:e.palette.neutral.secondary,cursor:"not-allowed"}},text:{backgroundColor:"transparent",textAlign:"center",paddingTop:10,paddingLeft:15,paddingBottom:9,paddingRight:15,fontWeight:700,fontSize:"1rem",lineHeight:"1rem",letterSpacing:"0.02em",textTransform:"uppercase",textDecoration:"underline",textDecorationColor:e.palette.secondary.main,color:e.palette.secondary.main,"&:hover":{color:e.palette.info.main,textDecorationColor:e.palette.info.main},"&:focus":{color:e.palette.primary.main,textDecorationColor:e.palette.primary.main},"&:disabled":{color:e.palette.neutral.secondary,textDecorationColor:e.palette.neutral.secondary,cursor:"not-allowed"}}}}),{key:"button"}),b=(0,c.forwardRef)((function(e,t){var r=e.variant,n=e.className,o=(0,a.default)(e,f),c=d(e),i=c.classes,l=c.cx;return(0,u.jsx)("button",s(s({ref:t,type:"button"},o),{},{className:l(i[r],n)}))}));b.propTypes={className:l.PropTypes.string,variant:l.PropTypes.oneOf(["contained","outlined","text"])},b.defaultProps={variant:"contained"};var y=b;t.default=y},5125:function(e,t,r){var n=r(4859)(r(4236));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},5202:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1260)),a=n(r(2220)),c=r(2784),i=r(4017),l=n(r(3980)),u=r(2322),f=["bgColor","position","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=(0,i.createStyleSheet)((function(e,t){var r=t.bgColor,n=t.position;return{header:{backgroundColor:r||e.palette.neutral.tertiary,position:n,width:"100%",height:60,left:0,top:0,margin:0}}}),{key:"headerWrapper"}),d=(0,c.forwardRef)((function(e,t){e.bgColor,e.position;var r=e.className,n=(0,a.default)(e,f),c=s(e),i=c.classes,l=c.cx;return(0,u.jsx)("header",function(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?p(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}({ref:t,className:l(i.header,r)},n))}));d.propTypes={bgColor:l.default.string,className:l.default.string,position:l.default.oneOf(["static","relative","absolute","fixed","sticky","unset"])},d.defaultProps={position:"unset"};var b=d;t.default=b},3198:function(e,t,r){var n=r(4859)(r(5202));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},5704:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1260)),a=n(r(2220)),c=r(2784),i=r(4017),l=n(r(3980)),u=r(2322),f=["elevation","variant","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?p(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}var d=function(e,t){var r=t.split("-"),n=e.palette[r[0]];return n?n[r[1]||"main"]:t},b=(0,i.createStyleSheet)((function(e,t){var r=t.color,n=t.elevation;return{paper:{backgroundColor:d(e,r||"neutral-tertiary"),padding:e.spacing(),borderRadius:5},outlined:{border:1,borderStyle:"solid",borderColor:e.palette.neutral.dark},boxShadow:{boxShadow:e.elevations[n]}}}),{key:"Paper"}),y=(0,c.forwardRef)((function(e,t){var r,n=e.elevation,c=e.variant,i=e.className,l=(0,a.default)(e,f),p=b(e),d=p.classes,y=p.cx;return(0,u.jsx)("div",s(s({},l),{},{ref:t,className:y((r={},(0,o.default)(r,d.outlined,"outlined"===c),(0,o.default)(r,d.boxShadow,0<=n),(0,o.default)(r,d.paper,!0),(0,o.default)(r,i,!!i),r))}))}));y.propTypes={className:l.default.string,elevation:l.default.oneOf([0,1,2,3,4,5,6,7]),variant:l.default.string},y.defaultProps={className:"",elevation:0,variant:void 0};var g=y;t.default=g},2858:function(e,t,r){var n=r(4859)(r(5704));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},8483:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1260)),a=n(r(2220)),c=r(2784),i=r(4017),l=n(r(3980)),u=r(2322),f=["children","size","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?p(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}var d=(0,i.createStyleSheet)((function(){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentcolor",flexShrink:0},xs:{fontSize:"0.5rem"},sm:{fontSize:"0.75rem"},md:{fontSize:"1rem"},lg:{fontSize:"1.5rem"},xl:{fontSize:"2rem"},xxl:{fontSize:"2.5rem"}}})),b=(0,c.forwardRef)((function(e,t){var r=e.children,n=e.size,o=e.className,c=(0,a.default)(e,f),i=d(e),l=i.cx,p=i.classes;return(0,u.jsx)("svg",s(s({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},c),{},{className:l(p.root,p[n],o),children:r}))}));b.propTypes={children:l.default.node.isRequired,className:l.default.string,size:l.default.oneOf(["xs","sm","md","lg","xl","xxl"])},b.defaultProps={size:"md",className:""};var y=b;t.default=y},5848:function(e,t,r){var n=r(4859)(r(8483));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},5584:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(1260)),a=n(r(2220)),c=r(2784),i=r(4017),l=n(r(3980)),u=["component","variant","className"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?f(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}var s=function(e,t){var r=t.split("-"),n=e.palette[r[0]];return n?n[n[1]||"main"]:t},d=(0,i.createStyleSheet)((function(e,t){return{title1:{fontWeight:700,fontSize:"2rem",lineHeight:"2.5625rem",color:s(e,t.color||"primary")},title2:{fontWeight:700,fontSize:"1.75rem",lineHeight:"2.5625rem",color:s(e,t.color||"primary")},title3:{fontWeight:600,fontSize:"1.125rem",lineHeight:"2rem",color:s(e,t.color||"primary")},intro:{fontWeight:"normal",fontSize:"1.125rem",lineHeight:"1.6875rem",color:s(e,t.color||"neutral-dark")},paragraph:{fontWeight:"normal",fontSize:"1rem",lineHeight:"21px",color:s(e,t.color||"neutral-dark")},small:{fontWeight:"normal",fontSize:"0.75rem",lineHeight:"1rem",color:s(e,t.color||"neutral-dark")},link:{fontWeight:"normal",fontSize:"0.8125rem",lineHeight:"1rem",color:e.palette.tertiary.main,"&:hover":{color:e.palette.secondary.main}},tag:{fontWeight:500,fontSize:"0.625rem",lineHeight:"1rem",textTransform:"uppercase",color:s(e,t.color||"neutral-dark")},smalltag:{fontWeight:700,fontSize:"0.5rem",lineHeight:"1rem",color:s(e,t.color||"neutral-dark")}}}),{key:"text"}),b=(0,c.forwardRef)((function(e,t){var r=e.component,n=e.variant,o=e.className,i=(0,a.default)(e,u),l=d(e),f=l.classes,s=l.cx;return(0,c.createElement)(r,p(p({},i),{},{ref:t,className:s(f[n],o)}))}));b.propTypes={className:l.default.string,component:l.default.oneOf(["h1","h2","h3","h4","h5","h6","a","span","textarea","p"]),variant:l.default.oneOf(["title1","title2","title3","intro","paragraph","small","link","tag","smalltag"])},b.defaultProps={component:"p",variant:"paragraph"};var y=b;t.default=y},308:function(e,t,r){var n=r(4859)(r(5584));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},8005:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"Paper",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"SvgIcon",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return a.default}});var o=n(r(2858)),a=n(r(308)),c=n(r(3198)),i=n(r(5125)),l=n(r(5848))},3046:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var o=n(r(1260)),a=r(2784),c=n(r(3980)),i=r(468),l=n(r(5578)),u=n(r(7835)),f=r(2322);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?p(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function d(e){var t=e.children,r=e.theme,n=(0,u.default)(),o="Object"===(0,i.getTypeOf)(r)?JSON.stringify(r):r,c="Object"===(0,i.getTypeOf)(n)?JSON.stringify(n):n,p=(0,a.useMemo)((function(){return null===n?r:function(e,t){return"function"==typeof t?t(e):s(s({},e),t)}(n,r)}),[o,c]);return(0,f.jsx)(l.default.Provider,{value:p,children:t})}d.propTypes={children:c.default.node,theme:c.default.oneOfType([c.default.object,c.default.func]).isRequired}},7318:function(e,t,r){var n=r(4859)(r(3046));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},6094:function(e,t){function r(e){if(e.type)return e;if("#"===e.charAt(0))return r(function(e){e=e.substr(1);var t=new RegExp(".{1,".concat(6<=e.length?2:1,"}"),"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map((function(e){return e+e}))),r?"rgb".concat(4===r.length?"a":"","(").concat(r.map((function(e,t){var r=Math.round;return 3>t?parseInt(e,16):r(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new{message:"Error: ".concat(e," no un supported")};var o,a=e.substring(t+1,e.length-1);if("color"!==n)a=a.split(",");else if(o=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].substr(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o))throw new{message:"Error: ".concat(o," no un supported")};return{type:n,values:a=a.map((function(e){return parseFloat(e)})),colorSpace:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.alpha=function(e,t){return e=r(e),t=function(e){var t=Math.min,r=Math.max,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return t(r(1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e),n)}(t),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),e.values[3]="color"===e.type?"/".concat(t):t,function(e){var t=e.type,r=e.colorSpace,n=e.values;return-1===t.indexOf("rgb")?-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")):n=n.map((function(e,t){return 3>t?parseInt(e,10):e})),n=-1===t.indexOf("color")?"".concat(n.join(", ")):"".concat(r," ").concat(n.join(" ")),"".concat(t,"(").concat(n,")")}(e)}},9744:function(e,t,r){var n=r(6094);Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach((function(e){"default"===e||"__esModule"===e||e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},2905:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=t.key,n=(0,o.default)({key:r?r.toLowerCase():"platzily-ui"}),c=n.css,i=n.cx,l="function"==typeof e?e:function(){return e};return function(e){var t=(0,a.default)(),r=l(t,e),n={};return Object.keys(r).forEach((function(e){n[e]=c(r[e])})),{classes:n,theme:t,cx:i}}};var o=n(r(4201)),a=n(r(1407))},8448:function(e,t,r){var n=r(4859)(r(2905));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},8548:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:a.theme,r=u({},t);return r.palette=(0,c.default)(t.palette,"palette",f),e.spacing&&(r=(0,i.default)(r)),u(u({},a.theme),r)};var o=n(r(1260)),a=r(4089),c=n(r(2342)),i=n(r(7717));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?l(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}var f=["primary","secondary","tertiary","success","warning","info","error","neutral"]},2342:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n=i({},e);return r.forEach((function(r){n[r]=i(i({},a.theme[t][r]),e[r])})),n};var o=n(r(1260)),a=r(4089);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?c(Object(t),!0).forEach((function(r){(0,o.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}},7717:function(e,t,r){var n=r(4089);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.spacing=(0,n.createSpacing)(e.spacing),e}},477:function(e,t,r){var n=r(4859)(r(8548));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},4017:function(e,t,r){var n=r(4859),o={createStyleSheet:!0,createTheme:!0,ThemeProvider:!0,useTheme:!0};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ThemeProvider",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"createStyleSheet",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"createTheme",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"useTheme",{enumerable:!0,get:function(){return l.default}});var a=n(r(8448)),c=n(r(477)),i=n(r(7318)),l=n(r(7835)),u=r(9744);Object.keys(u).forEach((function(e){"default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(o,e)||e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}))},4089:function(e,t,r){var n=r(4319);Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach((function(e){"default"===e||"__esModule"===e||e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},4319:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.createSpacing=t.DEFAULT_SPACING=void 0;t.DEFAULT_SPACING=5;var r=function(e){return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return(e||5)*t}};t.createSpacing=r;var n={palette:{primary:{main:"#19213c",secondary:"#454C62",tertiary:"#717788"},secondary:{main:"#97c343",secondary:"#AACE68",tertiary:"#BCD88D"},tertiary:{main:"#2F8CCC",secondary:"#56A2D5",tertiary:"#7EB7DF"},success:{main:"#43B839",secondary:"#075500"},warning:{main:"#C3B643",secondary:"#5C4E00"},info:{main:"#1198FF",secondary:"#2F8CCC"},error:{main:"#C34343",secondary:"#610002"},neutral:{main:"#273B46",secondary:"#7E95A5",tertiary:"#F4F8FB",light:"#FFFFFF",dark:"#000000"}},spacing:r(),radius:5,elevations:["0 0px 4px ".concat("rgba(0, 0, 0, 0.25)"),"0 1px 4px ".concat("rgba(0, 0, 0, 0.25)"),"0 2px 4px ".concat("rgba(0, 0, 0, 0.25)"),"0 3px 6px ".concat("rgba(0, 0, 0, 0.25)"),"0 4px 8px ".concat("rgba(0, 0, 0, 0.25)"),"0 6px 12px ".concat("rgba(0, 0, 0, 0.25)"),"0 8px 16px ".concat("rgba(0, 0, 0, 0.25)"),"0 12px 24px ".concat("rgba(0, 0, 0, 0.25)")]};t.theme=n},5578:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(2784).createContext)(null);t.default=n},7835:function(e,t,r){var n=r(4859)(r(1407));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}})},1407:function(e,t,r){var n=r(4859);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.useContext)(a.default)};var o=r(2784),a=n(r(5578))},468:function(e,t,r){var n=r(7191);Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach((function(e){"default"===e||"__esModule"===e||e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},7191:function(e,t,r){var n=r(3872);Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach((function(e){"default"===e||"__esModule"===e||e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}))},3872:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTypeOf=void 0;t.getTypeOf=function(e){return Object.prototype.toString.call(e).match(/\[object (.*)\]/)[1]}}}]);