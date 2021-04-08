
function colorchanger(){
  var arr=['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
  var str='#'
  for(var i=1;i<=6;i++){
    str=str+arr[Math.floor(Math.random()*15)]
  }
  return str
}


function color(){

document.querySelector('nav h1').style.color=colorchanger()
document.querySelector('nav div').style.backgroundColor=colorchanger()
document.querySelector('footer h2').style.color=colorchanger()
document.querySelector(".time").style.boxShadow="2px 2px 4px 5px "+colorchanger()
}
var inc=-1
var texts=['Hi','This is our presentation','we work to hard']
function textchanger(){
        inc=inc+1

  if(inc<=texts.length-1){

    return texts[inc]
  }
else if(inc>texts.length-1){
  inc=0
  return texts[inc]
}
}

function text(){
  document.querySelector('nav h1').innerText=textchanger()

}
function bodyphoto(){
  document.querySelector('body').style.background='url(https://source.unsplash.com/random) no-repeat center center/cover'

}

setInterval(color,1000)
setInterval(text,1000)


// spin
function spin1(){
if(document.querySelector('.x input[type=text]').value && document.querySelector('.x input[type=password]').value){
 document.getElementById('spin').classList.toggle("fa")
 document.getElementById('spin').classList.toggle("fa-refresh")
 document.getElementById('spin').classList.toggle("fa-spin")
 document.getElementById('spin').classList.toggle("fa-3x")
 document.getElementById('spin').classList.toggle("fa-fw")
}

}


function scroll(){



      document.querySelector('.top').style.visibility="visible"

  }
  // wish=null
  function wish(hr,min){
    if(hr<12&& min>=1){
      document.querySelector('.wish').innerText="GOOD MORNING"
      if(hr<12 && hr<5){
        document.querySelector(".moon").classList.toggle("fa")
        document.querySelector(".moon").classList.toggle("fa-moon-o")
      }
      else {
        document.querySelector(".moon").classList.remove('fa')
        document.querySelector(".moon").classList.remove('fa-moon-o')
        document.querySelector(".moon").classList.toggle("fa")
        document.querySelector(".moon").classList.toggle("fa-sun-o")

      }
    }
    else if (hr>=12&& min>=1) {
        document.querySelector('.wish').innerText="GOOD AFTERNOON!"
        if(hr>=12 && hr <=18){
          document.querySelector(".moon").classList.remove('fa')
          document.querySelector(".moon").classList.remove('fa-moon-o')
        document.querySelector(".moon").classList.toggle("fa")
        document.querySelector(".moon").classList.toggle("fa-sun-o")
      }
      else{
        document.querySelector(".moon").classList.remove('fa')
        document.querySelector(".moon").classList.remove('fa-sun-o')
        document.querySelector(".moon").classList.toggle("fa")
        document.querySelector(".moon").classList.toggle("fa-moon-o")

      }

    }
    return 0

  }


  function clock(){
    var a=new Date();
    var min=a.getMinutes()
    var sec=a.getSeconds()
    var hr=a.getHours()
    wish(hr,min)

    var ampm=hr>=12?'pm':'am'
	if(hr>12){
	hr=hr-12;
	}

    // console.log(`${hr}:${min}:${sec} ${ampm}`)
    document.querySelector('.time small').innerText=`${hr}:${min}:${sec} ${ampm}`
}
setInterval(clock,1000)


function hide(){
  document.querySelector('.learning-images').style.visibility="hidden"
  document.querySelector('.learning-images').style.height="0px"
}
function unhide(){
  document.querySelector('.learning-images ').style.visibility="visible"
  document.querySelector('.learning-images').style.height="400px"

}















// document.querySelector('.spin1 button').addEventListener('click',spin)
