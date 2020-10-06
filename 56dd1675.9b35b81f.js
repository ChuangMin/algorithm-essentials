(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(298)),c=t(302),o=t(303),u={title:"Distinct Subsequences"},s={unversionedId:"dp/distinct-subsequences",id:"dp/distinct-subsequences",isDocsHomePage:!1,title:"Distinct Subsequences",description:"\u63cf\u8ff0",source:"@site/docs/dp/distinct-subsequences.md",slug:"/dp/distinct-subsequences",permalink:"/dp/distinct-subsequences",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/distinct-subsequences.md",version:"current",sidebar:"someSidebar",previous:{title:"Decode Ways",permalink:"/dp/decode-ways"},next:{title:"Word Break",permalink:"/dp/word-break"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a string ",Object(a.b)("inlineCode",{parentName:"p"},"S")," and a string ",Object(a.b)("inlineCode",{parentName:"p"},"T"),", count the number of distinct subsequences of ",Object(a.b)("inlineCode",{parentName:"p"},"T")," in ",Object(a.b)("inlineCode",{parentName:"p"},"S"),"."),Object(a.b)("p",null,"A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, ",Object(a.b)("inlineCode",{parentName:"p"},'"ACE"')," is a subsequence of ",Object(a.b)("inlineCode",{parentName:"p"},'"ABCDE"')," while ",Object(a.b)("inlineCode",{parentName:"p"},'"AEC"')," is not)."),Object(a.b)("p",null,"Here is an example:\n",Object(a.b)("inlineCode",{parentName:"p"},"S")," = ",Object(a.b)("inlineCode",{parentName:"p"},'"rabbbit"'),", ",Object(a.b)("inlineCode",{parentName:"p"},"T")," = ",Object(a.b)("inlineCode",{parentName:"p"},'"rabbit"')),Object(a.b)("p",null,"Return 3."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8bbe\u72b6\u6001\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"f(i,j)"),"\uff0c\u8868\u793a",Object(a.b)("inlineCode",{parentName:"p"},"T[0,j]"),"\u5728",Object(a.b)("inlineCode",{parentName:"p"},"S[0,i]"),"\u91cc\u51fa\u73b0\u7684\u6b21\u6570\u3002\u9996\u5148\uff0c\u65e0\u8bba",Object(a.b)("inlineCode",{parentName:"p"},"S[i]"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"T[j]"),"\u662f\u5426\u76f8\u7b49\uff0c\u82e5\u4e0d\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"S[i]"),"\uff0c\u5219",Object(a.b)("inlineCode",{parentName:"p"},"f(i,j)=f(i-1,j)"),"\uff1b\u82e5",Object(a.b)("inlineCode",{parentName:"p"},"S[i]==T[j]"),"\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"S[i]"),"\uff0c\u6b64\u65f6",Object(a.b)("inlineCode",{parentName:"p"},"f(i,j)=f(i-1,j)+f(i-1, j-1)"),"\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Distinct Subsequences\n// \u4e8c\u7ef4\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m*n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int numDistinct(String s, String t) {\n        int[] f = new int[t.length() + 1];\n        f[0] = 1;\n        for (int i = 0; i < s.length(); ++i) {\n            for (int j = t.length() - 1; j >= 0; --j) {\n                f[j + 1] += s.charAt(i) == t.charAt(j) ? f[j] : 0;\n            }\n        }\n\n        return f[t.length()];\n    }\n}\n"))),Object(a.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Distinct Subsequences\n// \u4e8c\u7ef4\u52a8\u89c4+\u6eda\u52a8\u6570\u7ec4\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m*n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int numDistinct(const string &S, const string &T) {\n        vector<int> f(T.size() + 1);\n        f[0] = 1;\n        for (int i = 0; i < S.size(); ++i) {\n            for (int j = T.size() - 1; j >= 0; --j) {\n                f[j + 1] += S[i] == T[j] ? f[j] : 0;\n            }\n        }\n\n        return f[T.size()];\n    }\n};\n")))))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(t),f=r,d=b["".concat(c,".").concat(f)]||b[f]||p[f]||a;return t?i.a.createElement(d,o(o({ref:n},s),{},{components:t})):i.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},300:function(e,n,t){"use strict";var r=t(0),i=Object(r.createContext)(void 0);n.a=i},301:function(e,n,t){"use strict";var r=t(0),i=t(300);n.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(301),c=t(299),o=t(47),u=t.n(o),s=37,l=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,b=e.values,p=e.groupId,f=Object(a.a)(),d=f.tabGroupChoices,m=f.setTabGroupChoices,j=Object(r.useState)(o),O=j[0],v=j[1],y=Object(r.useState)(!1),g=y[0],h=y[1];if(null!=p){var C=d[p];null!=C&&C!==O&&b.some((function(e){return e.value===C}))&&v(C)}var w=function(e){v(e),null!=p&&m(p,e)},N=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},S=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",S)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n})},b.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===n}),style:g?{}:{outline:"none"},key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e),T(e)},onFocus:function(){return w(n)},onClick:function(){w(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);