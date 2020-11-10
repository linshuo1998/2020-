// components/functions/functions.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    functions:{
      type:Array,
      value:[]
    },
    openId:{
      type:String,
      value:""
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
    changeTo:function(e){
      console.log(e);
      
      let url = e.currentTarget.dataset.url;
      if(url=="/pages/myResume/myResume"){
        url = url+"?openid="+this.data.openId
      }
      if(url=="/pages/myPublished/myPublished"){
        url = url+"?openid="+this.data.openId
      }
      if(url=="/pages/browsingHistory/browsingHistory"){
        url = url+"?openid="+this.data.openId
      }
      wx.navigateTo({
        url: url
      })
    }
  }
})
