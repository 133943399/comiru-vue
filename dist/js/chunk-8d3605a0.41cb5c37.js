(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d3605a0"],{"22a3":function(e,t,o){},"2f31":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ele-body"},[o("el-card",{attrs:{shadow:"never"}},[o("div",{staticClass:"ele-table-tool ele-table-tool-default"},[o("el-button",{staticClass:"ele-btn-icon",attrs:{type:"primary",icon:"el-icon-plus",size:"small"},on:{click:function(t){e.showAdd=!0}}},[e._v(" 添加 ")])],1),o("ele-data-table",{ref:"table",attrs:{config:e.table,choose:e.choose,height:"calc(100vh - 315px)","highlight-current-row":""},on:{"update:choose":function(t){e.choose=t}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.index;return[o("el-table-column",{attrs:{type:"selection",width:"45",align:"center",fixed:"left"}}),o("el-table-column",{attrs:{prop:"sid",index:s,label:"编号",width:"60",align:"center",fixed:"left","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"school.name",label:"学校名",sortable:"custom","show-overflow-tooltip":"","min-width":"110"}}),o("el-table-column",{attrs:{label:"角色",align:"center",prop:"status",formatter:e.parseStatus}}),o("el-table-column",{attrs:{prop:"user.name",label:"管理员",sortable:"custom","show-overflow-tooltip":"","min-width":"110"}}),o("el-table-column",{attrs:{prop:"user.email",label:"管理员邮箱",sortable:"custom","show-overflow-tooltip":"","min-width":"110"}}),o("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[o("ele-dot",{attrs:{type:["warning","success"][t.school.status],ripple:0===t.school.status,text:["审核中","已通过"][t.school.status]}})]}}],null,!0)}),o("el-table-column",{attrs:{label:"操作",width:"220px",align:"center",resizable:!1,fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[s.user.id==s.school.uid&&1==s.school.status?o("el-link",{attrs:{icon:"el-icon-edit",type:"primary",underline:!1},on:{click:function(t){return e.edit(s.sid,!0)}}},[e._v(" 邀请老师 ")]):e._e(),s.user.id==s.school.uid&&1==s.school.status?o("el-link",{attrs:{icon:"el-icon-edit",type:"primary",underline:!1},on:{click:function(t){return e.edit(s.sid,!1)}}},[e._v(" 创建学生 ")]):e._e()]}}],null,!0)})]}}])})],1),o("el-dialog",{attrs:{title:e.editForm.type?"邀请老师":"创建学生",visible:e.showEdit,width:"700px","destroy-on-close":!0,"custom-class":"ele-dialog-form","lock-scroll":!1},on:{"update:visible":function(t){e.showEdit=t},closed:function(t){e.editForm={}}}},[o("el-form",{ref:"editForm",attrs:{model:e.editForm,rules:e.editRules,"label-width":"100px"}},[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{sm:12}},[e.editForm.type?o("el-form-item",{attrs:{label:"教师邮箱",prop:"email"}},[o("el-input",{attrs:{placeholder:"请输入教师邮箱",clearable:""},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1):e._e(),e.editForm.type?e._e():o("el-form-item",{attrs:{label:"邮箱",prop:"s_email"}},[o("el-input",{attrs:{placeholder:"请输入学生邮箱",clearable:""},model:{value:e.editForm.s_email,callback:function(t){e.$set(e.editForm,"s_email",t)},expression:"editForm.s_email"}})],1),e.editForm.type?e._e():o("el-form-item",{attrs:{label:"学生姓名",prop:"s_name"}},[o("el-input",{attrs:{placeholder:"请输入姓名邮箱",clearable:""},model:{value:e.editForm.s_name,callback:function(t){e.$set(e.editForm,"s_name",t)},expression:"editForm.s_name"}})],1),e.editForm.type?e._e():o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{placeholder:"请输入密码",clearable:""},model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1)],1)],1)],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.showEdit=!1}}},[e._v("取消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1),o("el-dialog",{attrs:{title:"添加",visible:e.showAdd,width:"700px","destroy-on-close":!0,"custom-class":"ele-dialog-form","lock-scroll":!1},on:{"update:visible":function(t){e.showAdd=t},closed:function(t){e.addForm={}}}},[o("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.editRules,"label-width":"100px"}},[o("el-row",{attrs:{gutter:15}},[o("el-col",{attrs:{sm:12}},[o("el-form-item",{attrs:{label:"学校名称",prop:"email"}},[o("el-input",{attrs:{placeholder:"请输入学校名称",clearable:""},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)],1)],1)],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.showAdd=!1}}},[e._v("取消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.saveadd}},[e._v("保存")])],1)],1)],1)},l=[],a={name:"SysSc",data:function(){return{table:{url:"/school",where:{}},choose:[],showEdit:!1,editForm:{},editRules:{},showAdd:!1,addForm:{}}},computed:{},mounted:function(){},methods:{parseStatus:function(e){return e.user.id==e.school.uid?"管理员":"普通教师"},edit:function(e,t){this.showEdit=!0,this.editForm.id=e,this.editForm.type=t},save:function(){var e,t=this,o=this.editForm.id;e=this.editForm.type?"/school/invite":"/school/student",this.$refs["editForm"].validate((function(s){if(!s)return!1;var l=t.$loading({lock:!0});t.$http["post"](e+"".concat(o?"/"+o:""),t.editForm).then((function(e){l.close(),console.log(e.data.message),200===e.data.code?(t.showEdit=!1,t.$message({type:"success",message:e.data.message}),t.$refs.table.reload()):t.$message.error(e.data.message)})).catch((function(e){l.close(),t.$message.error(e.message)}))}))},saveadd:function(){var e=this;this.$refs["addForm"].validate((function(t){if(!t)return!1;var o=e.$loading({lock:!0});e.$http["post"]("/school",e.addForm).then((function(t){o.close(),200===t.status?(e.showAdd=!1,e.$message({type:"success",message:t.data.data.message}),e.$refs.table.reload()):e.$message.error(t.data.message)})).catch((function(t){o.close(),e.$message.error(t.message)}))}))},editStatus:function(e){var t=this,o=this.$loading({lock:!0});this.$http.post("/users/".concat(e.id,"/status")).then((function(s){o.close(),200===s.data.code?t.$message({type:"success",message:s.data.message}):(e.status=e.status?1:2,t.$message.error(s.data.message)),t.$refs.table.reload()})).catch((function(e){o.close(),t.$message.error(e.message),t.$refs.table.reload()}))}}},r=a,i=(o("4030"),o("2877")),n=Object(i["a"])(r,s,l,!1,null,"68304f32",null);t["default"]=n.exports},4030:function(e,t,o){"use strict";o("22a3")}}]);