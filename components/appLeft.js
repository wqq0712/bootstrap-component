;(function(){
    window.appLeft = {
        template: `<div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <!--router采用模糊匹配，所以这里点击新闻管理的话，首页也会有样式，所以使用exact匹配-->
                    <router-link to="/" tag="li" exact>
                      <a>首页<span v-show="delSum">({{delSum}})</span></a>
                      
                    </router-link>
                    <router-link to="/news" tag="li">
                      <a>新闻管理</a>
                    </router-link>
                    <router-link to="/aboutus" tag="li">
                      <a>关于我们</a>
                    </router-link>
                </ul>
                
            </div>
          `,
        data() {
            return {
              delSum: 0 //已删除总数量
            }
        },
        created() {
          //通过pubsub库，进行兄弟组件间通讯
          //在组件创建的时候，订阅消息,  dashboard.item.delete表示消息名
          /*
          PubSub.subscribe('dashboard.item.delete', function(event, data){

          })
          */
          //使用箭头表达式来获取this
          PubSub.subscribe('dashboard.item.delete', (event, num) => {
            this.delSum+=num
          })
        },
        methods: {
          
        },
      }
})()