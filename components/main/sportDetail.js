;(function() {
    const template = `
    <!--详情-->
    <div class="jumbotron">
        <h1>{{id}}</h1>
        <h2>{{sport.title}}</h2>
        <p>{{sport.content}}</p>
    </div>
    `

    window.sportDetail = {
        template,
        data() {
            //data只会在初始化的时候创建一次，后面点击后不会进行重新赋值
            return {
                id: null,
                sport: {}
            }
        },
        created() {
            //第一次初始化组件的时候，需要获取数据
            this.getSportById()
        },
        methods: {
            getSportById() {
                //这里 -0 是把字符串转为数字
                this.id = this.$route.params.id - 0
                //获取所有的体育新闻
                axios.get('http://127.0.0.1:5500/bootstrap-component/db/sport.json').then(response => {
                    const sportArr = response.data
                    //这里要使用箭头函数
                    this.sport = sportArr.find(detail => {
                        //查找id于当前id一致的数据, 注意这里detail.id是数字
                        return detail.id === this.id
                    })
                }).catch(error =>{
                    console.log(error.message)
                }).finally(function(){
                    console.log('finally');
                })
                //通过id获取指定数据
            }
        },

        watch: {    //watch是对象，用于监听属性使用
            //通过监听器监听路由参数的改变
            '$route': function(){
                this.getSportById()
            }
        }
    }
})()