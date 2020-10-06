(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(298)),i={title:"LCA of Binary Tree"},c={unversionedId:"binary-tree/recursion/lca-of-binary-tree",id:"binary-tree/recursion/lca-of-binary-tree",isDocsHomePage:!1,title:"LCA of Binary Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/lca-of-binary-tree.md",slug:"/binary-tree/recursion/lca-of-binary-tree",permalink:"/binary-tree/recursion/lca-of-binary-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/lca-of-binary-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"Sum Root to Leaf Numbers",permalink:"/binary-tree/recursion/sum-root-to-leaf-numbers"},next:{title:"Range Sum Query - Mutable",permalink:"/binary-tree/segment-tree/range-sum-query-mutable"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree."),Object(a.b)("p",null,"According to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor"}),"the definition of LCA on Wikipedia"),": \u201cThe lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow ",Object(a.b)("strong",{parentName:"p"},"a node to be a descendant of itself"),").\u201d"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"        _______3______\n       /              \\\n    ___5__          ___1__\n   /      \\        /      \\\n   6      _2       0       8\n         /  \\\n         7   4\n")),Object(a.b)("p",null,"For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u7528\u81ea\u5e95\u5411\u4e0a(bottom-up)\u7684\u601d\u8def\uff0c\u5148\u770b\u770b\u662f\u5426\u80fd\u5728",Object(a.b)("inlineCode",{parentName:"p"},"root"),"\u7684\u5de6\u5b50\u6811\u4e2d\u627e\u5230",Object(a.b)("inlineCode",{parentName:"p"},"p"),"\u6216",Object(a.b)("inlineCode",{parentName:"p"},"q"),"\uff0c\u518d\u770b\u770b\u80fd\u5426\u5728\u53f3\u5b50\u6811\u4e2d\u627e\u5230\uff0c"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u8fb9\u90fd\u80fd\u627e\u5230\uff0c\u8bf4\u660e\u5f53\u524d\u8282\u70b9\u5c31\u662f\u6700\u8fd1\u516c\u5171\u7956\u5148"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u5de6\u8fb9\u6ca1\u627e\u5230\uff0c\u5219\u8bf4\u660e",Object(a.b)("inlineCode",{parentName:"li"},"p"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"q"),"\u90fd\u5728\u53f3\u5b50\u6811"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u53f3\u8fb9\u6ca1\u627e\u5230\uff0c\u5219\u8bf4\u660e",Object(a.b)("inlineCode",{parentName:"li"},"p"),"\u548c",Object(a.b)("inlineCode",{parentName:"li"},"q"),"\u90fd\u5728\u5de6\u5b50\u6811")),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Lowest Common Ancestor of a Binary Tree\n// Time complexity: O(n), Space complexity: O(h)\npublic class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        // if root is null or found p or q\n        if (root == null || root == p || root == q) return root;\n        // find p or q in the left subtree\n        final TreeNode left = lowestCommonAncestor(root.left, p, q);\n        // find p or q in the right subtree\n        final TreeNode right = lowestCommonAncestor(root.right, p, q);\n        if (left != null && right != null) return root;\n        else return left == null ? right : left;\n    }\n}\n")),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/binary-tree/bst/lca-of-bst"}),"LCA of BST"))))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||s[d]||a;return n?o.a.createElement(f,c(c({ref:t},b),{},{components:n})):o.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);