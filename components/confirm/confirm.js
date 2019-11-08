Component({
    properties: {
        placeholder: {
            type: String,
            value: ''
        },
        visible: {
            type: Boolean,
            value: true
        }
    },
    data: {
        value: ''
    },
    methods: {
        confirm() {
            this.triggerEvent('confirm', this.data.value) //子组件向父组件传递数据，相当于vue中的emit
        },
        cancel() {
            this.setData({
                visible: false
            })
        },
        watchValue(e) {
            this.data.value = e.detail.value
        }
    }
})