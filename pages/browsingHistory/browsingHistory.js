// pages/browsingHistory/browsingHistory.js
Page({
  chooseOption:function(e){
    console.log(e)
    if(e.currentTarget.id=="_1"){
      this.setData({
        showRecruitment:true,
        showSeeker:false,

      })
    }
    else if(e.currentTarget.id=="_2"){
      this.setData({
        showRecruitment:false,
        showSeeker:true,
      })
    }
   
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    showRecruitment:true,
    showSeeker:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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