;(function(){

    const template = `
        <tr>
        <td>{{emp.id}}</td>
        <td>{{emp.name}}</td>
        <td>{{emp.age}}</td>
        <td>{{emp.height}}</td>
        <td>{{emp.score}}</td>
        <td>{{emp.address}}</td>
        <td><a herf="#" @click="deleteEmp(index)">删除</a></td>
    </tr>
    `

    window.tableItem = {
        template,
        props: {
            //声明属性用于接收父组件传递的参数，这里声明属性以及属性的类型
            //校验属性required
            emp: {
                type: Object,
                required: true
            },
            index: Number,
            deleteEmp: Function
        },
        data() {
            return {
              
            }
        },
        methods: {
          
        }
      }
})()