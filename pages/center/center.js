//center.js
var util = require('../../utils/util.js');
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    itemList: [{id:1,name: "电话：18307387033", url: "", img:"icon-phone"},
      { id: 2, name: "联系地址", url: "", img: "icon-map" },
      { id: 3,name: "微信联系", url: "", img: "icon-message" },
      { id: 4, name: "技术支持", url: "../callme/callme", img: "icon-handshake" }]
  },

  onLoad: function () {
    var userInfo1 = util.getStorage("userInfo");
    if (userInfo1){
      this.setData({
        userInfo: userInfo1,
        hasUserInfo: true
      })
    }
  },
  getUserInfo: function(e) {
    if (this.data.hasUserInfo){
      return
    }
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    util.setStorage("userInfo", this.data.userInfo);
  },
  makePhoneCall: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: "18307387033",
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  itemOnClick:function(e){
    switch (e.currentTarget.dataset.id){
      case 1:
        this.makePhoneCall();
      break
      case 2:
        wx.openLocation({
          latitude: 27.685476,
          longitude: 111.434680,
          scale: 35
        })
      break
      case 3:
      wx.showToast({
        title: '微信电话同号，欢迎添加',
        icon: 'none'
      })
      break
    }
  }
})
