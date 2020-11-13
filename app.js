//app.js
App({
  onLaunch: function () {
    // (async()=>{
    //   const p = await new Promise(resolve=>{
    //     setTimeout(()=>resolve("hello async/await"),3000);;


    //   });
    //   console.log(p);
    // })();

    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("登录成功")
        console.log(res.code)
        let that = this
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          console.log("正在请求。。")
          wx.request({
            url: 'https://www.linshuo.top:1998/getOpenId',
            data: {
              code: res.code
            },
            success(res){
              console.log("成功了"+res.data.openid)
              that.globalData.openid = res.data.openid
              console.log(that.globalData.openid)
              if (that.checkLoginReadyCallback){
                that.checkLoginReadyCallback(res);
              }
            }
           
            
          }
          
          )
          console.log("失败了") 
        }else {
          console.log('登录失败！' + res.errMsg)
        }
       
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openid:null
  }
})