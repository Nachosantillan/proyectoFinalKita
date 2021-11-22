
const arrayProductos=[
    {img: "./IMAGENES/muzza.PNG",  nombre: "MUZZA", precioSimple: 450, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/napolitana.PNG",  nombre: "NAPOLITANA", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/rucula.PNG",  nombre: "RUCULA Y CRUDO", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/cebollaycrema.PNG",  nombre: "CEBOLLA A LA CREMA", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RUCULA.PNG",  nombre: "CHEDDAR", precioSimple: 480, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/4quesos.PNG",  nombre: "CUATRO QUESOS", precioSimple: 480, botonComprar: "¡LA QUIERO!"},

]

const contenedorProductos = document.getElementById("productos2")

arrayProductos.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `

                
                    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio: $ ${producto.precioSimple}</p>
                        <button id="modal-abrir" class="buttonModalcito">${producto.botonComprar}</button>
                            
                            
                    </div>
                `


contenedorProductos.appendChild(div)

})


// modal : 

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})



