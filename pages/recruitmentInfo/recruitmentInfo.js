// pages/RecuritmentInfo/RecuritmentInfo.js
import APIPRRFIX from '../../config/appConfig';
const app = getApp()
var curDate = new Date();
var days = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
Page({

  clickAddBtn:function(){
    console.log("填写新的招聘信息")
    wx:wx.navigateTo({
      url: '/pages/editRecruitmentInfo/editRecruitmentInfo'
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    rInfos_:[
      {
        id:'1',
        title:"初三男生物理家教",
        // onCampus:true,
        wage:"200元/天",
        address:"雷阳区新民苑B405",
        tags:['校内家教','长期','周末'],
        avatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83ertFdHCDf3XTWkv9a6HNkahu4NWYbbZPHkcfawhetmTTRHrMuT5oHw6m4BrMesVoCibmORibYEhj5XQ/132",
        name:"林烁",
        publishTime:"2020-10-22 12:24",
        // open:false,
        time:"即日起到期末每周三晚7点到9点",
        wageDetail:"每小时80元",      //可删除
        workDetail:"负责初三物理家教工作",
        need:"要严格一点的男老师",
        phoneNumber:"13695101920",
        wxNumber:null,
        addressDetail:"寸金街道岭南师范学院", //可删除
        point:{
          errMsg: "chooseLocation:ok",
          name: "岭南师范学院图书馆",
          address: "广东省湛江市赤坎区寸金路29号岭南师范学院",
          latitude: 21.269188,
          longitude: 110.348416}
        
      },
     
     
    ],
    myLoc_:null,
    curTime: curDate.getFullYear()+"-"+(curDate.getMonth()+1)+"-"+curDate.getDate()+" "+days[curDate.getDay()],
    openid:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: "http://localhost:8080/findAll",
      success(res){
        console.log(res.data)
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].tags!=null&&res.data[i].tags.includes('校内')){
            res.data[i].onCampus=true
          }
          else{
            res.data[i].onCampus=false
          }
          res.data[i].open=false
        }
        console.log(res.data)
        that.setData({
          rInfos_:res.data
        })
      },
      fail(r){
        console.log(r)
      }
    })


    if (app.globalData.openid!=null) {
      console.log("openid::",app.globalData.openid)
      this.setData({openid:app.globalData.openid})
    } 
    else {
      app.checkLoginReadyCallback = res => {
        //登陆成功后自己希望执行的，和上面一样
        console.log("openid---->>>",app.globalData.openid)
        this.setData({openid:app.globalData.openid})
      }}
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
    console.log("openid：",app.globalData.openid)
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