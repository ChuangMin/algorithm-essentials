(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),o=(n(0),n(298)),l=n(302),i=n(303),c={title:"Flatten Binary Tree to Linked List"},u={unversionedId:"binary-tree/traversal/flatten-binary-tree-to-linked-list",id:"binary-tree/traversal/flatten-binary-tree-to-linked-list",isDocsHomePage:!1,title:"Flatten Binary Tree to Linked List",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/flatten-binary-tree-to-linked-list.md",slug:"/binary-tree/traversal/flatten-binary-tree-to-linked-list",permalink:"/binary-tree/traversal/flatten-binary-tree-to-linked-list",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/flatten-binary-tree-to-linked-list.md",version:"current",sidebar:"someSidebar",previous:{title:"Balanced Binary Tree",permalink:"/binary-tree/traversal/balanced-binary-tree"},next:{title:"Populating Next Right Pointers in Each Node II",permalink:"/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248 1",id:"\u9012\u5f52\u7248-1",children:[]},{value:"\u9012\u5f52\u7248 2",id:"\u9012\u5f52\u7248-2",children:[]}],b={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a binary tree, flatten it to a linked list in-place."),Object(o.b)("p",null,"For example, Given"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"         1\n        / \\\n       2   5\n      / \\   \\\n     3   4   6\n")),Object(o.b)("p",null,"The flattened tree should look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"   1\n    \\\n     2\n      \\\n       3\n        \\\n         4\n          \\\n           5\n            \\\n             6\n")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u65e0"),Object(o.b)("h3",{id:"\u9012\u5f52\u7248-1"},"\u9012\u5f52\u7248 1"),Object(o.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72481\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public void flatten(TreeNode root) {\n        if (root == null) return;  // \u7ec8\u6b62\u6761\u4ef6\n\n        flatten(root.left);\n        flatten(root.right);\n\n        if (root.left == null) return;\n\n        // \u4e09\u65b9\u5408\u5e76\uff0c\u5c06\u5de6\u5b50\u6811\u6240\u5f62\u6210\u7684\u94fe\u8868\u63d2\u5165\u5230root\u548croot->right\u4e4b\u95f4\n        TreeNode p = root.left;\n        while(p.right != null) p = p.right; //\u5bfb\u627e\u5de6\u94fe\u8868\u6700\u540e\u4e00\u4e2a\u8282\u70b9\n        p.right = root.right;\n        root.right = root.left;\n        root.left = null;\n    }\n}\n"))),Object(o.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72481\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    void flatten(TreeNode *root) {\n        if (root == nullptr) return;  // \u7ec8\u6b62\u6761\u4ef6\n\n        flatten(root->left);\n        flatten(root->right);\n\n        if (nullptr == root->left) return;\n\n        // \u4e09\u65b9\u5408\u5e76\uff0c\u5c06\u5de6\u5b50\u6811\u6240\u5f62\u6210\u7684\u94fe\u8868\u63d2\u5165\u5230root\u548croot->right\u4e4b\u95f4\n        TreeNode *p = root->left;\n        while(p->right) p = p->right; //\u5bfb\u627e\u5de6\u94fe\u8868\u6700\u540e\u4e00\u4e2a\u8282\u70b9\n        p->right = root->right;\n        root->right = root->left;\n        root->left = nullptr;\n    }\n};\n")))),Object(o.b)("h3",{id:"\u9012\u5f52\u7248-2"},"\u9012\u5f52\u7248 2"),Object(o.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72482\n// @author \u738b\u987a\u8fbe(http://weibo.com/u/1234984145)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public void flatten(TreeNode root) {\n        flatten(root, null);\n    }\n    // \u628aroot\u6240\u4ee3\u8868\u6811\u53d8\u6210\u94fe\u8868\u540e\uff0ctail\u8ddf\u5728\u8be5\u94fe\u8868\u540e\u9762\n    private static TreeNode flatten(TreeNode root, TreeNode tail) {\n        if (root == null) return tail;\n\n        root.right = flatten(root.left, flatten(root.right, tail));\n        root.left = null;\n        return root;\n    }\n}\n"))),Object(o.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Flatten Binary Tree to Linked List\n// \u9012\u5f52\u72482\n// @author \u738b\u987a\u8fbe(http://weibo.com/u/1234984145)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    void flatten(TreeNode *root) {\n        flatten(root, NULL);\n    }\nprivate:\n    // \u628aroot\u6240\u4ee3\u8868\u6811\u53d8\u6210\u94fe\u8868\u540e\uff0ctail\u8ddf\u5728\u8be5\u94fe\u8868\u540e\u9762\n    TreeNode *flatten(TreeNode *root, TreeNode *tail) {\n        if (NULL == root) return tail;\n\n        root->right = flatten(root->left, flatten(root->right, tail));\n        root->left = NULL;\n        return root;\n    }\n};\n")))))}f.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,d=b["".concat(l,".").concat(p)]||b[p]||f[p]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},300:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},301:function(e,t,n){"use strict";var r=n(0),a=n(300);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(301),l=n(299),i=n(47),c=n.n(i),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,b=e.values,f=e.groupId,p=Object(o.a)(),d=p.tabGroupChoices,v=p.setTabGroupChoices,m=Object(r.useState)(i),y=m[0],O=m[1],j=Object(r.useState)(!1),h=j[0],g=j[1];if(null!=f){var T=d[f];null!=T&&T!==y&&b.some((function(e){return e.value===T}))&&O(T)}var w=function(e){O(e),null!=f&&v(f,e)},N=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",x)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),k(e)},onFocus:function(){return w(t)},onClick:function(){w(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);