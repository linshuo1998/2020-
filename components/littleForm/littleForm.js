// components/littleForm/littleForm.js
var curTime = new Date();
var curDate = curTime.getFullYear() + "-" + (curTime.getMonth() + 1) + "-" + curTime.getDate();
let lastTouchX = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: ""
    },
    placeholder: {
      type: String,
      value: ""
    },
    nameValue: {
      type: String,
      value: ""
    },
    dateValue: {
      type: String,
      value: ""
    },
    dataType:{
      type:String,
      value:""
    },
    index_:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: "1999-01-01",
    curDate:curDate
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 滑动删除
    _tStart: function (e) {
      lastTouchX = e.changedTouches[0].pageX
    },
    _tEnd: function (e) {
      console.log(e)
      let index = parseInt(e.currentTarget.id);
      let newTouchX = e.changedTouches[0].pageX
      let distance = newTouchX - lastTouchX
      console.log(distance)
      if (distance >= 20) {
        this.setData({
          isOpen: false
        })
      } else if (distance <= -20) {
        this.setData({
          isOpen: true
          // [`awards[${index}].isOpen`]:true
        })
      } else {
        this.setData({
          isOpen: this.data.isOpen
        })
      }
    },
    delete: function (e) {
      console.log(e)
      var pages = getCurrentPages()
      var fatherPage = pages[pages.length-1]
      console.log(fatherPage)
      if(this.data.dataType=="awards"){
      let this_awards = fatherPage.data.awards
      if(this_awards.length>1){
      this_awards.splice(this.data.index_,1)
      fatherPage.setData({
        awards:this_awards
      })
    }
    else{
      fatherPage.setData({
        awards:[{ "awardName": null, "getAwardDate": null}]
      })
    }
    let openid = fatherPage.data.openid
    wx.request({
      url: 'https://www.linshuo.top:1998/updateAwardInfo',
      method:"POST",
      data:JSON.stringify({
        "openId":openid,
        "awards":fatherPage.data.awards
      })
    })
    }
    if(this.data.dataType=="skills"){
      let this_skills = fatherPage.data.skills
      if(this_skills.length>1){
      this_skills.splice(this.data.index_,1)
      fatherPage.setData({
        skills:this_skills
      })
    }
    else{
      fatherPage.setData({
        skills:[{ "skillsName": null, "getSkillDate": null}]
      })
    }
    let openid = fatherPage.data.openid
    wx.request({
      url: 'https://www.linshuo.top:1998/updateSkillInfo',
      method:"POST",
      data:JSON.stringify({
        "openId":openid,
        "skills":fatherPage.data.skills
      })
    })
    }
      this.setData({
        isOpen:false
      })
      wx.showToast({
        title: '删除成功',
      })
    },

    input_: function (e) {
      console.log("我是")
      console.log(e)
      this.triggerEvent("getInput", {
        currentInput: e.detail.value
      }, {})
    },
    bindDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        date: e.detail.value
      })
      this.triggerEvent("getDate", {
        currentDate: e.detail.value
      }, {})
    },

  }


})