(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{6017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styling",function(){return t(4597)}])},8734:function(e,n,t){"use strict";t.d(n,{v:function(){return i}});var r=t(2322),o=t(1468),s=t.n(o);function i(e){var n=e.children;return(0,r.jsx)(s(),{type:"warning",emoji:"\ud83d\udea8",children:n})}},3496:function(e,n,t){"use strict";t.d(n,{Il:function(){return j},au:function(){return y},d0:function(){return x},cy:function(){return u},h4:function(){return g},Jg:function(){return m}});var r=t(2322),o=t(4017),s=(0,o.createStyleSheet)((function(e,n){return{root:{display:"flex",justifyContent:"center"},box:{backgroundColor:n.color||e.palette.primary.main,width:200,height:200}}}),{key:"DefaultStyledBox"});function i(e){var n=s(e).classes;return(0,r.jsx)("div",{className:n.root,children:(0,r.jsx)("div",{className:n.box})})}function l(e){var n=(0,o.useTheme)(),t={backgroundColor:e.color||n.palette.primary.main,width:200,height:200};return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)("div",{style:t})})}function a(e){var n={backgroundColor:(0,o.useTheme)().palette[e.color][e.colorType],color:"light"===e.colorType?"#000000":"#FFFFFF",border:"1px solid",textAlign:"center",width:"236px",margin:"7px",padding:"16px"};return(0,r.jsx)("button",{type:"button",style:n,children:"".concat(e.color,".").concat(e.colorType)})}var c=t(8005);function h(){return(0,r.jsx)(c.Header,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Header Component"})}var d=(0,o.createTheme)(),p=(0,o.createTheme)({palette:{primary:{main:"rebeccapurple"}}});function u(e){var n=e.color;return(0,r.jsx)(o.ThemeProvider,{theme:d,children:(0,r.jsx)(i,{color:n})})}function m(e){var n=e.color;return(0,r.jsx)(o.ThemeProvider,{theme:d,children:(0,r.jsx)(l,{color:n})})}function x(){return(0,r.jsx)(o.ThemeProvider,{theme:p,children:(0,r.jsx)(i,{})})}function y(){return(0,r.jsxs)(o.ThemeProvider,{theme:d,children:[(0,r.jsx)(i,{}),(0,r.jsx)("br",{}),(0,r.jsx)(o.ThemeProvider,{theme:p,children:(0,r.jsx)(i,{})})]})}function j(e){var n=e.color,t=e.colorType;return(0,r.jsx)(o.ThemeProvider,{theme:d,children:(0,r.jsx)(a,{color:n,colorType:t})})}function g(){return(0,r.jsx)(o.ThemeProvider,{theme:d,children:(0,r.jsx)(h,{})})}},4597:function(e,n,t){"use strict";t.r(n);var r=t(2322),o=t(4770),s=t.n(o),i=t(9083),l=t(7778),a=t(3496),c=t(8734),h=function(e){return(0,i.withSSG)(s()({filename:"styling.mdx",route:"/styling",meta:{},pageMap:[{name:"colors",route:"/colors"},{name:"components",children:[{name:"Button",route:"/components/Button"},{name:"Header",route:"/components/Header"},{name:"Paper",route:"/components/Paper"},{name:"Text",route:"/components/Text"}],route:"/components"},{name:"icons",route:"/icons"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Introduction",styling:"Styling"}},{name:"styling",route:"/styling"}]},l.Z))(e)};n.default=function(e){var n=void 0===e?{}:e,t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",a:"a"},n.components),o=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Platzily UI Styling API"}),"\n",(0,r.jsx)(t.p,{children:"Styling API provide the user a way to style its components, also Platzily UI components are styled using @platzily-ui/styling."}),"\n",(0,r.jsx)(t.h2,{children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"To install and save in your package.json dependencies, run:"}),"\n",(0,r.jsx)(t.p,{children:"With npm"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install @platzily-ui/styling\n"})}),"\n",(0,r.jsx)(t.p,{children:"With yarn"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @platzily-ui/styling\n"})}),"\n",(0,r.jsx)(t.h2,{children:"Getting started"}),"\n",(0,r.jsxs)(t.p,{children:["First create a theme, you can use the ",(0,r.jsx)(t.code,{children:"createTheme"})," helper function."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { createTheme } from '@platzily-ui/styling';\n\nexport const theme = createTheme();\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"createTheme"})," could receive a not complemeted ",(0,r.jsx)(t.code,{children:"Theme Object"})," as a param, this way the user could customize the theme."]}),"\n",(0,r.jsx)(t.p,{children:"If no theme is passed the function will use the default theme, is no option is passed the function will use its default value."}),"\n",(0,r.jsx)(t.p,{children:"The default theme looks like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:"  {\n    palette: {\n      primary: {\n        main: '#19213c',\n        secondary: '#454C62',\n        tertiary: '#717788'\n      },\n      secondary: {\n        main: '#97c343',\n        secondary: '#AACE68',\n        tertiary: '#BCD88D'\n      },\n      tertiary: {\n        main: '#2F8CCC',\n        secondary: '#56A2D5',\n        tertiary: '#7EB7DF'\n      },\n      success: {\n        main: '#43B839',\n        secondary: '#075500'\n      },\n      warning: {\n        main: '#C3B643',\n        secondary: '#5C4E00'\n      },\n      info: {\n        main: '#1198FF',\n        secondary: '#2F8CCC'\n      },\n      error: {\n        main: '#C34343',\n        secondary: '#610002'\n      },\n      neutral: {\n        main: '#273B46',\n        secondary: '#7E95A5',\n        tertiary: '#F4F8FB',\n        light: '#FFFFFF',\n        dark: '#000000',\n      },\n    },\n    spacing: 5,\n    radius: 5,\n    elevations: [\n      '0 0px 4px rgba(0, 0, 0, 0.25)',\n      '0 1px 4px rgba(0, 0, 0, 0.25)',\n      '0 2px 4px rgba(0, 0, 0, 0.25)',\n      '0 3px 6px rgba(0, 0, 0, 0.25)',\n      '0 4px 8px rgba(0, 0, 0, 0.25)',\n      '0 6px 12px rgba(0, 0, 0, 0.25)',\n      '0 8px 16px rgba(0, 0, 0, 0.25)',\n      '0 12px 24px rgba(0, 0, 0, 0.25)',\n    ]\n  }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["After the theme is created you need to wrap your application using the ",(0,r.jsx)(t.code,{children:"ThemeProvider"})," and pass the theme as a prop"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { ThemeProvider } from '@platzily-ui/styling';\nimport App from './App';\nimport theme from './theme';\n\nexport default function Root() {\n  return (\n    <ThemeProvider theme={theme}>\n      <App/>\n    </ThemeProvider>\n  );\n}\n\n"})}),"\n",(0,r.jsx)(t.p,{children:"After this is done you're ready to generate styles."}),"\n",(0,r.jsxs)(t.p,{children:["To generate styles use the ",(0,r.jsx)(t.code,{children:"createStyleSheet"})," API."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { createStyleSheet } from '@platzily-ui/styling';\n\nconst useStyleSheet = createStyleSheet((theme, props) => {\n  return {\n    root: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    box: {\n      backgroundColor: props.color || theme.palette.primary.main,\n      width: 200,\n      height: 200\n    }\n  };\n}, { key: 'StyledBox' });\n\nexport default function StyledBox(props) {\n  const { classes } = useStyleSheet(props);\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.box}/>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"After that you just have to call your component:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<StyledBox/>\n"})}),"\n",(0,r.jsx)(t.p,{children:"The code above will result in:"}),"\n",(0,r.jsx)(a.cy,{}),"\n",(0,r.jsx)(t.p,{children:"You could compose using the props approach like this"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<StyledBox color="pink"/>\n'})}),"\n",(0,r.jsx)(t.p,{children:"The code above will result in:"}),"\n",(0,r.jsx)(a.cy,{color:"pink"}),"\n",(0,r.jsx)(t.h2,{children:"createStyleSheet"}),"\n",(0,r.jsx)(t.p,{children:"This is the principal function you'll be using to generate styles. It receive two params"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"styles"}),": This is a function or an object, if a function is used it receives the global theme and the props as parameters. It should always return an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"config"}),": The config object receive a unique key called key, it is used to prepend a string to the class resulting of the styles object, if no config object is pased ",(0,r.jsx)(t.code,{children:"platzily-ui"})," will be used."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"A createStyleSheet invoke looks like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { createStyleSheet } from '@platzily-ui/styling';\n\n// Look how the styles function receive theme and props, the props are available if you\n// pass the component props to the useStyleSheet function\nconst useStyleSheet = createStyleSheet((theme, props) => ({\n  // This is a className\n  root: {\n    // Here goes the css properties\n    display: 'flex',\n    justifyContent: 'center'\n  },\n  // Another className\n  box: {\n    // More css properties\n    backgroundColor: props.color || theme.palette.primary.main,\n    width: 200,\n    height: 200\n  }\n  // If this param is not passed it will be { key: 'platzily-ui' }\n  // nothing wrong with it unless you need to achieve styles encapsulation\n}), { key: 'keyToPrepend' });\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then inside the component you use it like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"export const MyComponent(props) {\n  const { classes } = useStyleSheet()\n  return (\n    <div className={classes.root}>\n      <div className={classes.box}/>\n    </div>\n  )\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note how the property classes is inside an object, this because actually useStyleSheet returns an object with three keys"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"classes"}),": The classes used in the object of the styles passed to createStyleSheet."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"theme"}),": The global theme."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"cx"}),": A helper function to mix classNames, similar to ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/clsx",children:"clsx"})," and ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/classnames",children:"classnames"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{children:"useTheme"}),"\n",(0,r.jsxs)(t.p,{children:["Sometimes you'll not need the useStyleSheet function resultin from createStyleSheet, but you'll have to access the global theme.\nA exposed way to do this is with the ",(0,r.jsx)(t.code,{children:"useTheme"})," hook."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"export default function StyledBox(props) {\n  const theme = useTheme();\n\n  const rootStyle = {\n    display: 'flex',\n    justifyContent: 'center'\n  };\n\n  const boxStyle = {\n    backgroundColor: props.color || theme.palette.primary.main,\n    width: 200,\n    height: 200\n  };\n\n  return (\n    <div style={rootStyle}>\n      <div style={boxStyle} />\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"After that you just have to call your component:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<StyledBox/>\n"})}),"\n",(0,r.jsx)(t.p,{children:"The code above will result in:"}),"\n",(0,r.jsx)(a.Jg,{}),"\n",(0,r.jsx)(t.p,{children:"You could compose using the props approach like this"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'<StyledBox color="pink"/>\n'})}),"\n",(0,r.jsx)(t.p,{children:"The code above will result in:"}),"\n",(0,r.jsx)(a.Jg,{color:"pink"}),"\n",(0,r.jsx)(t.h2,{children:"Custom theme"}),"\n",(0,r.jsx)(t.p,{children:"You could create your own custom theme like this"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { createTheme } from '@platzily-ui/styling';\n\nexport const theme = createTheme({\n  palette: {\n    primary: {\n      main: 'rebeccapurple'\n    }\n  }\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then inject it through the Provider"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { ThemeProvider } from '@platzily-ui/styling';\nimport App from './App';\nimport theme from './theme';\n\nexport default function Root() {\n  return (\n    <ThemeProvider theme={theme}>\n      <App/>\n    </ThemeProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then when you create your component"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { createStyleSheet } from '@platzily-ui/styling';\n\nconst useStyleSheet = createStyleSheet((theme, props) => {\n  return {\n    root: {\n      display: 'flex',\n      justifyContent: 'center'\n    },\n    box: {\n      backgroundColor: props.color || theme.palette.primary.main,\n      width: 200,\n      height: 200\n    }\n  };\n}, { key: 'StyledBox' });\n\nexport default function StyledBox(props) {\n  const { classes } = useStyleSheet(props);\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.box}/>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"And finally call it"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"<StyledBox/>\n"})}),"\n",(0,r.jsx)(t.p,{children:"It will look like this"}),"\n",(0,r.jsx)(a.d0,{}),"\n",(0,r.jsx)(t.h2,{children:"Theme composition"}),"\n",(0,r.jsx)(t.p,{children:"The ThemeProvider is meant to be used at the root of the app, but more ThemeProviders can be added nested in the dom tree."}),"\n",(0,r.jsx)(t.p,{children:"You could use something like this."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { ThemeProvider } from '@platzily-ui/styling';\nimport App from './App';\nimport theme from './theme';\nimport otherTheme from './otherTheme';\n\nexport default function Root() {\n  return (\n    <ThemeProvider theme={theme}>\n      <App>\n        <StyledBox/>\n        <ThemeProvider theme={otherTheme}>\n          <StyledBox/>\n        </ThemeProvider>\n      </App>\n    </ThemeProvider>\n  );\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"theme"})," have a default configuration but ",(0,r.jsx)(t.code,{children:"otherTheme"})," has a differente ",(0,r.jsx)(t.code,{children:"palette.primary.main"})," color. The resulting of the code above will be this:"]}),"\n",(0,r.jsx)(a.au,{}),"\n",(0,r.jsx)(t.h2,{children:"Function as a theme"}),"\n",(0,r.jsx)(t.p,{children:"If you decide to use an approach as the showed above you could pass a function as a theme in the inner ThemeProvider"}),"\n",(0,r.jsx)(c.v,{children:(0,r.jsx)(t.p,{children:"Never pass the theme as a function in the higher ThemeProvider, it will not work"})}),"\n",(0,r.jsx)(t.p,{children:"You could do it this way"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:"import { ThemeProvider } from '@platzily-ui/styling';\nimport App from './App';\nimport theme from './theme';\n\nexport default function Root() {\n  return (\n    <ThemeProvider theme={theme}>\n      <App>\n        <StyledBox/>\n        <ThemeProvider\n          theme={(outerTheme) => ({\n            ...outerTheme,\n            palette: {\n              ...outherTheme.palette,\n              primary: {\n                ...outherTheme.palette.primary,\n                main: 'rebeccapurple'\n              }\n            }\n          })}\n        >\n          <StyledBox/>\n        </ThemeProvider>\n      </App>\n    </ThemeProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note how the outer theme which is the theme passed to the higher ThemeProvider is received as a param in the function."}),"\n",(0,r.jsx)(t.p,{children:"The code above will result in this:"}),"\n",(0,r.jsx)(a.au,{})]});return h?(0,r.jsx)(h,Object.assign({},n,{children:o})):o}},1468:function(e,n,t){e.exports=t(5513)},5513:function(e,n,t){var r,o=(r=t(2784))&&"object"===typeof r&&"default"in r?r.default:r;const s={default:"bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10",error:"bg-red-200 text-red-900 dark:text-red-200 dark:bg-red-600 dark:bg-opacity-30",warning:"bg-yellow-200 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"};e.exports=({children:e,type:n="default",emoji:t="\ud83d\udca1"})=>o.createElement("div",{className:`${s[n]} flex rounded-lg callout mt-6`},o.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},t),o.createElement("div",{className:"pr-4 py-2"},e))}},function(e){e.O(0,[774,513,413,137,888,179],(function(){return n=6017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);