/*=========================================
        ESCUADRÓN AUTOMOTRIZ
            script.js
=========================================*/

//===============================
// MENÚ RESPONSIVE
//===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

//===============================
// CERRAR MENÚ AL DAR CLIC
//===============================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    });

});

//===============================
// NAVBAR AL HACER SCROLL
//===============================

const navbar = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.45)";

    }else{

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.boxShadow = "none";

    }

});

//===============================
// BOTÓN VOLVER ARRIBA
//===============================

const btnTop = document.createElement("button");

btnTop.innerHTML = '<i class="fas fa-arrow-up"></i>';

btnTop.className = "btnTop";

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.right = "25px";
btnTop.style.bottom = "25px";
btnTop.style.width = "55px";
btnTop.style.height = "55px";
btnTop.style.borderRadius = "50%";
btnTop.style.border = "none";
btnTop.style.background = "#d90429";
btnTop.style.color = "#fff";
btnTop.style.fontSize = "20px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";
btnTop.style.transition = ".3s";
btnTop.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        btnTop.style.display = "block";

    }else{

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//===============================
// EFECTO HOVER BOTÓN
//===============================

btnTop.addEventListener("mouseenter",()=>{

    btnTop.style.transform = "scale(1.12)";

});

btnTop.addEventListener("mouseleave",()=>{

    btnTop.style.transform = "scale(1)";

});

//===============================
// SCROLL SUAVE
//===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino =
        document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*=========================================
        ANIMACIONES PROFESIONALES
=========================================*/

//===============================
// APARICIÓN AL HACER SCROLL
//===============================

const elementos = document.querySelectorAll(
".card, .benefit, .location-card, .event-content, .section-title"
);

const aparecer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";
            entrada.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

elementos.forEach((el)=>{

    el.style.opacity="0";
    el.style.transform="translateY(70px)";
    el.style.transition=".8s ease";

    aparecer.observe(el);

});

//===============================
// EFECTO ESCRITURA
//===============================

const titulo = document.querySelector(".hero h1");

const texto = titulo.innerHTML
.replace("<br>","\n");

titulo.innerHTML="";

let i=0;

function escribir(){

    if(i < texto.length){

        if(texto.charAt(i) === "\n"){

            titulo.innerHTML += "<br>";

        }else{

            titulo.innerHTML += texto.charAt(i);

        }

        i++;

        setTimeout(escribir,55);

    }

}

window.onload=()=>{

    escribir();

}

//===============================
// PARALLAX HERO
//===============================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    let y=window.scrollY;

    hero.style.backgroundPosition=
    "center " + (y*0.35) + "px";

});

//===============================
// EFECTO TARJETAS
//===============================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,#2b2b2b,#171717)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#1a1a1a";

    });

});

//===============================
// EFECTO BOTONES
//===============================

document.querySelectorAll(
".btn-primary,.btn-secondary"
).forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

//===============================
// EFECTO LOGO
//===============================

const logo=document.querySelector(".logo");

logo.addEventListener("mouseenter",()=>{

    logo.style.transform="rotate(-5deg) scale(1.08)";
    logo.style.transition=".4s";

});

logo.addEventListener("mouseleave",()=>{

    logo.style.transform="rotate(0deg) scale(1)";

});

//===============================
// CAMBIO DE COLOR DEL BADGE
//===============================

const badge=document.querySelector(".badge");

setInterval(()=>{

    badge.style.background="#ef233c";

    setTimeout(()=>{

        badge.style.background="#d90429";

    },700);

},2000);

//===============================
// EFECTO EN REDES SOCIALES
//===============================

document.querySelectorAll(".socials a").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) rotate(360deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) rotate(0deg)";

    });

});
/*=========================================
        PARTE 8 - EFECTOS FINALES
=========================================*/

//===============================
// PRELOADER
//===============================

const loader = document.createElement("div");

loader.id = "loader";

loader.innerHTML = `
<div class="loader-content">
    <div class="loader-circle"></div>
    <h2>ESCUADRÓN AUTOMOTRIZ</h2>
    <p>Cargando...</p>
</div>
`;

document.body.prepend(loader);

const loaderStyle = document.createElement("style");

loaderStyle.innerHTML = `
#loader{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#000;
display:flex;
justify-content:center;
align-items:center;
z-index:99999;
transition:.6s;
}

.loader-content{
text-align:center;
color:white;
font-family:Poppins,sans-serif;
}

.loader-circle{
width:70px;
height:70px;
border-radius:50%;
border:6px solid #333;
border-top:6px solid #d90429;
margin:auto;
animation:girar 1s linear infinite;
margin-bottom:20px;
}

@keyframes girar{
100%{
transform:rotate(360deg);
}
}
`;

document.head.appendChild(loaderStyle);

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.remove();

        },600);

    },900);

});


//===============================
// EFECTO EN EL LOGO
//===============================

const logoImg = document.querySelector(".logo");

if(logoImg){

setInterval(()=>{

logoImg.animate([

{transform:"scale(1)"},

{transform:"scale(1.06)"},

{transform:"scale(1)"}

],{

duration:1800

});

},2500);

}


//===============================
// EFECTO BRILLO EN TARJETAS
//===============================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px rgba(217,4,41,.45)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


//===============================
// FECHA AUTOMÁTICA EN FOOTER
//===============================

const copy = document.querySelector(".copy");

if(copy){

copy.innerHTML =
`© ${new Date().getFullYear()} Escuadrón Automotriz. Todos los derechos reservados.`;

}


//===============================
// MENSAJE DE BIENVENIDA
//===============================

setTimeout(()=>{

console.log("%cBienvenido a Escuadrón Automotriz",
"color:red;font-size:18px;font-weight:bold;");

},1500);


//===============================
// REVELAR BOTONES
//===============================

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

btn.animate([

{opacity:0,transform:"translateY(20px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1200,

fill:"forwards"

});

});


//===============================
// EFECTO EN ICONOS
//===============================

document.querySelectorAll("i").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="scale(1.2)";
icon.style.transition=".3s";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="scale(1)";

});

});


//===============================
// CAMBIAR COLOR DEL HEADER
//===============================

window.addEventListener("scroll",()=>{

const header = document.querySelector("header");

if(window.scrollY>300){

header.style.borderBottom="2px solid #d90429";

}else{

header.style.borderBottom="none";

}

});


//===============================
// FIN DEL SCRIPT
//===============================

console.log("Sitio cargado correctamente.");