// banner.js
class Banner {
  constructor(pageContext, options = { picList: [], showArr: [] }) {
    this.page = pageContext; //获取页面上下文
    this.page.data.banner = {
      picList: options.picList,
      showArr: options.showArr
    }; //初始化data
    this.page.bannerChange = this.bannerChange.bind(this);
  }
  //监听滑动事件，实现图片懒加载
  bannerChange(e) {
    if (this.page.data.banner.showArr) {
      let showArr = this.page.data.banner.showArr;
      for (let i = 0; i < showArr.length; i++) {
        if (i === e.detail.current) {
          showArr[i] = true;
        }
      }
      this.page.setData({
        'banner.showArr': showArr
      });
    }
  }
  initData(imgs) {
    const arr = new Array(imgs.length).fill(false);
    this.page.setData({
      'banner.picList': imgs,
      'banner.showArr': arr.fill(true, 0, 1)
    });
  }
}
module.exports = Banner