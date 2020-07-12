;(function() {
    const template = `
    <!--科技栏目-->
        <div>
            <ul >
                <li v-for="tech of techArr" :key="tech.id">
                    <span>{{tech.title}} </span>
                    <button @click="pushTech(tech.id)" class="btn  btn-default btn-xs">查看(Push)</button>&nbsp;
                    <button @click="replaceTech(tech.id)" class="btn btn-default btn-xs">查看(replace)</button>
                </li>
                <button @click="$router.back()">后退(使用back)</button>
                <button @click="$router.go(-1)">后退(使用go(-1))</button>
                <button @click="$router.go(1)">前进(使用go(1))</button>
            </ul>
            <router-view></router-view>
        </div>		 
    `

    window.tech = {
        template,
        data: function(){
            return {
                techArr:[]
            }
        },

        created() {
            this.getTechArr()
        },
        methods: {
            getTechArr() {
                axios.get('http://127.0.0.1:5500/bootstrap-component/db/tech.json').then(response => {
                    this.techArr = response.data
                }).catch(error =>{
                    console.log(error.message)
                }).finally(function(){
                    console.log('finally');
                }) 
            },
            pushTech(id) {
                //通过编程式进行路由跳转
                //this.$router.push('/news/tech/detail/' + id)
                //这里使用ES6语法, 注意下面是反单引号
                //使用Push可以使用浏览器的后退回来
                this.$router.push(`/news/tech/detail/${id}`)
            },
            replaceTech(id) {
                //使用replace不可以后退回来
                this.$router.replace('/news/tech/detail/' + id)
            }
        }
    }
})()