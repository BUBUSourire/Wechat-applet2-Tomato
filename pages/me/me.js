const {
    http
} = require('../../libs/http.js')



Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab: "task",
        tomatoes: {},
        todos: {}

    },
    onShow: function() {
        this.fetchTomatoes(),
        this.fetchTodos()
    },
    fetchTomatoes() {
        http.get('/tomatoes', {
            is_group: 'yes'
        }).then(res => {
            this.setData({
                tomatoes: res.data.resources
            })
        })
    },
    fetchTodos() {
        http.get('/todos', {
            is_group: 'yes'
        }).then(res => {
            this.setData({
                todos: res.data.resources
            })
        })
    },
    changeTab(e) {
        console.log(e)
        let name = e.currentTarget.dataset.name
        this.setData({
            tab: name
        })
    }
})