(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return t?a.a.createElement(b,u(u({ref:n},c),{},{components:t})):a.a.createElement(b,u({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},328:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},329:function(e,n,t){"use strict";var r=t(0),a=t(330);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},330:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},331:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(329),i=t(328),u=t(49),l=t.n(u),c=37,s=39;n.a=function(e){var n=e.block,t=e.children,u=e.defaultValue,p=e.values,d=e.groupId,f=e.className,b=Object(o.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,g=Object(r.useState)(u),h=g[0],w=g[1],O=Object(r.useState)(!1),y=O[0],j=O[1];if(null!=d){var _=m[d];null!=_&&_!==h&&p.some((function(e){return e.value===_}))&&w(_)}var x=function(e){w(e),null!=d&&v(d,e)},E=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},C=function(){j(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),T(e)},onFocus:function(){return x(n)},onClick:function(){x(n),j(!1)},onPointerDown:function(){return j(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},332:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},61:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(7),o=(t(0),t(327)),i=t(331),u=t(332),l={title:"Search for a Range"},c={unversionedId:"search/search-for-a-range",id:"search/search-for-a-range",isDocsHomePage:!1,title:"Search for a Range",description:"\u63cf\u8ff0",source:"@site/docs/search/search-for-a-range.md",slug:"/search/search-for-a-range",permalink:"/search/search-for-a-range",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/search/search-for-a-range.md",version:"current",sidebar:"someSidebar",previous:{title:"\u57fa\u6570\u6392\u5e8f\u3001\u6876\u6392\u5e8f\u548c\u8ba1\u6570\u6392\u5e8f\u7684\u533a\u522b",permalink:"/sorting/summary"},next:{title:"Search Insert Position",permalink:"/search/search-insert-position"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound",id:"\u91cd\u65b0\u5b9e\u73b0-lower_bound-\u548c-upper_bound",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a sorted array of integers, find the starting and ending position of a given target value."),Object(o.b)("p",null,"Your algorithm's runtime complexity must be in the order of ",Object(o.b)("inlineCode",{parentName:"p"},"O(log n)"),"."),Object(o.b)("p",null,"If the target is not found in the array, return ",Object(o.b)("inlineCode",{parentName:"p"},"[-1, -1]"),"."),Object(o.b)("p",null,"For example,\nGiven ",Object(o.b)("inlineCode",{parentName:"p"},"[5, 7, 7, 8, 8, 10]")," and target value 8,\nreturn ",Object(o.b)("inlineCode",{parentName:"p"},"[3, 4]"),"."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u5df2\u7ecf\u6392\u597d\u4e86\u5e8f\uff0c\u7528\u4e8c\u5206\u67e5\u627e\u3002"),Object(o.b)("h3",{id:"\u91cd\u65b0\u5b9e\u73b0-lower_bound-\u548c-upper_bound"},"\u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Search for a Range\n// \u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        int lower = lower_bound(nums, 0, nums.length, target);\n        int upper = upper_bound(nums, 0, nums.length, target);\n\n        if (lower == nums.length || nums[lower] != target)\n            return new int[]{-1, -1};\n        else\n            return new int[]{lower, upper-1};\n    }\n\n    int lower_bound (int[] A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A[mid]) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n\n    int upper_bound (int[] A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target >= A[mid]) first = ++mid;  // \u4e0e lower_bound \u4ec5\u6b64\u4e0d\u540c\n            else                  last = mid;\n        }\n\n        return first;\n    }\n}\n"))),Object(o.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Search for a Range\n// \u91cd\u65b0\u5b9e\u73b0 lower_bound \u548c upper_bound\n// \u65f6\u95f4\u590d\u6742\u5ea6O(logn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> searchRange (vector<int>& nums, int target) {\n        auto lower = lower_bound(nums.begin(), nums.end(), target);\n        auto uppper = upper_bound(lower, nums.end(), target);\n\n        if (lower == nums.end() || *lower != target)\n            return vector<int> { -1, -1 };\n        else\n            return vector<int> {distance(nums.begin(), lower), distance(nums.begin(), prev(uppper))};\n    }\n\n    template<typename ForwardIterator, typename T>\n    ForwardIterator lower_bound (ForwardIterator first,\n            ForwardIterator last, T value) {\n        while (first != last) {\n            auto mid = next(first, distance(first, last) / 2);\n\n            if (value > *mid) first = ++mid;\n            else              last = mid;\n        }\n\n        return first;\n    }\n\n    template<typename ForwardIterator, typename T>\n    ForwardIterator upper_bound (ForwardIterator first,\n            ForwardIterator last, T value) {\n        while (first != last) {\n            auto mid = next(first, distance (first, last) / 2);\n\n            if (value >= *mid) first = ++mid;  // \u4e0e lower_bound \u4ec5\u6b64\u4e0d\u540c\n            else               last = mid;\n        }\n\n        return first;\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/search/search-insert-position"}),"Search Insert Position"))))}d.isMDXComponent=!0}}]);