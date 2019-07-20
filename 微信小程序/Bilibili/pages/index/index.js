Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    currentNavIndex: 0,
    navlist: [],
    swiperList: [],
    videoList: []
  },

  // 获取导航数据
  getNavlist(){
    let that = this
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            navlist:res.data.data.navList
          })
        }
      }
    })
  },

  // 改变navindex
  getNavIndex(e){
    this.setData({
      currentNavIndex: e.target.dataset.index
    })
  },

  // 获取轮播图的数据
  getSwiperImg(){
    let that = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  // 获取推荐视频数据
  getRecommendList(){
    let that = this
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            videoList: res.data.data.videosList
          })
        }
      }
    })
  },

  // 跳转到视频详情页
  goToInfo(e){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavlist()
    this.getSwiperImg()
    this.getRecommendList()
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