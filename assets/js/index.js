const J = (e)=> document.querySelector(e),
    JS = (e)=> document.querySelectorAll(e);


J(".toggleSvg").addEventListener("click", function(){
    J("ul.nav").classList.toggle("onMobile")
})



let initScrollPage = ()=>
{
}
window.addEventListener("scroll", function(e){
    const tamanho = window.pageYOffset.toFixed();

    (tamanho <= 20) ? J(".initScroll").style.setProperty("background-position", "center") : J(".initScroll").style.setProperty("background-position", "bottom"); 
    // console.log(tamanho)
    J(".initScroll").style.setProperty("background-position-y", `${tamanho}px`);
    // J(".initScroll").style.setProperty("clip-path", `circle(${tamanho}vh)`);
    // background-position-y: -50vh;
    // scrollTop
})
    
initScrollPage();