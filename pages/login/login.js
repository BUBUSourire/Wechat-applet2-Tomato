const {
    http
} = require('../../libs/http.js')
const {
    app_id,
    app_secret
} = getApp().globalData
Page({
    data: {},
    onShow() {

    },
    // 点击按钮=>调用小程序中的原生wx.login=>获取参数=>http.post将参数发送给服务器=>返回user=>保存user=>返回首页
    login(e) {
        let iv = e.detail.iv
        let encryptedData = e.detail.encryptedData
        this.wxlogin(iv, encryptedData)
    },
    wxlogin(encryptedData, iv) {
        wx.login({
            success: (response) => {
                this.loginMe(response.code, iv, encryptedData)
            }
        })
    },
    loginMe(code, iv, encryptedData) {
        http.post('/sign_in/mini_program_user', {
                code,
                iv,
                encryptedData,
                app_id,
                app_secret
            })
            .then(response => {
                this.saveMessage(response)
                wx.reLaunch({
                    url: '/pages/home/home',
                })
            })
    },
    saveMessage(response) {
        wx.setStorageSync('me', response.data.resource)
        wx.setStorageSync('X-token', response.header["X-token"])
    }
})