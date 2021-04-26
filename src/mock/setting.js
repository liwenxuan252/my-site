import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3172081488,423381204&fm=11&gp=0.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/liwenxuan252",

    qq: "252122132",
    qqQrCode:
      "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    weixin: "19905998973",
    weixinQrCode:
      "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
    mail: "252122132@qq.com",
    icp: "黑ICP备17001719号",
    githubName: "liwenxuan252",
    favicon: "https://iknow-pic.cdn.bcebos.com/08f790529822720e382dd0297fcb0a46f31fab05",
  },
});
