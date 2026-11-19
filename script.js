const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const progress=document.getElementById("scrollProgress");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+"%"});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
