(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return S})),n.d(t,"default",(function(){return g}));var r=n(2),i=n(6),a=(n(0),n(298)),o={title:"Rectangle Area"},c={unversionedId:"simulation/rectangle-area",id:"simulation/rectangle-area",isDocsHomePage:!1,title:"Rectangle Area",description:"\u63cf\u8ff0",source:"@site/docs/simulation/rectangle-area.md",slug:"/simulation/rectangle-area",permalink:"/simulation/rectangle-area",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/rectangle-area.md",version:"current",sidebar:"someSidebar",previous:{title:"Power of Three",permalink:"/simulation/power-of-three"},next:{title:"\u7b80\u4ecb",permalink:"/number-theory/README"}},S=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],k={rightToc:S};function g(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},k,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Find the total area covered by two rectilinear rectangles in a 2D plane."),Object(a.b)("p",null,"Each rectangle is defined by its bottom left corner and top right corner as shown in the figure."),Object(a.b)("p",null,Object(a.b)("img",{src:n(380).default})),Object(a.b)("p",null,"Assume that the total area is never beyond the maximum possible value of int."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u7b80\u5355\u5e73\u9762\u51e0\u4f55\u3002\u6839\u636e\u5bb9\u65a5\u539f\u7406\uff1aS(M \u222a N) = S(M) + S(N) - S(M \u2229 N)\uff0c\u6700\u5173\u952e\u7684\u662f\u6c42\u51fa\u76f8\u4ea4\u90e8\u5206\u7684\u9762\u79ef\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Rectangle Area\n// Time Complexity: O(1), Space Complexity: O(1)\npublic class Solution {\n    public int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {\n        final int area = (C - A) * (D- B) + (G - E) * (H - F);\n        // prevent overflow\n        if (C < E || G < A || D < F || H < B) return area;\n        final int intersection = Math.max(Math.min(C, G) - Math.max(A, E), 0) *\n                Math.max(Math.min(D, H) - Math.max(B, F), 0);\n        return area - intersection;\n    }\n}\n")))}g.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return J})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var k=i.a.createContext({}),g=function(e){var t=i.a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},J=function(e){var t=g(e.components);return i.a.createElement(k.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,k=S(e,["components","mdxType","originalType","parentName"]),J=g(n),m=r,u=J["".concat(o,".").concat(m)]||J[m]||A[m]||a;return n?i.a.createElement(u,c(c({ref:t},k),{},{components:n})):i.a.createElement(u,c({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var S in t)hasOwnProperty.call(t,S)&&(c[S]=t[S]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var k=2;k<a;k++)o[k]=n[k];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},380:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);