// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    Categories:[{
        "iCatId":"101",
        "iSortOrder":"1",
        "iSortOrsCatNameder":"手机数码",
        "submit":[
          {
          "iCartId":"121",
          "iSortOrsCatNameder":"小米手机"
        },
        {
          "iCartId":"122",
          "iSortOrsCatNameder":"华为手机"
        },
        {
          "iCartId":"208",
          "iSortOrsCatNameder":"魅族手机"
        },
        {
          "iCartId":"676",
          "iSortOrsCatNameder":"三星手机"
        },
      ]
      },
      {
        "iCatId":"119",
        "iSortOrder":"4",
        "iSortOrsCatNameder":"家用电器",
        "submit":[
          {
          "iCartId":"126",
          "iSortOrsCatNameder":"电水壶"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"电饭煲"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"电磁炉"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"微波炉"
        },
      ]
      },
      {
        "iCatId":"119",
        "iSortOrder":"4",
        "iSortOrsCatNameder":"运动户外",
        "submit":[
          {
          "iCartId":"126",
          "iSortOrsCatNameder":"跑步鞋"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"体育用品"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"山地车"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"跑步机"
        },
      ]
      },
      {
        "iCatId":"119",
        "iSortOrder":"4",
        "iSortOrsCatNameder":"男女服饰",
        "submit":[
          {
          "iCartId":"126",
          "iSortOrsCatNameder":"早春新品"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"连衣裙"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"衬衫"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"牛仔裤"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"卫衣"
        },
        {
          "iCartId":"125",
          "iSortOrsCatNameder":"针织衫"
        },
      ]
      }]
  },
  // 事件处理函数
  tapClick(e){
    var p = e.currentTarget.id
    console.log("/pages/productlist/productlist?id=" + p);
    wx.navigateTo({
      url: '/pages/productlist/productlist?id=' + p,
    })
  }
})
