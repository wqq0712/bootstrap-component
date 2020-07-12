;(function() {
    const template = `
        <!--详情-->
        <div class="jumbotron">
            <h1>{{id}}</h1>
            <h2>{{techDetail.title}}</h2>
            <p>{{techDetail.content}}</p>
        </div>
    `

    window.techDetail = {
        template,
        data() {
            return {
                id: null,
                techDetail: {}
            }
        },
        created() {
            this.getTechById()
        },
        methods: {
            getTechById() {
                this.id = this.$route.params.id - 0
                //获取所有的体育新闻
                axios.get('http://127.0.0.1:5500/bootstrap-component/db/tech.json').then(response => {
                    const techArr = response.data
                    //这里要使用箭头函数
                    this.techDetail = techArr.find(detail => {
                        //查找id于当前id一致的数据, 注意这里detail.id是数字
                        return detail.id === this.id
                    })
                }).catch(error =>{
                    console.log(error.message)
                }).finally(function(){
                    console.log('finally');
                })
            }
        },
        watch: {
            '$route': function() {
                this.getTechById()
            }
        }
    }
})()