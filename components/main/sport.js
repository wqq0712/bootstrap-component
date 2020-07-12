;(function() {
    const template = `
    <!--体育栏目-->
    <div>
        <ul>
            <li v-for="sport in sportArr" :key="sport.id">
                <!--注意了，这里的to是Js表达式，所以需要用v-bind绑定to属性-->
                <router-link :to="'/news/sport/detail/' + sport.id">
                    {{sport.title}}
                </router-link>
            </li>
        </ul>
        <!--详情-->
        <router-view></router-view>
    </div>  
    `

    window.sport = {
        data() {
            return {
                sportArr: []
            }
        },
        template,

        created() {
            axios.get('http://127.0.0.1:5500/bootstrap-component/db/sport.json').then(response => {
                this.sportArr = response.data
            }).catch(error =>{
                console.log(error.message)
            }).finally(function(){
                console.log('finally');
            })
        },
    }
})()