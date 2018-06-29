//引入Banner组件
var Banner = require('../../template/banner/banner.js');
var Bmob = require('../../lib/Bmob-1.6.1.min.js');
const query = Bmob.Query("banner");
var appInstance = getApp();
Page({
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    productList:[
      {url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name:"1"},
      {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "2"
      },
      {
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
              name: "3"
            }
    ],
    note: [
      {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2655124705,895248958&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2659979409,1012721792&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3976768297,2940204969&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2099210405,778255743&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1779926394,812907510&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3233280135,583364025&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4242406235,177783926&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1266192976,1380164699&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3627516747,1811484789&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=85569005,326466119&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=620379214,39144140&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4256127307,3836577544&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3582192090,3075517798&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1470662729,2238827029&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3282555670,2404500838&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=820148213,3273167032&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3629212887,3933757101&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2958891796,1493079686&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1089495470,2951510971&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=500578833,2622578712&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3205867015,3693571629&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3127728892,1493368287&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=534348034,880498403&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2187902155,3312121627&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1344473804,3144741675&fm=27&gp=0.jpg',
      },
      {
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3851160420,1142648985&fm=27&gp=0.jpg',
      },
      { url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3941426023,2707737508&fm=27&gp=0.jpg'},
      { url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2547958132,2229976441&fm=27&gp=0.jpg' },
      { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1785835542,519493508&fm=27&gp=0.jpg' },
      { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=879581813,3527423726&fm=27&gp=0.jpg' },
      { url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2650901690,3052126982&fm=27&gp=0.jpg' },
      { url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2611789338,2044445468&fm=27&gp=0.jpg' },
      { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=382675545,3868926000&fm=27&gp=0.jpg' },
      { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1040450335,4042247615&fm=27&gp=0.jpg' },
      { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922481630,2187612873&fm=27&gp=0.jpg' },
      { url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=84630745,1886612896&fm=27&gp=0.jpg' },
      { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2327442863,391125783&fm=27&gp=0.jpg' },
    ]
  },
  onLoad: function (options) {
    Bmob.initialize("65c85c1a9d1583e37af22212c482b361", "039d3fee9dd7cbb17aa8e4c8845e7e8f");
    this.banner = new Banner(this);
    this.getBanner();
  },
  itemOnClick:function(e){
    console.log(e.currentTarget.dataset.url)
  },
  getBanner:function(){
    query.find().then(res => {
      console.log(res.length)
      for (let i = 0; i < res.length; i++) {
        this.data.imgUrls.push(res[i].url)
      }
      this.banner.initData(this.data.imgUrls);
    }).catch(err => {
      wx.showToast({
        title: '请求失败',
        icon: 'none'
      })
    })
  }
})
