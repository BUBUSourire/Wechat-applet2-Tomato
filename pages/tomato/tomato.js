// pages/tomato/tomato.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        defaultSecond: 3,
        time: '',
        timeExplain: '暂停',
        timeStatus: true,
        visible: false,
        showMe: true,
        finishVisible:false
    },

    onShow: function() {
        this.countDown()
    },

    countDown() {
        this.timer = setInterval(() => {
            this.data.defaultSecond--
                this.changeTime()
            if (this.data.defaultSecond <= 0) {
                this.setData({
                    showMe: false,
                    finishVisible:true
                })
                return this.stopTime()
            }
        }, 1000)
    },

    stopTime() {
        if (this.data.timeStatus === true) {
            clearInterval(this.timer)
            this.setData({
                timeExplain: '开始',
                timeStatus: false
            })
        } else if (this.data.timeStatus === false) {
            this.countDown()
            this.setData({
                timeExplain: '暂停',
                timeStatus: true
            })
        }

    },

    changeTime() {
        let m = Math.floor(this.data.defaultSecond / 60)
        let s = Math.floor(this.data.defaultSecond % 60)
        if (s === 0) {
            s = "00"
        } else if ((s + '').length === 1) {
            s = "0" + s
        }

        if (m === 0) {
            m = "00"
        } else if ((m + '').length === 1) {
            s = "0" + s
        }
        this.setData({
            time: `${m}:${s}`
        })
    },

    showConfirm() {
        this.setData({
            visible: true
        })
        this.stopTime()

    },

    hideConfirm() {
        this.setData({
            visible: false
        })
        this.countDown()
    },

    againTime() {
        this.data.defaultSecond = 1500
        this.countDown()
        this.setData({
            showMe: true,
            timeExplain: '暂停',
            timeStatus: true,
        })

    },

    abandonConfirm(e) {
        let content = e.detail
       wx.navigateBack({ //返回上一页
           to:-1
       })
    },

    finishConfirm(e){
        console.log(e)
    }
})