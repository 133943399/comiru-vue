(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0efc42"],{"9a04":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"ele-body"},[l("el-card",{attrs:{shadow:"never"}},[l("ele-data-table",{ref:"table",attrs:{config:e.table,choose:e.choose,height:"calc(100vh - 260px)","highlight-current-row":""},on:{"update:choose":function(t){e.choose=t}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.index;return[l("el-table-column",{attrs:{type:"selection",width:"45",align:"center",fixed:"left"}}),l("el-table-column",{attrs:{type:"index",index:o,label:"编号",width:"60",align:"center",fixed:"left","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"user.name",label:"教师名称",sortable:"custom","show-overflow-tooltip":"","min-width":"120",align:"center"}}),l("el-table-column",{attrs:{prop:"user.email",label:"教师邮箱",sortable:"custom","show-overflow-tooltip":"","min-width":"120",align:"center"}}),l("el-table-column",{attrs:{prop:"status",label:"关注",width:"75px",sortable:"custom",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[l("el-switch",{attrs:{"active-value":1,"inactive-value":2},on:{change:function(t){return e.follow(o)}},model:{value:o.follow,callback:function(t){e.$set(o,"follow",t)},expression:"row.follow"}})]}}],null,!0)}),l("el-table-column",{attrs:{label:"操作",width:"220px",align:"center",resizable:!1,fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[l("router-link",{attrs:{to:"/system/chat?id="+o.user.id}},[e._v("发送消息")])]}}],null,!0)})]}}])})],1)],1)},a=[],s={name:"SysRole",data:function(){return{table:{url:"/user/teachers",where:{}},choose:[],showEdit:!1,editForm:{},editRules:{name:[{required:!0,message:"请输入教师邮箱",trigger:"blur"}]},showAuth:!1,authData:[]}},methods:{follow:function(e){var t=this,l=this.$loading({lock:!0});this.$http.post("/user/students/".concat(e.user.id,"/follow")).then((function(o){l.close(),200===o.status?t.$message({type:"success",message:o.data.message}):(e.follow=e.follow?0:1,t.$message.error(o.data.message)),t.$refs.table.reload()})).catch((function(e){l.close(),t.$message.error(e.message),t.$refs.table.reload()}))}}},r=s,n=l("2877"),c=Object(n["a"])(r,o,a,!1,null,"bfa8ce84",null);t["default"]=c.exports}}]);