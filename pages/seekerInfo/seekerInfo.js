// pages/seekerInfo/seekerInfo.js
const app = getApp()
Page({
  clickAddBtn:function(){
    console.log("填写新的个人信息")
    wx.navigateTo({
      url: '/pages/editResume/editResume?openid='+this.data.openid
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
      url: 'https://www.linshuo.top:1998/getAllSeekerInfo',
      method:"GET",
      success(res){
        console.log(res.data)
        let data_ = res.data
        // for(var i=0;i<data_.length;i++){
        //   for(var j=0;j<data_[i].WorkExpInfo.length;j++){
        //   data_[i].WorkExpInfo[j].beginDate=data_[i].WorkExpInfo[j].replace(/-/g,".")
        //   data_[i].WorkExpInfo[j].endDate=data_[i].WorkExpInfo[j].endDate.replace(/-/g,".")
        // }
        // }
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