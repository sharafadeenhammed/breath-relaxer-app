container = document.getElementById("container");
text = document.getElementById("text");

function animate(){
    text.innerText = "breath in"
    container.className = "container grow";
    setTimeout(()=>{
        text.innerText = "hold in"
        setTimeout(()=>{
            text.innerText = "breath out"
            container.className = "container shrink";
            setTimeout(()=>{
                // 
                // 
            },2500)

        },1500)
    },3500)    
}
animate();
setInterval(()=>{
    animate();
},7500)