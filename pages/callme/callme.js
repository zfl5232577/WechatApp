// pages/callme/callme.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onCall:function(e){
    wx.makePhoneCall({
      phoneNumber: "18825243811",
      success: function () {
        console.log("成功拨打电话")
      }
    })
  }
})