(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fe3b"],{b60a:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"ele-body"},[n._v("绑定line")])},i=[],s={name:"SysLine",methods:{},mounted:function(){var n=this;this.$http.get("/login/line",this.form).then((function(n){window.location.href=n.data.url})).catch((function(e){console.log(e),n.$message.error("网络错误")}))}},a=s,c=t("2877"),l=Object(c["a"])(a,o,i,!1,null,"655f3d7a",null);e["default"]=l.exports}}]);