(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a405398"],{"1f7b":function(e,t,l){"use strict";l("39b8")},"39b8":function(e,t,l){},afa2:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-popover",{staticClass:"ele-notice-group",attrs:{width:"300",trigger:"click","popper-class":"ele-notice-pop",transition:"el-zoom-in-top"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[l("div",{staticClass:"ele-notice-group",attrs:{slot:"reference"},slot:"reference"},[l("el-badge",{attrs:{value:e.allNum,hidden:!e.allNum}},[l("i",{staticClass:"el-icon-bell"})])],1),e.show?l("el-tabs",{staticClass:"user-info-tabs",model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[l("el-tab-pane",{attrs:{label:e.noticeLabel,name:"notice"}},[l("div",{staticClass:"ele-notice-list ele-scrollbar-mini"},e._l(e.notice,(function(t,i){return l("div",{key:i,staticClass:"ele-notice-item"},[l("div",{staticClass:"ele-cell ele-notice-item-wrapper"},[l("i",{class:[t.icon,"ele-notice-item-icon"]}),l("div",{staticClass:"ele-cell-content"},[l("div",{staticClass:"ele-elip"},[e._v(e._s(t.title))]),l("div",{staticClass:"ele-text-secondary ele-elip"},[e._v(e._s(t.time))])])]),l("el-divider")],1)})),0),e.notice.length?l("div",{staticClass:"ele-cell ele-notice-actions"},[l("div",{staticClass:"ele-cell-content",on:{click:function(t){return e.clear(1)}}},[e._v("清空通知")]),l("el-divider",{staticClass:"line-color-light",attrs:{direction:"vertical"}}),l("div",{staticClass:"ele-cell-content",on:{click:function(t){return e.more(1)}}},[e._v("查看更多")])],1):e._e(),e.notice.length?e._e():l("ele-empty",{attrs:{text:"你已查看所有通知"}})],1),l("el-tab-pane",{attrs:{label:e.messageLabel,name:"message"}},[l("div",{staticClass:"ele-notice-list ele-scrollbar-mini"},e._l(e.message,(function(t,i){return l("div",{key:i,staticClass:"ele-notice-item"},[l("div",{staticClass:"ele-cell ele-notice-item-wrapper ele-cell-align-top"},[l("el-avatar",{attrs:{src:t.avatar,size:"medium"}}),l("div",{staticClass:"ele-cell-content"},[l("div",{staticClass:"ele-elip"},[e._v(e._s(t.title))]),l("div",{staticClass:"ele-text-secondary ele-elip"},[e._v(e._s(t.content))]),l("div",{staticClass:"ele-cell-desc ele-elip"},[e._v(e._s(t.time))])])],1),l("el-divider")],1)})),0),e.message.length?l("div",{staticClass:"ele-cell ele-notice-actions"},[l("div",{staticClass:"ele-cell-content",on:{click:function(t){return e.clear(2)}}},[e._v("清空消息")]),l("el-divider",{staticClass:"line-color-light",attrs:{direction:"vertical"}}),l("div",{staticClass:"ele-cell-content",on:{click:function(t){return e.more(2)}}},[e._v("查看更多")])],1):e._e(),e.message.length?e._e():l("ele-empty",{attrs:{text:"你已读完所有私信"}})],1),l("el-tab-pane",{attrs:{label:e.todoLabel,name:"todo"}},[l("div",{staticClass:"ele-notice-list ele-scrollbar-mini"},e._l(e.todo,(function(t,i){return l("div",{key:i,staticClass:"ele-notice-item"},[l("div",{staticClass:"ele-notice-item-wrapper"},[l("div",{staticClass:"ele-cell ele-cell-align-top"},[l("div",{staticClass:"ele-cell-content ele-elip"},[e._v(e._s(t.title))]),l("el-tag",{attrs:{size:"mini",type:["info","danger",""][t.state]}},[e._v(" "+e._s(["未开始","即将到期","进行中"][t.state])+" ")])],1),l("div",{staticClass:"ele-text-secondary ele-elip"},[e._v(e._s(t.desc))])]),l("el-divider")],1)})),0),e.todo.length?l("div",{staticClass:"ele-cell ele-notice-actions"},[l("div",{staticClass:"ele-cell-content",on:{click:function(t){return e.clear(3)}}},[e._v("清空待办")]),l("el-divider",{staticClass:"line-color-light",attrs:{direction:"vertical"}}),l("div",{staticClass:"ele-cell-content",on:{click:function(t){return e.more(3)}}},[e._v("查看更多")])],1):e._e(),e.todo.length?e._e():l("ele-empty",{attrs:{text:"你已完成所有任务"}})],1)],1):e._e()],1)},s=[],c={name:"EleNotice",data:function(){return{show:!1,active:"notice",notice:[{icon:"el-icon-s-comment",title:"你收到了一封14份新周报",time:"2020-07-27 18:30:18"},{icon:"el-icon-s-check",title:"许经理同意了你的请假申请",time:"2020-07-27 09:08:36"},{icon:"el-icon-video-camera",title:"陈总邀请你参加视频会议",time:"2020-07-26 18:30:01"},{icon:"el-icon-s-claim",title:"你推荐的刘诗雨已通过第三轮面试",time:"2020-07-25 16:38:46"},{icon:"el-icon-message-solid",title:"你的6月加班奖金已发放",time:"2020-07-25 11:03:31"}],message:[{avatar:l("cf05"),title:"SunSmile 评论了你的日志",content:"写的不错, 以后多多向你学习~",time:"2020-07-27 18:30:18"},{avatar:l("cf05"),title:"刘诗雨 点赞了你的日志",content:"写的不错, 以后多多向你学习~",time:"2020-07-27 09:08:36"},{avatar:l("cf05"),title:"酷酷的大叔 评论了你的周报",content:"写的不错, 以后多多向你学习~",time:"2020-07-26 18:30:01"},{avatar:l("cf05"),title:"Jasmine 点赞了你的周报",content:"写的不错, 以后多多向你学习~",time:"2020-07-25 11:03:31"}],todo:[{state:0,title:"刘诗雨的请假审批",desc:"刘诗雨在 07-27 18:30 提交的请假申请"},{state:1,title:"第三方代码紧急变更",desc:"需要在 2020-07-27 之前完成"},{state:2,title:"信息安全考试",desc:"需要在 2020-07-26 18:30 前完成"},{state:2,title:"JavaWeb发布新版本",desc:"需要在 2020-07-25 11:03 前完成"}]}},computed:{noticeLabel:function(){return this.notice.length?"通知(".concat(this.notice.length,")"):"通知"},messageLabel:function(){return this.message.length?"私信(".concat(this.message.length,")"):"私信"},todoLabel:function(){return this.todo.length?"待办(".concat(this.todo.length,")"):"待办"},allNum:function(){return this.notice.length+this.message.length+this.todo.length}},methods:{clear:function(e){1===e?this.notice=[]:2===e?this.message=[]:3===e&&(this.todo=[])},more:function(e){console.log(e),"/user/message"!==this.$route.path&&this.$router.push("/user/message"),this.show=!1}}},a=c,n=(l("1f7b"),l("2877")),o=Object(n["a"])(a,i,s,!1,null,null,null);t["default"]=o.exports},cf05:function(e,t,l){e.exports=l.p+"img/logo.f02acc94.png"}}]);