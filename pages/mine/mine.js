// pages/mine/mine.js
const app = getApp()
Page({
  getUserInfo: function(e) {
    console.log(e)
    // console.log("123")
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    functions:[
    {
      title:'兼职管理',
      function: [{unusual:false,text:"发布招聘",class:"iconfont icon-zhaopin",url:"/pages/editRecruitmentInfo/editRecruitmentInfo"},
                 {unusual:false,text:"我的简历",class:"iconfont icon-toujianli",url:"/pages/myResume/myResume"}, 
                 {unusual:false,text:"已发布",class:"iconfont icon-yifabu",url:"/pages/myPublished/myPublished"}, 
                 {unusual:false,text:"浏览历史",class:"iconfont icon-liulanlishi",url:"/pages/browsingHistory/browsingHistory"},
                //  {text:"已发布",class:"iconfont icon-yifabu",url:"/pages/myPublished/myPublished"}, 
                //  {text:"浏览历史",class:"iconfont icon-liulanlishi",url:"/pages/browsingHistory/browsingHistory"}
                ]
    },
    {
      title:'其他',
      function: [
                 {unusual:true,text:"意见反馈",class:"iconfont iconfont icon-yijianfankui",url:"/pages/feedBack/feedBack"},
                 {unusual:false,text:"关于",class:"iconfont icon-guanyu",url:"/pages/about/about"}
                ]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (app.globalData.openid!=null) {
      console.log("openid::",app.globalData.openid)
    } 
    else {
      app.checkLoginReadyCallback = res => {
        //登陆成功后自己希望执行的，和上面一样
        console.log("openid:::>>>",app.globalData.openid)
      }
   
  }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})