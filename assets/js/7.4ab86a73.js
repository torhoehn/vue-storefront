(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(t,s,e){t.exports=e.p+"assets/img/chrome-dev-console.3c88272d.png"},202:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"working-with-service-workers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-service-workers","aria-hidden":"true"}},[this._v("#")]),this._v(" Working with Service Workers")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"making-things-happen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#making-things-happen","aria-hidden":"true"}},[this._v("#")]),this._v(" Making things happen")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The service-worker source code for "),e("code",[t._v("vue-storefront")]),t._v(" is pre-compiled with Babel presets and all is stored in additional theme-specific Service Worker in "),e("code",[t._v("src/{themename}/service-worker/index.js")]),t._v(". This file is attached to "),e("code",[t._v("service-worker.js")]),t._v(" generated by "),e("code",[t._v("sw-toolbox")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("After changing anything in "),s("code",[this._v("{themename}/service-worker/index.js")]),this._v(", despite you're in "),s("code",[this._v("yarn dev")]),this._v(" auto reloading mode, you need to do two things:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("Recompile app (which regenerates service-worker):\n"),s("code",[this._v("yarn build")])])]),this._v(" "),s("li",[s("p",[this._v("Reload Service worker in Dev Tools (in Chrome - just click "),s("strong",[this._v('"Unregister"')]),this._v(" and reload the page, new SW will be installed).")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(151),alt:"How to work with service-workers in Chrome"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"communication-with-the-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#communication-with-the-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Communication with the app")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Application can speak to service worker using the event bus - and only doing so. Please take a look at "),s("code",[this._v("/core/lib/sw.js")]),this._v(" where we have following method:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceWorker'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" navigator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check if it's properly installed")]),t._v("\n    navigator"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no service workers supported push the queue manualy")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It allows you to send data to service worker. For example, when the order is placed ("),s("code",[this._v("/core/store/modules/checkout")]),this._v("):")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Add order to sync. queue\n   * @param {Object} product data format for products is described in /doc/ElasticSearch data formats.md\n   */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("types"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHECKOUT_PLACE_ORDER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ordersCollection "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ordersCollection\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" orderId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entities"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("uniqueEntityId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// timestamp as a order id is not the best we can do but it's enough")]),t._v("\n    order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orderId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transmited "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("created_at "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updated_at "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    ordersCollection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orderId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" order"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it doesn't work on SSR")]),t._v("\n      sw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" command"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" types"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHECKOUT_PROCESS_QUEUE")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// process checkout queue")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Order placed, orderId = '")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" orderId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// populate cache")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])}],n=e(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("We're using service workers for two main purposes:")]),t._v(" "),e("ol",[e("li",[t._v("To cache out static and dynamic data feeds - to make them "),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("available offline"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("To run offline data sync using service workers")])]),t._v(" "),e("p",[t._v("To achieve the first point, we're using "),e("a",{attrs:{href:"https://github.com/GoogleChromeLabs/sw-precache",target:"_blank",rel:"noopener noreferrer"}},[t._v("sw-precache"),e("OutboundLink")],1),t._v(" from Google and for the second - Vanilla JS with a little help from "),e("a",{attrs:{href:"https://www.google.pl/search?q=sw-toolbox&oq=sw-toolbox&aqs=chrome..69i57j69i60l3j0l2.1529j0j4&sourceid=chrome&ie=UTF-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("sw-toolbox"),e("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10)])},a,!1,null,null,null);r.options.__file="service-workers.md";s.default=r.exports}}]);