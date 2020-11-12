// components/doubleDateForm/doubleDateForm.js
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
    beginDate_: {
      type: String,
      value: ""
    },
    endDate_: {
      type: String,
      value: ""
    },
    dataType: {
      type: String,
      value: ""
    },
    index_: {
      type: String,
      value: ""
    }

},

  /**
   * 组件的初始数据
   */
  data: {
    curDate:curDate,
    startDate:"1999-01-01",
    beginDate: "1999-01-01",
    endDate: curDate,
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
      var pages = getCurrentPages()
      var fatherPage = pages[pages.length-1]
      console.log(fatherPage)
      if(this.data.dataType=="workExps"){
      let this_workExps = fatherPage.data.workExps
      if(this_workExps.length>1){
      this_workExps.splice(this.data.index_,1)
      fatherPage.setData({
        workExps:this_workExps
      })
    }
    else{
      fatherPage.setData({
        workExps:[{ "work": null,"beginDate": null,"endDate": null}]
      })
    }
    let openid = fatherPage.data.openid
    wx.request({
      url: 'https://www.linshuo.top:1998/updateWorkExpInfo',
      method:"POST",
      data:JSON.stringify({
        "openId":openid,
        "workExps":fatherPage.data.workExps
      })
    })
    }
    if(this.data.dataType=="eduExps"){
      let this_eduExps = fatherPage.data.eduExps
      if(this_eduExps.length>1){
      this_eduExps.splice(this.data.index_,1)
      fatherPage.setData({
        eduExps:this_eduExps
      })
    }
    else{
      fatherPage.setData({
        eduExps:[{ "school": null,"beginDate": null,"endDate": null}]
      })
    }
    let openid = fatherPage.data.openid
    wx.request({
      url: 'https://www.linshuo.top:1998/updateEduExpInfo',
      method:"POST",
      data:JSON.stringify({
        "openId":openid,
        "eduExps":fatherPage.data.eduExps
      })
    })
    }

    if(this.data.dataType=="activities"){
      let this_activities = fatherPage.data.activities
      if(this_activities.length>1){
      this_activities.splice(this.data.index_,1)
      fatherPage.setData({
        activities:this_activities
      })
    }
    else{
      fatherPage.setData({
        activities:[{ "activity": null,"beginDate": null,"endDate": null}]
      })
    }
    let openid = fatherPage.data.openid
    wx.request({
      url: 'https://www.linshuo.top:1998/updateActivityInfo',
      method:"POST",
      data:JSON.stringify({
        "openId":openid,
        "activities":fatherPage.data.activities
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
    bindBeginDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        beginDate: e.detail.value
      })
      this.triggerEvent("getBeginDate", {
        currentBeginDate: e.detail.value
      }, {})
    },
    bindEndDateChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        endDate: e.detail.value
      })
      this.triggerEvent("getEndDate", {
        currentEndDate: e.detail.value
      }, {})
    },

  }


})