(function(){
  let block = []
  function random(){
    // console.log(block)
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
    let rows = sortRowsS()
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

    random()
    repaint()
    // console.log(block)
  }

  function keyUp(){
    flag =  true
  }

  // ================未成功======合并value值时出错
  function keyRight(){
    flag =  true
    let rows = sortRowsB()
    // console.log(block)
    // console.log(rows)
    // alert(1)
    clearBlock()
    for(let i=0;i<rows.length;i++){
      let lf = 3
      // rows[i].reverse()
      // console.log(rows[i])
      for(let n=0;n<rows[i].length;n++){
        if(rows[i][n+1]){
          if(parseInt(rows[i][n].value) === parseInt(rows[i][n+1].value)){
            let value =  parseInt(rows[i][n].value)*2
            rows[i][n].value = value
            rows[i].splice(n+1,1)
          }
        }
        rows[i][n].y = lf--
        block.push(rows[i][n])
      }
    }
    rows.splice(0,4)

    random()
    repaint()
    // console.log(block)
  }

  function keyDown(){
    flag =  true
  }

//========================object 排除出错 ============================

  // 按 rows(行) 排列block 按y从小到大排列
  function sortRowsS(){
    let rows = [[],[],[],[]]
    // console.log(rows)
    for(let i=0;i<block.length;i++){
      let blo = block[i]
      blo.value = parseInt(blo.value)
      rows[blo.x].push(blo)
    }

    for(let i=0;i<4;i++){
      rows[i].sort((a,b)=>{
        if(a.y > b.y){
          let tep = a
          a = b
          b = tep
        }
      })
    }
    console.log(rows)
    return rows
  }

  // 按 rows(行) 排列block 按y从大到小排列
  function sortRowsB(){
    let rows = [[],[],[],[]]
    // console.log(rows)
    for(let i=0;i<block.length;i++){
      let blo = block[i]
      blo.value = parseInt(blo.value)
      rows[blo.x].push(blo)
    }

    for(let i=0;i<4;i++){
      rows[i].sort((a,b)=>{
        if(a.y < b.y){
          let tep = a
          a = b
          b = tep
        }
      })
    }
    console.log(rows)
    return rows
  }
  // sortRows()

  // 按 line(列) 排列block
  function sortLine(){
    let lines = [[],[],[],[]]
    for(let i=0;i<block.length;i++){
      let blo = block[i]
      lines[blo.y].push(blo)
    }

    for(let i=0;i<4;i++){
      lines[i].sort((a,b)=>{
        if(a.x > b.x){
          let tep = a
          a = b
          b = tep
        }
      })
    }

    return lines
  }

  // 添加button点击事件
  let but = document.querySelector("input")
  but.addEventListener('click',regame(block))

  function regame(block){
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

  star()

  // let box  = document.querySelector("table")
  // box.rows[2].cells[3].style.backgroundColor = "red"
})();