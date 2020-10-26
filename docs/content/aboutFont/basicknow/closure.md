## 闭包
### 定义
MDN对闭包的定义为： *闭包是指那些能够访问自由变量的函数*
那什么又是自由变量呢？ 
自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。
由此，我可以得出闭包由两部分组成： *闭包=函数+函数能够访问的自由变量*
## 参数传递
先来看个例子：
```
var obj = {
  value: 1
};
function foo(o) {
  o.value = 2;
  console.log(o.value); //2
}
foo(obj);
console.log(obj.value) // 2
var obj = {
  value: 1
};
function foo(o) {
  o = 2;
  console.log(o); //2
}
foo(obj);
console.log(obj.value) // 1
```
参数如果是基本类型是按值传递，如果是引用类型按共享传递。而共享传递是指，在传递对象的时候，传递对象的引用的副本。