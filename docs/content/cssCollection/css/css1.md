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
#### 1. 最简单的margin: auto, 前提已知容器宽度
```js
  .div {
    width: 200px;
    margin: auto
  }
```
#### 2. 利用绝对定位position: absolute. 前提已知容器宽度
```js
  // 绝对定位是相对于 static 定位以外的第一个父元素进行定位， 所以需要设置父容器的position
  .outer {
    position: relative;
  }
  .inner {
    position: absolute;
    margin: 0 auto; /* 需设置margin，不可省。去掉0还可实现水平垂直居中*/
    left: 0;
    right:0;
    top:0;
    bottom:0;
  }
```
#### 3. 利用fit-content,结合margin:auto  前提未知容器宽度
```js
 .inner {
   width: fit-content;
   margin: auto; /* 不可少 */
 }
```
### 水平
```js
.outer {
  display: inline-block; /*float*/
  position: relative;
  left: 50%
}
 .inner {
  position: relative;
  left: -50%
 }
```