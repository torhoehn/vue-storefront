(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{167:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This module contains all the logic, components and store related to the user account")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("A component to handle redirects to user account page and user logout. Usually used in header.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("User Store is designed to handle all actions related to the user account.\nAll user related data is stored in the original eCommerce CMS/Magento and the modifying actions are executed directly against the platform API.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),s("p",[t._v("The user state data:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("token")]),t._v(" - this is the current user token got from the "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L64",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("user/login")]),s("OutboundLink")],1),t._v(". It's used to authorize all subsequent calls with the current user identity. If this token is not empty it does mean that the user is authorized.")]),t._v(" "),s("li",[s("code",[t._v("current")]),t._v(" - this is the current user object received from "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L105",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("user/me")]),s("OutboundLink")],1),t._v(" - immediately called after the login action.")])]),t._v(" "),s("p",[t._v("The user data format:")]),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),s("ul",[s("li",[s("code",[t._v("EventBus.$emit('session-after-started')")]),t._v(" - executed just "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L22",target:"_blank",rel:"noopener noreferrer"}},[t._v("after the application has been loaded"),s("OutboundLink")],1),t._v(" and the User UI session has started")]),t._v(" "),s("li",[s("code",[t._v("EventBus.$emit('user-after-loggedin', res)")]),t._v(" - executed after the successful "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/fabea12dd6ab4f8824b58812b0cfdabce94cde70/core/store/modules/user/actions.js#L123",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("user/me")]),t._v(" action call"),s("OutboundLink")],1),t._v(" - so the user has been authorized and the profile loaded")])]),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("The user store provides the following public actions:")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),s("p",[t._v("Registers the user account in the eCommerce platform / Magento.")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("This action is used to update various user profile data. Please check the "),s("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront/blob/master/core/store/modules/user/userProfile.schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("user schema"),s("OutboundLink")],1),t._v(" for the data format details.")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("This is used to log out the user, close the session and clear the user token. Please notice - the current shopping cart is closed after this call.")]),t._v(" "),t._m(39),t._v(" "),s("p",[t._v("All state members should have been accessed only by getters. Please take a look at the state reference for data formats")]),t._v(" "),t._m(40)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"user-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-module","aria-hidden":"true"}},[this._v("#")]),this._v(" User Module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[this._v("#")]),this._v(" Components")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"accountbutton"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accountbutton","aria-hidden":"true"}},[this._v("#")]),this._v(" AccountButton")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Computed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("isLoggedIn")]),this._v(" - represents if user is logged in;")]),this._v(" "),e("li",[e("code",[this._v("user")]),this._v(" - current user.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Methods")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("goToAccount")]),this._v(" - is user is logged in, redirects user to account page. Otherwise shows sign-up modal")]),this._v(" "),e("li",[e("code",[this._v("logout")]),this._v(" - emits "),e("code",[this._v("user-before-logout")]),this._v(" event and redirects user to home page")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"login"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login","aria-hidden":"true"}},[this._v("#")]),this._v(" Login")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Methods")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("close")]),t._v(" - closes sign-up modal")]),t._v(" "),s("li",[s("code",[t._v("callLogin")]),t._v(" - starts authentication process with emitting "),s("code",[t._v("notification-progress-start")]),t._v(", calls "),s("code",[t._v("user/login")]),t._v(" action with user's email and password.")]),t._v(" "),s("li",[s("code",[t._v("switchElem")]),t._v(" - triggers "),s("code",[t._v("setAuthElem")]),t._v(" mutation with "),s("code",[t._v("register")]),t._v(" parameter")]),t._v(" "),s("li",[s("code",[t._v("callForgotPassword")]),t._v(" - triggers "),s("code",[t._v("setAuthElem")]),t._v(" mutation with "),s("code",[t._v("forgot-pass")]),t._v(" parameter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"register"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register","aria-hidden":"true"}},[this._v("#")]),this._v(" Register")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Methods")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("switchElem")]),t._v(" - triggers "),s("code",[t._v("setAuthElem")]),t._v(" mutation with "),s("code",[t._v("register")]),t._v(" parameter")]),t._v(" "),s("li",[s("code",[t._v("close")]),t._v(" - closes sign-up modal")]),t._v(" "),s("li",[s("code",[t._v("callRegister")]),t._v(" - starts registration process with emitting "),s("code",[t._v("notification-progress-start")]),t._v(", calls "),s("code",[t._v("user/register")]),t._v(" action with user's email, password, first name and last name.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"useraccount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useraccount","aria-hidden":"true"}},[this._v("#")]),this._v(" UserAccount")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Methods")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("onLoggedIn")]),t._v(" - sets "),s("code",[t._v("currentUser")]),t._v(" and "),s("code",[t._v("userCompany")]),t._v(". This method is called on "),s("code",[t._v("user-after-loggedin")]),t._v(" bus event")]),t._v(" "),s("li",[s("code",[t._v("edit")]),t._v(" - sets "),s("code",[t._v("isEdited")]),t._v(" flag to "),s("code",[t._v("true")])]),t._v(" "),s("li",[s("code",[t._v("objectsEqual (a, b, excludedFields = [])")]),t._v(" - checks if two passed objects are equal to each other")]),t._v(" "),s("li",[s("code",[t._v("updateProfile")]),t._v(" - updates user profile with new data. Calls a method "),s("code",[t._v("exitSection(null, updatedProfile)")])]),t._v(" "),s("li",[s("code",[t._v("exitSection")]),t._v(" - emits "),s("code",[t._v("myAccount-before-updateUser")]),t._v(" bus event with updated user profile. Resets component user data to default values.")]),t._v(" "),s("li",[s("code",[t._v("getUserCompany")]),t._v(" - finds user company")]),t._v(" "),s("li",[s("code",[t._v("getCountryName")]),t._v(" - finds user country name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"usershippingdetails"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usershippingdetails","aria-hidden":"true"}},[this._v("#")]),this._v(" UserShippingDetails")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Methods")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("onLoggedIn")]),t._v(" - sets "),s("code",[t._v("currentUser")]),t._v(" and "),s("code",[t._v("shippingDetails")]),t._v(". This method is called on "),s("code",[t._v("user-after-loggedin")]),t._v(" bus event")]),t._v(" "),s("li",[s("code",[t._v("edit")]),t._v(" - sets "),s("code",[t._v("isEdited")]),t._v(" flag to "),s("code",[t._v("true")])]),t._v(" "),s("li",[s("code",[t._v("updateDetails")]),t._v(" - updates shipping details with new data. Calls a method "),s("code",[t._v("updatedShippingDetails")])]),t._v(" "),s("li",[s("code",[t._v("exitSection")]),t._v(" - emits "),s("code",[t._v("myAccount-before-updateUser")]),t._v(" bus event with updated shipping details. Resets component user data to default values")]),t._v(" "),s("li",[s("code",[t._v("fillCompanyAddress")]),t._v(" - finds shipping details")]),t._v(" "),s("li",[s("code",[t._v("getCountryName")]),t._v(" - finds country name")]),t._v(" "),s("li",[s("code",[t._v("hasBillingAddres")]),t._v(" - returns "),s("code",[t._v("true")]),t._v(" if user has a billing address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" Store")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[this._v("#")]),this._v(" State")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_billing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"62"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_shipping"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"48"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-01-23 15:30:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-04 06:39:28"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default Store View"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pkarwatka28@example.pl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"firstname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Piotr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Karwatka"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"store_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"website_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"addresses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"street"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Street"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"telephone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"51-169"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"City"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"firstname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Piotr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Karwatka"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_shipping"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("58")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"street"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Street"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"company"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"telephone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"51-169"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"City"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"firstname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Piotr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Karwatka"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vat_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PL8951930748"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_billing"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"disable_auto_group_change"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following events are published from "),e("code",[this._v("user")]),this._v(" store:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"startsession-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#startsession-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("startSession (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Just to mark that the session is started and loading the current user token from the "),e("code",[this._v("localForage")]),this._v(" - for the further usage.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"resetpassword-context-email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resetpassword-context-email","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("resetPassword (context, { email })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Calls the "),e("code",[this._v("vue-storefront-api")]),this._v(" endpoint to send the password reset link to specified "),e("code",[this._v("email")]),this._v(" address")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"login-context-username-password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-context-username-password","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("login (context, { username, password })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Called to login the user and receive the current token that can be used to authorize subsequent API calls. After user is successfully authorized the "),e("code",[this._v("user/me")]),this._v(" action is dispatched to load the user profile data.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"register-context-email-firstname-lastname-password"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-context-email-firstname-lastname-password","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("register (context, { email, firstname, lastname, password })")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"me-context-refresh-true-usecache-true"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#me-context-refresh-true-usecache-true","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("me (context, { refresh = true, useCache = true })")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Loads the user profile from eCommerce CMS; when "),s("code",[t._v("userCache")]),t._v(" is set to true the result will be stored in the "),s("code",[t._v("localForage")]),t._v(" and if it's stored before - returned from cache using the "),s("code",[t._v("fastest")]),t._v(" strategy (network vs cache). If "),s("code",[t._v("refresh")]),t._v(" is set to true - the user data will be pulled from the server despite the cached copy is available.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"update-context-userdata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-context-userdata","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("update (context, userData)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"changepassword-context-passworddata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changepassword-context-passworddata","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("changePassword (context, passwordData)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Tries to change the user password to "),e("code",[this._v("passwordData.newPassword")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"logout-context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logout-context","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("logout (context)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"getters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[this._v("#")]),this._v(" Getters")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLoggedIn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="user.md";e.default=r.exports}}]);