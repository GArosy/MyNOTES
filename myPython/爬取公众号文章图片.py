# -*- coding: utf-8 -*-
import requests
import lxml
import time
from bs4 import BeautifulSoup

urlList = [
    "https://mp.weixin.qq.com/s/VxG1Cz3gQEk9KXFpp8cJOg"
]
# 爬取网页html源码
for i in urlList:
    print("craw html: ", i)
    wxHtml = requests.get(i).text
    soup = BeautifulSoup(wxHtml, 'lxml')  # 解析网页源码
    imgList = soup.find("div", id="js_content").find_all("img")  # 得到所有img标签，生成img列表

    for a in imgList:  # 遍历img列表，提取每一项的data-src
        src = a.get("data-src")
        img = requests.get(src)
        img.encoding = "utf-8"
        imgName = src.split("/")[-2] + ".jpg"

        with open("E:/新建文件夹/社区入口/公众号/" + imgName, mode="wb") as f:  # 保存图片
            f.write(img.content)
        print("Successfully crawed: ", imgName)
        time.sleep(0.5)

    print("over", i)
