// we link the Dom of the page and js
const display = document.querySelector(".display")
const start = document.querySelector (".start")
const stop2 = document.querySelector (".stop")
const reset = document.querySelector(".reset")

let [min,sec,mill] = [0,0,0];
let int ;
//let interval = "";
/// we ads the event to take place

start.addEventListener("click", ()=>{
  int = setInterval(timer, 10)
   startbtn()
})
stop2.addEventListener("click", ()=>{
  clearInterval( int)
  stopbtn()
})
reset.addEventListener("click", ()=>{
    display.innerHTML = `00 : 00 : 00`
    resetbtn()
    return [min,sec,mill] = [0,0,0];
})

function timer(){
   mill++ 
   if (mill > 99){
       mill = 0
       sec++
       if (sec > 59){
        sec = 0
        min++
       }
   }
   let m = mill < 10 ? "0" + mill : mill;
   let s = sec < 10 ? "0" + sec : sec;
   let mn = min < 10 ? "0" + min : min;
   display.innerHTML = `${mn} : ${s} : ${m}`;
}

function startbtn(){
    stop2.classList.add("active2")
    start.classList.add("active1")
    reset.classList.add("active3")
}

function stopbtn(){
    start.classList.remove("active1")
    stop2.classList.remove("active2")
}

function resetbtn(){
    reset.classList.remove("active3")
}