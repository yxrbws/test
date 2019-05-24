(function(){
  let block = []
  function random(){
    // console.log(block)
    if(block.length >= 15){
      alert("Game over")
    }
    for(let i=0;i<2;){
      let a = block.length
      block[a] = {x:parseInt(Math.random()*4),y:parseInt(Math.random()*4),value:'2'}
      if(avalibe(block[a])){i++;}
    }
  }

  // 判断td是否被占  true为没有被占
  function avalibe(blo){
    let flag= true
    if(block.length <= 1){return flag}
    for(let i=0;i<block.length-1;i++){
      let obj = block[i]
      if(obj.x == blo.x && obj.y == blo.y){block.splice(block.length-1,1);flag = false;break}
    }
  return flag
  }

  // console.log(parseInt('n24'.match(/[\d]+/)))

  function star(){
    // if(block){clear()}
    random()
    let tbl = document.querySelector('table')
    for(let i=block.length-2;i<block.length;i++){
      let x = block[i].x
      let y = block[i].y
      // console.log(block[i])
      // console.log(block.length)
      let tdobj = tbl.rows[x].cells[y]
      tdobj.className = 'n' + block[i].value
      tdobj.innerHTML = block[i].value
      // console.log(parseInt(tdobj.className.match(/[\d]+/)))
    }
     
  }

  // 开始游戏
  // star()

  let flag = false // 判断是否在执行移动函数

  document.addEventListener('keydown',function(e){
    switch(e.keyCode){
      case 37 : if(!false){keyLeft();flag =  false;}break;// 左
      case 38 : if(!false){keyUp();flag =  false;}break;// 上
      case 39 : if(!false){keyRight();flag =  false;}break;// 右
      case 40 : if(!false){keyDown();flag =  false;}break;// 下
    }
    // console.log(e.keyCode)
  })

  function keyLeft(){
    flag =  true
    let rows = sortRows()
    // console.log(block)
    clearBlock()
    // console.log(rows)
    // console.log(111)
    for(let i=0;i<rows.length;i++){
      // console.log(333)
      for(let n=0;n<rows[i].length;n++){
        if(rows[i][n+1]){
          if(parseInt(rows[i][n].value) === parseInt(rows[i][n+1].value)){
            let value =  parseInt(rows[i][n].value)*2
            rows[i][n].value = value
            rows[i].splice(n+1,1)
          }
        }
        rows[i][n].y = n
        block.push(rows[i][n])
        // console.log(222)
        // console.log(rows)
      }
    }
    rows.splice(0,4)
    if(check()){
      alert("winner!")
    }

    
    random()
    repaint()
    // console.log(block)
  }

  function keyUp(){
    flag =  true
    let lines = sortLine()
    // console.log(block)
    clearBlock()
    // console.log(rows)
    // console.log(111)
    for(let i=0;i<lines.length;i++){
      // console.log(333)
      for(let n=0;n<lines[i].length;n++){
        if(lines[i][n+1]){
          if(parseInt(lines[i][n].value) === parseInt(lines[i][n+1].value)){
            let value =  parseInt(lines[i][n].value)*2
            lines[i][n].value = value
            lines[i].splice(n+1,1)
          }
        }
        lines[i][n].x = n
        block.push(lines[i][n])
        // console.log(222)
        // console.log(lines)
      }
    }
    lines.splice(0,4)
    if(check()){
      alert("winner!")
    }
    
    random()
    repaint()
    // console.log(block)
  }

  // ================未成功======合并value值时出错
  function keyRight(){
    flag =  true
    let rows = sortRows()
    // console.log(block)
    // console.log(rows)
    // alert(1)
    clearBlock()
    for(let i=0;i<rows.length;i++){
      let lf = 3
      // rows[i].reverse()
      console.log(rows[i])
      for(let n=rows[i].length-1;n>=0;n--){
        if(rows[i][n-1]){
          if(parseInt(rows[i][n].value) == parseInt(rows[i][n-1].value)){
            let value =  parseInt(rows[i][n].value)*2
            rows[i][n-1].value = value
            rows[i].splice(n,1)
            rows[i][n-1].y = lf--
            block.push(rows[i][n-1])
            n--
          }else{
            rows[i][n].y = lf--
            block.push(rows[i][n])
          }
        }else{
          rows[i][n].y = lf--
          block.push(rows[i][n])
        }
        
      }
    }
    rows.splice(0,4)
    if(check()){
      alert("winner!")
    }

    random()
    repaint()
    // console.log(block)
  }

  function keyDown(){
    flag =  true
    let lines = sortLine()
    // console.log(block)
    // console.log(rows)
    // alert(1)
    clearBlock()
    for(let i=0;i<lines.length;i++){
      let lf = 3
      // rows[i].reverse()
      console.log(lines[i])
      for(let n=lines[i].length-1;n>=0;n--){
        if(lines[i][n-1]){
          if(parseInt(lines[i][n].value) == parseInt(lines[i][n-1].value)){
            let value =  parseInt(lines[i][n].value)*2
            lines[i][n-1].value = value
            lines[i].splice(n,1)
            lines[i][n-1].x = lf--
            block.push(lines[i][n-1])
            n--
          }else{
            lines[i][n].x = lf--
            block.push(lines[i][n])
          }
        }else{
          lines[i][n].x = lf--
          block.push(lines[i][n])
        }
        
      }
    }
    lines.splice(0,4)
    if(check()){
      alert("winner!")
    }

    random()
    repaint()
    // console.log(block)
  }

  // 按 rows(行) 排列block 按y从小到大排列
  function sortRows(){
    let rows = [[],[],[],[]]
    // console.log(rows)
    for(let i=0;i<block.length;i++){
      let blo = block[i]
      blo.value = parseInt(blo.value)
      rows[blo.x].push(blo)
    }

    for(let i=0;i<4;i++){
      rows[i].sort(compare('y'))
    }
    // console.log(rows)
    return rows
  }

  // 借用Array.sort方法排序 ------ 从小到大
  function compare(property){
    return function(a,b){
      let value1 = a[property]
      let value2 = b[property]
      console.log((value1 - value2))
      return value1 - value2
    }
  }

  // 按 line(列) 排列block
  function sortLine(){
    let lines = [[],[],[],[]]
    for(let i=0;i<block.length;i++){
      let blo = block[i]
      lines[blo.y].push(blo)
    }

    for(let i=0;i<4;i++){
      lines[i].sort(compare('x'))
    }

    return lines
  }

  // 添加button点击事件
  let but = document.querySelector("input")
  but.addEventListener('click',regame)

  function regame(){
    let tab = document.querySelector("table")
    for(let i=block.length-1;i>=0;i--){
      let x = block[i].x
      let y = block[i].y
      let tdobj = tab.rows[x].cells[y]
      tdobj.className = ""
      tdobj.innerHTML = ""
      block.splice(i,1)
    }
    // star()
    random()
    repaint()
  }

  function clearBlock(){
    let tab = document.querySelector("table")
    for(let i=block.length-1;i>=0;i--){
      let x = block[i].x
      let y = block[i].y
      let tdobj = tab.rows[x].cells[y]
      tdobj.className = ""
      tdobj.innerHTML = ""
      block.splice(i,1)
    }
  }

  // 重新绘制画面
  function repaint(){
    let tab = document.querySelector("table")
    for(let i=0;i<block.length;i++){
      let x = block[i].x
      let y = block[i].y
      let tdobj = tab.rows[x].cells[y]
      tdobj.className = 'n' + block[i].value
      tdobj.innerHTML = block[i].value
    }
  }

  // 检测是否达成2048
  function check(){
    let flag = false
    for(let i=0;i<block.length;i++){
      if(parseInt(block[i].value) == 2048){
        flag = true
        break;
      }
    }
    return flag
  }

  // Game 开始
  star()

  // let box  = document.querySelector("table")
  // box.rows[2].cells[3].style.backgroundColor = "red"
})();