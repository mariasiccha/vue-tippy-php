(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{132:function(t,n,e){"use strict";e(72);var u=e(134),c=e(42),o=function(t){return Array.isArray(t)?t:[t]};function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{mount:!0},r=Object(c.i)(null),i=[],a=[],f=function(){var e,a,f=t;(Object(c.d)(t)&&(f=t.value),Array.isArray(t)&&(f=t.map(function(t){return Object(c.d)(t)?t.value:t})),f)&&(f._isVue&&(f=f.$el),Object(c.d)(n.content)&&Object(c.j)(n.content,function(t){r.value&&o(r.value).forEach(function(n){return n.setContent(t)})},{immediate:!1}),e=f,a=Object(c.h)(n),r.value=Object(u.a)(e,a),i.forEach(function(t){return t(r.value)}))};if(e.mount&&Object(c.f)(f),Object(c.g)(function(){r.value&&o(r.value).forEach(function(t){return t.destroy()}),a.forEach(function(t){return t()})}),Object(c.c)(n)||Object(c.d)(n)){var l=Object(c.c)(n)?function(){return n}:n;Object(c.j)(l,function(t){r.value&&o(r.value).forEach(function(n){return n.set(t)})},{immediate:!1,deep:!0})}return{mount:f,unmount:function(){r.value&&r.value.destroy()},onMount:function(t){i.push(t)},onUnmount:function(t){a.push(t)},tippy:r}}e.d(n,"a",function(){return r})},242:function(t,n,e){"use strict";e.r(n);var u=e(42),c=e(132),o={setup:function(){var t=Object(u.i)(null),n=Object(u.i)(null);return Object(c.a)(t,{content:n}),{btn:t,content:n}}},r=e(6),i=Object(r.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mt-4 mb-4"},[n("button",{ref:"btn",staticClass:"btn"},[this._v("Composition API")]),this._v(" "),n("div",{ref:"content"},[this._v("WHAAAT!")])])},[],!1,null,null,null);n.default=i.exports}}]);