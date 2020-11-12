// components/seekerInfo/seekerInfo.js
import {CDN_PATH,KEY, REFERER,APIPRRFIX} from '../../config/appConfig';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    _data:{
      type:Object,
      value:null
    },
    openid:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete:false,
    CDN_PATH,
		imgs: {
			downArrow: `${CDN_PATH}/iconArrowDown@3x.png`,
			upArrow: `${CDN_PATH}/iconArrowUp@3x.png`,
			rightArrow: `${CDN_PATH}/iconArrowRight@3x.png`,
    },
    status:true,
    showAbout:true,
    showInfo:false,
    showFunc:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // console.log("修改后",this.data.rInfos[0].open,this.data.rInfos[1].open)
    showRoute:function(e){
      const key = KEY;
      const referer = REFERER
      const endPoint = JSON.stringify(this.data.rInfos.point);
      const startPoint = this.data.myLoc ? JSON.stringify(this.data.myLoc) : '';
      const mode = 'transit'; //默认公交车
      const navigation = 1;  //默认开启导航
      let url = 'plugin://routePlan/index?key=' + key + '&referer=' + referer +'&startPoint'+startPoint+'&endPoint=' + endPoint +'&mode=' + mode + '&navigation=' + navigation;
      wx.navigateTo({
        url
      });
      

    },
    showResume:function(e){
      console.log(this.data._data.id)
      let curTime = new Date();
      console.log("___________________")
      console.log(this.data._data)
      let that = this;
      wx.request({
        url: 'https://www.linshuo.top:1998/checkSaveOrUpdate',
        data: {
          "openId": that.data.openid,
          "tarId": that.data._data.id,
        },
        method: "GET",
        success(res) {
          console.log(res)
          // 如果是已经有了记录了，则做更新操作
          if (res.data > 0) {
            let params = {
              'openId': that.data.openid,
              'type': 'SeekerInfo',
              'tarId': that.data._data.id,
              'lastVisitTime': curTime.toDateString()+"_"+curTime.toTimeString(),
              'visitNum': res.data+1,
            }
            wx.request({
              url: 'https://www.linshuo.top:1998/updateBrowsingHistory',
              data: JSON.stringify(params),
              method: "POST",
              success(res) {
                console.log("浏览历史修改成功", res)
              }
            })
          }
          // 如果没有记录，则做添加
          else {
            let params = {
              'openId': that.data.openid,
              'type': 'SeekerInfo',
              'tarId': that.data._data.id,
              'lastVisitTime': curTime.toDateString()+"_"+curTime.toTimeString(),
              'visitNum': 1,
            }
            wx.request({
              url: 'https://www.linshuo.top:1998/saveBrowsingHistory',
              data: JSON.stringify(params),
              method: "POST",
              success(res) {
                console.log("浏览历史保存成功", res)
              }
            })
        }}})
      wx.navigateTo({
        url: '/pages/myResume/myResume?openid='+this.data._data.id
      })
    },
    copy: function (e) {
      // var id = parseInt(e.currentTarget.id);
      let that = this;
      wx.setClipboardData({
        data: that.data._data.MainInfo.wxNumber,
        success: function (res) {
          wx.showToast({
            title: '复制成功',
          });
        }
      });
    },
  
    call:function(e){
      // var id = parseInt(e.currentTarget.id);
      wx.makePhoneCall({
        phoneNumber: this.data._data.MainInfo.phoneNumber //仅为示例，并非真实的电话号码
      }).catch((e) => {
        // console.log(e)  //用catch(e)来捕获错误{makePhoneCall:fail cancel}
      })
    
    },
    _deleteItem:function(){
      this.setData({
        isDelete:true
      })
    },
    _touchend:function(){
      setTimeout(() => {
        this.setData({
          isDelete:false
        })
      }, 2000);
    },

    _delete:function(){
      console.log("用户openid：",this.data.openid)
      console.log("信息发布者openid：",this.data._data.id)
      if(this.data.openid==this.data._data.id){
      wx.showModal({
        content: '是否删除？',
        showCancel: true,
        title: '提示',
        // 如果是success(result){则后续的this.setData里的this要先在前面有值，即var that=this;
        success: (result) => {
          if(result.confirm){
            console.log("点击了确定")
            this.setData({
              status:false
            })
            wx.request({
              url: "https://www.linshuo.top:1998/deleteData",
              method:"GET",
              data:{
                "id":this.data.rInfos.id
              }
            })
            wx.showToast({
              title: '删除成功',
            })
            this.setData({
              isDelete:false
            })
          }
          else if(result.cancel){
            console.log("取消了")
            this.setData({
              isDelete:false
            })
          }
        },
      })}
      else{
        wx.showToast({
          title: '您无权操作该条数据',
          icon:"none"
        })
      }
    },



    chooseOption:function(e){
      console.log(e)
      if(e.currentTarget.id=="_1"){
        this.setData({
          showAbout:true,
          showInfo:false,
          showFunc:false,
        })
      }
      else if(e.currentTarget.id=="_2"){
        this.setData({
          showAbout:false,
          showInfo:true,
          showFunc:false,
        })
      }
      else if(e.currentTarget.id=="_3"){
        this.setData({
          showAbout:false,
          showInfo:false,
          showFunc:true,
        })
      }
    }

    },
    

  }
)
