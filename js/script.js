let featuredIndex = 1;
showFeatured(featuredIndex);

function plusFeatured(num){
    showFeatured(featuredIndex += num);
}

function currentFeatured(num){
    showFeatured(featuredIndex = num);
}

function showFeatured(num){
    let index;
    let slides = document.getElementsByClassName("myFeatured");
    let circles = document.getElementsByClassName("circle");
    if(num > slides.length){featuredIndex = 1;}
    if(num < 1){featuredIndex = slides.length;}
    for(index=0; index<slides.length; index++){
        slides[index].style.display = "none";
    }
    for(index=0; index<circles.length; index++){
        circles[index].className = circles[index].className.replace(" active", "");
    }
    slides[featuredIndex-1].style.display = "block";
    circles[featuredIndex-1].className += " active";
}