// pages/add/add.js
const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
//循环出picker展示的数组：
//获取年
for (let i = date.getFullYear(); i <= date.getFullYear() + 1; i++) {
  years.push("" + i);
};
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
};
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
};
//获取小时
for (let i = 0; i < 24; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  hours.push("" + i);
};




Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 时间选择器
      time: '',
      datePickerArray: [years,months,days,hours], 
      datePickerIndex: [0,6,16,10],
      choose_year: '',
      numRange: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      address: '',
      numPeople: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置默认的年份
    this.setData({
      choose_year: this.data.datePickerArray[0][0]
    });
  },
  
  // 时间选择器-获取时间日期
  datePickerChange(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datePickerIndex: e.detail.value
    });
    const index = this.data.datePickerIndex;
    const year = this.data.datePickerArray[0][index[0]];
    const month = this.data.datePickerArray[1][index[1]];
    const day = this.data.datePickerArray[2][index[2]];
    const hour = this.data.datePickerArray[3][index[3]];
    // console.log(`${month}-${day} ${hour}:00`);
    this.setData({
      time: month + '-' + day + ' ' + hour + ':00'
    });
    // console.log(time);
  },

   //监听picker的滚动事件
  datePickerColumnChange(e) {
    console.log(e);
     //获取年份
     if (e.detail.column == 0) {
      let choose_year = this.data.datePickerArray[e.detail.column][e.detail.value];
      console.log(choose_year);
      this.setData({
        choose_year
      })
    };
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column == 1) {
      let num = parseInt(this.data.datePickerArray[e.detail.column][e.detail.value]);
      let temp = [];
      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
        for (let i = 1; i <= 31; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['datePickerArray[2]']: temp
        });
      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
        for (let i = 1; i <= 30; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['datePickerArray[2]']: temp
        });
      } else if (num == 2) { //判断2月份天数
        let year = parseInt(this.data.choose_year);
        console.log(year);
        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
          for (let i = 1; i <= 29; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['datePickerArray[2]']: temp
          });
        } else {
          for (let i = 1; i <= 28; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['datePickerArray[2]']: temp
          });
        }
      }
      console.log(this.data.datePickerArray[2]);
    }
    var data = {
      datePickerArray: this.data.datePickerArray,
      datePickerIndex: this.data.datePickerIndex
    };
    data.datePickerIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },
  numPickerChange(e) {
    // console.log(e);
    this.setData({
      numPeople: this.data.numRange[e.detail.value]
    })
  },
  addressChange(e) {
    // console.log(e);
    this.setData({
      address: e.detail.value
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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