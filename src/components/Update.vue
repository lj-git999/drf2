<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">
        <el-form :model="book" status-icon :rules="rules" ref="book" label-width="100px" class="demo-book">
          <el-form-item label="id" prop="id">
            <el-input type="text" v-model="book.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="书名" prop="book_name">
            <el-input type="text" v-model="book.book_name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-input v-model.number="book.price"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="author_list">
            <el-input v-model.number="book.author_list[0].id"></el-input>
          </el-form-item>
          <el-form-item label="出版社" prop="publish">
            <el-input v-model.number="book.publish.id"></el-input>
          </el-form-item>
          <el-form-item label="日期" prop="create_time">
            <el-date-picker type="date" placeholder="选择日期" v-model="book.create_time" style="width: 100%;" value-format="yyyy-MM-dd HH:mm:dd"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('book')">提交</el-button>
            <el-button @click="resetForm('book')">重置</el-button>
          </el-form-item>
        </el-form>

      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>

    </el-row>
  </div>

</template>

<script>
export default {
  name: "Update",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.user.checkPass !== '') {
          this.$refs.user.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      book: {},
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          let user_all=this.book.author_list[0].id;
          console.log(JSON.parse(user_all))
          console.log(Array(this.book.publish.id))
          console.log(this.book.price)
          let user_id=this.$route.params.id;
          this.$axios({
            url:"http://127.0.0.1:8000/adminapp/update/",
            method:'patch',
            data:{
              user_id:user_id,
              book_name:this.book.book_name,
              price:JSON.parse(this.book.price),
              authors:[JSON.parse(this.book.author_list[0].id)],
              address:this.book.pulish_address,
              create_time:this.book.create_time,
              publish:JSON.parse(this.book.publish.id),
            }
          }).then(rst=>{
            console.log(rst.data);
          }).catch(error=>{
            console.log(error);
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    update(){
      let user_id=this.$route.params.id;
      this.$axios({
        url:"http://127.0.0.1:8000/adminapp/update/",
        method:'get',
        params:{
          user_id:user_id
        }
      }).then(rst=>{
        console.log(rst.data.result);
        this.book=rst.data.result;
      }).catch(error=>{
        console.log(error);
      })
    }
  },
  created() {
    this.update();
  }
}

</script>

<style scoped>

</style>
