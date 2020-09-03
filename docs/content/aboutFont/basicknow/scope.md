## 作用域
 - 作用域是指程序源代码中定义变量的区域。
 - 作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
 - JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。
## 静态作用域
Javascript采用词法作用域，也就是静态作用域，**函数的作用域在函数定义的时候就已经决定了**
举个例子能更好说明这一点：
```
var value = 1;
function foo() {
  console.log(value);
}
function bar() {
  var value = 2;
  foo();
}
bar(); // 1 
``` 
执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据**书写的位置**，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。
再来看个例子：
```
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // local scope
```
```
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope
```
JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。