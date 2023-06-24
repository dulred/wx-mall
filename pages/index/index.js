import shoppingCart from '../../templates/cart/cart';

// 获取应用实例
const app = getApp()

Page({
  data: {
    menuID:1,
    indicatorDots:true,
    autoplay:false,
    interval:3000,
    duration:1000,
    scrollToTop:300,
    imgUrls:[
      {
      "sPicLink":"/images/index/slide1.png",
      "sLink":"1000",
    },
    {
      "sPicLink":"/images/index/slide2.png",
      "sLink":"1001",
    }
  ],
  index_recommends:[{
    "sDescribe":"展示专用商品1",
    "iMallId":"1000",
    "sPicLink":"/images/list/sku1.png",
    "iOriPrice":"150",
    "iPriceReal":"113"
  },
  {
    "sDescribe":"展示专用商品2",
    "iMallId":"1001",
    "sPicLink":"/images/list/sku2.png",
    "iOriPrice":"250",
    "iPriceReal":"213"
  },
  {
    "sDescribe":"展示专用商品3",
    "iMallId":"1000",
    "sPicLink":"/images/list/sku1.png",
    "iOriPrice":"150",
    "iPriceReal":"113"
  },
  {
    "sDescribe":"展示专用商品4",
    "iMallId":"1001",
    "sPicLink":"/images/list/sku2.png",
    "iOriPrice":"250",
    "iPriceReal":"213"
  }
]
  },
  // 菜单输入监听
  menuClick(e){
    var id = e.currentTarget.id;
    this.setData({
      menuID:id,
    })
  },
  // 轮播点击事件
  bigImageClick(e){
    var p = e.currentTarget.dataset.gid;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + p,
    })
  },
  bindCartTap(e) {
    let id = e.currentTarget.id;
    shoppingCart.init(this, id);
  },

  
})
