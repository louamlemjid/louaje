for (var i=0;i<document.querySelectorAll(".seat").length;i++){
    document.querySelectorAll(".seat")[i].addEventListener("click",function () {
        if (this.classList[this.classList.length-1]=="rouge"){
            
            joingnable(this.classList[2])
        }
        else {
            occupe(this.classList[2])
        }
        console.log(this.classList,this.classList.length-1,this.classList[this.classList.length-1],document.querySelectorAll(".vert").length)
        document.querySelector(".mat p").textContent=document.querySelectorAll(".vert").length +" Place dispo";
    }
        )
    }
    document.querySelector(".mat p").textContent="8 Place dispo";
function joingnable(cl){
    document.querySelector(`.${cl}`).classList.add("vert");
    document.querySelector(`.${cl} p`).textContent="فارغ";
}
function occupe(cl){
    document.querySelector(`.${cl}`).classList.remove("vert");
    document.querySelector(`.${cl}`).classList.add("rouge");
    document.querySelector(`.${cl} p`).textContent="محاز";
    
}
