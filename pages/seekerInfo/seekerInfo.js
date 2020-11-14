// pages/seekerInfo/seekerInfo.js
const app = getApp()
Page({
  clickAddBtn:function(){
    console.log("填写新的个人信息")
    wx.navigateTo({
      url: '/pages/editResume/editResume?openid='+this.data.openid
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
    
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    console.log("正在搜索。。",this.data.inputVal)
    let that = this
    wx.request({
      url: 'https://www.linshuo.top:1998/searchSeeker',
      data:{
        "words":that.data.inputVal
      },
      method:"GET",
      success(res){
        console.log(res.data)
        that.setData({
          results: res.data
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    results:null,
    openid:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.openid!=null) {
      console.log("openid::",app.globalData.openid)
      this.setData({
        openid:app.globalData.openid
      })
    } 
    else {
      app.checkLoginReadyCallback = res => {
        //登陆成功后自己希望执行的，和上面一样
        console.log("openid:::>>>",app.globalData.openid)
        this.setData({
          openid:app.globalData.openid
        })
      }}
    
   
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
    let that = this;
    wx.request({
      url: 'https://www.linshuo.top:1998/findAllSeekerCard',
      method:"GET",
      success(res){
        console.log("触发了onShow")
        console.log(res.data)
        let data_ = res.data
        console.log(data_)
        that.setData({
          results:data_
        })
      }
    })
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