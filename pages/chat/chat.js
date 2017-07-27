Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    returnValue:'',
    allContentList:[],
    key:"da221748da7d4fc4bc748bd014560f8c",
    num:0,
  },
  //当输入键盘按下时将输入的值保存在data 里面
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  //当点击发送时  将数据发送给图灵机器人
  submitTo:function(e){
    let that =this;

    let _url ="https://www.tuling123.com/openapi/api";
    //调用系统封装的http 请求向图灵机器人发起请求
    wx.request({
      url: _url,
      //封装数据
      data:{
        key: that.data.key,
        info:that.data.inputValue,
      },
      //处理返回数据格式
      header: {
        'content-type': 'application/json'
      },
      //向图灵发起请求成功的回调
      success:function(res){
        let data =res.data;
        if (data.code === 100000){
          //将用户输入的数据保存起来
          that.data.allContentList.push({ "value": that.data.inputValue });
          //调用图灵机器人成功
          //保存返回的聊天数据
          that.data.allContentList.push({ "value":data.text});
          //调用set  方法 通知视图 逻辑层数据已经发生改变 循环聊天信息
          that.setData({
            returnValue:data.text,
            allContentList: that.data.allContentList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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