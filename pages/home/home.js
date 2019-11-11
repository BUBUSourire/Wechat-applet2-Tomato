//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        lists: [{
                id: 0,
                text: "111111",
                finished: true
            },
            {
                id: 1,
                text: "222222",
                finished: true
            },
            {
                id: 2,
                text: "333333",
                finished: false
            },
            {
                id: 3,
                text: "444444",
                finished: true
            },
            {
                id: 4,
                text: "555555",
                finished: false
            },

        ],
        visible: false
    },
    confirm(e) {
        console.log(e.detail)
        let content = e.detail

        if (content) {
            let todo = [{
                id: this.data.lists.length + 1,
                text: content,
                finished: false
            }]
            this.data.lists = todo.concat(this.data.lists)
            this.setData({
                lists: this.data.lists
            })
            this.hideConfirm()
        }
    },
    deleteTodo(e){
        console.log(e)
        let index = e.currentTarget.dataset.index
        this.data.lists[index].finished = true
        this.setData({
            lists:this.data.lists
        })
    },
   hideConfirm() {
        this.setData({
            visible: false
        })
    },
    showConfirm() {
        this.setData({
            visible: true
        })
    }
})