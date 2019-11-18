// pages/bind/bind.js
Page({
    data: {
        account: '',
        password: '',
        butttonName: '绑定',
        changeIt:'点击此处注册'
    },
    watchAccount() {},
    watchPassword() {},
    registerFirst() {
        if (this.data.butttonName === '绑定') {
            this.setData({
                butttonName: '注册',
                changeIt:'点击此处绑定'
            })
        } else if (this.data.butttonName === '注册') {
            this.setData({
                butttonName: '绑定',
                changeIt: '点击此处注册'
            })
        }
    }

})