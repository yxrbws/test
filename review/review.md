### typeof ，instanceof
  typeof 能判断基本数据类型 Number，Boolean，Sting，undefined，function，但无法判断出引用类型 Object
  instanceof 判断对象的是谁的实例，根据原型链进行搜索
  ```
  // instanceof 实现原理
  function instance_of(L,R){
    let O = R.prototype
    L = L.__proto__
    while(true){
      if(O === null){
        return false
      }
      if(O === L){
        teturn true
      }
      L = L.__proto__
    }
  }
  ```
  ```
  // new 操作原理
  function create(fuc,args){
    let obj = {}
    Object.setPrototypeOf(obj,fuc.prototype)
    let result = fuc.apply(obj,args)
    return result instanceof Object? result : obj
  }
  ```