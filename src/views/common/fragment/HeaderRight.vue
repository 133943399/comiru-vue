<!-- 顶栏右侧部分 -->
<template>
  <el-menu mode="horizontal" :class="['ele-header-right',{'ele-menu-dark':$store.state.theme.headStyle!==0}]">
    <el-menu-item index="full" @click="fullScreen">
      <i :class="isFullScreen?'el-icon-_screen-restore':'el-icon-_screen-full'"></i>
    </el-menu-item>
    <!-- 消息通知组件 -->
    <!-- <el-menu-item index="notice">
      <ele-notice/>
    </el-menu-item> -->
    <el-submenu index="user" popper-class="ele-menu-pop">
      <template slot="title">
        <!-- <el-avatar :src="user.avatar"/> -->
        <span>{{ user.realname || '' }}</span>
      </template>
      <el-menu-item index="logout" @click="logout"><i class="el-icon-switch-button"></i><span>退出登录</span></el-menu-item>
    </el-submenu>
    <el-menu-item index="more" v-if="$setting.showSetting" @click="showSetting">
      <i class="el-icon-_more"></i>
    </el-menu-item>
  </el-menu>
</template>

<script>
// import EleNotice from './Notice'
export default {
  name: "EleHeaderRight",
  // components: {EleNotice},
  data() {
    return {
      isFullScreen: false  // 是否全屏
    }
  },
  computed: {
    user() {  // 当前登录用户信息
      return this.$store.state.user.user || {};
    }
  },
  methods: {
    /* 退出登录 */
    logout() {
      this.$confirm('确定要退出登录吗?', '提示', {type: 'warning'}).then(() => {
        this.$http.post('/auth/logout').then((res) => {
          if (res.status === 200) {
            this.$message({type: 'success', message: '注销成功'});
            // 清除缓存的token
            this.$store.dispatch('user/setToken').then(() => {
              // this.$router.push({path: "/login"});
              window.location.replace('/');
            });
          } else {
            this.$message.error(res.data.message);
          }
        });
      }).catch(() => 0);
    },

    /* 打开修改密码弹窗 */
    showPassword() {
      this.$store.dispatch('theme/toggle', 'showPassword');
    },
    /* 打开主题设置 */
    showSetting() {
      this.$store.dispatch('theme/toggle', 'showSetting');
    },
    /* 全屏 */
    fullScreen() {
      this.isFullScreen = !this.$util.fullScreen();
      if (!this.$setting.watchResize) this.$store.dispatch('theme/set', {
        key: 'screenWidth', value: document.documentElement.clientWidth || document.body.clientWidth
      });
    }
  }
}
</script>
