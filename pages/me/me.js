// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tab: "history",
        lists: {
            "本周四": [{
                    time: "14:00",
                    text: "技术的女生家啊啊是就算是那架势看俺1",
                    id: 1
                },
                {
                    time: "14:00",
                    text: "技术的女生家啊啊是就算是那架势看俺2",
                    id: 2
                },
            ],
            "本周五": [{
                time: "14:00",
                text: "技术的女生家啊啊是就算是那架势看俺3",
                id: 3
            }],
            "本周六": [{
                time: "14:00",
                text: "技术的女生家啊啊是就算是那架势看俺4",
                id: 4
            }]
        }
    },
    onShow: function() {

    },
    changeTab(e) {
        console.log(e)
        let name = e.currentTarget.dataset.name
        this.setData({
            tab:name
        })
    }
})