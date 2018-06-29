function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  wx.getSystemInfo({
    success: function (res) {
      console.log(res.model)
      console.log(res.pixelRatio)
      console.log(res.windowWidth)
      console.log(res.windowHeight)
      console.log(res.language)
      console.log(res.version)
      console.log(res.platform)
    }
  })

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/* store封装 */
function setStorage(key, value, isSync = true) {
  if (isSync) {
    try {
      wx.setStorageSync(key, value);
    } catch (e) {
      wx.showToast({
        title: e,
        duration: 2000
      });
    }
  } else {
    wx.setStorage({
      key: key,
      data: value
    });
  }
}
function getStorage(key, isSync = true) {
  if (isSync) {
    try {
      var value = wx.getStorageSync(key);
      if (value) {
        return value;
      }
    } catch (e) {
      wx.showToast({
        title: e,
        duration: 2000
      });
    }
  } else {
    wx.getStorage({
      key: key,
      success: function (res) {
        return res.data;
      },
      fail: function () {
        return '';
      }
    });
  }
}
function removeStorage(key, isSync = true) {
  if (isSync) {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      wx.showToast({
        title: e,
        duration: 2000
      });
    }
  } else {
    wx.removeStorage({
      key: key,
      success: function (res) {
        console.log(res.data)
      }
    });
  }
}
// 优惠标签配色
function getTagColor() {
  return [
    // 浅蓝
    '#49C8EB',
    // 浅绿
    '#08DDA7',
    // 紫
    '#984CEC',
    // 玫红
    '#FE0F6A'
  ];
}

// 判断一个对象是否关联某个数组(对象,外键,目标主键,目标数组)
function objInList(obj, obj_key, target_key, arr) {
  var index = 0,
    isInArray = false,
    flag = obj[obj_key];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][target_key] == flag) {
      isInArray = true;
      index = i;
      break;
    } else {
      continue;
    }
  }
  return {
    flag: isInArray,
    index: index
  }
}

//获取px与rpx之间的比列
function getRpx() {
  var winWidth = wx.getSystemInfoSync().windowWidth;
  return 750 / winWidth;
}

//动态setData
function dynamicSetData(field, index, value, suffix, type = 'object') {
  var param = {};
  var string = field + '[' + index + ']' + (typeof suffix !== 'undefined' ? type === 'object' ? '.' + suffix : '[' + suffix + ']' : '');
  param[string] = value;
  return param;
}

module.exports = {
  formatTime: formatTime,
  getStorage: getStorage,
  removeStorage: removeStorage,
  setStorage: setStorage,
  getTagColor: getTagColor,
  objInList: objInList,
  getRpx: getRpx,
  dynamicSetData: dynamicSetData,
}
