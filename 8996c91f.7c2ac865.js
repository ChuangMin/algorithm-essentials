(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(6),o=(t(0),t(298)),a={title:"\u7b80\u4ecb"},c={unversionedId:"sorting/counting-sort/README",id:"sorting/counting-sort/README",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"\u8ba1\u6570\u6392\u5e8f(Counting Sort)\u662f\u4e00\u79cdO(n)\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u601d\u8def\u662f\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3amaxValue-minValue+1\u7684\u6570\u7ec4\uff0c\u7136\u540e",source:"@site/docs/sorting/counting-sort/README.md",slug:"/sorting/counting-sort/README",permalink:"/sorting/counting-sort/README",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/counting-sort/README.md",version:"current",sidebar:"someSidebar",previous:{title:"First Missing Positive",permalink:"/sorting/bucket-sort/first-missing-positive"},next:{title:"H-Index",permalink:"/sorting/counting-sort/h-index"}},l=[],u={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u8ba1\u6570\u6392\u5e8f"),"(Counting Sort)\u662f\u4e00\u79cdO(n)\u7684\u6392\u5e8f\u7b97\u6cd5\uff0c\u5176\u601d\u8def\u662f\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"maxValue-minValue+1"),"\u7684\u6570\u7ec4\uff0c\u7136\u540e"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5206\u914d\u3002\u626b\u63cf\u4e00\u904d\u539f\u59cb\u6570\u7ec4\uff0c\u4ee5\u5f53\u524d\u503c-",Object(o.b)("inlineCode",{parentName:"li"},"minValue"),"\u4f5c\u4e3a\u4e0b\u6807\uff0c\u5c06\u8be5\u4e0b\u6807\u7684\u8ba1\u6570\u5668\u589e1\u3002"),Object(o.b)("li",{parentName:"ol"},"\u6536\u96c6\u3002\u626b\u63cf\u4e00\u904d\u8ba1\u6570\u5668\u6570\u7ec4\uff0c\u6309\u987a\u5e8f\u628a\u503c\u6536\u96c6\u8d77\u6765\u3002")),Object(o.b)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"nums=[2, 1, 3, 1, 5]"),", \u9996\u5148\u626b\u63cf\u4e00\u904d\u83b7\u53d6\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"maxValue=5"),", ",Object(o.b)("inlineCode",{parentName:"p"},"minValue=1"),"\uff0c\u4e8e\u662f\u5f00\u4e00\u4e2a\u957f\u5ea6\u4e3a5\u7684\u8ba1\u6570\u5668\u6570\u7ec4",Object(o.b)("inlineCode",{parentName:"p"},"counter"),"\uff0c"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u5206\u914d\u3002\u7edf\u8ba1\u6bcf\u4e2a\u5143\u7d20\u51fa\u73b0\u7684\u9891\u7387\uff0c\u5f97\u5230",Object(o.b)("inlineCode",{parentName:"li"},"counter=[2, 1, 1, 0, 1]"),"\uff0c\u4f8b\u5982",Object(o.b)("inlineCode",{parentName:"li"},"counter[0]"),"\u8868\u793a\u503c",Object(o.b)("inlineCode",{parentName:"li"},"0+minValue=1"),"\u51fa\u73b0\u4e862\u6b21\u3002"),Object(o.b)("li",{parentName:"ol"},"\u6536\u96c6\u3002",Object(o.b)("inlineCode",{parentName:"li"},"counter[0]=2"),"\u8868\u793a",Object(o.b)("inlineCode",{parentName:"li"},"1"),"\u51fa\u73b0\u4e86\u4e24\u6b21\uff0c\u90a3\u5c31\u5411\u539f\u59cb\u6570\u7ec4\u5199\u5165\u4e24\u4e2a1\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"counter[1]=1"),"\u8868\u793a",Object(o.b)("inlineCode",{parentName:"li"},"2"),"\u51fa\u73b0\u4e861\u6b21\uff0c\u90a3\u5c31\u5411\u539f\u59cb\u6570\u7ec4\u5199\u5165\u4e00\u4e2a2\uff0c\u4f9d\u6b21\u7c7b\u63a8\uff0c\u6700\u7ec8\u539f\u59cb\u6570\u7ec4\u53d8\u4e3a",Object(o.b)("inlineCode",{parentName:"li"},"[1,1,2,3,5]"),"\uff0c\u6392\u5e8f\u597d\u4e86\u3002")),Object(o.b)("p",null,"\u8ba1\u6570\u6392\u5e8f\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6876\u6392\u5e8f\uff0c\u5f53\u6876\u7684\u4e2a\u6570\u6700\u5927\u7684\u65f6\u5019\uff0c\u5c31\u662f\u8ba1\u6570\u6392\u5e8f\u3002"))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return O}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,O=b["".concat(a,".").concat(m)]||b[m]||s[m]||o;return t?i.a.createElement(O,c(c({ref:n},u),{},{components:t})):i.a.createElement(O,c({ref:n},u))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);