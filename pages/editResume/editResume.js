// pages/editResume/editResume.js
import {
  CDN_PATH,
  KEY,
  REFERER,
  APIPRRFIX
} from '../../config/appConfig';
var curTime = new Date();
var curDate = curTime.getFullYear() + "-" + (curTime.getMonth() + 1) + "-" + curTime.getDate();
const app = getApp()

Page({
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPeopleChange:function(e){
    this.setData({
      people_index: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
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


  showDetail: function (e) {
    console.log(e)
    if (e.currentTarget.id == "_0") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 0) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[0]": !this.data.open[0]
      // })
    }
    if (e.currentTarget.id == "_1") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 1) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[1]": !this.data.open[1]
      // })
      // console.log(this.data.open)
    }
    if (e.currentTarget.id == "_2") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 2) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[2]": !this.data.open[2]
      // })
      // console.log(this.data.open)
    }
    if (e.currentTarget.id == "_3") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 3) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[3]": !this.data.open[3]
      // })
      // console.log(this.data.open)
    }
    if (e.currentTarget.id == "_4") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 4) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[4]": !this.data.open[4]
      // })
      // console.log(this.data.open)
    }
    if (e.currentTarget.id == "_5") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 5) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[5]": !this.data.open[5]
      // })
      // console.log(this.data.open)
    }
    if (e.currentTarget.id == "_6") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 6) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[6]": !this.data.open[6]
      // })
      // console.log(this.data.open)
    }
    if (e.currentTarget.id == "_7") {
      var this_open = this.data.open
      for (var i = 0; i < this_open.length; i++) {
        if (i == 7) {
          this_open[i] = !this_open[i]
        } else {
          this_open[i] = false;
        }


      }
      this.setData({
        open: this_open
      })
      // this.setData({
      //   "open[7]": !this.data.open[7]
      // })
      // console.log(this.data.open)
    }

  },
  add: function (e) {
    let type = e.currentTarget.dataset.type
    if (type == "awards") {
      let lastItem = this.data.awards[this.data.awards.length - 1]
      console.log(this.data.awards[this.data.awards.length - 1])
      console.log(lastItem)
      if (lastItem.awardName != null && lastItem.getAwardDate != null) {
        console.log("确实完整了")
        console.log(this.data.awards)
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          awards: this.data.awards.concat({
            "awardName": null,
            "getAwardDate": null
          }),
          awards_update: true
        })
        console.log(this.data.awards)

      } else {
        wx.showToast({
          title: '信息不完整！',
          icon: "none"
        })
      }
    } else if (type == "skills") {
      let lastItem = this.data.skills[this.data.skills.length - 1]
      console.log(this.data.skills[this.data.skills.length - 1])
      console.log(lastItem)
      if (lastItem.skillName != null && lastItem.getSkillDate != null) {
        console.log("确实完整了")
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          skills: this.data.skills.concat({
            "skillName": null,
            "getSkillDate": null
          }),
          skills_update: true
        })
      } else {
        wx.showToast({
          title: '信息不完整！',
          icon: "none"
        })
      }
    } else if (type == "eduExps") {
      console.log("eeee", this.data.eduExps)
      let lastItem = this.data.eduExps[this.data.eduExps.length - 1]
      if (lastItem.school != null && lastItem.beginDate != null && lastItem.endDate != null) {
        console.log("确实完整了")
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          eduExps: this.data.eduExps.concat({
            "school": null,
            "beginDate": null,
            "beginDate": null
          }),
          eduExps_update: true
        })
      } else {
        wx.showToast({
          title: '信息不完整！',
          icon: "none"
        })
      }
    } else if (type == "activities") {
      let lastItem = this.data.activities[this.data.activities.length - 1]
      if (lastItem.activity != null && lastItem.beginDate != null && lastItem.endDate != null) {
        console.log("确实完整了")
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          activities: this.data.activities.concat({
            "activity": null,
            "beginDate": null,
            "endDate": null
          }),
          activities_update: true
        })
      } else {
        wx.showToast({
          title: '信息不完整！',
          icon: "none"
        })
      }
    } else if (type == "course") {
      let lastItem = this.data.courses[this.data.courses.length - 1]
      if (lastItem.courseName != null) {
        console.log("确实完整了")
        this.setData({
          courses: this.data.courses.concat({
            "courseName": null
          }),
          courses_update: true
        })
      } else {
        wx.showToast({
          title: '信息不完整！',
          icon: "none"
        })
      }
    } else if (type == "workExps") {
      // console.log("eeee", this.data.activities)
      let lastItem = this.data.workExps[this.data.workExps.length - 1]
      if (lastItem.work != null && lastItem.beginDate != null && lastItem.endDate != null) {
        console.log("确实完整了")
        console.log("开始时间", lastItem.beginDate)
        console.log("结束时间", lastItem.endDate)
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        // console.log("还有吗？？？")
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          workExps: this.data.workExps.concat({
            "work": null,
            "beginDate": null,
            "beginDate": null
          }),
          workExps_update: true
        })
      } else {
        wx.showToast({
          title: '信息不完整！',
          icon: "none"
        })
      }
    }
  },

  getInput: function (e) {
    let index = parseInt(e.currentTarget.id)
    let type = e.currentTarget.dataset.type
    if (type == "awards") {
      this.setData({
        [`awards[${index}].awardName`]: e.detail.currentInput
      })
    } else if (type == "skills") {
      this.setData({
        [`skills[${index}].skillName`]: e.detail.currentInput
      })
    } else if (type == "eduExps") {
      this.setData({
        [`eduExps[${index}].school`]: e.detail.currentInput
      })
    } else if (type == "course") {
      this.setData({
        [`courses[${index}].courseName`]: e.detail.currentInput
      })
    } else if (type == "workExps") {
      this.setData({
        [`workExps[${index}].work`]: e.detail.currentInput
      })
    } else if (type == "activities") {
      this.setData({
        [`activities[${index}].activity`]: e.detail.currentInput
      })
    }

  },

  getDate: function (e) {
    console.log(e)
    console.log("子组件选择的日期:" + e.detail.currentDate)
    let index = parseInt(e.currentTarget.id)
    let type = e.currentTarget.dataset.type
    if (type == "awards") {
      this.setData({
        [`awards[${index}].getAwardDate`]: e.detail.currentDate
      })
    } else if (type == "skills") {
      this.setData({
        [`skills[${index}].getSkillDate`]: e.detail.currentDate
      })
    }
    console.log(this.data.awards)
  },
  getBeginDate: function (e) {
    let index = parseInt(e.currentTarget.id)
    let type = e.currentTarget.dataset.type
    if (type == "eduExps") {
      this.setData({
        [`eduExps[${index}].beginDate`]: e.detail.currentBeginDate
      })
    } else if (type == "activities") {
      this.setData({
        [`activities[${index}].beginDate`]: e.detail.currentBeginDate
      })
    } else if (type == "workExps") {
      this.setData({
        [`workExps[${index}].beginDate`]: e.detail.currentBeginDate
      })
    }
  },
  getEndDate: function (e) {
    let index = parseInt(e.currentTarget.id)
    let type = e.currentTarget.dataset.type
    if (type == "eduExps") {
      this.setData({
        [`eduExps[${index}].endDate`]: e.detail.currentEndDate
      })
    } else if (type == "activities") {
      this.setData({
        [`activities[${index}].endDate`]: e.detail.currentEndDate
      })
    } else if (type == "workExps") {
      this.setData({
        [`workExps[${index}].endDate`]: e.detail.currentEndDate
      })
    }
  },
  chooseImg: function () {
    var that = this;
    // var childId = wx.getStorageSync("child_id");
    // var token = wx.getStorageSync('token');
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        
        var tempFilesSize = res.tempFiles[0].size;  //获取图片的大小，单位B
        console.log("当前图片大小：",tempFilesSize)
        if(tempFilesSize <= 200000){   //图片小于或者等于200K时 可以执行获取图片
        var avatar = res.tempFilePaths;
        //将用户选择的图片转换为base64字符串存于数据库。
        let imgUrl = 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64");
        console.log(imgUrl);
        that.setData({
          avatar: imgUrl
        })
      }
      else{
        wx.showToast({
          title: '图像大于200KB',
          icon:'none'
        })
      }
    }
    })

  },

  saveMainInfo: function (e) {

    let that = this
    console.log(e)
    let sno = e.detail.value.sno
    let name = e.detail.value.name
    let gender = e.detail.value.gender
    let people = e.detail.value.people
    let nativePlace = e.detail.value.nativePlace
    let birthday = e.detail.value.birthday
    let major = e.detail.value.major
    let health = e.detail.value.health
    let phoneNumber = e.detail.value.phoneNumber
    let wxNumber = e.detail.value.wxNumber
    let avatar = this.data.avatar
    
    console.log(gender)
    console.log(people)
    console.log(nativePlace)
    // 匹配手机号
    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;

    if(phoneNumber&&!reg.test(phoneNumber)){
      wx.showToast({
        title: '【手机号码】格式错误！',
        icon: 'none'
      })
      return
    }

    let this_mainInfo = this.data.mainInfo_
    this_mainInfo.sno = sno
    this_mainInfo.name = name
    this_mainInfo.gender = gender
    this_mainInfo.people = people
    this_mainInfo.nativePlace = nativePlace
    // this_mainInfo.birthday = new Date(birthday)
    this_mainInfo.birthday = birthday
    this_mainInfo.major = major
    this_mainInfo.health = health
    this_mainInfo.phoneNumber = phoneNumber
    this_mainInfo.wxNumber = wxNumber
    this_mainInfo.avatar = avatar
    this_mainInfo.openId = this.data.openid
    this.setData({
      "mainInfo_": this_mainInfo
    })
    console.log(this.data.mainInfo_)
    
    if (this.data.mainInfo_update) {
      console.log(this.data.mainInfo)
      console.log(JSON.stringify(this.data.mainInfo_))
      wx.request({
        url: 'https://www.linshuo.top:1998/updateMainInfo',
        data: JSON.stringify(this.data.mainInfo_),
        method: "POST",
        success(res) {
          console.log("修改成功")
          console.log(res)
          wx.showToast({
            title: '数据已更新',
          })
          that.setData({
            mainInfo_update: true
          })
        }
      })
    } else {
      console.log(JSON.stringify(this.data.mainInfo_))
      wx.request({
        url: 'https://www.linshuo.top:1998/saveMainInfo',
        data: JSON.stringify(this.data.mainInfo_),
        method: "POST",
        success(res) {
          console.log("保存成功")
          console.log(res)
          wx.showToast({
            title: '保存成功',
          })
          that.setData({
            mainInfo_update: true
          })
        }
      })
    }

  },
  saveAwardInfo: function (e) {
    // 如果长度为1，判断是否数据为空，为空可保存，不为空必须填写完整才可保存
    if (this.data.awards.length == 1) {
      if (this.data.awards[this.data.awards.length - 1].awardName && this.data.awards[this.data.awards.length - 1].getAwardDate) {
        console.log("初始状态")
        console.log(this.data.awards)
        let awards = this.data.awards
        let openId = this.data.openid
        if (this.data.awards_update) {
          let that = this;
          wx.request({
            url: 'https://www.linshuo.top:1998/updateAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                awards_update: true
              })
            }
          })
        } else {
          let that = this;
          wx.request({
            url: 'https://www.linshuo.top:1998/saveAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                awards_update: true
              })
            }
          })
        }
      } else if (!this.data.awards[this.data.awards.length - 1].awardName && !this.data.awards[this.data.awards.length - 1].getAwardDate) {
        let awards = this.data.awards
        let openId = this.data.openid
        if (this.data.awards_update) {
          let that = this;
          wx.request({
            url: 'https://www.linshuo.top:1998/updateAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                awards_update: true
              })
            }
          })
        } else {
          let that = this;
          wx.request({
            url: 'https://www.linshuo.top:1998/saveAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                awards_update: true
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    }
    // 长度大于1，必须保证最后一项完整
    else {
      if (this.data.awards[this.data.awards.length - 1].awardName && this.data.awards[this.data.awards.length - 1].getAwardDate) {
        let awards = this.data.awards
        let openId = this.data.openid
        if (this.data.awards_update) {
          let that = this;
          wx.request({
            url: 'https://www.linshuo.top:1998/updateAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                awards_update: true
              })
            }
          })
        } else {
          let that = this;
          wx.request({
            url: 'https://www.linshuo.top:1998/saveAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                awards_update: true
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    }
  },
  saveSkillInfo: function (e) {
    if (this.data.skills.length == 1) {
      if (this.data.skills[this.data.skills.length - 1].skillName && this.data.skills[this.data.skills.length - 1].getSkillDate) {
        let skills = this.data.skills
        let openId = this.data.openid
        let that = this
        if (this.data.skills_update) {

          wx.request({
            url: 'https://www.linshuo.top:1998/updateSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                skills_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                skills_update: true
              })
            }
          })
        }

      } else if (!this.data.skills[this.data.skills.length - 1].skillName && !this.data.skills[this.data.skills.length - 1].getSkillDate) {
        let skills = this.data.skills
        let openId = this.data.openid
        let that = this
        if (this.data.skills_update) {

          wx.request({
            url: 'https://www.linshuo.top:1998/updateSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                skills_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                skills_update: true
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    } else {
      if (this.data.skills[this.data.skills.length - 1].skillName && this.data.skills[this.data.skills.length - 1].getSkillDate) {
        let skills = this.data.skills
        let openId = this.data.openid
        let that = this
        if (this.data.skills_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                skills_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                skills_update: true
              })
            }
          })
        }

      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    }
  },
  saveWorkExpInfo: function (e) {
    if (this.data.workExps[this.data.workExps.length - 1].work && this.data.workExps[this.data.workExps.length - 1].beginDate && this.data.workExps[this.data.workExps.length - 1].endDate) {
      let workExps = this.data.workExps
      let openId = this.data.openid

      let lastItem = this.data.workExps[this.data.workExps.length - 1]
      if (lastItem.beginDate > lastItem.endDate) {
        wx.showToast({
          title: '开始时间大于结束时间',
          icon: 'none'
        })
        return
      }



      let that = this




      if (this.data.workExps_update) {
        wx.request({
          url: 'https://www.linshuo.top:1998/updateWorkExpInfo',
          method: "POST",
          data: JSON.stringify({
            "openId": openId,
            "workExps": workExps
          }),
          success(res) {
            console.log("成功更新数据")
            console.log(res)
            wx.showToast({
              title: '数据已更新',
            })
            that.setData({
              workExps_update: true
            })
          }
        })
      } else {
        wx.request({
          url: 'https://www.linshuo.top:1998/saveWorkExpInfo',
          method: "POST",
          data: JSON.stringify({
            "openId": openId,
            "workExps": workExps
          }),
          success(res) {
            console.log("成功保存数据")
            console.log(res)
            wx.showToast({
              title: '保存成功',
            })
            that.setData({
              workExps_update: true
            })
          }
        })
      }
    } else {
      wx.showToast({
        title: '信息不完整',
        icon: 'none'
      })
    }
  },
  saveEduExpInfo: function (e) {
    if (this.data.eduExps.length == 1) {
      if (this.data.eduExps[this.data.eduExps.length - 1].school && this.data.eduExps[this.data.eduExps.length - 1].beginDate && this.data.eduExps[this.data.eduExps.length - 1].endDate) {
        let eduExps = this.data.eduExps
        let openId = this.data.openid

        let lastItem = this.data.eduExps[this.data.eduExps.length - 1]
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }

        let that = this
        if (this.data.eduExps_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                eduExps_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                eduExps_update: true
              })
            }
          })
        }

      } else if (!this.data.eduExps[this.data.eduExps.length - 1].school && !this.data.eduExps[this.data.eduExps.length - 1].beginDate && !this.data.eduExps[this.data.eduExps.length - 1].endDate) {
        let eduExps = this.data.eduExps
        let openId = this.data.openid
        let lastItem = this.data.eduExps[this.data.eduExps.length - 1]
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        let that = this
        if (this.data.eduExps_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                eduExps_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                eduExps_update: true
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    } else {
      if (this.data.eduExps[this.data.eduExps.length - 1].school && this.data.eduExps[this.data.eduExps.length - 1].beginDate && this.data.eduExps[this.data.eduExps.length - 1].endDate) {
        let eduExps = this.data.eduExps
        let openId = this.data.openid
        let lastItem = this.data.eduExps[this.data.eduExps.length - 1]
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        let that = this
        if (this.data.eduExps_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                eduExps_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                eduExps_update: true
              })
            }
          })

        }

      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    }
  },
  saveCourseInfo: function (e) {
    if (this.data.courses.length == 1) {
      if (this.data.courses[this.data.courses.length - 1].courseName) {
        let courses = this.data.courses
        let openId = this.data.openid
        let that = this
        if (this.data.courses_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                courses_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                courses_update: true
              })
            }
          })
        }

      } else if (!this.data.courses[this.data.courses.length - 1].courseName) {
        let courses = this.data.courses
        let openId = this.data.openid
        let that = this
        if (this.data.courses_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                courses_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                courses_update: true
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    } else {
      if (this.data.courses[this.data.courses.length - 1].courseName) {
        let courses = this.data.courses
        let openId = this.data.openid
        let that = this
        if (this.data.courses_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                courses_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                courses_update: true
              })
            }
          })
        }

      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    }
  },
  saveActivityInfo: function (e) {
    if (this.data.activities.length == 1) {
      if (this.data.activities[this.data.activities.length - 1].activity && this.data.activities[this.data.activities.length - 1].beginDate && this.data.activities[this.data.activities.length - 1].endDate) {
        let activities = this.data.activities
        let openId = this.data.openid
        let lastItem = this.data.activities[this.data.activities.length - 1]
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        let that = this
        if (this.data.activities_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateActivityInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "activities": activities
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                activities_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveActivityInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "activities": activities
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                activities_update: true
              })
            }
          })
        }

      } else if (!this.data.activities[this.data.activities.length - 1].activity && !this.data.activities[this.data.activities.length - 1].beginDate && !this.data.activities[this.data.activities.length - 1].endDate) {
        let activities = this.data.activities
        let openId = this.data.openid
        let lastItem = this.data.activities[this.data.activities.length - 1]
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        let that = this
        if (this.data.activities_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateActivityInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "activities": activities
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                activities_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveActivityInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "activities": activities
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                activities_update: true
              })
            }
          })
        }
      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    } else {
      if (this.data.activities[this.data.activities.length - 1].activity && this.data.activities[this.data.activities.length - 1].beginDate && this.data.activities[this.data.activities.length - 1].endDate) {
        let activities = this.data.activities
        let openId = this.data.openid
        let lastItem = this.data.activities[this.data.activities.length - 1]
        if (lastItem.beginDate > lastItem.endDate) {
          wx.showToast({
            title: '开始时间大于结束时间',
            icon: 'none'
          })
          return
        }
        let that = this
        if (this.data.activities_update) {
          wx.request({
            url: 'https://www.linshuo.top:1998/updateActivityInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "activities": activities
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
              wx.showToast({
                title: '数据已更新',
              })
              that.setData({
                activities_update: true
              })
            }
          })
        } else {
          wx.request({
            url: 'https://www.linshuo.top:1998/saveActivityInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "activities": activities
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
              wx.showToast({
                title: '保存成功',
              })
              that.setData({
                activities_update: true
              })
            }
          })
        }

      } else {
        wx.showToast({
          title: '信息不完整',
          icon: "none"
        })
      }
    }

  },
  saveSelfEvaluation: function (e) {
    console.log(e.detail.value.selfEvaluation)
    let that = this
    if (e.detail.value.selfEvaluation) {
      if (this.data.selfEvaluation_update) {
        let openid = this.data.openid
        wx.request({
          url: 'https://www.linshuo.top:1998/updateSelfEvaluation',
          method: "POST",
          data: JSON.stringify({
            "openId": openid,
            "selfEvaluation": e.detail.value.selfEvaluation
          }),
          success(res) {
            wx.showToast({
              title: '数据已更新',
            })
            that.setData({
              selfEvaluation_update: true
            })
          }
        })
      } else {
        let openid = this.data.openid
        wx.request({
          url: 'https://www.linshuo.top:1998/saveSelfEvaluation',
          method: "POST",
          data: JSON.stringify({
            "openId": openid,
            "selfEvaluation": e.detail.value.selfEvaluation
          }),
          success(res) {
            wx.showToast({
              title: '保存成功',
            })
            that.setData({
              selfEvaluation_update: true
            })
          }
        })
      }
    } else {
      wx.showToast({
        title: '内容不能为空',
        icon: 'none'
      })
    }

  },
  getResume: function () {
    wx.navigateTo({
      url: '/pages/myResume/myResume?openid=' + this.data.openid
    })
  },
  getCard: function () {
    wx.showToast({
      title: '正在检查信息。。',
      icon:'none'
    })
    let that = this
    wx.request({
      url: 'https://www.linshuo.top:1998/findSeekerCardById',
      data: {
        "id": that.data.openid
      },
      method: "GET",
      success(res) {
        console.log(res)
        if (res.data.openId) {
          // 更新
          let _mainInfo = null;
          let _selfEvaluation = null;
          let _workExps = null;
          wx.request({
            url: 'https://www.linshuo.top:1998/findMainInfo',
            data: {
              'id': that.data.openid
            },
            method: "GET",
            success(res) {
              if (res.data.openId) {
                if (res.data.sno && res.data.name && res.data.major && res.data.avatar) {
                  _mainInfo = res.data
                  wx.request({
                    url: 'https://www.linshuo.top:1998/findWorkExpInfo',
                    data: {
                      'id': that.data.openid
                    },
                    method: "GET",
                    success(res) {
                      if (res.data.openId) {
                        _workExps = res.data.workExps
                      } else {
                        _workExps = []
                      }
                      console.log(_workExps)
                      wx.request({
                        url: 'https://www.linshuo.top:1998/findSelfEvaluation',
                        data: {
                          'id': that.data.openid
                        },
                        method: "GET",
                        success(res) {
                          if (res.data.openId) {
                            if (res.data.selfEvaluation) {
                              _selfEvaluation = res.data.selfEvaluation
                            }
                          }

                          console.log(_mainInfo)
                          console.log(_workExps)
                          console.log(_selfEvaluation)
                          if (_mainInfo && _selfEvaluation && _workExps) {
                            wx.request({
                              url: 'https://www.linshuo.top:1998/updateCard',
                              data: {
                                'openId': that.data.openid,
                                'mainInfo': _mainInfo,
                                'selfEvaluation': _selfEvaluation,
                                'workExps': _workExps,
                                'sno':_mainInfo.sno,
                                'name':_mainInfo.name,
                                'gender':_mainInfo.gender,
                                'major':_mainInfo.major,
                                'phoneNumber':_mainInfo.phoneNumber,
                                'wxNumber': _mainInfo.wxNumber,
                                'avatar': _mainInfo.avatar
                              },
                              method: "POST",
                              success(res) {
                                console.log("名片已更新")
                                wx.showToast({
                                  title: '名片已更新',
                                })
                                wx.switchTab({
                                  url: '/pages/seekerInfo/seekerInfo',
                                })
                              }
                            })

                          }
                           else {
                            wx.showToast({
                              title: '请完善信息',
                              icon: 'none'
                            })
                          }

                        }
                      })
                    }
                  })
                }
                else{
                  wx.showToast({
                    title: '请完善信息',
                    icon:'none'
                  })
                }
              }

            }
          })


        } else {
          // 保存
          let _mainInfo = null;
          let _selfEvaluation = null;
          let _workExps = null;
          wx.request({
            url: 'https://www.linshuo.top:1998/findMainInfo',
            data: {
              'id': that.data.openid
            },
            method: "GET",
            success(res) {
              if (res.data.openId) {
                if (res.data.sno && res.data.name && res.data.major && res.data.avatar) {
                  _mainInfo = res.data
                  wx.request({
                    url: 'https://www.linshuo.top:1998/findWorkExpInfo',
                    data: {
                      'id': that.data.openid
                    },
                    method: "GET",
                    success(res) {
                      if (res.data.openId) {
                        _workExps = res.data.workExps
                      } else {
                        _workExps = []
                      }
                      console.log(_workExps)
                      wx.request({
                        url: 'https://www.linshuo.top:1998/findSelfEvaluation',
                        data: {
                          'id': that.data.openid
                        },
                        method: "GET",
                        success(res) {
                          if (res.data.openId) {
                            if (res.data.selfEvaluation) {
                              _selfEvaluation = res.data.selfEvaluation
                            }
                          }

                          console.log(_mainInfo)
                          console.log(_workExps)
                          console.log(_selfEvaluation)
                          if (_mainInfo && _selfEvaluation && _workExps) {
                            wx.request({
                              url: 'https://www.linshuo.top:1998/saveCard',
                              data: {
                                'openId': that.data.openid,
                                'mainInfo': _mainInfo,
                                'selfEvaluation': _selfEvaluation,
                                'workExps': _workExps,
                                'sno':_mainInfo.sno,
                                'name':_mainInfo.name,
                                'gender':_mainInfo.gender,
                                'major':_mainInfo.major,
                                'phoneNumber':_mainInfo.phoneNumber,
                                'wxNumber': _mainInfo.wxNumber,
                                'avatar': _mainInfo.avatar
                              },
                              method: "POST",
                              success(res) {
                                wx.switchTab({
                                  url: '/pages/seekerInfo/seekerInfo',
                                })
                              }
                            })

                          } else {
                            console.log("名片已生成")
                            wx.showToast({
                              title: '名片已生成',
                            })
                            wx.showToast({
                              title: '请完善信息',
                              icon: 'none'
                            })
                          }

                        }
                      })
                    }
                  })
                }
                else{
                  wx.showToast({
                    title: '请完善信息',
                    icon:'none'
                  })
                }
              }

            }
          })



        }

      },
      fail(res) {
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        })
      }
    })

  },

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    people:["汉族","蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族","哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","畲族","高山族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛难族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族","乌孜别克族","俄罗斯族","鄂温克族","崩龙族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族","其他"],
    people_index: 0,
    region: ['广东省', '湛江市', '赤坎区'],
    customItem: '全部',
    startDate: "1990-01-01",
    curDate: curDate,
    date: "1990-01-01",
    open: [true, false, false, false, false, false, false, false],
    awards: [{
      "awardName": null,
      "getAwardDate": null
    }],
    skills: [{
      "skillName": null,
      "getSkillDate": null
    }],
    eduExps: [{
      "school": null,
      "beginDate": null,
      "endDate": null
    }],
    activities: [{
      "activity": null,
      "beginDate": null,
      "endDate": null
    }],
    courses: [{
      "courseName": null
    }],
    workExps: [{
      "work": null,
      "beginDate": null,
      "endDate": null
    }],
    imgs: {
      downArrow: `${CDN_PATH}/iconArrowDown@3x.png`,
      upArrow: `${CDN_PATH}/iconArrowUp@3x.png`,
      rightArrow: `${CDN_PATH}/iconArrowRight@3x.png`,
    },
    cur_PageIndex: null,
    openid: null,
    mainInfo: null,
    mainInfo_: {},
    avatar: null,
    awardsFlag: null,
    skillsFlag: null,
    workExpsFlag: null,
    eduExpsFlag: null,
    coursesFlag: null,
    activitiesFlag: null,
    selfEvaluationFlag: null,

    mainInfo_update: false,
    awards_update: false,
    skills_update: false,
    workExps_update: false,
    eduExps_update: false,
    courses_update: false,
    activities_update: false,
    selfEvaluation_update: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      openid: options.openid
    })
    let that = this;

    wx.request({
      url: 'https://www.linshuo.top:1998/findMainInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        that.setData({
          mainInfo: res.data
        })
        if (that.data.mainInfo.openId) {
          that.setData({
            mainInfo_update: true
          })
          if (res.data.gender == "女") {
            that.setData({
              index: 1
            })
          }

          if (res.data.avatar) {
            that.setData({
              avatar: res.data.avatar
            })
          }
          if (res.data.people == "汉族"){
            that.setData({people_index:0})}
            if (res.data.people == "蒙古族"){
            that.setData({people_index:1})}
            if (res.data.people == "回族"){
            that.setData({people_index:2})}
            if (res.data.people == "藏族"){
            that.setData({people_index:3})}
            if (res.data.people == "维吾尔族"){
            that.setData({people_index:4})}
            if (res.data.people == "苗族"){
            that.setData({people_index:5})}
            if (res.data.people == "彝族"){
            that.setData({people_index:6})}
            if (res.data.people == "壮族"){
            that.setData({people_index:7})}
            if (res.data.people == "布依族"){
            that.setData({people_index:8})}
            if (res.data.people == "朝鲜族"){
            that.setData({people_index:9})}
            if (res.data.people == "满族"){
            that.setData({people_index:10})}
            if (res.data.people == "侗族"){
            that.setData({people_index:11})}
            if (res.data.people == "瑶族"){
            that.setData({people_index:12})}
            if (res.data.people == "白族"){
            that.setData({people_index:13})}
            if (res.data.people == "土家族"){
            that.setData({people_index:14})}
            if (res.data.people == "哈尼族"){
            that.setData({people_index:15})}
            if (res.data.people == "哈萨克族"){
            that.setData({people_index:16})}
            if (res.data.people == "傣族"){
            that.setData({people_index:17})}
            if (res.data.people == "黎族"){
            that.setData({people_index:18})}
            if (res.data.people == "傈僳族"){
            that.setData({people_index:19})}
            if (res.data.people == "佤族"){
            that.setData({people_index:20})}
            if (res.data.people == "畲族"){
            that.setData({people_index:21})}
            if (res.data.people == "高山族"){
            that.setData({people_index:22})}
            if (res.data.people == "拉祜族"){
            that.setData({people_index:23})}
            if (res.data.people == "水族"){
            that.setData({people_index:24})}
            if (res.data.people == "东乡族"){
            that.setData({people_index:25})}
            if (res.data.people == "纳西族"){
            that.setData({people_index:26})}
            if (res.data.people == "景颇族"){
            that.setData({people_index:27})}
            if (res.data.people == "柯尔克孜族"){
            that.setData({people_index:28})}
            if (res.data.people == "土族"){
            that.setData({people_index:29})}
            if (res.data.people == "达斡尔族"){
            that.setData({people_index:30})}
            if (res.data.people == "仫佬族"){
            that.setData({people_index:31})}
            if (res.data.people == "羌族"){
            that.setData({people_index:32})}
            if (res.data.people == "布朗族"){
            that.setData({people_index:33})}
            if (res.data.people == "撒拉族"){
            that.setData({people_index:34})}
            if (res.data.people == "毛难族"){
            that.setData({people_index:35})}
            if (res.data.people == "仡佬族"){
            that.setData({people_index:36})}
            if (res.data.people == "锡伯族"){
            that.setData({people_index:37})}
            if (res.data.people == "阿昌族"){
            that.setData({people_index:38})}
            if (res.data.people == "普米族"){
            that.setData({people_index:39})}
            if (res.data.people == "塔吉克族"){
            that.setData({people_index:40})}
            if (res.data.people == "怒族"){
            that.setData({people_index:41})}
            if (res.data.people == "乌孜别克族"){
            that.setData({people_index:42})}
            if (res.data.people == "俄罗斯族"){
            that.setData({people_index:43})}
            if (res.data.people == "鄂温克族"){
            that.setData({people_index:44})}
            if (res.data.people == "崩龙族"){
            that.setData({people_index:45})}
            if (res.data.people == "保安族"){
            that.setData({people_index:46})}
            if (res.data.people == "裕固族"){
            that.setData({people_index:47})}
            if (res.data.people == "京族"){
            that.setData({people_index:48})}
            if (res.data.people == "塔塔尔族"){
            that.setData({people_index:49})}
            if (res.data.people == "独龙族"){
            that.setData({people_index:50})}
            if (res.data.people == "鄂伦春族"){
            that.setData({people_index:51})}
            if (res.data.people == "赫哲族"){
            that.setData({people_index:52})}
            if (res.data.people == "门巴族"){
            that.setData({people_index:53})}
            if (res.data.people == "珞巴族"){
            that.setData({people_index:54})}
            if (res.data.people == "基诺族"){
            that.setData({people_index:55})}
            if (res.data.people == "其他"){
            that.setData({people_index:56})}
          that.setData({
            date: res.data.birthday,
            region: res.data.nativePlace
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findAwardInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        console.log("正在查找")
        console.log(res.data)
        that.setData({
          awardsFlag: res.data

        })
        if (that.data.awardsFlag.openId) {
          that.setData({
            awards: res.data.awards,
            awards_update: true
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findSkillInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        that.setData({
          skillsFlag: res.data,
        })
        if (that.data.skillsFlag.openId) {
          that.setData({
            skills: res.data.skills,
            skills_update: true
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findWorkExpInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        that.setData({
          workExpsFlag: res.data,
        })
        if (that.data.workExpsFlag.openId) {
          that.setData({
            workExps: res.data.workExps,
            workExps_update: true
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findEduExpInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        that.setData({
          eduExpsFlag: res.data,
        })
        if (that.data.eduExpsFlag.openId) {
          that.setData({
            eduExps: res.data.eduExps,
            eduExps_update: true
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findCourseInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        that.setData({
          coursesFlag: res.data,
        })
        if (that.data.coursesFlag.openId) {
          that.setData({
            courses: res.data.courses,
            courses_update: true
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findActivityInfo',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        that.setData({
          activitiesFlag: res.data,
        })
        if (that.data.activitiesFlag.openId) {
          that.setData({
            activities: res.data.activities,
            activities_update: true
          })
        }

      }
    })
    wx.request({
      url: 'https://www.linshuo.top:1998/findSelfEvaluation',
      data: {
        id: that.data.openid
      },
      method: "GET",
      success(res) {
        if (res.data.openId) {
          that.setData({
            selfEvaluationFlag: res.data.selfEvaluation,
            selfEvaluation_update: true
          })
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