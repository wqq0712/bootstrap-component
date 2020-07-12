;(function(){

    const template = `
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>身高</th>
                    <th>分数</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    <table-item v-for="(emp,index) in empList" :key="emp.id" :emp="emp" :deleteEmp="deleteEmp" :index="index"/>
                </tbody>
            </table>
        </div>
    `

    window.dataList = {
        template,
        props: {
            //声明属性用于接收父组件传递的参数，这里声明属性以及属性的类型
            empList: Array,
            //声明父组件传递过来的是一个函数
            deleteEmp: Function
        },
        data() {
            return {
              
            }
        },
        components: {
            tableItem
        },
        methods: {
          
        },
      }
})()