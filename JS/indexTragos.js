
const arrayProductos=[
    {nombre: "FERNET CON COCA", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "CAMPARI ORANGE", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "GANCIA & SRPITE", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "CUBA LIBRE", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "CYNAR Y POMELO", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "GIN TONIC GORDON", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "GIN TONIC BEEFEATER", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "GIN TONIC BEEFEATER PINK", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "GIN TONIC BOMBAY", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "GIN TONIC HENDRICKS", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "MALIBU Y JUGO", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "SMIRNOFF Y JUGO", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "SMIRNOFF Y SPEED", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "ABSOLUT Y JUGO", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "ABSOLUT Y SPEED", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "VAT 69", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "JOHHNIE WALKER RED", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "JOHHNIE WALKER BLACK", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "CHIVAS REAL AÑEJO 12", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "JACK DANIELS", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "BAILEYS", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "JAGGER Y SPEED", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "TEQUILA JOSE CUERVO", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
    {nombre: "TEQUILA CORRALEJO", precioSimple: 250, botonComprar: "¡LA QUIERO!"},
]

const contenedorProductos = document.getElementById("productos2")

arrayProductos.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "min-width: 340px; min-height: 120px; border: 1px solid white; "

        
    div.innerHTML = `

                
                    <div>
                        
                        
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



