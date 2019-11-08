//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        lists: [],
        visible: true
    },
    confirm(e) {
        console.log(e.detail)
    },
    cancel(e) {
        console.log(e.detail)
    }
})