;(function() {
    window.router = new VueRouter({
        //设置全局的router-link标签生成的标签CSS样式名
        linkActiveClass: 'active',
        routes: [
            {
                path: '/',
                component: appHome
            },
            {
                path: '/news',
                component: news,
                children: [
                    {
                        //使用绝对路径
                        path: '/news/sport',
                        component: sport,
                        children: [
                            {
                                path: '/news/sport/detail/:id',
                                component: sportDetail
                                
                            }
                        ]
                    },
                    {
                        //使用相对路径
                        path: 'tech',
                        component: tech,
                        children: [
                            {
                                path: '/news/tech/detail/:id',
                                component: techDetail
                                
                            }
                        ]
                    },
                    {
                        path: '',
                        //后面没有子路径的时候，默认重定向到sport
                        redirect: '/news/sport'
                    }
                ]
            },
            {
                path: '/aboutus',
                component: aboutus
            }
           
       ]
   })
})()