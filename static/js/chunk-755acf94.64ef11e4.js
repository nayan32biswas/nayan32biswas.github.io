(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-755acf94"],{4265:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.post?n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[t.post.coverImage?n("img",{staticClass:"cover-image",attrs:{src:t.post.coverImage,alt:t.post.coverImage}}):t._e(),n("h1",{staticClass:"m-2"},[t._v(t._s(t.post.name))])]),n("div",{staticClass:"detail-description"},[t.post?n("VueShowdown",{attrs:{markdown:t.post.content}}):t._e()],1)]):t._e()},c=[],o=n("d4ec"),s=n("bee2"),r=n("262e"),i=n("2caf"),u=n("9ab4"),f=n("1b40"),p=n("3f71"),l=n("ba66"),d=function(t){Object(r["a"])(n,t);var e=Object(i["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.post=null,t}return Object(s["a"])(n,[{key:"fetchContent",value:function(){var t=this,e=this.$route.params.slug;this.fetchPost({slug:e}).then((function(e){t.post=e}))}},{key:"handleRouteChange",value:function(){this.fetchContent()}},{key:"mounted",value:function(){this.fetchContent()}}]),n}(f["c"]);Object(u["a"])([l["a"].Action(p["a"])],d.prototype,"fetchPost",void 0),Object(u["a"])([Object(f["d"])("$route",{deep:!0})],d.prototype,"handleRouteChange",null),d=Object(u["a"])([Object(f["a"])({components:{},name:"BlogDetails"})],d);var v=d,h=v,m=(n("eae3"),n("2877")),b=Object(m["a"])(h,a,c,!1,null,"60888bb6",null);e["default"]=b.exports},"4d6c":function(t,e,n){},ba66:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n("2fe1"),c=n("2f62"),o=f("computed",c["e"]),s=f("computed",c["c"]),r=f("methods",c["b"]),i=f("methods",c["d"]);function u(t,e){function n(e){function n(n,a){if("string"===typeof a){var c=a,o=n;return e(c,{namespace:t})(o,c)}var s=n,r=l(a||{},{namespace:t});return e(s,r)}return n}return e?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(e)):{State:n(o),Getter:n(s),Mutation:n(i),Action:n(r)}}function f(t,e){function n(n,c){return Object(a["a"])((function(a,o){a[t]||(a[t]={});var s,r=(s={},s[o]=n,s);a[t][o]=void 0!==c?e(c,r)[o]:e(r)[o]}))}function c(t,e){if("string"===typeof e){var a=e,c=t;return n(a,void 0)(c,a)}var o=p(e),s=t;return n(s,o)}return c}function p(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}function l(t,e){var n={};return[t,e].forEach((function(t){Object.keys(t).forEach((function(e){n[e]=t[e]}))})),n}var d="post",v=u(d)},eae3:function(t,e,n){"use strict";n("4d6c")}}]);