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
    openId:null,
    today_recruitmentInfo:[],
    ago_recruitmentInfo:[],
    today_seekerInfo:[],
    ago_seekerInfo:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(new Date())
    console.log(new Date()-1)
    console.log(options.openid)
    this.setData({openId:options.openid})
    let that = this;
    wx.request({
      url: 'http://localhost:8080/findBrowsingHistoryById',
      data:{
        "openId":that.data.openId,
        "type":"Recruitment"
      },
      method:"GET",
      success(res){
        console.log(res)
        for(var i=0;i<30;i++){
          if(res.data[i.toString()]){
            console.log(res.data[i.toString()])
            let data__ = res.data[i.toString()]
            // 最后浏览时间是今天
            if(data__.lastVisitTime.split("_")[0]==(new Date().toDateString())){
              that.setData({
                today_recruitmentInfo:that.data.today_recruitmentInfo.concat(data__.Recruitment)
              })
              console.log("TODAY")
              console.log(that.data.today_recruitmentInfo)
            }
            // 非今天，即更早之前
            else {
              that.setData({
                ago_recruitmentInfo:that.data.ago_recruitmentInfo.concat(data__.Recruitment)
              })
            }
          }
          //   else if(data__.lastVisitTime.split("_")[0]==((new Date()-1).toDateString()))
          // }
          else{
            break
          }
        }
         
      }
    })
    wx.request({
      url: 'http://localhost:8080/findBrowsingHistoryById',
      data:{
        "openId":that.data.openId,
        "type":"SeekerInfo"
      },
      method:"GET",
      success(res){
        console.log(res)
        for(var i=0;i<30;i++){
          if(res.data[i.toString()]){
            console.log(res.data[i.toString()])
            let data__ = res.data[i.toString()]
            // 最后浏览时间是今天
            if(data__.lastVisitTime.split("_")[0]==(new Date().toDateString())){
              that.setData({
                today_seekerInfo:that.data.today_seekerInfo.concat(data__.result)
              })
              console.log("TODAY")
              console.log(that.data.today_seekerInfo)
            }
            // 非今天，即更早之前
            else {
              that.setData({
                ago_seekerInfo:that.data.ago_seekerInfo.concat(data__.result)
              })
              console.log(that.data.ago_seekerInfo)
            }
          }
          //   else if(data__.lastVisitTime.split("_")[0]==((new Date()-1).toDateString()))
          // }
          else{
            break
          }
        }
      }
    })
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