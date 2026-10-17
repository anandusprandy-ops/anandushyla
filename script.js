const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links");
if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.querySelector("span").textContent=open?"−":"＋"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.querySelector("span").textContent="＋"}))}
document.getElementById("year").textContent=new Date().getFullYear();
const cards=[...document.querySelectorAll(".project-card")],filters=[...document.querySelectorAll(".filter")];
filters.forEach(btn=>btn.addEventListener("click",()=>{filters.forEach(f=>f.classList.toggle("active",f===btn));cards.forEach(card=>card.hidden=btn.dataset.filter!=="All"&&card.dataset.category!==btn.dataset.filter)}));
const lightbox=document.getElementById("lightbox"),lbImg=document.getElementById("lightbox-image"),lbTitle=document.getElementById("lightbox-title"),lbDesc=document.getElementById("lightbox-description");let current=0;
function showCard(index){current=(index+cards.length)%cards.length;const c=cards[current];lbImg.src=c.dataset.image;lbImg.alt=c.dataset.title;lbTitle.textContent=c.dataset.title;lbDesc.textContent=c.dataset.description;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeBox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");document.body.style.overflow=""}
cards.forEach((c,i)=>c.addEventListener("click",()=>showCard(i)));
document.querySelector(".lightbox-close").addEventListener("click",closeBox);
document.querySelector(".lightbox-prev").addEventListener("click",()=>showCard(current-1));
document.querySelector(".lightbox-next").addEventListener("click",()=>showCard(current+1));
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeBox()});
document.addEventListener("keydown",e=>{if(!lightbox.classList.contains("open"))return;if(e.key==="Escape")closeBox();if(e.key==="ArrowLeft")showCard(current-1);if(e.key==="ArrowRight")showCard(current+1)});