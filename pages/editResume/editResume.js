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
      this.setData({
        "open[0]": !this.data.open[0]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_1") {
      this.setData({
        "open[1]": !this.data.open[1]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_2") {
      this.setData({
        "open[2]": !this.data.open[2]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_3") {
      this.setData({
        "open[3]": !this.data.open[3]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_4") {
      this.setData({
        "open[4]": !this.data.open[4]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_5") {
      this.setData({
        "open[5]": !this.data.open[5]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_6") {
      this.setData({
        "open[6]": !this.data.open[6]
      })
      console.log(this.data.open)
    }
    if (e.currentTarget.id == "_7") {
      this.setData({
        "open[7]": !this.data.open[7]
      })
      console.log(this.data.open)
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
          })
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
          })
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
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          eduExps: this.data.eduExps.concat({
            "school": null,
            "beginDate": null,
            "beginDate": null
          })
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
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          activities: this.data.activities.concat({
            "activity": null,
            "beginDate": null,
            "endDate": null
          })
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
          })
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
        this.setData({
          // awards:this.data.awards.concat({'add':true,'isOpen':false}),
          workExps: this.data.workExps.concat({
            "work": null,
            "beginDate": null,
            "beginDate": null
          })
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
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        var avatar = res.tempFilePaths;
        //将用户选择的图片转换为base64字符串存于数据库。
        let imgUrl = 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], "base64");
        console.log(imgUrl);
        that.setData({
          avatar: imgUrl
        })
      }
    })

  },

  saveMainInfo: function (e) {
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

    let this_mainInfo = this.data.mianInfo_
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
    console.log(this.data.mianInfo_)
    if (this.data.mainInfo) {
      wx.request({
        url: 'http://localhost:8080/updateMainInfo',
        data: JSON.stringify(this.data.mainInfo_),
        method: "POST",
        success(res) {
          console.log(res)
        }
      })
    } else {
      wx.request({
        url: 'http://localhost:8080/saveMainInfo',
        data: JSON.stringify(this.data.mainInfo_),
        method: "POST",
        success(res) {
          console.log(res)
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
        if (this.data.awardsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
            }
          })
        }
      } else if (!this.data.awards[this.data.awards.length - 1].awardName && !this.data.awards[this.data.awards.length - 1].getAwardDate) {
        let awards = this.data.awards
        let openId = this.data.openid
        if (this.data.awardsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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
        if (this.data.awardsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveAwardInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "awards": awards
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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
        if (this.data.skillsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
            }
          })
        }

      } else if (!this.data.skills[this.data.skills.length - 1].skillName && !this.data.skills[this.data.skills.length - 1].getSkillDate) {
        let skills = this.data.skills
        let openId = this.data.openid
        if (this.data.skillsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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
        if (this.data.skillsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveSkillInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "skills": skills
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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
      if (this.data.workExpsFlag) {
        wx.request({
          url: 'http://localhost:8080/updateWorkExpInfo',
          method: "POST",
          data: JSON.stringify({
            "openId": openId,
            "workExps": workExps
          }),
          success(res) {
            console.log("成功更新数据")
            console.log(res)
          }
        })
      } else {
        wx.request({
          url: 'http://localhost:8080/saveWorkExpInfo',
          method: "POST",
          data: JSON.stringify({
            "openId": openId,
            "workExps": workExps
          }),
          success(res) {
            console.log("成功保存数据")
            console.log(res)
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
        if (this.data.eduExpsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
            }
          })
        }

      } else if (!this.data.eduExps[this.data.eduExps.length - 1].school && !this.data.eduExps[this.data.eduExps.length - 1].beginDate && !this.data.eduExps[this.data.eduExps.length - 1].endDate) {
        let eduExps = this.data.eduExps
        let openId = this.data.openid
        if (this.data.eduExpsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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
        if (this.data.eduExpsFlag) {
          wx.request({
            url: 'http://localhost:8080/updateEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveEduExpInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "eduExps": eduExps
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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

  saveCourseInfo:function(e){
    if (this.data.courses.length == 1) {
      if (this.data.courses[this.data.courses.length - 1].courseName) {
        let courses = this.data.courses
        let openId = this.data.openid
        if (this.data.coursesFlag) {
          wx.request({
            url: 'http://localhost:8080/updateCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses":courses
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
            }
          })
        }

      } else if (!this.data.courses[this.data.courses.length - 1].courseName) {
        let courses = this.data.courses
        let openId = this.data.openid
        if (this.data.coursesFlag) {
          wx.request({
            url: 'http://localhost:8080/updateCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses":courses
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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
        if (this.data.coursesFlag) {
          wx.request({
            url: 'http://localhost:8080/updateCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses": courses
            }),
            success(res) {
              console.log("成功更新数据")
              console.log(res)
            }
          })
        } else {
          wx.request({
            url: 'http://localhost:8080/saveCourseInfo',
            method: "POST",
            data: JSON.stringify({
              "openId": openId,
              "courses":courses
            }),
            success(res) {
              console.log("成功保存数据")
              console.log(res)
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

  saveActivityInfo:function(e){
      if (this.data.activities.length == 1) {
        if (this.data.activities[this.data.activities.length - 1].activity && this.data.activities[this.data.activities.length - 1].beginDate && this.data.activities[this.data.activities.length - 1].endDate) {
          let activities = this.data.activities
          let openId = this.data.openid
          if (this.data.activitiesFlag) {
            wx.request({
              url: 'http://localhost:8080/updateActivityInfo',
              method: "POST",
              data: JSON.stringify({
                "openId": openId,
                "activities": activities
              }),
              success(res) {
                console.log("成功更新数据")
                console.log(res)
              }
            })
          } else {
            wx.request({
              url: 'http://localhost:8080/saveActivityInfo',
              method: "POST",
              data: JSON.stringify({
                "openId": openId,
                "activities": activities
              }),
              success(res) {
                console.log("成功保存数据")
                console.log(res)
              }
            })
          }
  
        } else if (!this.data.activities[this.data.activities.length - 1].activity && !this.data.activities[this.data.activities.length - 1].beginDate && !this.data.activities[this.data.activities.length - 1].endDate) {
          let activities = this.data.activities
          let openId = this.data.openid
          if (this.data.activitiesFlag) {
            wx.request({
              url: 'http://localhost:8080/updateActivityInfo',
              method: "POST",
              data: JSON.stringify({
                "openId": openId,
                "activities": activities
              }),
              success(res) {
                console.log("成功更新数据")
                console.log(res)
              }
            })
          } else {
            wx.request({
              url: 'http://localhost:8080/saveActivityInfo',
              method: "POST",
              data: JSON.stringify({
                "openId": openId,
                "activities": activities
              }),
              success(res) {
                console.log("成功保存数据")
                console.log(res)
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
          if (this.data.activitiesFlag) {
            wx.request({
              url: 'http://localhost:8080/updateActivityInfo',
              method: "POST",
              data: JSON.stringify({
                "openId": openId,
                "activities": activities
              }),
              success(res) {
                console.log("成功更新数据")
                console.log(res)
              }
            })
          } else {
            wx.request({
              url: 'http://localhost:8080/saveActivityInfo',
              method: "POST",
              data: JSON.stringify({
                "openId": openId,
                "activities": activities
              }),
              success(res) {
                console.log("成功保存数据")
                console.log(res)
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
    if (e.detail.value.selfEvaluation) {
      if (this.data.selfEvaluationFlag) {
        let openid = this.data.openid
        wx.request({
          url: 'http://localhost:8080/updateSelfEvaluation',
          method: "POST",
          data: JSON.stringify({
            "openId": openid,
            "selfEvaluation": e.detail.value.selfEvaluation
          }),
          success(res) {

          }
        })
      } else {
        let openid = this.data.openid
        wx.request({
          url: 'http://localhost:8080/saveSelfEvaluation',
          method: "POST",
          data: JSON.stringify({
            "openId": openid,
            "selfEvaluation": e.detail.value.selfEvaluation
          }),
          success(res) {

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


  getResume:function(){
    wx.navigateTo({
      url: '/pages/myResume/myResume?openid='+this.data.openid
    })
  },


  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    date: curDate,
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
    mianInfo_: {},
    avatar: null,
    awardsFlag: null,
    skillsFlag: null,
    workExpsFlag: null,
    eduExpsFlag: null,
    coursesFlag:null,
    activitiesFlag: null,
    selfEvaluationFlag: null,
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
        url: 'http://localhost:8080/findMainInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          console.log(res)
          console.log("::::::::::::::;;;;")
          that.setData({
            mainInfo: res.data
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
          that.setData({
            date: res.data.birthday
          })
        }
      })
      wx.request({
        url: 'http://localhost:8080/findAwardInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          console.log("正在查找")
          console.log(res.data)
          that.setData({
            awardsFlag: res.data.awards

          })
          if (that.data.awardsFlag) {
            that.setData({
              awards: res.data.awards,
            })
          }

        }
      })
      wx.request({
        url: 'http://localhost:8080/findSkillInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          that.setData({
            skillsFlag: res.data.skills,
          })
          if (that.data.skillsFlag) {
            that.setData({
              skills: res.data.skills,
            })
          }

        }
      })
      wx.request({
        url: 'http://localhost:8080/findWorkExpInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          that.setData({
            workExpsFlag: res.data.workExps,
          })
          if (that.data.workExpsFlag) {
            that.setData({
              workExps: res.data.workExps,
            })
          }

        }
      })
      wx.request({
        url: 'http://localhost:8080/findEduExpInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          that.setData({
            eduExpsFlag: res.data.eduExps,
          })
          if (that.data.eduExpsFlag) {
            that.setData({
              eduExps: res.data.eduExps,
            })
          }

        }
      })
      wx.request({
        url: 'http://localhost:8080/findCourseInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          that.setData({
            coursesFlag: res.data.courses,
          })
          if (that.data.coursesFlag) {
            that.setData({
              courses: res.data.courses,
            })
          }

        }
      })
      wx.request({
        url: 'http://localhost:8080/findActivityInfo',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          console.log("sdsadsadsadsadsa",res)
          that.setData({
            activitiesFlag: res.data.activities,
          })
          if (that.data.activitiesFlag) {
            that.setData({
              activities: res.data.activities,
            })
          }

        }
      })


      wx.request({
        url: 'http://localhost:8080/findSelfEvaluation',
        data: {
          id: that.data.openid
        },
        method: "GET",
        success(res) {
          that.setData({
            selfEvaluationFlag: res.data.selfEvaluation,
          })

        }
      })
    
    // if (app.globalData.openid != null) {
    //   console.log("openid::", app.globalData.openid)
    //   this.setData({
    //     openid: app.globalData.openid
    //   })
    //   let that = this;
    //   wx.request({
    //     url: 'http://localhost:8080/findMainInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       console.log(res)
    //       console.log("::::::::::::::;;;;")
    //       that.setData({
    //         mainInfo: res.data
    //       })
    //       if (res.data.gender == "女") {
    //         that.setData({
    //           index: 1
    //         })
    //       }
    //       if (res.data.avatar) {
    //         that.setData({
    //           avatar: res.data.avatar
    //         })
    //       }
    //       that.setData({
    //         date: res.data.birthday
    //       })
    //     }
    //   })
    //   wx.request({
    //     url: 'http://localhost:8080/findAwardInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       console.log("正在查找")
    //       console.log(res.data)
    //       that.setData({
    //         awardsFlag: res.data.awards

    //       })
    //       if (that.data.awardsFlag) {
    //         that.setData({
    //           awards: res.data.awards,
    //         })
    //       }

    //     }
    //   })
    //   wx.request({
    //     url: 'http://localhost:8080/findSkillInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       that.setData({
    //         skillsFlag: res.data.skills,
    //       })
    //       if (that.data.skillsFlag) {
    //         that.setData({
    //           skills: res.data.skills,
    //         })
    //       }

    //     }
    //   })
    //   wx.request({
    //     url: 'http://localhost:8080/findWorkExpInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       that.setData({
    //         workExpsFlag: res.data.workExps,
    //       })
    //       if (that.data.workExpsFlag) {
    //         that.setData({
    //           workExps: res.data.workExps,
    //         })
    //       }

    //     }
    //   })
    //   wx.request({
    //     url: 'http://localhost:8080/findEduExpInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       that.setData({
    //         eduExpsFlag: res.data.eduExps,
    //       })
    //       if (that.data.eduExpsFlag) {
    //         that.setData({
    //           eduExps: res.data.eduExps,
    //         })
    //       }

    //     }
    //   })
    //   wx.request({
    //     url: 'http://localhost:8080/findCourseInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       that.setData({
    //         coursesFlag: res.data.courses,
    //       })
    //       if (that.data.coursesFlag) {
    //         that.setData({
    //           courses: res.data.courses,
    //         })
    //       }

    //     }
    //   })
    //   wx.request({
    //     url: 'http://localhost:8080/findActivityInfo',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       console.log("sdsadsadsadsadsa",res)
    //       that.setData({
    //         activitiesFlag: res.data.activities,
    //       })
    //       if (that.data.activitiesFlag) {
    //         that.setData({
    //           activities: res.data.activities,
    //         })
    //       }

    //     }
    //   })


    //   wx.request({
    //     url: 'http://localhost:8080/findSelfEvaluation',
    //     data: {
    //       id: that.data.openid
    //     },
    //     method: "GET",
    //     success(res) {
    //       that.setData({
    //         selfEvaluationFlag: res.data.selfEvaluation,
    //       })

    //     }
    //   })
    // } else {
    //   app.checkLoginReadyCallback = res => {
    //     //登陆成功后自己希望执行的，和上面一样
    //     console.log("openid:::>>>", app.globalData.openid)
    //     this.setData({
    //       openid: app.globalData.openid
    //     })
    //     let that = this;
    //     wx.request({
    //       url: 'http://localhost:8080/findMainInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         console.log(res)
    //         console.log("::::::::::::::;;;;")
    //         that.setData({
    //           mainInfo: res.data
    //         })
    //         if (res.data.gender == "女") {
    //           that.setData({
    //             index: 1
    //           })
    //         }
    //         if (res.data.avatar) {
    //           that.setData({
    //             avatar: res.data.avatar
    //           })
    //         }
    //         that.setData({
    //           date: res.data.birthday
    //         })
    //       }
    //     })
    //     wx.request({
    //       url: 'http://localhost:8080/findAwardInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         console.log("正在查找")
    //         console.log(res.data)
    //         that.setData({
    //           awardsFlag: res.data.awards
    //         })
    //         if (that.data.awardsFlag) {
    //           that.setData({
    //             awards: res.data.awards,
    //           })
    //         }
    //       }
    //     })
    //     wx.request({
    //       url: 'http://localhost:8080/findSkillInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         that.setData({
    //           skillsFlag: res.data.skills,


    //         })
    //         if (that.data.skillsFlag) {
    //           that.setData({
    //             skills: res.data.skills,
    //           })
    //         }

    //       }
    //     })
    //     wx.request({
    //       url: 'http://localhost:8080/findWorkExpInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         that.setData({
    //           workExpsFlag: res.data.workExps,
    //         })
    //         if (that.data.workExpsFlag) {
    //           that.setData({
    //             workExps: res.data.workExps,
    //           })
    //         }

    //       }
    //     })
    //     wx.request({
    //       url: 'http://localhost:8080/findEduExpInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         that.setData({
    //           eduExpsFlag: res.data.eduExps,
    //         })
    //         if (that.data.eduExpsFlag) {
    //           that.setData({
    //             eduExps: res.data.eduExps,
    //           })
    //         }

    //       }
    //     })
    //     wx.request({
    //       url: 'http://localhost:8080/findCourseInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         that.setData({
    //           coursesFlag: res.data.courses,
    //         })
    //         if (that.data.coursesFlag) {
    //           that.setData({
    //             courses: res.data.courses,
    //           })
    //         }
  
    //       }
    //     })

    //     wx.request({
    //       url: 'http://localhost:8080/findActivityInfo',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         that.setData({
    //           activitiesFlag: res.data.activities,
    //         })
    //         if (that.data.activitiesFlag) {
    //           that.setData({
    //             activities: res.data.activities,
    //           })
    //         }
  
    //       }
    //     })
  





    //     wx.request({
    //       url: 'http://localhost:8080/findSelfEvaluation',
    //       data: {
    //         id: that.data.openid
    //       },
    //       method: "GET",
    //       success(res) {
    //         that.setData({
    //           selfEvaluationFlag: res.data.selfEvaluation,
    //         })

    //       }
    //     })
    //   }
    // }

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