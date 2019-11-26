//index.js
//获取应用实例
const app = getApp()
const {
    http
} = require('../../libs/http.js')

Page({
    updateId: '',
    updateIndex: '',
    description:'',
    data: {
        lists: [],
        visibleCreateConfirm: false,
        visibleUpdateConfirm: false,
        updateContent: '',
        selectTab: ''
    },
    onShow() {
        this.getLists()
        if (!this.data.lists.length) {
            this.setData({ selectTab: '' })
        }
    },
    getLists(){ //初始化
        http.get('/todos?completed=false').then(response => {
            if (response.data.resources) {
                this.data.lists = response.data.resources
                this.setData({
                    lists: this.data.lists
                })
                this.hideCreateConfirm()
            }
        })
    },

    confirmCreate(e) { //确认创建
        let content = e.detail
        if (content) {
            http.post('/todos', {
                completed: false,
                description: content
            }).then(res => {
                let todo = [res.data.resource]
                this.data.lists = todo.concat(this.data.lists)
                this.setData({
                    lists: this.data.lists
                })
                this.hideCreateConfirm()
            })
        }
    },

    changeText(e) { //更新任务内容
        let {
            id,
            index
        } = e.currentTarget.dataset
        this.updateId = id
        let description = this.data.lists[index].description
        this.setData({
            visibleUpdateConfirm: true,
            updateContent: description
        })
    },

    confirmUpdate(e) { //确认更新
        let description = e.detail
        if (description) {
            let description = e.detail
            http.put(`/todos/${this.updateId}`, {
                description:description
            }).then(response => {
                this.getLists()
                this.hideUpdateConfirm()
                wx.showToast({
                    title: '修改成功',
                    icon: 'success',
                    duration: 1000
                })
            })
        }

    },

    deleteTodo(e) {
        let index = e.currentTarget.dataset.index
        let id = e.currentTarget.dataset.id
        this.setData({
            selectTab: index
        })
        setTimeout(() => {
            http.put(`/todos/${id}`, {
                completed: true
            }).then(response => {
                let todo = response.data.resource
                this.data.lists[index] = todo
                this.setData({
                    lists: this.data.lists
                })
                wx.showToast({
                    title: '已完成',
                    icon: 'success',
                    duration: 1000
                })
            })
        }, 1000)

    },
    hideCreateConfirm() {
        this.setData({
            visibleCreateConfirm: false
        })
    },
    showCreateConfirm() {
        this.setData({
            visibleCreateConfirm: true
        })
    },
    hideUpdateConfirm() {
        this.setData({
            visibleUpdateConfirm: false
        })
    }
})