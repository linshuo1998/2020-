import {CDN_PATH,KEY, REFERER} from '../../config/appConfig';

Page({
  // _onclick:function(e){
  //   let temp = {name:"linshuo",age:"13"}
  //   wx.navigateTo({
  //     url: '../../pages/mapRoutePlan/mapRoutePlan?temp='+JSON.stringify(temp)
  //   })
  // },

  watchRoute () {
		const key = KEY;
		const referer = REFERER
		const endPoint = JSON.stringify(this.data.targetPoint);
		const startPoint = this.data.myPoint ? JSON.stringify(this.data.myPoint) : '';
		const mode = 'transit'; //默认公交车
		const navigation = 1;  //默认开启导航
		let url = 'plugin://routePlan/index?key=' + key + '&referer=' + referer +'&startPoint'+startPoint+'&endPoint=' + endPoint +'&mode=' + mode + '&navigation=' + navigation;
		wx.navigateTo({
			url
		});
	},

  /**
   * 页面的初始数据
   */
  data: {
    targetPoint:{
      errMsg: "chooseLocation:ok",
      name: "岭南师范学院图书馆",
      address: "广东省湛江市赤坎区寸金路29号岭南师范学院",
      latitude: 21.269188,
      longitude: 110.348416}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getLocation({
			success: (res) => {
        console.log('当前定位信息：',res)
				this.setData({
					myPoint: res
				});
			}
		});
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