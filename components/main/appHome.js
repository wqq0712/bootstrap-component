;(function(){

    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!--右边上半区域-->
            <!--<h1 class="page-header">Dashboard</h1>-->
            <!--定义插槽-->
            <slot name="dashboard"></slot>
            <!--自定义组件事件，delete_hobby-->
            <dashboard :hobbies="hobbies" @delete_hobby="deleteHobby"/>
            <!--右边下半区域-->
            <h2 class="sub-header">Section title</h2>
            <data-list :empList="empList" :deleteEmp="deleteEmp"/>
        </div>
    `

    window.appHome = {
        template,
        data() {
            return {
                hobbies : ['打篮球', '读书', '写程序', '踢足球'],
                empList: []
            }
        },
        components: {
            dashboard,
            dataList
        },
        created() {
            axios.get('http://127.0.0.1:5500/bootstrap-component/emp.json').then(response => {
                this.empList = response.data
            }).catch(error =>{
                console.log(error.message)
            }).finally(function(){
                console.log('finally');
            })
        },
        methods: {
            //定义删除函数，子组件调用, 通过props传递函数 给子组件
            deleteEmp(index) {
                this.empList.splice(index, 1)
            },

            //定义删除函数，子组件调用，子组件通过$emit方式调用
            deleteHobby(index) {
                this.hobbies.splice(index, 1)
                //发布消息，使用PubSub进行兄弟组件间通信，dashboard.item.delete表示消息名
                PubSub.publish('dashboard.item.delete', 1)
            }
        }
      }
})()