/* CAMBIA ESTE NÚMERO POR TU WHATSAPP: Bolivia = 591 + número, sin +, espacios ni guiones. */
const NUMERO_WHATSAPP = "59174809844";

const anuncios = [
 {titulo:"¡Nuevos diseños disponibles! 🎉", texto:"Tenemos nuevas opciones de piñatas y decoraciones. Pregunta por disponibilidad.", fecha:"Nuevo"},
 {titulo:"Decoración personalizada 🎈", texto:"Pide tu decoración con los colores y temática que prefieras.", fecha:"Esta semana"},
 {titulo:"Haz tu pedido 💖", texto:"Escríbenos para consultar precios, modelos y disponibilidad.", fecha:"Pedidos abiertos"}
];

/* PON TUS FOTOS EN LA CARPETA imagenes Y ESCRIBE SUS NOMBRES AQUÍ */
const productos = [
  {
    nombre: "Piñata personalizada",
    descripcion: "Piñata artesanal decorada para cumpleaños y celebraciones.",
    precio: "Consultar",
    imagen: "imagenes/pinata-personalizada.jpeg"
  },
  {
    nombre: "Decoración de graduación",
    descripcion: "Decoración personalizada para graduaciones y actos especiales.",
    precio: "Consultar",
    imagen: "imagenes/graduacion.jpeg"
  },
  {
    nombre: "Nombre personalizado",
    descripcion: "Nombres decorativos personalizados para cualquier celebración.",
    precio: "Consultar",
    imagen: "imagenes/nombre-personalizado.jpeg"
  }
];

function enlaceWhatsApp(nombre){
 const mensaje="Hola , vi su página de piñatería y quiero consultar por la "+nombre+". ¿Está disponible?";
 return "https://wa.me/"+NUMERO_WHATSAPP+"?text="+encodeURIComponent(mensaje);
}

document.getElementById("announcements").innerHTML=anuncios.map(a=>`<article class="announcement-card"><div class="date">${a.fecha}</div><h3>${a.titulo}</h3><p>${a.texto}</p></article>`).join("");

const productsContainer=document.getElementById("products");
productsContainer.innerHTML=productos.map((p,i)=>`<article class="product-card"><div class="product-photo" data-index="${i}"><img src="${p.imagen}" alt="${p.nombre}"><div class="view-image">👁️ Ver imagen</div></div><div class="product-info"><h3>${p.nombre}</h3><p>${p.descripcion}</p><p class="price">${p.precio}</p><a class="btn-whatsapp" href="${enlaceWhatsApp(p.nombre)}" target="_blank" rel="noopener">💬 Pedir por WhatsApp</a></div></article>`).join("");

const modal=document.getElementById("modal"), modalImage=document.getElementById("modalImage"), modalTitle=document.getElementById("modalTitle"), modalDescription=document.getElementById("modalDescription"), modalPrice=document.getElementById("modalPrice"), modalWhatsapp=document.getElementById("modalWhatsapp");

document.querySelectorAll(".product-photo").forEach(el=>el.addEventListener("click",()=>{const p=productos[el.dataset.index];modalImage.src=p.imagen;modalImage.alt=p.nombre;modalTitle.textContent=p.nombre;modalDescription.textContent=p.descripcion;modalPrice.textContent=p.precio;modalWhatsapp.href=enlaceWhatsApp(p.nombre);modal.classList.add("show");}));
function cerrarModal(){modal.classList.remove("show");modalImage.src=""}
document.getElementById("closeModal").addEventListener("click",cerrarModal);modal.addEventListener("click",e=>{if(e.target===modal)cerrarModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")cerrarModal()});
document.getElementById("contactWhatsapp").href=enlaceWhatsApp("un producto de la piñatería");document.getElementById("year").textContent=new Date().getFullYear();
