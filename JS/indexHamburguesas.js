
const arrayProductos=[
    {img: "./IMAGENES/CHAMPIONSLEAGUE.PNG", id:0,  nombre: "CHAMPIONS LEAGUE", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/CHE_DARLING.PNG", id:1,  nombre: "CHE DARLING", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/DONALD.PNG", id:2,  nombre: "DONAL'D", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KITACLUB.PNG", id:3,  nombre: "KITA CLUB", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RICKY_FORT.PNG", id:4,  nombre: "RICKY FORT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KRYPTONITA_C_B.PNG", id:5,  nombre: "KRYPTONIYA CON C&B", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/KRYPTONITA_PROVO.PNG", id:6,  nombre: "KRYPTONITA CON PROVO", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/LV.PNG", id:7,  nombre: "LAS VEGAS", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/LV_RELLENA.PNG", id:8,  nombre: "LAS VEGAS RELLENA", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/RED_HOT.PNG", id:9,  nombre: "RED HOT", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/TOM_CHERRY.PNG", id:10,  nombre: "TOM & CHERRY", precioSimple: 600, precioDoble: 690, botonComprar: "¡LA QUIERO!"},
    {img: "./IMAGENES/VEGGIE.PNG", id:11,  nombre: "CONVERTÍ EN VEGGIE", precioSimple: 650, precioDoble: 740, botonComprar: "¡LA QUIERO!"},

]

const contenedorProductos = document.getElementById("productos")

arrayProductos.forEach((producto)=>{
    
    const div = document.createElement("div")
    div.className = "card-body styleCard mb-2 text-center"
    div.style = "max-width: 240px; max-height: 340px"

        
    div.innerHTML = `

                
                    <div>
                        <img src=${producto.img} class="card-img-top" style="border-color: white" alt="imagenHamburguesa">
                        <h5 class="card-title styleTitleCard">${producto.nombre}</h5>
                        <p class="card-text styleSubtitleCard">Precio: $ ${producto.precioSimple}</p>
                        <div id="buttonCarrito${producto.id}"><button id="modal-abrir laQuieroHamburguesa" value=${producto.nombre} class="buttonModalcito">LA QUIERO</button></div>
                            
                            
                    </div>
                `


contenedorProductos.appendChild(div)

})


// MODAL

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const productosTablaCarrito = document.getElementById('productosTablaCarrito')

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




//FOR______________________________________________________________________________________________________________________________________

let itemsCarrito2 = 0

if(localStorage.length == 0){
    itemsCarrito2 = 0
}else{
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i) 
        let value = localStorage.getItem(key)
        itemsCarrito2 = itemsCarrito2+parseInt(value)
        
}
}


for(let i=0 ; i<arrayProductos.length ; i++){
    const hamburguesaCarrito = document.getElementById(`buttonCarrito${i}`)


    hamburguesaCarrito.addEventListener('click', (event)=>{
        let itemLocalStorage = localStorage.getItem(arrayProductos[i].nombre) 
        if(itemLocalStorage) {
            let newQuatity = parseInt(itemLocalStorage)+1
            localStorage.setItem(arrayProductos[i].nombre, newQuatity)
        } else {
            localStorage.setItem(arrayProductos[i].nombre, 1)
        }
        itemsCarrito2=itemsCarrito2+1
        itemsCarrito.innerHTML=`
            <span>
                ${itemsCarrito2}
            </span>
        `
    })
}


localStorage.getItem('hamburguesa')

const itemsCarrito = document.getElementById('itemsCarrito')

if(itemsCarrito2==0){
    itemsCarrito.innerHTML=`
    <span>
        El carrito está vacío
    </span>
`
}else{
    itemsCarrito.innerHTML=`
    <span>
        ${itemsCarrito2}
    </span>
`
}

//MODAL CARRITO SUMANDO PRODUCTOS

if(localStorage.length == 0){
    productosTablaCarrito.innerHTML=`
    <span>
        El carrito está vacío
    </span>
`
    
}else{
    console.log('entrando al else')
    let str = ``
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i) 
        let value = localStorage.getItem(key)
        let precio = 0

        for(let j = 0 ; j<arrayProductos.length ; j++){
            if(arrayProductos[j].nombre === key) {
                precio = arrayProductos[j].precioSimple  
            } 
        }

        let precioTotal = precio*parseInt(value)

        str = str.concat(`
                <tr>
                    <td>${key}</td>
                    <td class="text-center"><i class='botonRestarProducto${key} bx bx-minus-circle'></i> ${value} <i class='bx bx-plus-circle'></i></td>
                    <td class="text-center">$ ${precio}</td>
                    <td class="text-center">$ ${precioTotal}</td>
                </tr>
            `
        )
    }

    productosTablaCarrito.innerHTML=`
        ${str}
    `
}

for(let i=0; i<localStorage.length ; i++){
    const botonRestar = document.getElementsByClassName(`botonRestarProducto${i}`)
    console.log('botonRestar', botonRestar)
    botonRestar.addEventListener('click', () =>{
        let value = localStorage.getItem(key)
        value=value+1
        console.log("hola")
})
}



































































