// components/head-tabbar/head-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    headtabbar:[
      {
        id:0,
        name:"进行中",
        isActive:true
      },
      {
        id:1,
        name:"往期活动",
        isActive:false
      },
    ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e){
      const {index}=e.currentTarget.dataset;
      let {headtabbar}=this.data;
      headtabbar.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({headtabbar});
    },
  }
})
