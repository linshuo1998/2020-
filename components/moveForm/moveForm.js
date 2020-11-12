// components/moveForm/moveForm.js
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
    if(this.data.dataType=="course"){
    let this_courses = fatherPage.data.courses
    if(this_courses.length>1){
    this_courses.splice(this.data.index_,1)
    fatherPage.setData({
      courses:this_courses
    })
  }
  else{
    fatherPage.setData({
      courses:[{ "courseName": null}]
    })
  }
  let openid = fatherPage.data.openid
  wx.request({
    url: 'https://www.linshuo.top:1998/updateCourseInfo',
    method:"POST",
    data:JSON.stringify({
      "openId":openid,
      "courses":fatherPage.data.courses
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
  }
})
