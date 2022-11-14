<template>
  <div class="ele-body">
    <el-card shadow="never">
      <!-- 数据表格 -->
      <ele-data-table ref="table" :config="table" :choose.sync="choose" height="calc(100vh - 315px)" highlight-current-row>
        <template slot-scope="{index}">
          <el-table-column type="selection" width="45" align="center" fixed="left"/>
          <el-table-column prop="student.id" :index="index" label="编号" width="60" align="center" fixed="left" show-overflow-tooltip/>
          <el-table-column prop="student.name" label="学生姓名" sortable="custom" show-overflow-tooltip min-width="110"/>
          <el-table-column prop="student.email" label="邮箱" sortable="custom" show-overflow-tooltip min-width="110"/>
        </template>
      </ele-data-table>
    </el-card>
  </div>
</template>

<script>
// import uploadImage from '@/components/uploadImage
import { mapGetters } from "vuex";
export default {
  name: "SysUser",
  data() {
    return {
      table: {url: '/teacher/followme', where: {}},  // 表格配置
      choose: [],  // 表格选中数据
      showEdit: false,  // 是否显示表单弹窗
      editForm: {},  // 表单数据
      editRules: {  // 表单验证规则
        username: [
          {required: true, message: '请输入用户账号', trigger: 'blur'}
        ],
        realname: [
          {required: true, message: '请输入用户姓名', trigger: 'blur'}
        ],
        gender: [
          {required: true, message: '请选择性别', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      roleList: [],  // 角色列表
      langList: [],  // 语言列表
      gameList: [],
      levelList:[], // 职级列表
      positionList:[], // 岗位列表

    }
  },
  computed: {
    ...mapGetters(["permission"]),
  },

  mounted() {  
  },
  methods: {
    /* 显示编辑 */
    edit(row) {
      this.editForm = Object.assign({}, row, {
        role_ids: row.roles.map(d => d.id)
      },{
        lang_ids: row.langs.map(d => d.id)
      },{
        game_ids: row.games.map(d => d.id)
      }
      );
      this.showEdit = true;
    },
    /* 保存编辑 */
    save() {
      const id = this.editForm.id
      this.$refs['editForm'].validate((valid) => {
        if (valid) {
          const method = id?'put':'post'
            const loading = this.$loading({lock: true});
            this.$http[method](`/teacher/followme`, this.editForm).then(res => {
              loading.close();
              if (res.data.code === 200) {
                this.showEdit = false;
                this.$message({type: 'success', message: res.data.message});
                this.$refs.table.reload();
              } else {
                this.$message.error(res.data.message);
              }
            }).catch(e => {
              loading.close();
              this.$message.error(e.message);
            });

        } else {
          return false;
        }
      });
    },
    /* 删除 */
    remove(row) {
      // if (!row) {  // 批量删除
      //   if (this.choose.length === 0) return this.$message.error('请至少选择一条数据');
      //   let ids = this.choose.map(d => d.id);
      //   this.$confirm('确定要删除选中的用户吗?', '提示', {type: 'warning'}).then(() => {
      //     const loading = this.$loading({lock: true});
      //     this.$http.post('/user/delete', {id: ids}).then(res => {
      //       loading.close();
      //       if (res.data.code === 0) {
      //         this.$message({type: 'success', message: res.data.msg});
      //         this.$refs.table.reload();
      //       } else {
      //         this.$message.error(res.data.msg);
      //       }
      //     }).catch(e => {
      //       loading.close();
      //       this.$message.error(e.message);
      //     });
      //   }).catch(() => 0);
      // } else {  // 单个删除
        const loading = this.$loading({lock: true});
        this.$http.delete(`/users/${row.id}`).then(res => {
          loading.close();
          if (res.data.code === 200) {
            this.$message({type: 'success', message: res.data.message});
            this.$refs.table.reload();
          } else {
            this.$message.error(res.data.message);
          }
          this.$refs.table.reload();
        }).catch(e => {
          loading.close();
          this.$message.error(e.message);
          this.$refs.table.reload();
        });
      // }
    },
    /**
     * 重置密码
     */
    resetPwd(row){
      const loading = this.$loading({lock: true});
        this.$http.post(`/users/${row.id}/resetPwd`).then(res => {
          loading.close();
          if (res.data.code === 200) {
            this.$message({type: 'success', message: res.data.message});
            this.$refs.table.reload();
          } else {
            this.$message.error(res.data.message);
          }
        }).catch(e => {
          loading.close();
          this.$message.error(e.message);
        });
    },
    /* 更改状态 */
    editStatus(row) {
      const loading = this.$loading({lock: true});
      // let params = Object.assign({}, row);
      this.$http.post(`/users/${row.id}/status`).then(res => {
        loading.close();
        if (res.data.code === 200) {
          this.$message({type: 'success', message: res.data.message});
        } else {
          row.status = !row.status ? 2 : 1;
          this.$message.error(res.data.message);
        }
        this.$refs.table.reload();
      }).catch(e => {
        loading.close();
        this.$message.error(e.message);
        this.$refs.table.reload();
      });

    },
    /* 查询角色列表 */
    // queryRoles() {
    //   this.$http.get('/role/getRoleList').then(res => {
    //     if (res.data.code === 200) {
    //       this.roleList = res.data.data;
    //     } else {
    //       this.$message.error(res.data.message);
    //     }
    //   }).catch(e => {
    //     this.$message.error(e.message);
    //   });
    // },
    /* 查询语言列表 */
    // queryLang() {
    //   this.$http.get('/lang/getLangList').then(res => {
    //     if (res.data.code === 200) {
    //       this.langList = res.data.data;
    //     } else {
    //       this.$message.error(res.data.message);
    //     }
    //   }).catch(e => {
    //     this.$message.error(e.message);
    //   });
    // },
    /* 查询游戏列表 */
    // queryGame() {
    //   this.$http.get('/game/getGameList').then(res => {
    //     if (res.data.code === 200) {
    //       this.gameList = res.data.data;
    //     } else {
    //       this.$message.error(res.data.message);
    //     }
    //   }).catch(e => {
    //     this.$message.error(e.message);
    //   });
    // },

  }
}
</script>

<style scoped>
.ele-block >>> .el-upload, .ele-block >>> .el-upload-dragger {
  width: 100%;
}
/* 用户资料卡片 */
.user-info-card {
  padding-top: 8px;
  text-align: center;
}

.user-info-card .user-info-avatar-group {
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
}

.user-info-card .user-info-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info-card .user-info-avatar-group > i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FFF;
  font-size: 30px;
  display: none;
  z-index: 2;
}

.user-info-card .user-info-avatar-group:hover > i {
  display: block;
}

.user-info-card .user-info-avatar-group:hover:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
}
</style>