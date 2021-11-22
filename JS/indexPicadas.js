
const arrayProductos=[
    {img: "./IMAGENES/papasFritas.PNG",  nombre: "PAPAS CON CHEDDAR, BACON Y VERDEO", precioSimple: 470, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/papasFritas2.PNG",  nombre: "PAPAS CON CEBOLLA A LA CREMA", precioSimple: 470, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/arosDeCebolla.PNG",  nombre: "AROS DE CEBOLLA CON BARBACOA", precioSimple: 450, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/nuggetsYPapas.PNG",  nombre: "NUGGETS CON PAPAS FRITAS", precioSimple: 550, botonComprar: "¡LA QUIERO!"},
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



