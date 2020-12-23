function carouselResizeFunc(){
    if(window.innerWidth < 600){
        //alert('if');
        document.getElementById('custom-carousel-img-1').classList.remove('w-100');
        document.getElementById('custom-carousel-img-2').classList.remove('w-100');
        document.getElementById('custom-carousel-img-3').classList.remove('w-100');
    }else{
        //alert('else');
        document.getElementById('custom-carousel-img-1').classList.add('w-100');
        document.getElementById('custom-carousel-img-2').classList.add('w-100');
        document.getElementById('custom-carousel-img-3').classList.add('w-100');
    }
}
///window.addEventListener("resize", carouselResizeFunc);
/*if(window.innerWidth<600){
    document.getElementById('carousel-img').classList.remove('w-100');
}*/
//document.getElementById('body').addEventListener("load",carouselResizeFunc);