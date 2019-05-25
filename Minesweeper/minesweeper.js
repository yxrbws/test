// 点击效果
let tdobj = document.querySelectorAll("#map-junior td")
console.log(tdobj)
for(let i=0;i<tdobj.length;i++){
  tdobj[i].addEventListener("click",function(){
    this.style.boxShadow = ' 0 0 0'
  })
}



let map = document.querySelectorAll('#map>div')
for(let i=1;i<map.length;i++){
  map[i].style.display = 'none'
}

let button = document.querySelectorAll('input')
for(let i=0;i<button.length;i++){
  button[i].addEventListener('click',function(){
    // console.log(this.value)
    let name = '#' + this.value
    if(name != 'New Game'){
      let obj = document.querySelector(name)
      if(obj.style.display == 'none'){
        let dv = document.querySelectorAll('#map>div')
        for(let y=0;y<dv.length;y++){
          dv[y].style.display = 'none'
        }
        obj.style.display = 'block'
      }
    }
  })
}
