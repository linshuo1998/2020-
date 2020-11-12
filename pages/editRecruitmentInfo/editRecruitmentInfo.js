// pages/editRecruitmentInfo/editRecruitmentInfo.js
const app = getApp()
var util = require('../../utils/util');
Page({
  _getLoc:function(){
    console.log(this.data.tags)
   
    // console.log("xxx");
    wx.chooseLocation({
			success: (res) => {
        console.log("当前位置信息：",res)
				this.setData({
					curLocation: res
        });
        var that = this;
        if(this.data.published){
          var old_tags = this.data.published.tags;
          if(res.name!=null&&(res.name.indexOf("岭南师范学院")!=-1||res.name.indexOf("湛江师范学院")!=-1||res.name.indexOf("信勇自选商场")!=-1)){
            for(var i=old_tags.length-1;i>=0;i--){
              // console.log(old_tags[i]);
              if(old_tags[i]=="校内"){
                return
              }
              else if(old_tags[i]=="校外"){
                old_tags.splice(i,1)
              }
            }
            old_tags.unshift("校内");
            let new_tags=old_tags;
            // console.log("new_tags:",new_tags)
            that.setData({
              "published.tags": new_tags
            })
            // console.log("yes")
            // console.log(that.data.tags)
          }
          else{
            for(var i=old_tags.length-1;i>=0;i--){
              console.log(old_tags[i]);
              if(old_tags[i]=="校外"){
                return
              }
              else if(old_tags[i]=="校内"){
                old_tags.splice(i,1);
              }
            }
            old_tags.unshift("校外");
            let new_tags=old_tags;
            // console.log("new_tags:",new_tags)
            that.setData({
              "published.tags": new_tags
            })
          }
        }
        else{
        var old_tags = this.data.tags;
        if(res.name!=null&&(res.name.indexOf("岭南师范学院")!=-1||res.name.indexOf("湛江师范学院")!=-1||res.name.indexOf("信勇自选商场")!=-1)){
          for(var i=old_tags.length-1;i>=0;i--){
            // console.log(old_tags[i]);
            if(old_tags[i]=="校内"){
              return
            }
            else if(old_tags[i]=="校外"){
              old_tags.splice(i,1)
            }
          }
          old_tags.unshift("校内");
          let new_tags=old_tags;
          // console.log("new_tags:",new_tags)
          that.setData({
            tags: new_tags
          })
          // console.log("yes")
          // console.log(that.data.tags)
        }
        else{
          for(var i=old_tags.length-1;i>=0;i--){
            console.log(old_tags[i]);
            if(old_tags[i]=="校外"){
              return
            }
            else if(old_tags[i]=="校内"){
              old_tags.splice(i,1);
            }
          }
          old_tags.unshift("校外");
          let new_tags=old_tags;
          // console.log("new_tags:",new_tags)
          that.setData({
            tags: new_tags
          })
        }
      }
        }
			
		});
  },
  _formSubmit:function(e){
    let formDatas = e.detail.value;
    this.setData({
      formDatas:formDatas
    })
    // console.log(formDatas)
    let title = formDatas.title;
    let wage = formDatas.wage;
    let time = formDatas.time;
    let phoneNumber = formDatas.phoneNumber;
    let wxNumber = formDatas.wxNumber;
    let workDetail = formDatas.workDetail;
    let need = formDatas.need;
    let tarLoc = this.data.curLocation;
    // console.log(tarLoc)
    // console.log(title)
    // 匹配手机号
    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
   

    if(title==null||title==""){
      wx.showToast({
        title: '【标 题】没有填写！',
        icon: 'none'
      })
    }
    else if(wage==null||wage==""){
      wx.showToast({
        title: '【薪 酬】没有填写！',
        icon: 'none'
      })
    }
    else if(time==null||time==""){
      wx.showToast({
        title: '【时 间】没有填写！',
        icon: 'none'
      })}
    else if(workDetail==null||workDetail==""){
      wx.showToast({
        title: '【内 容】没有填写！',
        icon: 'none'
      })
      }
    else if(need==null||need==""){
      wx.showToast({
        title: '【要 求】没有填写！',
        icon: 'none'
      })
      }
    else if(phoneNumber==null||phoneNumber==""){
      wx.showToast({
        title: '【电 话】没有填写！',
        icon: 'none'
      })
      }
    else if(!reg.test(phoneNumber)){
      wx.showToast({
        title: '【电 话】格式错误！',
        icon: 'none'
      })
    }
    else if(tarLoc==null||tarLoc.name==""){
      wx.showToast({
        title: '【位 置】没有填写！',
        icon: 'none'
      })
    }
    let userName = this.data.userInfo.nickName;
    let publishTime = util.formatTime(new Date());
    let avatarUrl = this.data.userInfo.avatarUrl;
    console.log(userName+"发布于"+publishTime+"|头像地址："+avatarUrl);
    let address = this.data.curLocation.name
    let addressDetail = this.data.curLocation.address
    let userOpenId = this.data.userOpenId
    let json_params = {
      // "id":userOpenId+"_"+publishTime,    //id值
      'title':title,
      'wage':wage,
      'time':time,
      'phoneNumber':phoneNumber,
      'wxNumber':wxNumber,
      'workDetail':workDetail,
      'need':need,
      'point':tarLoc,
      'name':userName,
      'publishTime': publishTime,
      'avatar':avatarUrl,
      'address':address,
      'addressDetail':addressDetail,
      'userOpenId':userOpenId,
      // 'tags':this.data.tags
    }
    if(this.data.published){
      json_params.id=this.data.index_;
      json_params.tags=this.data.published.tags;
      console.log("此时的tags",json_params)
      wx.request({
        url: 'https://www.linshuo.top:1998/updateData',
        method:"POST",
        data:JSON.stringify(json_params),
        success(res){
          console.log("修改成功",res)
          wx.showToast({
            title: '修改成功'
          })
          wx.switchTab({
            url: '/pages/recruitmentInfo/recruitmentInfo',
            success:function(e){
              // 刷新页面
                let page = getCurrentPages().pop();
                if (page == undefined || page == null) return;
                    page.onLoad();
            }
          })
        }
      })
    }
    else{  
      json_params.tags=this.data.tags
      wx.request({
      url: 'https://www.linshuo.top:1998/saveData',
      method:"POST",
      data:JSON.stringify(json_params),
      success(res){
        console.log("提交成功",res)
        wx.showToast({
          title: '提交成功'
        })
        wx.switchTab({
          url: '/pages/recruitmentInfo/recruitmentInfo',
          success:function(e){
            // 刷新页面
              let page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
                  page.onLoad();
          }
        })
      }
    })}
  
  },
  _formReset:function(e){
    console.log(e)
  },
  titleBlur:function(e){

    console.log(e.detail.value)
    let _title = e.detail.value
    var that = this;
    if(this.data.published){
      var old_tags = this.data.published.tags;
      if(_title!=null&&_title!=""&&(_title.indexOf("家教")!=-1||_title.indexOf("辅导作业")!=-1||_title.indexOf("补习")!=-1||_title.indexOf("作业辅导")!=-1)){
        for(var i=old_tags.length-1;i>=0;i--){
          // console.log(old_tags[i]);
          if(old_tags[i]=="家教"){
            return
          }
        }
        old_tags.unshift("家教");
        let new_tags=old_tags;
        that.setData({
          "published.tags": new_tags
        })
      }
      else{
        for(var i=old_tags.length-1;i>=0;i--){
         if(old_tags[i]=="家教"){
            old_tags.splice(i,1);
          }
        }
        let new_tags=old_tags;
        that.setData({
          "published.tags": new_tags
        })
      }
    }
    else{
      var old_tags = this.data.tags;
    if(_title!=null&&_title!=""&&(_title.indexOf("家教")!=-1||_title.indexOf("辅导作业")!=-1||_title.indexOf("补习")!=-1||_title.indexOf("作业辅导")!=-1)){
      for(var i=old_tags.length-1;i>=0;i--){
        // console.log(old_tags[i]);
        if(old_tags[i]=="家教"){
          return
        }
      }
      old_tags.unshift("家教");
      let new_tags=old_tags;
      that.setData({
        tags: new_tags
      })
    }
    else{
      for(var i=old_tags.length-1;i>=0;i--){
       if(old_tags[i]=="家教"){
          old_tags.splice(i,1);
        }
      }
      let new_tags=old_tags;
      that.setData({
        tags: new_tags
      })
    }}
  },
  timeBlur:function(e){
    var old_tags = this.data.tags;
    console.log(e.detail.value)
    let _time = e.detail.value
    var that = this;
    if(_time!=null&&_time!=""&&(_time.indexOf("星期六")!=-1||_time.indexOf("星期天")!=-1||_time.indexOf("周末")!=-1||_time.indexOf("周六")!=-1||_time.indexOf("礼拜六")!=-1||_time.indexOf("周日")!=-1)||_time.indexOf("礼拜天")!=-1||_time.indexOf("礼拜日")!=-1){
      for(var i=old_tags.length-1;i>=0;i--){
        // console.log(old_tags[i]);
        if(old_tags[i]=="周末"){
          return
        }
        else if(old_tags[i]=="工作日"){
          old_tags.splice(i,1);
        }

      }
      old_tags.unshift("周末");
      let new_tags=old_tags;
      that.setData({
        tags: new_tags
      })
    }
    else if(_time!=null&&_time!=""&&(_time.indexOf("周五")!=-1||_time.indexOf("周四")!=-1||_time.indexOf("周三")!=-1||_time.indexOf("周二")!=-1||_time.indexOf("周一")!=-1||_time.indexOf("星期五")!=-1||_time.indexOf("星期四")!=-1||_time.indexOf("星期三")!=-1||_time.indexOf("星期二")!=-1||_time.indexOf("星期一")!=-1)){
      for(var i=old_tags.length-1;i>=0;i--){
        // console.log(old_tags[i]);
        if(old_tags[i]=="工作日"){
          return
        }
        else if(old_tags[i]=="周末"){
          old_tags.splice(i,1);
        }
      }
      old_tags.unshift("工作日");
      let new_tags=old_tags;
      that.setData({
        tags: new_tags
      })
    }
    else{
      for(var i=old_tags.length-1;i>=0;i--){
       if(old_tags[i]=="周末"||old_tags[i]=="工作日"){
          old_tags.splice(i,1);
        }
      }
      let new_tags=old_tags;
      that.setData({
        tags: new_tags
      })
    }
  },

  
  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    curLocation:null,
    tags:[],
    formDatas:[],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userOpenId:null,
    published:null,
    index_:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      }) } else if (this.data.canIUse){
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
      console.log(this.data.userInfo)


// 获取openid
      if (app.globalData.openid!=null) {
        console.log("openid::",app.globalData.openid)
        this.setData({
          userOpenId:app.globalData.openid
        })
      } 
      else {
        app.checkLoginReadyCallback = res => {
          //登陆成功后自己希望执行的，和上面一样
          console.log("openid:::>>>",app.globalData.openid)
          this.setData({
            userOpenId:app.globalData.openid
          })
        }}

    // 判断是否有参数过来，有的话为修改，没有则有新增
    let id = options.userOpenId
    let id_ = options.id
    this.setData({
      index_:id_
    })
    let that = this;
    if(id){
      wx.request({
        url: 'https://www.linshuo.top:1998/findById',
        method:"GET",
        data:{id:id,id_:id_},
        success(res){
          console.log(res.data)
          that.setData({
            published:res.data,
            curLocation:res.data.point
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