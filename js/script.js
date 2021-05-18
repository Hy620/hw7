//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //第一層
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
 
  //背景
      ctx.beginPath()
      ctx.moveTo(50,350)
      ctx.lineTo(75,250)
      ctx.lineTo(325,250)
      ctx.lineTo(350,350)
    ctx.closePath()
    ctx.fillStyle="#8f969c"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke() 
  
 //左城門旗子
      ctx.beginPath()
        ctx.moveTo(55,350)
        ctx.lineTo(55,125-mouse.y/5)
        ctx.lineTo(100,140 - (time%3)-mouse.y/5)
        ctx.lineTo(55,150-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  //右城門旗子
      ctx.beginPath()
        ctx.moveTo(345,350)
        ctx.lineTo(345,125-mouse.y/3)
        ctx.lineTo(390,140 - (time%5)-mouse.y/3)
        ctx.lineTo(345,150-mouse.y/3)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke() 

        ctx.beginPath()
        ctx.moveTo(350,350)
        ctx.lineTo(350,185-mouse.y/3)
        ctx.lineTo(380,200 - (time%5)-mouse.y/3)
        ctx.lineTo(350,210-mouse.y/3)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()

    
  
  //拱門繪製
  ctx.beginPath()
    //右半邊
    ctx.moveTo(75,250)
    ctx.lineTo(325,250)
    ctx.lineTo(350,350)
    ctx.lineTo(230,350)
    
  //圓弧拱門
    ctx.arc(200,300,30,Math.PI*2,Math.PI,true)
    //左半邊
    ctx.lineTo(170,350)
    ctx.lineTo(50,350)
    ctx.closePath()
    ctx.fillStyle="#fad29e"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //小拱门
    ctx.beginPath()
      ctx.arc(125,300,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(110,350)
      ctx.lineTo(140,350)
    ctx.closePath()
      ctx.fillStyle="#f8f7f3"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
      ctx.beginPath()
      ctx.arc(275,300,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(260,350)
      ctx.lineTo(290,350)
    ctx.closePath()
      ctx.fillStyle="#f8f7f3"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()

  //第二層
  
    //第二層背景
    ctx.beginPath()
      ctx.moveTo(100,200)
      ctx.lineTo(300,200)
      ctx.lineTo(300,250)
      ctx.lineTo(100,250)
    ctx.closePath()
    ctx.fillStyle="#f8d09c"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  
    //城门边缘 
  ctx.beginPath()
      ctx.moveTo(75,250)
      ctx.lineTo(325,250)
      ctx.lineTo(335,245)
      ctx.lineTo(64,245)
    ctx.closePath()
    ctx.fillStyle="#f59757"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  ctx.beginPath()
      ctx.moveTo(100,145)
      ctx.lineTo(300,145)
      ctx.lineTo(300,140)
      ctx.lineTo(100,140)
    ctx.closePath()
    ctx.fillStyle="#ea9d71"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    ctx.beginPath()
      ctx.moveTo(100,150)
      ctx.lineTo(300,150)
      ctx.lineTo(300,145)
      ctx.lineTo(100,145)
    ctx.closePath()
    ctx.fillStyle="#ffc698"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  
  
  //屋檐
    ctx.beginPath()
      ctx.arc(350,150,50,Math.PI*0.5,Math.PI)
      ctx.lineTo(100,150)
   ctx.arc(50,150,50,Math.PI*0,Math.PI*0.5)
    ctx.closePath()
      ctx.fillStyle="#65c3c3"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
      ctx.beginPath()

//旗子2
  
          ctx.moveTo(50,350)
        ctx.lineTo(50,190-mouse.y/5)
        ctx.lineTo(85,205 - (time%3)-mouse.y/5)
        ctx.lineTo(50,220-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
   //拱門門柱
      ctx.fillStyle ="#8f969c"
      ctx.fillRect(100,200,25,40)
      ctx.strokeRect(100,200,25,40)
      ctx.fillRect(150,200,25,40)
      ctx.strokeRect(150,200,25,40)
      ctx.fillRect(225,200,25,40)
      ctx.strokeRect(225,200,25,40)
      ctx.fillRect(275,200,25,40)
      ctx.strokeRect(275,200,25,40)
  
  //城門邊緣2
      ctx.beginPath()
      ctx.moveTo(77,245)
      ctx.lineTo(322,245)
      ctx.lineTo(322,239)
      ctx.lineTo(77,239)
    ctx.closePath()
    ctx.fillStyle="#65c3c3"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  

  //第三層
  
   //第三層背景
    ctx.beginPath()
      ctx.moveTo(150,100)
      ctx.lineTo(250,100)
      ctx.lineTo(260,140)
      ctx.lineTo(140,140)
    ctx.closePath()
    ctx.fillStyle="#f8d09c"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  //屋檐
    ctx.beginPath()
      ctx.arc(300,50,50,Math.PI*0.5,Math.PI)
      ctx.lineTo(250,50)
   ctx.arc(100,50,50,Math.PI*0,Math.PI*0.5)
    ctx.closePath()
      ctx.fillStyle="#65c3c3"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
      ctx.beginPath()
  
  //城門邊緣3
      ctx.beginPath()
      ctx.moveTo(155,50)
      ctx.lineTo(150,40)
      ctx.lineTo(150,50)
    ctx.closePath()
    ctx.fillStyle="#f9ae6d"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  ctx.beginPath()
      ctx.moveTo(245,50)
      ctx.lineTo(250,40)
      ctx.lineTo(250,50)
    ctx.closePath()
    ctx.fillStyle="#f9ae6d"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //拱門門柱
      ctx.fillStyle ="#8f969c"
      ctx.fillRect(100,200,25,40)
      ctx.strokeRect(100,200,25,40)
      ctx.fillRect(150,200,25,40)
      ctx.strokeRect(150,200,25,40)
      ctx.fillRect(225,200,25,40)
      ctx.strokeRect(225,200,25,40)
      ctx.fillRect(275,200,25,40)
      ctx.strokeRect(275,200,25,40)
  
  //城門邊緣2
      ctx.beginPath()
      ctx.moveTo(77,245)
      ctx.lineTo(322,245)
      ctx.lineTo(322,239)
      ctx.lineTo(77,239)
    ctx.closePath()
    ctx.fillStyle="#65c3c3"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   //窗戶
    ctx.beginPath()
      ctx.arc(200,125,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(185,140)
      ctx.lineTo(215,140)
    ctx.closePath()
      ctx.fillStyle="#f8f7f3"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
  
  //車子
    ctx.fillStyle="#e4ddd5"
    let carx = time%500-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
    ctx.fillStyle="#626262"
    ctx.fillRect(carx,340,20,12)
    ctx.strokeRect(carx,340,20,12)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
 ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})