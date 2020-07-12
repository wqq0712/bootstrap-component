;(function(){
    window.App = {
        template: `<div id="app">
        <app-navbar></app-navbar>
            <!--核心区域:分左右两边-->
            <div class="container-fluid">
            <div class="row">
                <!--左边菜单栏区域-->
                <app-left></app-left>
                <!--右边主页面区域: 分上下两个区域
                <app-home>
                    <h1 slot="dashboard" class="page-header">{{dashboard}}</h1>
                </app-home>
                -->
                <!--keep-alive可以用于多页签切换的时候，原来的数据仍然保存-->
                <keep-alive>
                    <router-view>
                        <h1 slot="dashboard" class="page-header">{{dashboard}}</h1>
                    </router-view>
                </keep-alive>
            </div>
        </div>
        </div>
          `,
        
        data() {
            return {
                dashboard: '仪表盘'
            }
        },
        components: {
            appNavbar,
            appLeft,
            appHome
        }
      }
})()