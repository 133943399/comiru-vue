<template>
    <div class="ele-body">
        <el-card shadow="never">
            <!-- 数据表格 -->
            <ele-data-table ref="table" :config="table" :choose.sync="choose" height="calc(100vh - 260px)"
                highlight-current-row>
                <template slot-scope="{index}">
                    <el-table-column type="selection" width="45" align="center" fixed="left" />
                    <el-table-column type="index" :index="index" label="编号" width="60" align="center" fixed="left"
                        show-overflow-tooltip />
                    <el-table-column prop="name" label="教师名称" sortable="custom" show-overflow-tooltip min-width="120"
                        align="center" />
                    <el-table-column prop="email" label="教师邮箱" sortable="custom" show-overflow-tooltip min-width="120"
                        align="center" />
                    <el-table-column prop="status" label="关注" width="75px" sortable="custom" :resizable="false">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.status" @change="editStatus(row)" :active-value="1"
                                :inactive-value="2" />
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="220px" align="center" :resizable="false" fixed="right">
                        <template slot-scope="{row}">
                            <router-link :to="'/system/chat?id=' + row.id">发送消息</router-link>
                        </template>
                    </el-table-column>
                </template>
            </ele-data-table>
        </el-card>
    </div>
</template>
  
<script>
export default {
    name: "SysRole",
    data() {
        return {
            table: { url: '/teacher', where: {} },  // 表格配置
            choose: [],  // 表格选中数据
            showEdit: false,  // 是否显示表单弹窗
            editForm: {},  // 表单数据
            editRules: {  // 表单验证规则
                name: [
                    { required: true, message: '请输入教师邮箱', trigger: 'blur' }
                ]
            },
            showAuth: false,  // 显示权限分配弹窗
            authData: [],  // 权限分配数据
        }
    },

    methods: {
        /* 更改状态 */
        editStatus(row) {
            const loading = this.$loading({ lock: true });
            // let params = Object.assign({}, row);
            this.$http.post(`/student/${row.id}/follow`).then(res => {
                loading.close();
                if (res.status === 200) {
                    this.$message({ type: 'success', message: res.data.data.message });
                } else {
                    row.status = !row.status ? 2 : 1;
                    this.$message.error(res.data.data.message);
                }
                this.$refs.table.reload();
            }).catch(e => {
                loading.close();
                this.$message.error(e.message);
                this.$refs.table.reload();
            });

        },
    }
}
</script>
  
<style scoped>

</style>