//http.get
//http.post
//http.put
//http.delete

const {
    host,
    t_app_id,
    t_app_secret
} = getApp().globalData

const _http = (method, url, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${host}${url}`,
            data: data,
            header: {
                Authorization:`Bearer ${wx.getStorageInfoSync('X-token')}`, //
                t_app_id: "y7zRLQt6TRz887RSvXfbw1VM",
                t_app_secret: "mnvDrLfDt9AzUkCRZBNk2PHa"
            },
            method: method,
            dataType: 'JSON',
            success:(response)=>{
                let statusCode = response.statusCode //未登录 401   没有权限 403    找不到 404  500
                if(statusCode){

                }
            }
        })
    })
}

const http = {
    get: (url, params) => _http('GET', url, params),
    post: (url, data) => _http('GET', url, data),
    put: (url, data) => _http('GET', url, data),
    delete: (url, data) => _http('GET', url, data),
}