(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{327:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},328:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},329:function(e,t,n){"use strict";var a=n(0),r=n(330);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},330:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},331:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(329),l=n(328),c=n(49),s=n.n(c),o=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),O=d.tabGroupChoices,f=d.setTabGroupChoices,j=Object(a.useState)(c),w=j[0],y=j[1],h=Object(a.useState)(!1),N=h[0],v=h[1];if(null!=u){var g=O[u];null!=g&&g!==w&&p.some((function(e){return e.value===g}))&&y(g)}var k=function(e){y(e),null!=u&&f(u,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},L=function(){v(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",L),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",L)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":w===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return k(t)},onClick:function(){k(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===w}))[0]))}},332:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),i=(n(0),n(327)),l=n(331),c=n(332),s={title:"Linked List Cycle II"},o={unversionedId:"linear-list/linked-list/linked-list-cycle-ii",id:"linear-list/linked-list/linked-list-cycle-ii",isDocsHomePage:!1,title:"Linked List Cycle II",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/linked-list-cycle-ii.md",slug:"/linear-list/linked-list/linked-list-cycle-ii",permalink:"/linear-list/linked-list/linked-list-cycle-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/linked-list-cycle-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Linked List Cycle",permalink:"/linear-list/linked-list/linked-list-cycle"},next:{title:"Reorder List",permalink:"/linear-list/linked-list/reorder-list"}},b=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a linked list, return the node where the cycle begins. If there is no cycle, return ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"."),Object(i.b)("p",null,"Follow up:\nCan you solve it without using extra space?"),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u5f53 fast \u4e0e slow \u76f8\u9047\u65f6\uff0cslow \u80af\u5b9a\u6ca1\u6709\u904d\u5386\u5b8c\u94fe\u8868\uff0c\u800c fast \u5df2\u7ecf\u5728\u73af\u5185\u5faa\u73af\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"n"),"\u5708(",Object(i.b)("span",Object(a.a)({parentName:"p"},{className:"math math-inline"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mn",{parentName:"mrow"},"1"),Object(i.b)("mo",{parentName:"mrow"},"\u2264"),Object(i.b)("mi",{parentName:"mrow"},"n")),Object(i.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"1 \\leq n")))),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.78041em",verticalAlign:"-0.13597em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),"1"),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mrel"}),"\u2264"),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}})),Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal"}),"n"))))),")\u3002\u5047\u8bbe slow \u8d70\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"s"),"\u6b65\uff0c\u5219 fast \u8d70\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"2s"),"\u6b65\uff08fast \u6b65\u6570\u8fd8\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"s"),"\u52a0\u4e0a\u5728\u73af\u4e0a\u591a\u8f6c\u7684",Object(i.b)("inlineCode",{parentName:"p"},"n"),"\u5708\uff09\uff0c\u8bbe\u73af\u957f\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"r"),"\uff0c\u5219\uff1a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"2s = s + nr")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"s = nr")),Object(i.b)("p",null,"\u8bbe\u6574\u4e2a\u94fe\u8868\u957f",Object(i.b)("inlineCode",{parentName:"p"},"L"),"\uff0c\u73af\u5165\u53e3\u70b9\u4e0e\u76f8\u9047\u70b9\u8ddd\u79bb\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"a"),"\uff0c\u8d77\u70b9\u5230\u73af\u5165\u53e3\u70b9\u7684\u8ddd\u79bb\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"x"),"\uff0c\u5219"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"x + a = nr = (n \u2013 1)r +r = (n-1)r + L - x")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"x = (n-1)r + (L \u2013 x \u2013 a)")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"L \u2013 x \u2013 a"),"\u4e3a\u76f8\u9047\u70b9\u5230\u73af\u5165\u53e3\u70b9\u7684\u8ddd\u79bb\uff0c\u7531\u6b64\u53ef\u77e5\uff0c\u4ece\u94fe\u8868\u5934\u5230\u73af\u5165\u53e3\u70b9\u7b49\u4e8e",Object(i.b)("inlineCode",{parentName:"p"},"n-1"),"\u5708\u5185\u73af+\u76f8\u9047\u70b9\u5230\u73af\u5165\u53e3\u70b9\uff0c\u4e8e\u662f\u6211\u4eec\u53ef\u4ee5\u4ece",Object(i.b)("inlineCode",{parentName:"p"},"head"),"\u5f00\u59cb\u53e6\u8bbe\u4e00\u4e2a\u6307\u9488",Object(i.b)("inlineCode",{parentName:"p"},"slow2"),"\uff0c\u4e24\u4e2a\u6162\u6307\u9488\u6bcf\u6b21\u524d\u8fdb\u4e00\u6b65\uff0c\u5b83\u4fe9\u4e00\u5b9a\u4f1a\u5728\u73af\u5165\u53e3\u70b9\u76f8\u9047\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Linked List Cycle II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode detectCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) {\n                ListNode slow2 = head;\n\n                while (slow2 != slow) {\n                    slow2 = slow2.next;\n                    slow = slow.next;\n                }\n                return slow2;\n            }\n        }\n        return null;\n    }\n}\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Linked List Cycle II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *detectCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while (fast && fast->next) {\n            slow = slow->next;\n            fast = fast->next->next;\n            if (slow == fast) {\n                ListNode *slow2 = head;\n\n                while (slow2 != slow) {\n                    slow2 = slow2->next;\n                    slow = slow->next;\n                }\n                return slow2;\n            }\n        }\n        return nullptr;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/linear-list/linked-list/linked-list-cycle"}),"Linked List Cycle")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/linear-list/linked-list/intersection-of-two-linked-lists"}),"Intersection of Two Linked Lists"))))}u.isMDXComponent=!0}}]);