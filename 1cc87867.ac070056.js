(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{327:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),m=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=m(t),p=a,d=s["".concat(o,".").concat(p)]||s[p]||b[p]||i;return t?r.a.createElement(d,l(l({ref:n},u),{},{components:t})):r.a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},328:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},329:function(e,n,t){"use strict";var a=t(0),r=t(330);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},330:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},331:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(329),o=t(328),l=t(49),c=t.n(l),u=37,m=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,s=e.values,b=e.groupId,p=e.className,d=Object(i.a)(),y=d.tabGroupChoices,f=d.setTabGroupChoices,j=Object(a.useState)(l),O=j[0],v=j[1],h=Object(a.useState)(!1),g=h[0],w=h[1];if(null!=b){var x=y[b];null!=x&&x!==O&&s.some((function(e){return e.value===x}))&&v(x)}var E=function(e){v(e),null!=b&&f(b,e)},C=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},N=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",N)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),style:g?{}:{outline:"none"},key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case m:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e),T(e)},onFocus:function(){return E(n)},onClick:function(){E(n),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},332:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(7),i=(t(0),t(327)),o=t(331),l=t(332),c={title:"Majority Element"},u={unversionedId:"linear-list/array/majority-element",id:"linear-list/array/majority-element",isDocsHomePage:!1,title:"Majority Element",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/majority-element.md",slug:"/linear-list/array/majority-element",permalink:"/linear-list/array/majority-element",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/majority-element.md",version:"current",sidebar:"someSidebar",previous:{title:"Candy",permalink:"/linear-list/array/candy"},next:{title:"Majority Element II",permalink:"/linear-list/array/majority-element-ii"}},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u89e3\u6cd5 2 Boyer-Moore Voting Algorithm",id:"\u89e3\u6cd5-2-boyer-moore-voting-algorithm",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],s={rightToc:m};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given an array of size n, find the majority element. The majority element is the element that appears more than ",Object(i.b)("inlineCode",{parentName:"p"},"\u230a n/2 \u230b")," times."),Object(i.b)("p",null,"You may assume that the array is non-empty and the majority element always exist in the array."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u8fd9\u9898\u6700\u7b80\u5355\u7684\u89e3\u6cd5\uff0c\u5148\u628a\u6570\u7ec4\u6392\u5e8f\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"O(nlogn)"),"\uff0c\u7136\u540e\u4ece\u5934\u5230\u5c3e\u626b\u63cf\u4e00\u904d\uff0c\u627e\u51fa\u6700\u957f\u7684\u8fde\u7eed\u5b50\u4e32\u3002"),Object(i.b)("p",null,"\u7531\u4e8e\u8d85\u8fc7",Object(i.b)("inlineCode",{parentName:"p"},"\u230a n/2 \u230b"),"\u6b21\uff0c\u53ef\u4ee5\u5bf9\u4e0a\u9762\u7684\u65b9\u6cd5\u6539\u8fdb\u4e00\u4e0b\uff0c\u6392\u5e8f\u540e\uff0c\u4e0d\u9700\u8981\u626b\u63cf\uff0c\u76f4\u63a5\u8fd4\u56de\u4e2d\u95f4\u90a3\u4e2a\u5143\u7d20\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"nums[n/2]"),"\uff0c\u80af\u5b9a\u5c31\u662f\u7b54\u6848\u3002"),Object(i.b)("p",null,"\u4e0a\u8ff0\u4e24\u4e2a\u65b9\u6cd5\u90fd\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"O(nlogn)"),"\u7684\uff0c\u672c\u9898\u6709\u4e00\u4e2a\u7ebf\u6027\u89e3\u6cd5\u3002\u7531\u4e8e\u8d85\u8fc7",Object(i.b)("inlineCode",{parentName:"p"},"\u230a n/2 \u230b"),"\uff0c\u53ef\u4ee5\u7528\u76f8\u62b5\u6d88\u7684\u601d\u60f3\uff0c\u51e1\u662f\u548c\u6700\u591a\u5143\u7d20\u4e0d\u76f8\u7b49\u7684\uff0c\u5c31\u62b5\u6d88\uff0c\u6700\u540e\u5269\u4e0b\u7684\u4e00\u5b9a\u5c31\u662f\u6700\u591a\u7684\u90a3\u4e2a\u5143\u7d20\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("h4",{id:"\u89e3\u6cd5-1-\u6392\u5e8f"},"\u89e3\u6cd5 1 \u6392\u5e8f"),Object(i.b)(o.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Majority Element\n# Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution:\n    def majorityElement(self, nums):\n        nums.sort()\n        return nums[len(nums)//2]\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Majority Element\n// Time Complexity: O(nlogn), Space Complexity: O(1)\npublic class Solution {\n    public int majorityElement(int[] nums) {\n        Arrays.sort(nums);\n        return nums[nums.length/2];\n    }\n}\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Majority Element\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        return nums[nums.size()/2];\n    }\n};\n")))),Object(i.b)("h3",{id:"\u89e3\u6cd5-2-boyer-moore-voting-algorithm"},"\u89e3\u6cd5 2 Boyer-Moore Voting Algorithm"),Object(i.b)(o.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"python",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Majority Element\n# Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution:\n    def majorityElement(self, nums):\n        candidate = 0\n        count = 0\n\n        for num in nums:\n            if candidate == num:\n                count += 1\n            elif count == 0:\n                candidate = num\n                count = 1\n            else:\n                count -= 1\n\n        return candidate\n"))),Object(i.b)(l.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Majority Element\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        int candidate = 0;\n\n        for (int num : nums) {\n            if (candidate == num) {\n                ++count;\n            } else if (count == 0) {\n                candidate = num;\n                count = 1;\n            } else {\n                --count;\n            }\n        }\n        return candidate;\n    }\n}\n"))),Object(i.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Majority Element\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        int count = 0;\n        int candidate = 0;\n\n        for (int num : nums) {\n            if (candidate == num) {\n                ++count;\n            } else if (count == 0) {\n                candidate = num;\n                count = 1;\n            } else {\n                --count;\n            }\n        }\n        return candidate;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/linear-list/array/majority-element-ii"}),"Majority Element II"))))}b.isMDXComponent=!0}}]);