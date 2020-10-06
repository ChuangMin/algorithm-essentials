(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(298)),c=n(302),o=n(303),l={title:"Search a 2D Matrix"},u={unversionedId:"search/search-a-2d-matrix",id:"search/search-a-2d-matrix",isDocsHomePage:!1,title:"Search a 2D Matrix",description:"\u63cf\u8ff0",source:"@site/docs/search/search-a-2d-matrix.md",slug:"/search/search-a-2d-matrix",permalink:"/search/search-a-2d-matrix",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/search/search-a-2d-matrix.md",version:"current",sidebar:"someSidebar",previous:{title:"Search in Rotated Sorted Array II",permalink:"/search/search-in-rotated-sorted-array-ii"},next:{title:"Search a 2D Matrix II",permalink:"/search/search-a-2d-matrix-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],f={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Write an efficient algorithm that searches for a value in an ",Object(i.b)("inlineCode",{parentName:"p"},"m \xd7 n")," matrix. This matrix has the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Integers in each row are sorted from left to right."),Object(i.b)("li",{parentName:"ul"},"The first integer of each row is greater than the last integer of the previous row.")),Object(i.b)("p",null,"For example, Consider the following matrix:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"[\n  [1,   3,  5,  7],\n  [10, 11, 16, 20],\n  [23, 30, 34, 50]\n]\n")),Object(i.b)("p",null,"Given ",Object(i.b)("inlineCode",{parentName:"p"},"target = 3"),", return true."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u4e8c\u5206\u67e5\u627e\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Search a 2D Matrix\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        if (matrix.length == 0) return false;\n        final int  m = matrix.length;\n        final int n = matrix[0].length;\n\n        int first = 0;\n        int last = m * n;\n\n        while (first < last) {\n            int mid = first + (last - first) / 2;\n            int value = matrix[mid / n][mid % n];\n\n            if (value == target)\n                return true;\n            else if (value < target)\n                first = mid + 1;\n            else\n                last = mid;\n        }\n\n        return false;\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Search a 2D Matrix\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool searchMatrix(const vector<vector<int>>& matrix, int target) {\n        if (matrix.empty()) return false;\n        const size_t  m = matrix.size();\n        const size_t n = matrix.front().size();\n\n        int first = 0;\n        int last = m * n;\n\n        while (first < last) {\n            int mid = first + (last - first) / 2;\n            int value = matrix[mid / n][mid % n];\n\n            if (value == target)\n                return true;\n            else if (value < target)\n                first = mid + 1;\n            else\n                last = mid;\n        }\n\n        return false;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/search/search-a-2d-matrix-ii"}),"Search a 2D Matrix II"))))}b.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,p=f["".concat(c,".").concat(m)]||f[m]||b[m]||i;return n?a.a.createElement(p,o(o({ref:t},u),{},{components:n})):a.a.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},300:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},301:function(e,t,n){"use strict";var r=n(0),a=n(300);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(301),c=n(299),o=n(47),l=n.n(o),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,f=e.values,b=e.groupId,m=Object(i.a)(),p=m.tabGroupChoices,d=m.setTabGroupChoices,h=Object(r.useState)(o),v=h[0],O=h[1],j=Object(r.useState)(!1),y=j[0],g=j[1];if(null!=b){var x=p[b];null!=x&&x!==v&&f.some((function(e){return e.value===x}))&&O(x)}var w=function(e){O(e),null!=b&&d(b,e)},E=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",C)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),T(e)},onFocus:function(){return w(t)},onClick:function(){w(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);