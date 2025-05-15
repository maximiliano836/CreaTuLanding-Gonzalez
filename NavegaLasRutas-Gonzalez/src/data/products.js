const products = [
  {
    id: "1",
    nombre: "iPhone 15 Pro",
    categoria: "celulares",
    descripcion: "Smartphone Apple de última generación, 256GB, cámara triple.",
    precio: 1200,
    imagen: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=512&hei=512&fmt=jpeg&qlt=95&.v=1692923778669"
  },
  {
    id: "2",
    nombre: "Samsung Galaxy S24",
    categoria: "celulares",
    descripcion: "Smartphone Samsung, pantalla AMOLED 6.8'', 512GB.",
    precio: 1100,
    imagen: "https://images.samsung.com/is/image/samsung/p6pim/uy/2401/gallery/uy-galaxy-s24-s928-sm-s928bzkkltu-539309344"
  },
  {
    id: "3",
    nombre: "Notebook Dell Inspiron 15",
    categoria: "notebooks",
    descripcion: "Intel i7, 16GB RAM, 512GB SSD, pantalla 15.6'' Full HD.",
    precio: 950,
    imagen: "https://netpc.uy/wp-content/uploads/2021/04/6-25.jpg"
  },
  {
    id: "4",
    nombre: "Auriculares Sony WH-1000XM5",
    categoria: "audio",
    descripcion: "Auriculares inalámbricos con cancelación de ruido.",
    precio: 400,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_794797-MLA50436072460_062022-O.webp"
  },
  {
    id: "5",
    nombre: "Smartwatch Xiaomi Watch S1",
    categoria: "smartwatch",
    descripcion: "Reloj inteligente con GPS, monitor de ritmo cardíaco.",
    precio: 250,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_640804-MLU78494798877_082024-O.webp"
  },
  {
    id: "6",
    nombre: "Tablet iPad Air 2024",
    categoria: "tablets",
    descripcion: "Pantalla Liquid Retina de 10.9'', 128GB, Wi-Fi.",
    precio: 800,
    imagen: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066725433"
  },
  {
    id: "7",
    nombre: "Monitor LG UltraGear 27''",
    categoria: "monitores",
    descripcion: "Monitor gaming 2K, 165Hz, 1ms, G-Sync compatible.",
    precio: 420,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDP8_EhjfOeoy-kSt-PZtMbfPPj3U7sDgQ2w&s"
  },
  {
    id: "8",
    nombre: "Teclado Mecánico Logitech G Pro X",
    categoria: "perifericos",
    descripcion: "Teclado mecánico RGB, switches intercambiables, ideal para gaming.",
    precio: 180,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_909965-MLU74111567657_012024-O.webp"
  },
  {
    id: "9",
    nombre: "Mouse Logitech MX Master 3S",
    categoria: "perifericos",
    descripcion: "Mouse inalámbrico ergonómico, sensor de alta precisión.",
    precio: 120,
    imagen: "https://prod-resize.tiendainglesa.com.uy/images/medium/P562190-1.jpg?20230816100030,Mouse-LOGITECH-Mx-Master-3S-Inalambrico-Bluetooth-Grafito-en-Tienda-Inglesa"
  },
  {
    id: "10",
    nombre: "Parlante JBL Charge 5",
    categoria: "audio",
    descripcion: "Parlante portátil Bluetooth, resistente al agua, 20 horas de batería.",
    precio: 200,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_843793-MLU74297377077_012024-O.webp"
  }
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.find((prod) => prod.id === id)), 1000);
  });

export const getProductsByCategory = (categoria) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.filter((prod) => prod.categoria === categoria)), 1000);
  });