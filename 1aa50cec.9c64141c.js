(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{298:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,f=s["".concat(o,".").concat(m)]||s[m]||p[m]||a;return t?i.a.createElement(f,u(u({ref:n},l),{},{components:t})):i.a.createElement(f,u({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},300:function(e,n,t){"use strict";var r=t(0),i=Object(r.createContext)(void 0);n.a=i},301:function(e,n,t){"use strict";var r=t(0),i=t(300);n.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(301),o=t(299),u=t(47),c=t.n(u),l=37,b=39;n.a=function(e){var n=e.block,t=e.children,u=e.defaultValue,s=e.values,p=e.groupId,m=Object(a.a)(),f=m.tabGroupChoices,d=m.setTabGroupChoices,j=Object(r.useState)(u),O=j[0],v=j[1],g=Object(r.useState)(!1),y=g[0],h=g[1];if(null!=p){var w=f[p];null!=w&&w!==O&&s.some((function(e){return e.value===w}))&&v(w)}var N=function(e){v(e),null!=p&&d(p,e)},C=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},x=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",I),window.addEventListener("mousedown",x)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},s.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),I(e)},onFocus:function(){return N(n)},onClick:function(){N(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),a=(t(0),t(298)),o=t(302),u=t(303),c={title:"Single Number II"},l={unversionedId:"bitwise-operations/single-number-ii",id:"bitwise-operations/single-number-ii",isDocsHomePage:!1,title:"Single Number II",description:"\u63cf\u8ff0",source:"@site/docs/bitwise-operations/single-number-ii.md",slug:"/bitwise-operations/single-number-ii",permalink:"/bitwise-operations/single-number-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/bitwise-operations/single-number-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Single Number",permalink:"/bitwise-operations/single-number"},next:{title:"Single Number III",permalink:"/bitwise-operations/single-number-iii"}},b=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",children:[]},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],s={rightToc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given an array of integers, every element appears three times except for one. Find that single one."),Object(a.b)("p",null,"Note:\nYour algorithm should have a linear runtime complexity. Could you implement it without using extra memory?"),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u672c\u9898\u548c\u4e0a\u4e00\u9898 Single Number\uff0c\u8003\u5bdf\u7684\u662f\u4f4d\u8fd0\u7b97\u3002"),Object(a.b)("p",null,"\u65b9\u6cd5 1\uff1a\u521b\u5efa\u4e00\u4e2a\u957f\u5ea6\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"sizeof(int)"),"\u7684\u6570\u7ec4",Object(a.b)("inlineCode",{parentName:"p"},"count[sizeof(int)]"),"\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"count[i]"),"\u8868\u793a\u5728\u5728",Object(a.b)("inlineCode",{parentName:"p"},"i"),"\u4f4d\u51fa\u73b0\u7684 1 \u7684\u6b21\u6570\u3002\u5982\u679c",Object(a.b)("inlineCode",{parentName:"p"},"count[i]"),"\u662f 3 \u7684\u6574\u6570\u500d\uff0c\u5219\u5ffd\u7565\uff1b\u5426\u5219\u5c31\u628a\u8be5\u4f4d\u53d6\u51fa\u6765\u7ec4\u6210\u7b54\u6848\u3002"),Object(a.b)("p",null,"\u65b9\u6cd5 2\uff1a\u7528",Object(a.b)("inlineCode",{parentName:"p"},"one"),"\u8bb0\u5f55\u5230\u5f53\u524d\u5904\u7406\u7684\u5143\u7d20\u4e3a\u6b62\uff0c\u4e8c\u8fdb\u5236 1 \u51fa\u73b0\u201c1 \u6b21\u201d\uff08mod 3 \u4e4b\u540e\u7684 1\uff09\u7684\u6709\u54ea\u4e9b\u4e8c\u8fdb\u5236\u4f4d\uff1b\u7528",Object(a.b)("inlineCode",{parentName:"p"},"two"),"\u8bb0\u5f55\u5230\u5f53\u524d\u8ba1\u7b97\u7684\u53d8\u91cf\u4e3a\u6b62\uff0c\u4e8c\u8fdb\u5236 1 \u51fa\u73b0\u201c2 \u6b21\u201d\uff08mod 3 \u4e4b\u540e\u7684 2\uff09\u7684\u6709\u54ea\u4e9b\u4e8c\u8fdb\u5236\u4f4d\u3002\u5f53",Object(a.b)("inlineCode",{parentName:"p"},"one"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"two"),"\u4e2d\u7684\u67d0\u4e00\u4f4d\u540c\u65f6\u4e3a 1 \u65f6\u8868\u793a\u8be5\u4e8c\u8fdb\u5236\u4f4d\u4e0a 1 \u51fa\u73b0\u4e86 3 \u6b21\uff0c\u6b64\u65f6\u9700\u8981\u6e05\u96f6\u3002\u5373",Object(a.b)("strong",{parentName:"p"},"\u7528\u4e8c\u8fdb\u5236\u6a21\u62df\u4e09\u8fdb\u5236\u8fd0\u7b97"),"\u3002\u6700\u7ec8",Object(a.b)("inlineCode",{parentName:"p"},"one"),"\u8bb0\u5f55\u7684\u662f\u6700\u7ec8\u7ed3\u679c\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(u.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Single Number II\n// \u65b9\u6cd51\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int singleNumber(int[] nums) {\n        final int W = Integer.SIZE; // \u4e00\u4e2a\u6574\u6570\u7684bit\u6570\uff0c\u5373\u6574\u6570\u5b57\u957f\n        int[] count = new int[W];  // count[i]\u8868\u793a\u5728\u5728i\u4f4d\u51fa\u73b0\u76841\u7684\u6b21\u6570\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = 0; j < W; j++) {\n                count[j] += (nums[i] >> j) & 1;\n                count[j] %= 3;\n            }\n        }\n        int result = 0;\n        for (int i = 0; i < W; i++) {\n            result += (count[i] << i);\n        }\n        return result;\n    }\n};\n"))),Object(a.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Single Number II\n// \u65b9\u6cd51\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        const int W = sizeof(int) * 8; // \u4e00\u4e2a\u6574\u6570\u7684bit\u6570\uff0c\u5373\u6574\u6570\u5b57\u957f\n        int count[W];  // count[i]\u8868\u793a\u5728\u5728i\u4f4d\u51fa\u73b0\u76841\u7684\u6b21\u6570\n        fill_n(&count[0], W, 0);\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = 0; j < W; j++) {\n                count[j] += (nums[i] >> j) & 1;\n                count[j] %= 3;\n            }\n        }\n        int result = 0;\n        for (int i = 0; i < W; i++) {\n            result += (count[i] << i);\n        }\n        return result;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(u.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Single Number II\n// \u65b9\u6cd52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int singleNumber(int[] nums) {\n        int one = 0, two = 0, three = 0;\n        for (int i : nums) {\n            two |= (one & i);\n            one ^= i;\n            three = ~(one & two);\n            one &= three;\n            two &= three;\n        }\n\n        return one;\n    }\n};\n"))),Object(a.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Single Number II\n// \u65b9\u6cd52\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        int one = 0, two = 0, three = 0;\n        for (int i : nums) {\n            two |= (one & i);\n            one ^= i;\n            three = ~(one & two);\n            one &= three;\n            two &= three;\n        }\n\n        return one;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/bitwise-operations/single-number"}),"Single Number"))))}p.isMDXComponent=!0}}]);