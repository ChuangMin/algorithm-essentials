(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(7),a=(n(0),n(328)),i=n(332),u=n(333),c={title:"Sum Root to Leaf Numbers"},l={unversionedId:"binary-tree/recursion/sum-root-to-leaf-numbers",id:"binary-tree/recursion/sum-root-to-leaf-numbers",isDocsHomePage:!1,title:"Sum Root to Leaf Numbers",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/sum-root-to-leaf-numbers.md",slug:"/binary-tree/recursion/sum-root-to-leaf-numbers",permalink:"/binary-tree/recursion/sum-root-to-leaf-numbers",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/sum-root-to-leaf-numbers.md",version:"current",sidebar:"someSidebar",previous:{title:"Populating Next Right Pointers in Each Node",permalink:"/binary-tree/recursion/populating-next-right-pointers-in-each-node"},next:{title:"LCA of Binary Tree",permalink:"/binary-tree/recursion/lca-of-binary-tree"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a binary tree containing digits from ",Object(a.b)("inlineCode",{parentName:"p"},"0-9")," only, each root-to-leaf path could represent a number."),Object(a.b)("p",null,"An example is the root-to-leaf path ",Object(a.b)("inlineCode",{parentName:"p"},"1->2->3")," which represents the number ",Object(a.b)("inlineCode",{parentName:"p"},"123"),"."),Object(a.b)("p",null,"Find the total sum of all root-to-leaf numbers."),Object(a.b)("p",null,"For example,"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"    1\n   / \\\n  2   3\n")),Object(a.b)("p",null,"The root-to-leaf path ",Object(a.b)("inlineCode",{parentName:"p"},"1->2")," represents the number ",Object(a.b)("inlineCode",{parentName:"p"},"12"),".\nThe root-to-leaf path ",Object(a.b)("inlineCode",{parentName:"p"},"1->3")," represents the number ",Object(a.b)("inlineCode",{parentName:"p"},"13"),"."),Object(a.b)("p",null,"Return the sum = ",Object(a.b)("inlineCode",{parentName:"p"},"12 + 13 = 25"),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u65e0"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(u.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Sum root to leaf numbers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public int sumNumbers(TreeNode root) {\n        return dfs(root, 0);\n    }\n    private static int dfs(TreeNode root, int sum) {\n        if (root == null) return 0;\n        if (root.left == null && root.right == null)\n            return sum * 10 + root.val;\n\n        return dfs(root.left, sum * 10 + root.val) +\n                dfs(root.right, sum * 10 + root.val);\n    }\n}\n"))),Object(a.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Sum root to leaf numbers\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    int sumNumbers(TreeNode *root) {\n        return dfs(root, 0);\n    }\nprivate:\n    int dfs(TreeNode *root, int sum) {\n        if (root == nullptr) return 0;\n        if (root->left == nullptr && root->right == nullptr)\n            return sum * 10 + root->val;\n\n        return dfs(root->left, sum * 10 + root->val) +\n                dfs(root->right, sum * 10 + root->val);\n    }\n};\n")))))}p.isMDXComponent=!0},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),f=r,m=b["".concat(i,".").concat(f)]||b[f]||p[f]||a;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},329:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},330:function(e,t,n){"use strict";var r=n(0),o=n(331);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},331:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},332:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(330),i=n(329),u=n(49),c=n.n(u),l=37,s=39;t.a=function(e){var t=e.block,n=e.children,u=e.defaultValue,b=e.values,p=e.groupId,f=e.className,m=Object(a.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(r.useState)(u),y=O[0],j=O[1],h=Object(r.useState)(!1),g=h[0],w=h[1];if(null!=p){var N=d[p];null!=N&&N!==y&&b.some((function(e){return e.value===N}))&&j(N)}var C=function(e){j(e),null!=p&&v(p,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},E=function(){w(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",E)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),x(e)},onFocus:function(){return C(t)},onClick:function(){C(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},333:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);