(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{311:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(7),c=(n(0),n(327)),s=n(331),i=n(332),m={title:"Majority Element II"},b={unversionedId:"linear-list/array/majority-element-ii",id:"linear-list/array/majority-element-ii",isDocsHomePage:!1,title:"Majority Element II",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/majority-element-ii.md",slug:"/linear-list/array/majority-element-ii",permalink:"/linear-list/array/majority-element-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/majority-element-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Majority Element",permalink:"/linear-list/array/majority-element"},next:{title:"Rotate Array",permalink:"/linear-list/array/rotate-array"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:l};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(c.b)("p",null,"Given an integer array of size ",Object(c.b)("inlineCode",{parentName:"p"},"n"),", find all elements that appear more than ",Object(c.b)("inlineCode",{parentName:"p"},"\u230a n/3 \u230b")," times."),Object(c.b)("p",null,"Follow-up: Could you solve the problem in linear time and in O(1) space?"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example 1"),":"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Input"),": nums = ","[3,2,3]",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"Output"),": ","[3]")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example 2"),":"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Input"),": nums = ","[1]"," > ",Object(c.b)("strong",{parentName:"p"},"Output"),": ","[1]")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example 3"),":"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Input"),": nums = ","[1,2]"," > ",Object(c.b)("strong",{parentName:"p"},"Output"),": ","[1,2]")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Constraints"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"1 <= nums.length <= 5 ","*"," ",Object(c.b)("span",Object(a.a)({parentName:"li"},{className:"math math-inline"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mn",{parentName:"mrow"},"1"),Object(c.b)("msup",{parentName:"mrow"},Object(c.b)("mn",{parentName:"msup"},"0"),Object(c.b)("mn",{parentName:"msup"},"4"))),Object(c.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"10^4")))),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"1"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"0"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(c.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"4"))))))))))))),Object(c.b)("li",{parentName:"ul"},"-",Object(c.b)("span",Object(a.a)({parentName:"li"},{className:"math math-inline"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mn",{parentName:"mrow"},"1"),Object(c.b)("msup",{parentName:"mrow"},Object(c.b)("mn",{parentName:"msup"},"0"),Object(c.b)("mn",{parentName:"msup"},"9"))),Object(c.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"10^9")))),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"1"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"0"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(c.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"9"))))))))))))," <= nums","[i]"," <= ",Object(c.b)("span",Object(a.a)({parentName:"li"},{className:"math math-inline"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mn",{parentName:"mrow"},"1"),Object(c.b)("msup",{parentName:"mrow"},Object(c.b)("mn",{parentName:"msup"},"0"),Object(c.b)("mn",{parentName:"msup"},"9"))),Object(c.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"10^9")))),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"1"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"0"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(c.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"9")))))))))))))),Object(c.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(c.b)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"n"),"\u7684\u6570\u7ec4\uff0c\u6211\u4eec\u77e5\u9053\u4e0b\u9762\u4e00\u4e9b\u7ed3\u8bba\u662f\u6210\u7acb\u7684\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u6709",Object(c.b)("strong",{parentName:"li"},"\u4e00\u4e2a"),"\u5143\u7d20\u80fd\u51fa\u73b0\u8d85\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"\u230an/2\u230b")," \u6b21."),Object(c.b)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u6709",Object(c.b)("strong",{parentName:"li"},"\u4e24\u4e2a"),"\u5143\u7d20\u80fd\u51fa\u73b0\u8d85\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"\u230an/3\u230b")," \u6b21."),Object(c.b)("li",{parentName:"ul"},"\u6700\u591a\u53ea\u6709",Object(c.b)("strong",{parentName:"li"},"\u4e09\u4e2a"),"\u5143\u7d20\u80fd\u51fa\u73b0\u8d85\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"\u230an/4\u230b")," \u6b21.")),Object(c.b)("p",null,"\u4ee5\u6b64\u7c7b\u63a8\u3002"),Object(c.b)("p",null,"Boyer-Moore \u6295\u7968\u7b97\u6cd5\u5c31\u662f\u4f9d\u636e\u4e0a\u9762\u7684\u539f\u7406\u800c\u5b9e\u73b0\u7684\u3002"),Object(c.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(c.b)(s.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"python",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Majority Element II\n# Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution(object):\n    def majorityElement(self, nums: List[int])->List[int]:\n        # 1st pass\n        count1, count2 = 0, 0\n        # candidates must be initalized to different values\n        candidate1, candidate2 = 0, 1\n\n        for num in nums:\n            if candidate1 == num:\n                count1 += 1\n            elif candidate2 == num:\n                count2 += 1\n            elif count1 == 0:\n                candidate1 = num\n                count1 = 1\n            elif count2 == 0:\n                candidate2 = num\n                count2 = 1\n            else:\n                count1 -= 1\n                count2 -= 1\n\n        # 2nd pass\n        result = []\n        for c in [candidate1, candidate2]:\n            if nums.count(c) > len(nums)/3:\n                result.append(c)\n\n        return result\n"))),Object(c.b)(i.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Majority Element II\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\n    public List<Integer> majorityElement(int[] nums) {\n        // 1st pass\n        int count1 = 0, count2 = 0;\n        // candidates must be initalized to different values\n        int candidate1 = 0, candidate2 = 1;\n\n        for (int num : nums) {\n            if (candidate1 == num) {\n                count1++;\n            } else if (candidate2 == num) {\n                count2++;\n            } else if (count1 == 0) {\n                candidate1 = num;\n                count1 = 1;\n            } else if (count2 == 0) {\n                candidate2 = num;\n                count2 = 1;\n            } else {\n                count1--;\n                count2--;\n            }\n        }\n\n        // 2nd pass\n        List<Integer> result = new ArrayList<>();\n        count1 = 0;\n        count2 = 0;\n        for (int num : nums) {\n            if (candidate1 == num) count1++;\n            if (candidate2 == num) count2++;\n        }\n\n        if (count1 > nums.length/3) result.add(candidate1);\n        if (count2 > nums.length/3) result.add(candidate2);\n\n        return result;\n    }\n}\n"))),Object(c.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Majority Element II\n// Time Complexity: O(nlogn), Space Complexity: O(1)\nclass Solution {\npublic:\n    vector<int> majorityElement(const vector<int>& nums) {\n        // 1st pass\n        int count1 = 0, count2 = 0;\n        // candidates must be initalized to different values\n        int candidate1 = 0, candidate2 = 1;\n\n        for (int num : nums) {\n            if (candidate1 == num) {\n                count1++;\n            } else if (candidate2 == num) {\n                count2++;\n            } else if (count1 == 0) {\n                candidate1 = num;\n                count1 = 1;\n            } else if (count2 == 0) {\n                candidate2 = num;\n                count2 = 1;\n            } else {\n                count1--;\n                count2--;\n            }\n        }\n\n        // 2nd pass\n        vector<int> result;\n        for (int c : vector<int>{candidate1, candidate2}) {\n            if (std::count(nums.begin(), nums.end(), c) > nums.size()/3) {\n                result.push_back(c);\n            }\n        }\n\n        return result;\n    }\n};\n")))),Object(c.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/linear-list/array/majority-element"}),"Majority Element"))))}o.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,b=m(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,j=p["".concat(s,".").concat(u)]||p[u]||o[u]||c;return n?r.a.createElement(j,i(i({ref:t},b),{},{components:n})):r.a.createElement(j,i({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var b=2;b<c;b++)s[b]=n[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},328:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},329:function(e,t,n){"use strict";var a=n(0),r=n(330);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},330:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},331:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(329),s=n(328),i=n(49),m=n.n(i),b=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,o=e.groupId,u=e.className,j=Object(c.a)(),O=j.tabGroupChoices,d=j.setTabGroupChoices,N=Object(a.useState)(i),f=N[0],y=N[1],h=Object(a.useState)(!1),g=h[0],v=h[1];if(null!=o){var w=O[o];null!=w&&w!==f&&p.some((function(e){return e.value===w}))&&y(w)}var x=function(e){y(e),null!=o&&d(o,e)},E=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=function(){v(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},u)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",m.a.tabItem,{"tabs__item--active":f===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),k(e)},onFocus:function(){return x(t)},onClick:function(){x(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},332:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);