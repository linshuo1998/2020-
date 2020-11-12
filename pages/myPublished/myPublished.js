// pages/myPublished/myPublished.js
const app = getApp()
Page({
  clickAddBtn:function(){
    console.log("填写新的招聘信息")
    wx.navigateTo({
      url: '/pages/editRecruitmentInfo/editRecruitmentInfo'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    rInfos_:null,
    myLoc_:null,
    openid:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (app.globalData.openid!=null) {
    //   console.log("openid::",app.globalData.openid)
      // this.setData({openid:app.globalData.openid})
      this.setData({openid:options.openid})
      let that = this
      wx.request({
        url: 'https://www.linshuo.top:1998/MyPublished',
        data:{
          id:that.data.openid
        },
        method:"GET",
        success(res){
          console.log(res.data)
         that.setData({rInfos_:res.data})
        }
      })
    
    // else {
    //   app.checkLoginReadyCallback = res => {
    //     //登陆成功后自己希望执行的，和上面一样
    //     console.log("openid:::>>>",app.globalData.openid)
    //     this.setData({openid:app.globalData.openid})
    //     let that = this
    //     wx.request({
    //       url: 'https://www.linshuo.top:1998/MyPublished',
    //       data:{
    //         id:that.data.openid
    //       },
    //       method:"GET",
    //       success(res){
    //         console.log(res.data)
    //         that.setData({rInfos_:res.data})
    //       }
    //     })
    //   }
    // }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getLocation({
			success: (res) => {
        console.log('当前定位信息：',res)
				this.setData({
					myLoc_: res
				});
			}
    });
    
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