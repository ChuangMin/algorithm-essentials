(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{338:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return d}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),b=function(e){var a=l.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=b(e.components);return l.a.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},m=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),i=b(t),m=n,d=i["".concat(c,".").concat(m)]||i[m]||s[m]||r;return t?l.a.createElement(d,p(p({ref:a},o),{},{components:t})):l.a.createElement(d,p({ref:a},o))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=m;var p={};for(var u in a)hasOwnProperty.call(a,u)&&(p[u]=a[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var o=2;o<r;o++)c[o]=t[o];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},339:function(e,a,t){"use strict";function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}a.a=function(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}},340:function(e,a,t){"use strict";var n=t(0),l=t(341);a.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,a,t){"use strict";var n=t(0),l=Object(n.createContext)(void 0);a.a=l},342:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(340),c=t(339),p=t(49),u=t.n(p),o=37,b=39;a.a=function(e){var a=e.block,t=e.children,p=e.defaultValue,i=e.values,s=e.groupId,m=e.className,d=Object(r.a)(),O=d.tabGroupChoices,y=d.setTabGroupChoices,j=Object(n.useState)(p),v=j[0],h=j[1],f=Object(n.useState)(!1),g=f[0],T=f[1];if(null!=s){var x=O[s];null!=x&&x!==v&&i.some((function(e){return e.value===x}))&&h(x)}var N=function(e){h(e),null!=s&&y(s,e)},q=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},I=function(){T(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",w),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",w),window.removeEventListener("mousedown",I)}}),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},m)},i.map((function(e){var a=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===a,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===a}),style:g?{}:{outline:"none"},key:a,ref:function(e){return q.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case b:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case o:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(q,e.target,e),w(e)},onFocus:function(){return N(a)},onClick:function(){N(a),T(!1)},onPointerDown:function(){return T(!1)}},t)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}},343:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("div",null,e.children)}},68:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return u})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return s}));var n=t(2),l=t(7),r=(t(0),t(338)),c=t(342),p=t(343),u={title:"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784"},o={unversionedId:"data-structures",id:"data-structures",isDocsHomePage:!1,title:"\u6700\u5e38\u7528\u7684\u6570\u636e\u7ed3\u6784",description:"\u5b9a\u957f\u6570\u7ec4",source:"@site/docs/data-structures.md",slug:"/data-structures",permalink:"/data-structures",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/data-structures.md",version:"current",sidebar:"someSidebar",previous:{title:"\u7b97\u6cd5\u73e0\u7391 \u2014\u2014 \u4e3e\u4e00\u53cd\u4e09\uff0c\u4ee5\u5c11\u80dc\u591a\uff0c\u544a\u522b\u9898\u6d77\u6218\u672f",permalink:"/"},next:{title:"Remove Duplicates from Sorted Array",permalink:"/linear-list/array/remove-duplicates-from-sorted-array"}},b=[{value:"\u5b9a\u957f\u6570\u7ec4",id:"\u5b9a\u957f\u6570\u7ec4",children:[]},{value:"\u52a8\u6001\u6570\u7ec4",id:"\u52a8\u6001\u6570\u7ec4",children:[]},{value:"\u5355\u94fe\u8868",id:"\u5355\u94fe\u8868",children:[]},{value:"\u53cc\u5411\u94fe\u8868",id:"\u53cc\u5411\u94fe\u8868",children:[]},{value:"\u6808",id:"\u6808",children:[]},{value:"\u961f\u5217",id:"\u961f\u5217",children:[]},{value:"\u4f18\u5148\u961f\u5217\uff08\u5806\uff09",id:"\u4f18\u5148\u961f\u5217\uff08\u5806\uff09",children:[]},{value:"HashMap",id:"hashmap",children:[]},{value:"HashSet",id:"hashset",children:[]}],i={rightToc:b};function s(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u5b9a\u957f\u6570\u7ec4"},"\u5b9a\u957f\u6570\u7ec4"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"arr = [0] * 10\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"int[] arr = new int[10];\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"vector<int> arr(10);\n")))),Object(r.b)("h3",{id:"\u52a8\u6001\u6570\u7ec4"},"\u52a8\u6001\u6570\u7ec4"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"l = []\n# Add a new element at tail\nl.append(1)\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"List<Integer> l = new ArrayList<>();\n// Add a new element at tail\nl.add(1);\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"vector<int> l;\n// Add a new element at tail\nl.push_back(1);\n")))),Object(r.b)("h3",{id:"\u5355\u94fe\u8868"},"\u5355\u94fe\u8868"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# To mimic singly linked list, always operate at head\nl = deque()\n# insert at head, time complexity O(1)\nl.appendleft(7)\n# access head, time complexity O(1)\nl[0]\n# remove head, time complexity O(1)\nl.popleft()\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// LinkedList is actually a doubly-linked list, to mimic singly linked list, always operate at head\nLinkedList<Integer> l = new LinkedList<>();\n// insert at head, time complexity O(1)\nl.offerFirst(7)\n// access head, time complexity O(1)\nl.peekFirst()\n// remove head, time complexity O(1)\nl.pollFirst()\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// std::list uses std::deque by default, to mimic singly linked list, always operate at head\nlist<int> l;\n// insert at head, time complexity O(1)\nl.push_front(7);\n// access head, time complexity O(1)\nl.front();\n// remove head, time complexity O(1)\nl.pop_front();\n")))),Object(r.b)("h3",{id:"\u53cc\u5411\u94fe\u8868"},"\u53cc\u5411\u94fe\u8868"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"q = deque()\n# insert at tail, time complexity O(1)\nq.push(7)\n# access tail, time complexity O(1)\nq[-1]\n# remove tail, time complexity O(1)\nq.pop()\n# insert at head, time complexity O(1)\nq.pushleft(7)\n# access head, time complexity O(1)\nq[0]\n# remove head, time complexity O(1)\nq.popleft()\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Deque<Integer> q = new ArrayDeque<>();\n// insert at tail, time complexity O(1)\nq.offerLast(7)\n// access tail, time complexity O(1)\nq.peekLast()\n// remove tail, time complexity O(1)\nq.pollLast()\n// insert at head, time complexity O(1)\nq.offerFirst(7)\n// access head, time complexity O(1)\nq.peekFirst()\n// remove head, time complexity O(1)\nq.pollFirst()\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"deque<int> q;\n// insert at tail, time complexity O(1)\nq.push_back(7)\n// access tail, time complexity O(1)\nq.back()\n// remove tail, time complexity O(1)\nq.pop_back()\n// insert at head, time complexity O(1)\nq.push_front(7)\n// access head, time complexity O(1)\nq.front()\n// remove head, time complexity O(1)\nq.pop_front()\n")))),Object(r.b)("h3",{id:"\u6808"},"\u6808"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# To mimic stack, always operate at tail\ns = deque()\ns.append(7)\ns[-1]\ns.pop()\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Stack<Integer> s = new Stack<>();\ns.push(7)\ns.peek();\ns.pop()\ns.empty()\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"stack<int>  s;\ns.push(7)\ns.top();\ns.pop()\n")))),Object(r.b)("h3",{id:"\u961f\u5217"},"\u961f\u5217"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# To mimic a FIFO queue, push at tail, pop at head\nq = deque()\nq.append(7)\nq[0]\nq.popleft()\nlen(q) == 0\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Queue<Integer> q = new LinkedList<>();\nq.offer(7);\nq.peek();\nq.poll();\nq.isEmpty();\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"queue<int> q;\ns.push_back(7)\ns.front();\ns.pop_front();\ns.empty()\n")))),Object(r.b)("h3",{id:"\u4f18\u5148\u961f\u5217\uff08\u5806\uff09"},"\u4f18\u5148\u961f\u5217\uff08\u5806\uff09"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# min heap by default\npq = []\nheapq.heappush(pq, 7)\npq[0]\nheapq.heappop(pq)\nlen(pq) == 0\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// min heap by default\nPriorityQueue<Integer> pq = new PriorityQueue<>();\npq.offer(7);\npq.peek();\npq.poll();\npq.isEmpty();\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// max heap by default\npriority_queue<int> pq;\npq.push(7)\npq.top();\npq.pop();\npq.empty()\n")))),Object(r.b)("h3",{id:"hashmap"},"HashMap"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"m = {}\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Map<String, Integer> m = new HashMap<>();\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"unordered_map<string, int> m;\n")))),Object(r.b)("h3",{id:"hashset"},"HashSet"),Object(r.b)(c.a,{defaultValue:"python",groupId:"data-structures",values:[{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"s = set()\n"))),Object(r.b)(p.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Set<Integer> m = new HashSet<>();\n"))),Object(r.b)(p.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"unordered_set<int> s;\n")))))}s.isMDXComponent=!0}}]);