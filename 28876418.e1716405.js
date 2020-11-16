(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(7),i=(t(0),t(327)),o=t(331),c=t(332),u={title:"Add Binary"},l={unversionedId:"string/add-binary",id:"string/add-binary",isDocsHomePage:!1,title:"Add Binary",description:"\u63cf\u8ff0",source:"@site/docs/string/add-binary.md",slug:"/string/add-binary",permalink:"/string/add-binary",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/add-binary.md",version:"current",sidebar:"someSidebar",previous:{title:"String to Integer (atoi)",permalink:"/string/atoi"},next:{title:"Longest Palindromic Substring",permalink:"/string/longest-palindromic-substring"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given two binary strings, return their sum (also a binary string)."),Object(i.b)("p",null,"For example,"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'a = "11"\nb = "1"\n')),Object(i.b)("p",null,"Return ",Object(i.b)("inlineCode",{parentName:"p"},"100"),"."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u65e0"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Add Binary\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public String addBinary(String a, String b) {\n        StringBuilder result = new StringBuilder();\n        int i = a.length() - 1;\n        int j = b.length() - 1;\n        int carry = 0;\n\n        while(i >= 0 || j >= 0 || carry > 0) {\n            int valueA = i < 0 ? 0 : a.charAt(i--) - '0';\n            int valueB = j < 0 ? 0 : b.charAt(j--) - '0';\n            int sum = valueA + valueB + carry;\n            result.insert(0, Character.forDigit(sum % 2, 10));\n            carry = sum / 2;\n        }\n        return result.toString();\n    }\n}\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Add Binary\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    string addBinary(string a, string b) {\n        string result;\n        int i = a.length() - 1;\n        int j = b.length() - 1;\n        int carry = 0;\n\n        while(i >= 0 || j >= 0 || carry > 0) {\n            int valueA = i < 0 ? 0 : a[i--] - '0';\n            int valueB = j < 0 ? 0 : b[j--] - '0';\n            int sum = valueA + valueB + carry;\n            result.insert(result.begin(), (sum % 2) + '0');\n            carry = sum / 2;\n        }\n        return result;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/linked-list/add-two-numbers"}),"Add Two Numbers"))))}d.isMDXComponent=!0},327:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(t),p=r,f=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},328:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},329:function(e,n,t){"use strict";var r=t(0),a=t(330);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},330:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},331:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(329),o=t(328),c=t(49),u=t.n(c),l=37,s=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,b=e.values,d=e.groupId,p=e.className,f=Object(i.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,y=Object(r.useState)(c),O=y[0],g=y[1],j=Object(r.useState)(!1),h=j[0],w=j[1];if(null!=d){var E=m[d];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&g(E)}var x=function(e){g(e),null!=d&&v(d,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},P=function(){w(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",P),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",P)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===n}),style:h?{}:{outline:"none"},key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e),C(e)},onFocus:function(){return x(n)},onClick:function(){x(n),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},332:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);