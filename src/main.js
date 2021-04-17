import Vue from 'vue'

// 导入App组件
import App from './App.vue'

// 创建vue根实例
new Vue({
    el: '#app',
    components: {
        // 组件名：组件对象
        App
    },
    template: '<App/>'
})
// 挂载app组件