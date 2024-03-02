let leftIcon = document.querySelector(".icon-left");
let rightIcon = document.querySelector(".icon-right");

rightIcon.addEventListener("click", function(){
    let activeImage = document.querySelector(".image-visible");
    activeImage.classList.remove("image-visible");
    if(activeImage.nextElementSibling != null){
        activeImage.nextElementSibling.classList.add("image-visible")
    }else{
        this.parentNode.nextElementSibling.firstElementChild.classList.add("image-visible")
    }
})

leftIcon.addEventListener("click", function(){
    let activeImage = document.querySelector(".image-visible");
    activeImage.classList.remove("image-visible");
    if(activeImage.previousElementSibling != null){
        activeImage.previousElementSibling.classList.add("image-visible")
    }else{
        this.parentNode.nextElementSibling.lastElementChild.classList.add("image-visible")
    }
})