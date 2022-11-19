<template>
    <div class="ele-body">
        <el-card shadow="never">
            <!-- 数据表格 -->
            <ele-data-table ref="table" :config="table" :choose.sync="choose" height="calc(100vh - 315px)"
                highlight-current-row>
                <template slot-scope="{index}">
                    <el-table-column type="selection" width="45" align="center" fixed="left" />
                    <el-table-column prop="id" :index="index" label="编号" width="60" align="center" fixed="left"
                        show-overflow-tooltip />
                    <el-table-column prop="name" label="学生姓名" sortable="custom" show-overflow-tooltip min-width="110" />
                    <el-table-column prop="email" label="邮箱" sortable="custom" show-overflow-tooltip min-width="110" />
                    <el-table-column label="操作" width="220px" align="center" :resizable="false" fixed="right">
                        <template slot-scope="{row}">
                            <el-link @click="change(row)" icon="el-icon-edit" type="primary" :underline="false">
                                切换用户
                            </el-link>
                        </template>
                    </el-table-column>
                </template>
            </ele-data-table>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "SysChange",
    data() {
        return {
            table: { url: '/user/change_list', where: {} },  // 表格配置
            choose: [],  // 表格选中数据
            showEdit: false,  // 是否显示表单弹窗
        }
    },
    methods: {
        change(row) {
            this.$http['post'](`/user/change`, row).then(res => {
                const data = res.data.data;
                const code = res.data.code;
                const message = res.data.message;
                if (code === 200) {
                    this.$message({
                        type: 'success',
                        message: '切换成功'
                    });
                    this.$store.dispatch('user/setToken', data.token_type + ' ' + data.access_token).then(() => {
                        this.$router.push(this.$route.query.from || '/').catch(() => { });
                    });
                    this.$router.go()
                } else {
                    this.$message.error(message);
                }
            }).catch(e => {
                this.$message.error(e.message);
            });

        }
    },
}
</script>

<style scoped>
.ele-block>>>.el-upload,
.ele-block>>>.el-upload-dragger {
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

.user-info-card .user-info-avatar-group>i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFF;
    font-size: 30px;
    display: none;
    z-index: 2;
}

.user-info-card .user-info-avatar-group:hover>i {
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