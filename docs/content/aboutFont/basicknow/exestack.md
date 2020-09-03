话不多说，先来看两段代码
```
var test = function(){
    console.log(111)
}
test() // 111
var test = function(){
    console.log(222)
}
test() // 222
```
这段代码看起来，代码是从上到下顺序执行的，因为这里存在变量的提升，上面的代码相当于：
```
var test
test = function(){
    console.log(111)
}
test() // 111
test = function(){
    console.log(222)
}
test() // 222
```

，然而我们再看看下面的代码：
```
function test(){
    console.log(111)
}
test() // 222
function test(){
    console.log(222)
}
test() // 222
```
看到这里你可能有点质疑，这是这里存在函数的提升,也就相当于下面的函数把上面的覆盖了。
补充：
 1. this 为调用函数的对象，这种理解是不对的， 我们来看下面的例子：
 ```
 var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1
 ```
 这里简单说一下， 这里的this的确定跟Reference 类型有关。 就简单理解上面的例子，（）左边参与了运算，this将指向全局