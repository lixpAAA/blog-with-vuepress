## prototype
  - 每个函数都一个prototype属性
  - **prototype是函数才有的属性** 
  - 函数的prototype属性指向 调用该函数的构造函数创建的实例的原型。 每个js对象（null除外）在创建的时候都会关联另一对象，他就是原型, 每个对象都会从原型"继承属性"
  - 每个原型都有一个constructor属性指向关联的构造函数
  -  **person.__proto__ === Person.prototype**
  -  **Person === Person.prototype.constructor**
## 实例与原型
  当读取对象属性时，如果在本对象中找不到就会去与之关联的原型对象中查找，如果还找不到，就去原型的原型查找，直至顶层。
  举个例：
  ```
   function Person() {}
   Person.prototype.name = 'lxp'
   var person = new Person()
   person.name = 'lixp'
   console.log(person.name) // lixp
   delete person.name // 只会作用于自身属性，原型及原型链不会影响
   console.log(person.name) // lxp
  ```  
  ## 原型的原型
  既然原型也是一个对象，那么就可以：
  ```
  var obj = new Object()
  obj.name = 'lxp'
  console.log(obj.name) // lxp
  ```
  此时**obj.__proto__ === Object.prototype和Object.prototype.__proto__ === obj.__proto__.__proto__ === null**,也就是对象的顶层原型为null
  最后附上一张关系图：
  ![avatar](/prototype5.png)
  ## 补充
  ```
  function Person(){}
  var person = new Person()
  console.log(person.constructor === Person) // true
  ```
  也就是说**person.constructor === Person === Person.prototype.constructor**