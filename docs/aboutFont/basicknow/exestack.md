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