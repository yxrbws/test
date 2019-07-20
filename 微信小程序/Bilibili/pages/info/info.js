// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    otherList: []
  },

  // 获取视频ID号
  getVideoInfo(currentVideoId){
    let that = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+currentVideoId,
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getOtherList(id){
    let that = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id="+id,
      success(res){
        console.log(res)
        if(res.data.code === 0){
          that.setData({
            otherList: res.data.data.othersList
          })
        }
      }
    })
  },
  onLoad: function (options) {
    // console.log(options)
    let currentVideoId = options.id
    this.getVideoInfo(currentVideoId)
    this.getOtherList(currentVideoId)
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