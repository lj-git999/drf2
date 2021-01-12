<template>
  <div>
    <el-container>
      <el-header>百知学员信息管理系统</el-header>
      <el-main><el-table :data="book_list" border style="width: 100%">
        <el-table-column  prop="id" label="id" width="120"></el-table-column>
        <el-table-column prop="book_name" label="书名" width="120"></el-table-column>
        <el-table-column prop="price" label="价格" width="120"></el-table-column>
        <el-table-column label="作者" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top" v-for="(author,index) in scope.row.author_list" :key="index">
              <p>作者: {{ author.author_name}}</p>
              <p>年龄: {{ author.age }}</p>
              <p>电话: {{ author.detail__phone }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ author.author_name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="publish_name" label="出版社" width="120"></el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="publish_address" label="出版社地址" width="120"></el-table-column>
      </el-table></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "Show",
  methods:{
    get(){
      let user_id=this.$route.params.id;
      console.log(user_id)
      this.$axios({
        url:"http://127.0.0.1:8000/userapp/show/"+user_id+"/",
        method:'get',
      }).then(rst=>{
        console.log(rst.data);
        this.book_list=[rst.data]
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  data(){
    return{
      book_list:[],
    }
  },
  created() {
    this.get();
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: mediumaquamarine;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: lightsteelblue;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
