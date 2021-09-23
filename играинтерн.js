const dina=document.getElementById('dina');
const cuctus=document.getElementById('cuctus');
document.addEventListener('keydown',f1);
function f1() {
    if(dina.classList!="jump"){
    dina.classList.add('jump');
    }
    setTimeout(function() {
        dina.classList.remove('jump')
    },300)
}
let isali=setInterval(() => {
    let dinatop=parseInt(window.getComputedStyle(dina).getPropertyValue("top"))
    let cuc=parseInt(window.getComputedStyle(cuctus).getPropertyValue("left"));
    if(cuc<50&&cuc>0&&dinatop>=140){
        alert('GAME OVER');
    }
}, 10);