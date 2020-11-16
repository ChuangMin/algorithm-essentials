(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{307:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(7),o=(t(0),t(327)),i=t(331),l=t(332),c={title:"Remove Duplicates from Sorted Array"},u={unversionedId:"linear-list/array/remove-duplicates-from-sorted-array",id:"linear-list/array/remove-duplicates-from-sorted-array",isDocsHomePage:!1,title:"Remove Duplicates from Sorted Array",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/remove-duplicates-from-sorted-array.md",slug:"/linear-list/array/remove-duplicates-from-sorted-array",permalink:"/linear-list/array/remove-duplicates-from-sorted-array",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/remove-duplicates-from-sorted-array.md",version:"current",sidebar:"someSidebar",previous:{title:"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784",permalink:"/data-structures"},next:{title:"Remove Duplicates from Sorted Array II",permalink:"/linear-list/array/remove-duplicates-from-sorted-array-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],m={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length."),Object(o.b)("p",null,"Do not allocate extra space for another array, you must do this in place with constant memory."),Object(o.b)("p",null,"For example, Given input array ",Object(o.b)("inlineCode",{parentName:"p"},"A = [1,1,2]"),","),Object(o.b)("p",null,"Your function should return length = 2, and ",Object(o.b)("inlineCode",{parentName:"p"},"A")," is now ",Object(o.b)("inlineCode",{parentName:"p"},"[1,2]"),"."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u65e0"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"python",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"# Remove Duplicates from Sorted Array\n# Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        if len(nums) == 0:\n            return 0\n\n        i = 0\n        for j in range(1, len(nums)):\n            if nums[j] != nums[i]:\n                i += 1\n                nums[i] = nums[j]\n\n        return i + 1\n"))),Object(o.b)(l.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Remove Duplicates from Sorted Array\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\npublic class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n\n        int len = 1;\n        for (int i = 1; i < nums.length; i++){\n            if (nums[i] != nums[len - 1])\n                nums[len++] = nums[i];\n        }\n        return len;\n    }\n};\n"))),Object(o.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Remove Duplicates from Sorted Array\n// Time Complexity: O(n)\uff0cSpace Complexity: O(1)\nclass Solution {\npublic:\n    int removeDuplicates(vector<int>& nums) {\n        if (nums.empty()) return 0;\n\n        int len = 1;\n        for (int i = 1; i < nums.size(); i++) {\n            if (nums[i] != nums[len-1])\n                nums[len++] = nums[i];\n        }\n        return len;\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/linear-list/array/remove-duplicates-from-sorted-array-ii"}),"Remove Duplicates from Sorted Array II"))))}p.isMDXComponent=!0},327:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=r,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return t?a.a.createElement(b,l(l({ref:n},u),{},{components:t})):a.a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},328:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},329:function(e,n,t){"use strict";var r=t(0),a=t(330);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},330:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},331:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(329),i=t(328),l=t(49),c=t.n(l),u=37,s=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,m=e.values,p=e.groupId,f=e.className,b=Object(o.a)(),d=b.tabGroupChoices,y=b.setTabGroupChoices,v=Object(r.useState)(l),O=v[0],j=v[1],h=Object(r.useState)(!1),g=h[0],w=h[1];if(null!=p){var x=d[p];null!=x&&x!==O&&m.some((function(e){return e.value===x}))&&j(x)}var C=function(e){j(e),null!=p&&y(p,e)},T=[],D=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},E=function(){w(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",D),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",D),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},f)},m.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),style:g?{}:{outline:"none"},key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e),D(e)},onFocus:function(){return C(n)},onClick:function(){C(n),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},332:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);