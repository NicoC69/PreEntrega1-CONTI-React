import React from 'react';
import ItemDetail from './ItemDetail';



const ItemDetailContainer= () =>{

    const productos = [
        {id:1,categoria:"Motherboard", marca:"ASUS", modelo:"ROG STRIX Z690-E INTEL", descripcion:"La placa base insignia ROG Strix Z690-E Gaming WiFi está diseñada con un suministro de energía mejorado y refrigeración optimizada para hacer frente a las demandas de los potentes procesadores Intel® Core™ Rocket Lake de 12.ª generación.", img:"https://m.media-amazon.com/images/I/81hQTzzTLrL.__AC_SX300_SY300_QL70_FMwebp_.jpg", precio:260000, stock:5},
        {id:2,categoria:"Motherboard", marca:"ASUS",modelo:"ROG STRIX B550-F AMD",descripcion:"ASUS ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)",img:"https://m.media-amazon.com/images/I/813WBwlPh+L._AC_SY300_SX300_.jpg",precio:165000,stock:5},
        {id:3,categoria:"Procesadores",marca:"INTEL",modelo:"i5",descripcion:"Rendimiento revolucionario y multitarea. Con altas velocidades de reloj y una nueva arquitectura innovadora",img:"https://m.media-amazon.com/images/I/61LzzuUNhKL.__AC_SX300_SY300_QL70_FMwebp_.jpg",precio:140000,stock:5},
        {id:4,categoria:"Procesadores",marca:"AMD",modelo:"RYZEN 5",descripcion:"Lleva tu juego a nuevas alturas mientras las aplicaciones secundarias se ejecutan sin problemas en segundo plano. Velocidad máxima de reloj de hasta 4,4 GHz(1).6 núcleos ",img:"https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SX679_.jpg",precio:140000,stock:5},
        {id:5,categoria:"Ram",marca:"CORSAIR",modelo:"VENGEANCE RGB PRO DDR4 16GB (2x8GB) 3200MHz",descripcion:"La memoria DDR4 de alto rendimiento ilumina su sistema con una iluminación vívida y animada de diez LED RGB ultrabrillantes y direccionables individualmente por módulo.",img:"https://m.media-amazon.com/images/I/71Razo9aeVL._AC_SX679_.jpg",precio:60000,stock:5},
        {id:6,categoria:"Ram",marca:"KINGSTON",modelo:"VENGEANCE RGB PRO DDR5 8GB",descripcion:"AMD EXPO Certified Improved stability for overclocking",img:"https://m.media-amazon.com/images/I/71UcVYxIL9L._AC_SX679_.jpg",precio:45000,stock:5},
        {id:7,categoria:"Almacenamiento", marca:"Samsung", modelo:"SSD 1TB 2.5” Internal", descripcion:"EL SSD ALL-STAR: El último 870 EVO tiene un rendimiento, confiabilidad y compatibilidad indiscutibles", img:"https://m.media-amazon.com/images/I/81vEKxGnLGL._AC_SX679_.jpg", precio:80000, stock:5},
        {id:8,categoria:"Almacenamiento", marca:"Seagate", modelo:"HDD 2TB 3.5” Internal", descripcion:"Seagate BarraCuda 2TB Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache", img:"https://m.media-amazon.com/images/I/51rsQeUE8sL._AC_SY879_.jpg", precio:80000, stock:5},
        {id:9,categoria:"Monitores", marca:"SAMSUNG",modelo:"ViewFinity S65UA Series 34' Ultrawide", descripcion:"Sumérgete en juegos, películas o proyectos de diseño mientras te rodeas de la pantalla curva ultra ancha de 34 pulgadas",img:"https://m.media-amazon.com/images/I/715Z8wDEeEL._AC_SX679_.jpg", precio:550000, stock:5},
        {id:10,categoria:"Video", marca:"GIGABYTE",modelo:"GV-N710D3-2GL REV2.0 2GB RAM", descripcion:"Core Clock: 954 MHz. Low profile design, features Dual-link DVI-D/D-Sub/HDMI.", img:"https://m.media-amazon.com/images/I/71xuepwxseL._AC_SX679_.jpg", precio:45000, stock:5},
        {id:11,categoria:"Perifericos", marca:"LOGITECH",modelo:"MK270 Wireless", descripcion:"Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop", img:"https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SX679_.jpg", precio:19000, stock:5}
    ]
    
    const getProductos = new Promise((resolve, reject)=> {
        if (productos.lenght > 0) {
            setTimeout (()=> {
                resolve(productos)
            },2000)    
        } else {
            reject(new Error("No hay productos"))
        }
    })
    
    getProductos
        .then((res)=>{
        })
        .catch((error)=> {
            console.log(error)
        })
    


    return (
        <div>
            <ItemDetail productos={productos}/>
        </div>
    )
}
export default ItemDetailContainer 




/*const [Productos, setProductos] = useState([]);
    const {categoria} = useParams ()

    useEffect(() => {
        fetch('/src/component/Data.json')
        .then((response) => response.json())
        .then((data) =>{setProductos(data.Productos);})
        .catch((error) => {console.error('Error al obtener datos:', error);});
    }, [])
    
    console.log(Productos)

    const productosFiltrados = Productos.find((producto) => producto.categoria === categoria);  
    

    return (
        <div>
            <p>Detalle</p>
            <div>
                {Productos.length > 0 &&
                    Productos.map((producto)=> {
                        return <ItemDetail key={producto.id} producto={producto} />
                    })}
            </div>
        </div>
    )
    
    */