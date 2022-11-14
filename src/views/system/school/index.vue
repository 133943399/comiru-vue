<template>
    <div class="ele-body">
        <el-card shadow="never">
            <!-- 操作按钮 -->
            <div class="ele-table-tool ele-table-tool-default">
                <el-button @click="showAdd = true" type="primary" icon="el-icon-plus" class="ele-btn-icon" size="small">
                    添加
                </el-button>
                <!-- <el-button @click="remove()" type="danger" icon="el-icon-delete" class="ele-btn-icon" size="small" v-if="permission.includes('sys:user:dall')">批量删除
          </el-button> -->
            </div>
            <!-- 数据表格 -->
            <ele-data-table ref="table" :config="table" :choose.sync="choose" height="calc(100vh - 315px)"
                highlight-current-row>
                <template slot-scope="{index}">
                    <el-table-column type="selection" width="45" align="center" fixed="left" />
                    <el-table-column prop="id" :index="index" label="编号" width="60" align="center" fixed="left"
                        show-overflow-tooltip />
                    <el-table-column prop="name" label="学校名" sortable="custom" show-overflow-tooltip min-width="110" />
                    <el-table-column prop="teacher.name" label="管理员" sortable="custom" show-overflow-tooltip
                        min-width="110" />
                    <el-table-column prop="teacher.email" label="管理员邮箱" sortable="custom" show-overflow-tooltip
                        min-width="110" />
                    <el-table-column prop="status" label="状态" sortable min-width="100">
                        <template slot-scope="{row}">
                            <ele-dot :type="['warning', 'success'][row.status]" :ripple="row.status === 0"
                                :text="['审核中', '已通过'][row.status]" />
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" width="220px" align="center" :resizable="false" fixed="right">
                        <template slot-scope="{row}">
                            <el-link @click="edit(row.id, true)" icon="el-icon-edit" type="primary" :underline="false"
                                v-if="row.school_teacher.type == 1 && row.status == 1">
                                邀请老师
                            </el-link>
                            <el-link @click="edit(row.id, false)" icon="el-icon-edit" type="primary" :underline="false"
                                v-if="row.school_teacher.type == 1 && row.status == 1">
                                创建学生
                            </el-link>
                        </template>
                    </el-table-column>
                </template>
            </ele-data-table>
        </el-card>
        <!-- 编辑弹窗 -->
        <el-dialog :title="editForm.type ? '邀请老师' : '创建学生'" :visible.sync="showEdit" width="700px"
            @closed="editForm = {}" :destroy-on-close="true" custom-class="ele-dialog-form" :lock-scroll="false">
            <el-form :model="editForm" ref="editForm" :rules="editRules" label-width="100px">
                <el-row :gutter="15">
                    <el-col :sm="12">
                        <el-form-item label="教师邮箱" prop="email" v-if="editForm.type">
                            <el-input v-model="editForm.email" placeholder="请输入教师邮箱" clearable />
                        </el-form-item>

                        <el-form-item label="邮箱" prop="s_email" v-if="!editForm.type">
                            <el-input v-model="editForm.s_email" placeholder="请输入学生邮箱" clearable />
                        </el-form-item>

                        <el-form-item label="学生姓名" prop="s_name" v-if="!editForm.type">
                            <el-input v-model="editForm.s_name" placeholder="请输入姓名邮箱" clearable />
                        </el-form-item>


                        <el-form-item label="密码" prop="password" v-if="!editForm.type">
                            <el-input v-model="editForm.password" placeholder="请输入密码" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                <el-button @click="showEdit = false">取消</el-button>
                <el-button type="primary" @click="save">保存</el-button>
            </div>
        </el-dialog>

        <el-dialog :title="'添加'" :visible.sync="showAdd" width="700px" @closed="addForm = {}" :destroy-on-close="true"
            custom-class="ele-dialog-form" :lock-scroll="false">
            <el-form :model="addForm" ref="addForm" :rules="editRules" label-width="100px">
                <el-row :gutter="15">
                    <el-col :sm="12">
                        <el-form-item label="学校名称" prop="email">
                            <el-input v-model="addForm.name" placeholder="请输入学校名称" clearable />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                <el-button @click="showAdd = false">取消</el-button>
                <el-button type="primary" @click="saveadd">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
  
<script>
// import uploadImage from '@/components/uploadImage
import { mapGetters } from "vuex";
export default {
    name: "SysSc",
    data() {
        return {
            table: { url: '/school', where: {} },  // 表格配置
            choose: [],  // 表格选中数据
            showEdit: false,  // 是否显示表单弹窗
            editForm: {},  // 表单数据
            editRules: {  // 表单验证规则
            },
            showAdd: false,
            addForm: {},
        }
    },
    computed: {
        ...mapGetters(["permission"]),
    },
    // components: {uploadImage},
    mounted() {
    },
    methods: {
        /* 显示编辑 */
        edit(id, type) {
            this.showEdit = true;
            this.editForm.id = id;
            this.editForm.type = type;
        },
        /* 保存编辑 */
        save() {
            const id = this.editForm.id

            let url
            if (this.editForm.type) {
                url = "/school/invite"
            } else {
                url = "/school/student"

            }

            this.$refs['editForm'].validate((valid) => {
                if (valid) {
                    const method = id ? 'put' : 'post'
                    const loading = this.$loading({ lock: true });
                    this.$http[method](url + `${id ? '/' + id : ''}`, this.editForm).then(res => {
                        loading.close();
                        if (res.status === 200) {
                            this.showEdit = false;
                            this.$message({ type: 'success', message: res.data.message });
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
        saveadd() {
            this.$refs['addForm'].validate((valid) => {
                if (valid) {
                    const loading = this.$loading({ lock: true });
                    this.$http['post']("/school", this.addForm).then(res => {
                        loading.close();
                        if (res.status === 200) {
                            this.showAdd = false;
                            this.$message({ type: 'success', message: res.data.data.message });
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
        /* 更改状态 */
        editStatus(row) {
            const loading = this.$loading({ lock: true });
            // let params = Object.assign({}, row);
            this.$http.post(`/users/${row.id}/status`).then(res => {
                loading.close();
                if (res.data.code === 200) {
                    this.$message({ type: 'success', message: res.data.message });
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
    }
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