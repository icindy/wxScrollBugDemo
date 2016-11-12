//index.js
//获取应用实例
Page({
  data: {
    array:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    var hh = (that.data.array.length+1)*40;

    that.setData({
      height:hh
    });

  },
  
})
