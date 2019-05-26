// // 点击效果
// let tdobj = document.querySelectorAll("#map-junior td")
// console.log(tdobj)
// for(let i=0;i<tdobj.length;i++){
//   tdobj[i].addEventListener("click",function(){
//     this.style.boxShadow = ' 0 0 0'
//   })
// }



// let map = document.querySelectorAll('#map>div')
// for(let i=1;i<map.length;i++){
//   map[i].style.display = 'none'
// }

// let button = document.querySelectorAll('input')
// for(let i=0;i<button.length;i++){
//   button[i].addEventListener('click',function(){
//     // console.log(this.value)
//     let name = '#' + this.value
//     if(name != 'New Game'){
//       let obj = document.querySelector(name)
//       if(obj.style.display == 'none'){
//         let dv = document.querySelectorAll('#map>div')
//         for(let y=0;y<dv.length;y++){
//           dv[y].style.display = 'none'
//         }
//         obj.style.display = 'block'
//       }
//     }else{
//       regame()
//     }
//   })
// }

// function regame(){

// }


// 1. 默认为初级
let block = new Map()
let boomBlock = new Map()
let numBlock = new Map()
let name = '#junior'
$("#map>div").css('display','none')

function random(name){
  let n = (name == '#junior')?30:((name == '#middle')?90:160);
  let r = $(name).find('tr').length
  let c = $(name).find("td").length/r
  for(let i=0;i<n;){
    let x = parseInt(Math.random()*r)
    let y = parseInt(Math.random()*c)
    let obj = {x:x,y:y}
    if(!boomBlock.has(obj)){
      boomBlock.set(obj,true)
      i++
    }
  }
  console.log(boomBlock)
  // 判断当前方块四周的炸弹数目
  for(let i=0;i<r;i++){
    for(let l=0;l<c;l++){
      let count = 0
      let objs = [
        {x:(i-1),y:(l-1)},
        {x:(i-1),y:(l)},
        {x:(i-1),y:(l+1)},
        {x:(i),y:(l-1)},
        {x:(i),y:(l+1)},
        {x:(i+1),y:(l-1)},
        {x:(i+1),y:(l)},
        {x:(i+1),y:(l+1)},
      ]
      objs.forEach(obj=>{
        if(boomBlock.has(obj)){
          count++
        }
      })
      if(count){
        numBlock.set(obj,true)
        $(name).children().rows[i].cells[l].innerHTML = '<span>${count}</span>'
        $(name).children().rows[i].cells[l].css('font-size','8px').css('display','none')
      }
    }
  }
}
random(name)

$(name).css('display','block').find('td')
        .addClass('shadow')
        .bind('click',function(){
          console.log(11)
          let x = this.parentNode.rowIndex
          let y = this.cellIndex
          curblock = {x:x,y:y}
          console.log(curblock)
          $(this).removeClass('shadow')
          console.log(boomBlock)
          console.log(boomBlock.has(curblock))
          if(boomBlock.has(curblock)){
            console.log(boom)
            $(this).addClass('boom')
            alert('Game over')
          }else if(numBlock.has(curblock)){
            $(this).children().css('display','block')
          }else{
            // checkAround()
          }
        })
// console.log($(name).find('td'))
