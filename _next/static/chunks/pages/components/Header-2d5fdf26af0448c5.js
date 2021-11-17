(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{6927:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Header",function(){return r(7476)}])},3496:function(e,n,r){"use strict";r.d(n,{Il:function(){return j},au:function(){return f},d0:function(){return x},cy:function(){return m},h4:function(){return y},Jg:function(){return h}});var t=r(2322),o=r(4017),i=(0,o.createStyleSheet)((function(e,n){return{root:{display:"flex",justifyContent:"center"},box:{backgroundColor:n.color||e.palette.primary.main,width:200,height:200}}}),{key:"DefaultStyledBox"});function c(e){var n=i(e).classes;return(0,t.jsx)("div",{className:n.root,children:(0,t.jsx)("div",{className:n.box})})}function s(e){var n=(0,o.useTheme)(),r={backgroundColor:e.color||n.palette.primary.main,width:200,height:200};return(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,t.jsx)("div",{style:r})})}function a(e){var n={backgroundColor:(0,o.useTheme)().palette[e.color][e.colorType],color:"light"===e.colorType?"#000000":"#FFFFFF",border:"1px solid",textAlign:"center",width:"236px",margin:"7px",padding:"16px"};return(0,t.jsx)("button",{type:"button",style:n,children:"".concat(e.color,".").concat(e.colorType)})}var l=r(8005);function d(){return(0,t.jsx)(l.Header,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Header Component"})}var u=(0,o.createTheme)(),p=(0,o.createTheme)({palette:{primary:{main:"rebeccapurple"}}});function m(e){var n=e.color;return(0,t.jsx)(o.ThemeProvider,{theme:u,children:(0,t.jsx)(c,{color:n})})}function h(e){var n=e.color;return(0,t.jsx)(o.ThemeProvider,{theme:u,children:(0,t.jsx)(s,{color:n})})}function x(){return(0,t.jsx)(o.ThemeProvider,{theme:p,children:(0,t.jsx)(c,{})})}function f(){return(0,t.jsxs)(o.ThemeProvider,{theme:u,children:[(0,t.jsx)(c,{}),(0,t.jsx)("br",{}),(0,t.jsx)(o.ThemeProvider,{theme:p,children:(0,t.jsx)(c,{})})]})}function j(e){var n=e.color,r=e.colorType;return(0,t.jsx)(o.ThemeProvider,{theme:u,children:(0,t.jsx)(a,{color:n,colorType:r})})}function y(){return(0,t.jsx)(o.ThemeProvider,{theme:u,children:(0,t.jsx)(d,{})})}},7476:function(e,n,r){"use strict";r.r(n);var t=r(2322),o=r(4770),i=r.n(o),c=r(9083),s=r(7778),a=r(3496),l=function(e){return(0,c.withSSG)(i()({filename:"Header.mdx",route:"/components/Header",meta:{},pageMap:[{name:"colors",route:"/colors"},{name:"components",children:[{name:"Button",route:"/components/Button"},{name:"Header",route:"/components/Header"},{name:"Paper",route:"/components/Paper"},{name:"Text",route:"/components/Text"}],route:"/components"},{name:"icons",route:"/icons"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction",styling:"Styling"}},{name:"styling",route:"/styling"}]},s.Z))(e)};n.default=function(e){var n=void 0===e?{}:e,r=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},n.components),o=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{children:"Header Component"}),"\n","\n",(0,t.jsx)(r.p,{children:"This component will provide you the header wrapper."}),"\n",(0,t.jsx)("div",{style:{border:"1px solid black",margin:"50px 0 50px 0"},children:(0,t.jsx)(a.h4,{})}),"\n",(0,t.jsx)(r.p,{children:"It will be possible to provide 2 styles by props. These can be bgColor or position."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:'import { Header } from \'@platzily-ui/components\';\n\nexport default function HeaderComponent() {\n  return (\n    <Header bgColor="blue" position="static">\n      Header Component\n    </Header>\n  );\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"You can provide with attribute style styles to the component like that and also include new components inside the tag:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import { Header } from '@platzily-ui/components';\n\nexport default function ComponentHeader() {\n  return (\n    <Header style={{ display: flex }}>\n      New Header components\n    </Header>);\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"If you want to provide many props, is possible to create an object and provide the object inside the style attribute."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"import { Header } from '@platzily-ui/components';\n\nexport default function ComponentHeader() {\n  const headerStyle = {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  };\n\n  return (\n    <Header style={headerStyle}>\n      New Header components\n    </Header>);\n}\n"})})]});return l?(0,t.jsx)(l,Object.assign({},n,{children:o})):o}}},function(e){e.O(0,[774,513,413,137,888,179],(function(){return n=6927,e(e.s=n);var n}));var n=e.O();_N_E=n}]);