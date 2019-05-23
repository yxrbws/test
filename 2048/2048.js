(function(){
  let block = []
  function random(){
    // console.log(block)
    for(let i=0;i<2;){
      block[i] = {x:parseInt(Math.random()*4),y:parseInt(Math.random()*4)}
      if(avalibe(block[i])){i++;}
    }
  }

  // 判断td是否被占  true为没有被占
  function avalibe(blo){
    let flag= true
    if(block.length <= 1){return flag}
    for(let i=0;i<block.length-1;i++){
      let obj = block[i]
      if(obj.x == blo.x && obj.y == blo.y){flag = false;break}
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
      console.log(block[i])
      console.log(block.length)
      let tdobj = tbl.rows[x].cells[y]
      tdobj.className = 'n2'
      tdobj.innerHTML = '2'
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
  }

  function keyUp(){
    flag =  true
  }

  function keyRight(){
    flag =  true
  }

  function keyDown(){
    flag =  true
  }

  // 按 rows(行) 排列block
  function sortRows(){
    let rows = [[],[],[],[]]
    // console.log(rows)
    for(let i=0;i<block.length;i++){
      let blo = block[i]
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
  // sortRows()

  // 按 line(列) 排列block
  function sortLine(){
    let lines = [[],[],[],[]]
    for(let i=0;i<block.length;i++){
      let blo = block[i]
      lines[blo.y].push(blo)
    }
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

  function clear(){
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

  star()

  // let box  = document.querySelector("table")
  // box.rows[2].cells[3].style.backgroundColor = "red"
})();