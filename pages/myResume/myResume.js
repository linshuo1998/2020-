// pages/myResume/myResume.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainInfo:null,
    awards:null,
    skills:null,
    workExps:null,
    eduExps:null,
    courses:null,
    activities:null,
    selfEvaluation:null

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.openid)
    let openid = options.openid
    let that = this
    // 获取基本信息
    wx.request({
      url: 'https://www.linshuo.top:1998/findMainInfo',
      data:{"id":openid},
      method: "GET",
      success(res) {
        console.log(res.data)
        that.setData({
          mainInfo: res.data,
      })
    }
  })
  // 获取荣誉奖项信息
  wx.request({
    url: 'https://www.linshuo.top:1998/findAwardInfo',
    data:{"id":openid},
    method: "GET",
    success(res) {
      console.log(res.data)
      that.setData({
       awards: res.data.awards,
    })
    console.log(that.data.awards)
  }
})
  // 获取技能证书信息
  wx.request({
    url: 'https://www.linshuo.top:1998/findSkillInfo',
    data:{"id":openid},
    method: "GET",
    success(res) {
      console.log(res.data)
      that.setData({
       skills: res.data.skills,
    })
  }
})
// 获取工作经历信息
wx.request({
  url: 'https://www.linshuo.top:1998/findWorkExpInfo',
  data:{"id":openid},
  method: "GET",
  success(res) {
    console.log(res.data)    
    let workExps_ = res.data.workExps
    for(var i=0;i<workExps_.length;i++){
      workExps_[i].beginDate=workExps_[i].beginDate.replace(/-/g,".")
      workExps_[i].endDate=workExps_[i].endDate.replace(/-/g,".")
    }
    that.setData({
      workExps: workExps_,
  })
}
})
// 获取教育经历信息
wx.request({
  url: 'https://www.linshuo.top:1998/findEduExpInfo',
  data:{"id":openid},
  method: "GET",
  success(res) {
    console.log(res.data)    
    let eduExps_ = res.data.eduExps
    for(var i=0;i<eduExps_.length;i++){
      eduExps_[i].beginDate=eduExps_[i].beginDate.replace(/-/g,".")
      eduExps_[i].endDate=eduExps_[i].endDate.replace(/-/g,".")
    }
    that.setData({
      eduExps: eduExps_,
  })
}
})
// 获取主修课程信息
wx.request({
  url: 'https://www.linshuo.top:1998/findCourseInfo',
  data:{"id":openid},
  method: "GET",
  success(res) {
    console.log(res.data)    
    that.setData({
      courses: res.data.courses
  })
}
})
//获取校园活动信息
wx.request({
  url: 'https://www.linshuo.top:1998/findActivityInfo',
  data:{"id":openid},
  method: "GET",
  success(res) {
    let activities_ = res.data.activities
    for(var i=0;i<activities_.length;i++){
      activities_[i].beginDate= activities_[i].beginDate.replace(/-/g,".")
      activities_[i].endDate= activities_[i].endDate.replace(/-/g,".")
    }
    console.log(res.data)    
    that.setData({
      activities: activities_
  })
}
})
// 获取自我评鉴信息
wx.request({
  url: 'https://www.linshuo.top:1998/findSelfEvaluation',
  data:{"id":openid},
  method: "GET",
  success(res) {
    console.log(res.data)    
    that.setData({
      selfEvaluation: res.data.selfEvaluation
  })
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