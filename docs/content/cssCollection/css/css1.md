## css基础篇
### 1. 浏览器盒模型
盒模型：内容(content)、填充(padding)、边框(border)、边界(margin) 。
分为两种： border-box、 content-box
border-box: 盒子的高宽包括 content、padding、border
content-box: 盒子的高宽包括 content
在谷歌中默认的盒模型为content-box。 outline（轮廓）绘制在元素框之上，其不占据空间（不影响元素大小和定位）
示例：
```js
   // ----- 样式 ----
   div {
      width: 200px;
      height: 200px;
      padding: 10px;
      border: 10px solid rebeccapurple;
    }
    /**
      谷歌默认为盒模型为content-box
    **/
    .box-content {
      /* box-sizing: content-box; */
      background-color: aquamarine;
    }
    .box-border {
      box-sizing: border-box;
      background-color: burlywood;
    }
    // ----- html ----
    // box-content的总高宽变为240， content + padding + border
    <div class="box-content"></div>
    // box-border的总高宽变为200
    <div class="box-border"></div>
```
### 2. 水平居中