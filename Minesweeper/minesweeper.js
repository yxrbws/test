// 1. 默认为初级
let block = new Map() // 所有方块
let boomBlock = new Map() // 有炸弹的方块
let numBlock = new Map() // 有数字的方块
let blankBlock = new Map() // 空白格
let name = '#junior'
$("#map>div").css('display','none')

function random(name){
  clear(name)
  block.clear()
  boomBlock.clear()
  numBlock.clear()
  blankBlock.clear()
  let n = (name == '#junior')?25:((name == '#middle')?70:100);
  let r = $(name).find('tr').length
  let c = $(name).find("td").length/r
  for(let i=0;i<n;){
    let x = parseInt(Math.random()*r)
    let y = parseInt(Math.random()*c)
    let obj = x+':'+y
    // console.log(boomBlock.has(obj))
    if(!boomBlock.has(obj)){
      boomBlock.set(obj,true)
      block.set(obj,true)
      i++
      // console.log(boomBlock.size)
    }
   
  }
  console.log(boomBlock)
  // 判断当前方块四周的炸弹数目
  for(let i=0;i<r;i++){
    for(let l=0;l<c;l++){
      let count = 0
      let num = i+':'+l
      let objs = [
        (i-1)+':'+(l-1),
        (i-1)+':'+(l),
        (i-1)+':'+(l+1),
        (i)+':'+(l-1),
        (i)+':'+(l+1),
        (i+1)+':'+(l-1),
        (i+1)+':'+(l),
        (i+1)+':'+(l+1)
      ]
      objs.forEach(obj=>{
        if(boomBlock.has(obj)){
          count++
        }
      })
      if(count!=0){
        numBlock.set(num,true)
        // console.log($(name).children()[0].rows[i].cells[l])
        $(name).children()[0].rows[i].cells[l].innerHTML = `<span>${count}</span>`
        $(name).children()[0].rows[i].cells[l].style.fontSize = '5px'
        // $(name).children()[0].rows[i].cells[l].style.text-align = 'center'
        $($(name).children()[0].rows[i].cells[l]).children().css('display','none')

      }
    }
  }
  star(name)
}

function star(name){
  $('#map>div').css('display','none')
  $(name).css('display','block').find('td')
        .addClass('shadow')
        .bind('click',function(){
          // console.log(11)
          let x = this.parentNode.rowIndex
          let y = this.cellIndex
          curblock = x+':'+y
          // console.log(curblock)
          if($(this)[0].className.match('shadow')){$(this).removeClass('shadow')}
          
          // console.log(boomBlock)
          // console.log(boomBlock.has(curblock))
          if(boomBlock.has(curblock)){
            // console.log(1++)
            $(this).addClass('boom')
            alert('Game over')
          }else if(numBlock.has(curblock)){
            $(this).children().css('display','block')
            block.set(curblock,true)
            if(block.size == ((name == '#junior')?81:((name == '#middle')?256:480))){
              alert('win')
            }
          }else{
            block.set(curblock,true)
            if(block.size == ((name == '#junior')?81:((name == '#middle')?256:480))){
              alert('win')
            }
            checkAround(x,y)
          }
        })
}

// console.log($(name).find('td'))

// 检查四周方块有没有空白格，有则打开
function checkAround(x,y){
  console.log(x+':'+y)
  let objs = [
    (x-1)+':'+y,
    x+':'+(y-1),
    x+':'+(y+1),
    (x+1)+':'+y,
  ]

  objs.forEach(obj=>{
    let r = $(name).find('tr').length
    let arr = obj.split(':')
    let a = parseInt(arr[0])
    let b = parseInt(arr[1])
    if(a>=0 && a<$(name).find('tr').length && b>=0 && b<($(name).find("td").length/r)){
      if(!blankBlock.has(obj)){
        // console.log(1)
        if(!numBlock.has(obj)){
          if(!boomBlock.has(obj)){
            // console.log(3)
            blankBlock.set(obj,true)
            block.set(obj,true)
            // console.log(a+"==="+b)
            $(name).children()[0].rows[a].cells[b].className = ''
            if(block.size == ((name == '#junior')?81:((name == '#middle')?256:480))){
              alert('win')
            }
            checkAround(a,b)
          }   
        }
      }
    } 
  })
}

random(name)


$('input').bind('click',function(){
  let curname = this.value
  console.log(curname)
  if(curname != 'New Game'){
    name = '#'+curname
    random(name)
  }else{
    random(name)
  }
})

function clear(name){
  $(name).find('td').removeClass('shadow boom')
  for(let key of numBlock.keys()){
    let arr = key.split(':')
    let a = parseInt(arr[0])
    let b = parseInt(arr[1])
    $(name).children()[0].rows[a].cells[b].innerHTML = ''
  }

}