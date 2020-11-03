// pages/myResume/myResume.js
const app = getApp()
Page({
  chooseImg: function () {
    var that = this;
    // var childId = wx.getStorageSync("child_id");
    // var token = wx.getStorageSync('token');
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths + "修改页面")
        var avatar = res.tempFilePaths;
        console.log("新的图片路径为："+avatar)
        that.setData({
          avatar: avatar,
          upAvatar: true
        })
      //将用户选择的图片转换为base64字符串存于数据库。
      let imgUrl = 'data:image/png;base64,'+wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64");
      console.log(imgUrl);
      }
    })

  },

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatar: null,
    resume:{
      name:"林烁",
      gender:"男",
      people:"汉",
      birthday:"1998-10-27",
      nactivePlace:"广东揭阳",
      major:"计算结科学与技术",
      status:"健康",
      phoneNumber:"13695101920",
      wxNumber:"qq1530305292",
      awards:['2018年12月 校三等奖学金','2019年12月 校三等奖学金','2020年6月 人工智能大赛二等奖'],
      skills:["CET-4","CET-6"],
      workExps:["1.基于评价情感倾向的房源推荐系统				2020年3月-5月","2.针对潮汕机场与湛江机场航线的票价查询系统		2020年6月"],
      eduExps:["2017.9-2021.7		岭南师范学院		本科	"],
      majorSubjects:['数据结构','离散数学' ,  '计算机组成原理' ,  'Linux基础',   '计算机网络' , '数据库原理'],
      campusActivites:["2018.7				  三下乡活动"],
      selfAssessment:"本人热爱学习，工作态度严谨认真，责任心强，有很好的团队合作能力。有良好的分析、解决问题的思维。以创新、解决客户需求、维护公司利益为宗旨。来接受挑战和更大的发展平台。"


    }
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        avatar:app.globalData.userInfo.avatarUrl
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          avatar:res.userInfo.avatarUrl
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            avatar:res.userInfo.avatarUrl
          })
        }
      })
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