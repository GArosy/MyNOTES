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
        isActive:true,
        url:"../../pages/index/index"
      },
      {
        id:1,
        name:"我参与的",
        isActive:false,
        url:"../../pages/index/index"
      },
      {
        id:2,
        name:"往期活动",
        isActive:false,
        url:"../../pages/acted/acted"
      },
    ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e){
      const index=e.currentTarget.dataset.index;  // 获取被点击的index索引
      let url=this.data.headtabbar[index].url;    // 获取被点击的项的url
      let headtabbar=this.data.headtabbar;        // 获取原数组headtabbar
      // const {index}=e.currentTarget.dataset;
      // let {headtabbar}=this.data;
      headtabbar.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);  // 对比被点击的index和数组的index是否相等，为判断为是的项添加true；(此处用到了箭头函数 => )
      this.setData({headtabbar});
    },
  }
})
