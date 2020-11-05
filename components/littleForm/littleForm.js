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
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: curDate,
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

      //触发一个自定义事件，并且把数据传递出去（方便向页面传输数据）
      this.triggerEvent("selectChange", {
        currentIndex: e.currentTarget.id
      }, {})
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