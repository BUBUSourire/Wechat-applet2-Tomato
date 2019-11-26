// pages/bind/bind.js
const app = getApp()
const {
    http
} = require('../../libs/http.js')

Page({
    data: {
        account: '',
        password_digest: '',
        butttonName: '绑 定',
        changeIt: '立即同步数据', //点击此处注册
        bindOr: '绑定PC账号'
    },
    watchAccount(e) {
        console.log(e)
        this.setData({
            account: e.detail.value
        })
    },
    watchPassword(e) {
        this.setData({
            password_digest: e.detail.value
        })
    },
    submit() {
        http.post('/bindings', {
                account: this.data.account,
                password_digest: this.data.password_digest
            })
            .then(response => {
                console.log(response)
                wx.setStorageSync('me', response.data.resource)
                wx.redirectTo({
                    url: '/pages/home/home',
                })
            })
    }
    // registerFirst() {
    //     if (this.data.butttonName === '绑定') {
    //         this.setData({
    //             butttonName: '注册',
    //             changeIt:'点击此处绑定',
    //             bindOr:'注册PC账号'
    //         })
    //     } else if (this.data.butttonName === '注册') {
    //         this.setData({
    //             butttonName: '绑定',
    //             changeIt: '点击此处注册',
    //             bindOr: '绑定PC账号'
    //         })
    //     }
    // }

})