import ProductoApi from "../models/Productos";

const productsData = [
  {
    name: "Zapatillas Deportivas Nike Air Max",
    image: "https://example.com/zapatillas1.jpg",
    description: "Zapatillas deportivas de alta gama con tecnología Air Max para una máxima comodidad y rendimiento.",
    brand: "Nike",
    price: 129.99,
    category: "Calzado Deportivo",
    type: "Ropa",
    stock: 100,
    available_colors: ["Negro", "Blanco", "Rojo"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
  },
  {
    name: "Camiseta de Algodón Adidas Essential",
    image: "https://example.com/camiseta2.jpg",
    description: "Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Adidas.",
    brand: "Adidas",
    price: 29.99,
    category: "Ropa",
    type: "Ropa",
    stock: 80,
    available_colors: ["Azul Marino", "Gris", "Blanco"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    name: "Portátil Ultrabook Dell XPS 13",
    image: "https://example.com/portatil3.jpg",
    description: "Portátil ultraligero con pantalla InfinityEdge y procesador Intel Core i7. Ideal para trabajo y entretenimiento.",
    brand: "Dell",
    price: 899.99,
    category: "Electrónica",
    type: "Tecnología",
    stock: 20,
    available_colors: ["Plata", "Negro"],
    sizes: ["13 pulgadas", "15 pulgadas"],
  },
  {
    name: "Smartwatch Fitbit Versa 3",
    image: "https://example.com/smartwatch4.jpg",
    description: "Smartwatch con monitoreo de ritmo cardíaco, seguimiento de sueño y GPS integrado. Compatible con iOS y Android.",
    brand: "Fitbit",
    price: 149.99,
    category: "Wearables",
    type: "Tecnología",
    stock: 30,
    available_colors: ["Negro", "Rosa", "Gris"],
    sizes: ["S", "L"],
  },
  {
    name: "Auriculares Inalámbricos Sony WH-1000XM4",
    image: "https://example.com/auriculares5.jpg",
    description: "Auriculares con cancelación de ruido líder en la industria, sonido premium y larga duración de batería.",
    brand: "Sony",
    price: 299.99,
    category: "Audio",
    type: "Tecnología",
    stock: 15,
    available_colors: ["Negro", "Plata"],
    sizes: ["Único"],
  },
  {
    name: "Bicicleta de Montaña Cannondale Trail 5",
    image: "https://example.com/bicicleta6.jpg",
    description: "Bicicleta de montaña con cuadro de aluminio y componentes de alta calidad. Perfecta para senderos y terrenos difíciles.",
    brand: "Cannondale",
    price: 899.99,
    category: "Deportes y Aire Libre",
    type: "Deportes y Aire Libre",
    stock: 10,
    available_colors: ["Negro/Azul", "Rojo/Negro"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Teclado Mecánico Corsair K70 RGB",
    image: "https://example.com/teclado7.jpg",
    description: "Teclado mecánico para juegos con retroiluminación RGB personalizable y switches Cherry MX. Construcción duradera y diseño ergonómico.",
    brand: "Corsair",
    price: 149.99,
    category: "Tecnología",
    type: "Tecnología",
    stock: 25,
    available_colors: ["Negro"],
    sizes: ["Completo"],
  },
  {
    name: "Cámara DSLR Canon EOS 90D",
    image: "https://example.com/camara8.jpg",
    description: "Cámara réflex digital con sensor APS-C de 32.5 megapíxeles. Captura imágenes y videos de alta calidad.",
    brand: "Canon",
    price: 1299.99,
    category: "Fotografía",
    type: "Electrónica",
    stock: 12,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Juego de Mesa Catan",
    image: "https://example.com/juego9.jpg",
    description: "Juego de estrategia y negociación para toda la familia. Construye y comercia para ser el colonizador más exitoso en la isla de Catan.",
    brand: "Catan Studio",
    price: 39.99,
    category: "Juguetes y Juegos",
    type: "Juguetes y Juegos",
    stock: 40,
    available_colors: ["Multicolor"],
    sizes: ["Único"],
  },
  {
    name: "Mochila North Face Recon",
    image: "https://example.com/mochila10.jpg",
    description: "Mochila resistente y versátil con compartimento para laptop. Ideal para uso diario o excursiones.",
    brand: "The North Face",
    price: 89.99,
    category: "Moda y Accesorios",
    type: "Moda y Accesorios",
    stock: 18,
    available_colors: ["Negro", "Gris", "Azul"],
    sizes: ["Único"],
  },
  {
    name: "Set de Herramientas Craftsman de 200 Piezas",
    image: "https://example.com/herramientas11.jpg",
    description: "Set completo de herramientas para mecánicos y entusiastas del bricolaje. Incluye llaves, destornilladores y más.",
    brand: "Craftsman",
    price: 249.99,
    category: "Hogar y Herramientas",
    type: "Hogar y Herramientas",
    stock: 15,
    available_colors: ["Rojo", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Guitarra Acústica Taylor 214ce",
    image: "https://example.com/guitarra12.jpg",
    description: "Guitarra acústica con tapa de abeto sólido y cuerpo de palisandro. Sonido claro y cálido, ideal para músicos de todos los niveles.",
    brand: "Taylor",
    price: 999.99,
    category: "Instrumentos Musicales",
    type: "Instrumentos Musicales",
    stock: 8,
    available_colors: ["Natural"],
    sizes: ["Único"],
  },
  {
    name: "Silla de Oficina Ergonómica Herman Miller Aeron",
    image: "https://example.com/silla13.jpg",
    description: "Silla de oficina de diseño ergonómico con soporte lumbar ajustable. Comodidad y estilo para largas jornadas de trabajo.",
    brand: "Herman Miller",
    price: 1199.99,
    category: "Muebles",
    type: "Muebles",
    stock: 10,
    available_colors: ["Negro", "Blanco", "Gris"],
    sizes: ["Único"],
  },
  {
    name: "Tableta Gráfica Wacom Intuos Pro",
    image: "https://example.com/tableta14.jpg",
    description: "Tableta gráfica profesional para artistas y diseñadores. Sensibilidad a la presión y funciones personalizables.",
    brand: "Wacom",
    price: 349.99,
    category: "Arte y Diseño",
    type: "Tecnología",
    stock: 20,
    available_colors: ["Negro"],
    sizes: ["Mediana", "Grande"],
  },
  {
    name: "Botella de Vino Tinto Reserva 2015",
    image: "https://example.com/vino15.jpg",
    description: "Vino tinto reserva con notas complejas y envejecimiento en barricas de roble. Perfecto para ocasiones especiales.",
    brand: "Viñedos de la Montaña",
    price: 49.99,
    category: "Alimentos y Bebidas",
    type: "Alimentos y Bebidas",
    stock: 30,
    available_colors: ["Rojo"],
    sizes: ["750 ml"],
  },
  {
    name: "Aspiradora Robot iRobot Roomba 980",
    image: "https://example.com/aspiradora16.jpg",
    description: "Aspiradora robot inteligente con mapeo y navegación avanzados. Limpieza eficiente y programable.",
    brand: "iRobot",
    price: 499.99,
    category: "Electrodomésticos",
    type: "Electrodomésticos",
    stock: 15,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Monitor Gaming Alienware 34 Curved",
    image: "https://example.com/monitor17.jpg",
    description: "Monitor curvo ultrawide con tasa de refresco de 144Hz y resolución QHD. Experiencia de juego inmersiva.",
    brand: "Alienware",
    price: 899.99,
    category: "Tecnología",
    type: "Tecnología",
    stock: 10,
    available_colors: ["Negro"],
    sizes: ["34 pulgadas"],
  },
  {
    name: "Reloj Automático Seiko Presage",
    image: "https://example.com/reloj18.jpg",
    description: "Reloj automático con diseño clásico y movimiento mecánico. Elegancia y precisión en cada detalle.",
    brand: "Seiko",
    price: 349.99,
    category: "Relojes",
    type: "Relojes",
    stock: 25,
    available_colors: ["Plateado", "Dorado"],
    sizes: ["Único"],
  },
  {
    name: "Batería Electrónica Roland TD-17KVX",
    image: "https://example.com/bateria19.jpg",
    description: "Kit de batería electrónica con pads de malla y sonidos auténticos. Perfecto para práctica y grabación.",
    brand: "Roland",
    price: 1499.99,
    category: "Instrumentos Musicales",
    type: "Instrumentos Musicales",
    stock: 8,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Cámara de Seguridad Arlo Pro 3",
    image: "https://example.com/camara20.jpg",
    description: "Cámara de seguridad inalámbrica con calidad de video 2K HDR. Vigilancia para interiores y exteriores.",
    brand: "Arlo",
    price: 249.99,
    category: "Electrónica",
    type: "Electrónica",
    stock: 20,
    available_colors: ["Blanco"],
    sizes: ["Único"],
  }, {
    name: "Portátil Ultrabook Dell XPS 13",
    image: "https://example.com/portatil3.jpg",
    description: "Portátil ultraligero con pantalla InfinityEdge y procesador Intel Core i7. Ideal para trabajo y entretenimiento.",
    brand: "Dell",
    price: 899.99,
    category: "Electrónica",
    type: "Tecnología",
    stock: 20,
    available_colors: ["Plata", "Negro"],
    sizes: ["13 pulgadas", "15 pulgadas"],
  },
  {
    name: "Smartwatch Fitbit Versa 3",
    image: "https://example.com/smartwatch4.jpg",
    description: "Smartwatch con monitoreo de ritmo cardíaco, seguimiento de sueño y GPS integrado. Compatible con iOS y Android.",
    brand: "Fitbit",
    price: 149.99,
    category: "Wearables",
    type: "Tecnología",
    stock: 30,
    available_colors: ["Negro", "Rosa", "Gris"],
    sizes: ["S", "L"],
  },
  {
    name: "Auriculares Inalámbricos Sony WH-1000XM4",
    image: "https://example.com/auriculares5.jpg",
    description: "Auriculares con cancelación de ruido líder en la industria, sonido premium y larga duración de batería.",
    brand: "Sony",
    price: 299.99,
    category: "Audio",
    type: "Tecnología",
    stock: 15,
    available_colors: ["Negro", "Plata"],
    sizes: ["Único"],
  },
  {
    name: "Bicicleta de Montaña Cannondale Trail 5",
    image: "https://example.com/bicicleta6.jpg",
    description: "Bicicleta de montaña con cuadro de aluminio y componentes de alta calidad. Perfecta para senderos y terrenos difíciles.",
    brand: "Cannondale",
    price: 899.99,
    category: "Deportes y Aire Libre",
    type: "Deportes y Aire Libre",
    stock: 10,
    available_colors: ["Negro/Azul", "Rojo/Negro"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Teclado Mecánico Corsair K70 RGB",
    image: "https://example.com/teclado7.jpg",
    description: "Teclado mecánico para juegos con retroiluminación RGB personalizable y switches Cherry MX. Construcción duradera y diseño ergonómico.",
    brand: "Corsair",
    price: 149.99,
    category: "Tecnología",
    type: "Tecnología",
    stock: 25,
    available_colors: ["Negro"],
    sizes: ["Completo"],
  },
  {
    name: "Cámara DSLR Canon EOS 90D",
    image: "https://example.com/camara8.jpg",
    description: "Cámara réflex digital con sensor APS-C de 32.5 megapíxeles. Captura imágenes y videos de alta calidad.",
    brand: "Canon",
    price: 1299.99,
    category: "Fotografía",
    type: "Electrónica",
    stock: 12,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Juego de Mesa Catan",
    image: "https://example.com/juego9.jpg",
    description: "Juego de estrategia y negociación para toda la familia. Construye y comercia para ser el colonizador más exitoso en la isla de Catan.",
    brand: "Catan Studio",
    price: 39.99,
    category: "Juguetes y Juegos",
    type: "Juguetes y Juegos",
    stock: 40,
    available_colors: ["Multicolor"],
    sizes: ["Único"],
  },
  {
    name: "Mochila North Face Recon",
    image: "https://example.com/mochila10.jpg",
    description: "Mochila resistente y versátil con compartimento para laptop. Ideal para uso diario o excursiones.",
    brand: "The North Face",
    price: 89.99,
    category: "Moda y Accesorios",
    type: "Moda y Accesorios",
    stock: 18,
    available_colors: ["Negro", "Gris", "Azul"],
    sizes: ["Único"],
  },
  {
    name: "Set de Herramientas Craftsman de 200 Piezas",
    image: "https://example.com/herramientas11.jpg",
    description: "Set completo de herramientas para mecánicos y entusiastas del bricolaje. Incluye llaves, destornilladores y más.",
    brand: "Craftsman",
    price: 249.99,
    category: "Hogar y Herramientas",
    type: "Hogar y Herramientas",
    stock: 15,
    available_colors: ["Rojo", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Guitarra Acústica Taylor 214ce",
    image: "https://example.com/guitarra12.jpg",
    description: "Guitarra acústica con tapa de abeto sólido y cuerpo de palisandro. Sonido claro y cálido, ideal para músicos de todos los niveles.",
    brand: "Taylor",
    price: 999.99,
    category: "Instrumentos Musicales",
    type: "Instrumentos Musicales",
    stock: 8,
    available_colors: ["Natural"],
    sizes: ["Único"],
  },
  {
    name: "Silla de Oficina Ergonómica Herman Miller Aeron",
    image: "https://example.com/silla13.jpg",
    description: "Silla de oficina de diseño ergonómico con soporte lumbar ajustable. Comodidad y estilo para largas jornadas de trabajo.",
    brand: "Herman Miller",
    price: 1199.99,
    category: "Muebles",
    type: "Muebles",
    stock: 10,
    available_colors: ["Negro", "Blanco", "Gris"],
    sizes: ["Único"],
  },
  {
    name: "Tableta Gráfica Wacom Intuos Pro",
    image: "https://example.com/tableta14.jpg",
    description: "Tableta gráfica profesional para artistas y diseñadores. Sensibilidad a la presión y funciones personalizables.",
    brand: "Wacom",
    price: 349.99,
    category: "Arte y Diseño",
    type: "Tecnología",
    stock: 20,
    available_colors: ["Negro"],
    sizes: ["Mediana", "Grande"],
  },
  {
    name: "Botella de Vino Tinto Reserva 2015",
    image: "https://example.com/vino15.jpg",
    description: "Vino tinto reserva con notas complejas y envejecimiento en barricas de roble. Perfecto para ocasiones especiales.",
    brand: "Viñedos de la Montaña",
    price: 49.99,
    category: "Alimentos y Bebidas",
    type: "Alimentos y Bebidas",
    stock: 30,
    available_colors: ["Rojo"],
    sizes: ["750 ml"],
  },
  {
    name: "Aspiradora Robot iRobot Roomba 980",
    image: "https://example.com/aspiradora16.jpg",
    description: "Aspiradora robot inteligente con mapeo y navegación avanzados. Limpieza eficiente y programable.",
    brand: "iRobot",
    price: 499.99,
    category: "Electrodomésticos",
    type: "Electrodomésticos",
    stock: 15,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Monitor Gaming Alienware 34 Curved",
    image: "https://example.com/monitor17.jpg",
    description: "Monitor curvo ultrawide con tasa de refresco de 144Hz y resolución QHD. Experiencia de juego inmersiva.",
    brand: "Alienware",
    price: 899.99,
    category: "Tecnología",
    type: "Tecnología",
    stock: 10,
    available_colors: ["Negro"],
    sizes: ["34 pulgadas"],
  },
  {
    name: "Reloj Automático Seiko Presage",
    image: "https://example.com/reloj18.jpg",
    description: "Reloj automático con diseño clásico y movimiento mecánico. Elegancia y precisión en cada detalle.",
    brand: "Seiko",
    price: 349.99,
    category: "Relojes",
    type: "Relojes",
    stock: 25,
    available_colors: ["Plateado", "Dorado"],
    sizes: ["Único"],
  },
  {
    name: "Batería Electrónica Roland TD-17KVX",
    image: "https://example.com/bateria19.jpg",
    description: "Kit de batería electrónica con pads de malla y sonidos auténticos. Perfecto para práctica y grabación.",
    brand: "Roland",
    price: 1499.99,
    category: "Instrumentos Musicales",
    type: "Instrumentos Musicales",
    stock: 8,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Cámara de Seguridad Arlo Pro 3",
    image: "https://example.com/camara20.jpg",
    description: "Cámara de seguridad inalámbrica con calidad de video 2K HDR. Vigilancia para interiores y exteriores.",
    brand: "Arlo",
    price: 249.99,
    category: "Electrónica",
    type: "Electrónica",
    stock: 20,
    available_colors: ["Blanco"],
    sizes: ["Único"],
  }, {
    name: "Zapatillas Deportivas Nike Air Max",
    image: "https://example.com/zapatillas1.jpg",
    description: "Zapatillas deportivas de alta gama con tecnología Air Max para una máxima comodidad y rendimiento.",
    brand: "Nike",
    price: 129.99,
    category: "Calzado Deportivo",
    type: "Ropa",
    stock: 100,
    available_colors: ["Negro", "Blanco", "Rojo"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
  },
  {
    name: "Camiseta de Algodón Adidas Essential",
    image: "https://example.com/camiseta2.jpg",
    description: "Camiseta de algodón suave y cómoda, perfecta para el uso diario. Diseño clásico de Adidas.",
    brand: "Adidas",
    price: 29.99,
    category: "Ropa",
    type: "Ropa",
    stock: 80,
    available_colors: ["Azul Marino", "Gris", "Blanco"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    name: "Portátil Ultrabook Dell XPS 13",
    image: "https://example.com/portatil3.jpg",
    description: "Portátil ultraligero con pantalla InfinityEdge y procesador Intel Core i7. Ideal para trabajo y entretenimiento.",
    brand: "Dell",
    price: 899.99,
    category: "Electrónica",
    type: "Tecnología",
    stock: 20,
    available_colors: ["Plata", "Negro"],
    sizes: ["13 pulgadas", "15 pulgadas"],
  },
  {
    name: "Smartwatch Fitbit Versa 3",
    image: "https://example.com/smartwatch4.jpg",
    description: "Smartwatch con monitoreo de ritmo cardíaco, seguimiento de sueño y GPS integrado. Compatible con iOS y Android.",
    brand: "Fitbit",
    price: 149.99,
    category: "Wearables",
    type: "Tecnología",
    stock: 30,
    available_colors: ["Negro", "Rosa", "Gris"],
    sizes: ["S", "L"],
  },
  {
    name: "Auriculares Inalámbricos Sony WH-1000XM4",
    image: "https://example.com/auriculares5.jpg",
    description: "Auriculares con cancelación de ruido líder en la industria, sonido premium y larga duración de batería.",
    brand: "Sony",
    price: 299.99,
    category: "Audio",
    type: "Tecnología",
    stock: 15,
    available_colors: ["Negro", "Plata"],
    sizes: ["Único"],
  },
  {
    name: "Bicicleta de Montaña Cannondale Trail 5",
    image: "https://example.com/bicicleta6.jpg",
    description: "Bicicleta de montaña con cuadro de aluminio y componentes de alta calidad. Perfecta para senderos y terrenos difíciles.",
    brand: "Cannondale",
    price: 899.99,
    category: "Deportes y Aire Libre",
    type: "Deportes y Aire Libre",
    stock: 10,
    available_colors: ["Negro/Azul", "Rojo/Negro"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Teclado Mecánico Corsair K70 RGB",
    image: "https://example.com/teclado7.jpg",
    description: "Teclado mecánico para juegos con retroiluminación RGB personalizable y switches Cherry MX. Construcción duradera y diseño ergonómico.",
    brand: "Corsair",
    price: 149.99,
    category: "Tecnología",
    type: "Tecnología",
    stock: 25,
    available_colors: ["Negro"],
    sizes: ["Completo"],
  },
  {
    name: "Cámara DSLR Canon EOS 90D",
    image: "https://example.com/camara8.jpg",
    description: "Cámara réflex digital con sensor APS-C de 32.5 megapíxeles. Captura imágenes y videos de alta calidad.",
    brand: "Canon",
    price: 1299.99,
    category: "Fotografía",
    type: "Electrónica",
    stock: 12,
    available_colors: ["Negro"],
    sizes: ["Único"],
  },
  {
    name: "Juego de Mesa Catan",
    image: "https://example.com/juego9.jpg",
    description: "Juego de estrategia y negociación para toda la familia. Construye y comercia para ser el colonizador más exitoso en la isla de Catan.",
    brand: "Catan Studio",
    price: 39.99,
    category: "Juguetes y Juegos",
    type: "Juguetes y Juegos",
    stock: 40,
    available_colors: ["Multicolor"],
    sizes: ["Único"],
  },
  {
    name: "Mochila North Face Recon",
    image: "https://example.com/mochila10.jpg",
    description: "Mochila resistente y versátil con compartimento para laptop. Ideal para uso diario o excursiones.",
    brand: "The North Face",
    price: 89.99,
    category: "Moda y Accesorios",
    type: "Moda y Accesorios",
    stock: 18,
    available_colors: ["Negro", "Gris", "Azul"],
    sizes: ["Único"],
  },
  {
    name: "Set de Herramientas Craftsman de 200 Piezas",
    image: "https://example.com/herramientas11.jpg",
    description: "Set completo de herramientas para mecánicos y entusiastas del bricolaje. Incluye llaves, destornilladores y más.",
    brand: "Craftsman",
    price: 249.99,
    category: "Hogar y Herramientas",
    type: "Hogar y Herramientas",
    stock: 15,
    available_colors: ["Rojo", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Guitarra Acústica Taylor 214ce",
    image: "https://example.com/guitarra12.jpg",
    description: "Guitarra acústica con tapa de abeto sólido y cuerpo de palisandro.",
    brand: "Taylor",
    price: 999.99,
    category: "Instrumentos Musicales",
    type: "Música",
    stock: 8,
    available_colors: ["Natural"],
    sizes: ["Único"],
  },
  {
    name: "Sofá Seccional Moderno",
    image: "https://example.com/sofa13.jpg",
    description: "Sofá seccional con diseño moderno y tapicería de alta calidad. Perfecto para salas de estar contemporáneas.",
    brand: "Home Style",
    price: 799.99,
    category: "Muebles",
    type: "Hogar y Herramientas",
    stock: 5,
    available_colors: ["Gris", "Beige", "Negro"],
    sizes: ["Pequeño", "Grande"],
  },
  {
    name: "Reloj de Pared Decorativo",
    image: "https://example.com/reloj14.jpg",
    description: "Reloj de pared con diseño decorativo. Añade un toque elegante a cualquier espacio.",
    brand: "Time Elegance",
    price: 49.99,
    category: "Decoración del Hogar",
    type: "Hogar y Herramientas",
    stock: 15,
    available_colors: ["Oro", "Plata", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Robot Aspirador Inteligente",
    image: "https://example.com/aspiradora15.jpg",
    description: "Robot aspirador con tecnología inteligente de mapeo y limpieza. Ideal para mantener tu hogar limpio sin esfuerzo.",
    brand: "SmartClean",
    price: 349.99,
    category: "Electrodomésticos",
    type: "Hogar y Herramientas",
    stock: 10,
    available_colors: ["Blanco", "Negro"],
    sizes: ["Único"],
  },
  {
    name: "Set de Utensilios de Cocina",
    image: "https://example.com/utensilios16.jpg",
    description: "Set completo de utensilios de cocina de acero inoxidable. Perfecto para cocinar con estilo.",
    brand: "Cuisine Master",
    price: 79.99,
    category: "Cocina y Comedor",
    type: "Hogar y Herramientas",
    stock: 20,
    available_colors: ["Acero Inoxidable"],
    sizes: ["Único"],
  },
  {
    name: "Colchón Memory Foam",
    image: "https://example.com/colchon17.jpg",
    description: "Colchón con tecnología de espuma viscoelástica para un sueño cómodo y reparador.",
    brand: "DreamComfort",
    price: 499.99,
    category: "Hogar y Jardín",
    type: "Hogar y Herramientas",
    stock: 12,
    available_colors: ["Blanco"],
    sizes: ["Individual", "Matrimonial", "Queen", "King"],
  },
  {
    name: "Lámpara de Pie LED",
    image: "https://example.com/lampara18.jpg",
    description: "Lámpara de pie con iluminación LED regulable. Perfecta para crear ambientes acogedores.",
    brand: "BrightLiving",
    price: 129.99,
    category: "Iluminación",
    type: "Hogar y Herramientas",
    stock: 8,
    available_colors: ["Negro", "Blanco"],
    sizes: ["Único"],
  },
  {
    name: "Set de Toallas de Baño",
    image: "https://example.com/toallas19.jpg",
    description: "Set de toallas de baño suaves y absorbentes. Incluye toallas de mano, cuerpo y facial.",
    brand: "SoftTouch",
    price: 29.99,
    category: "Baño",
    type: "Hogar y Herramientas",
    stock: 25,
    available_colors: ["Blanco", "Gris", "Azul"],
    sizes: ["Único"],
  },
  {
    name: "Mesa de Comedor de Madera",
    image: "https://example.com/mesa20.jpg",
    description: "Mesa de comedor con diseño de madera sólida. Perfecta para cenas familiares y reuniones.",
    brand: "WoodCraft",
    price: 349.99,
    category: "Muebles",
    type: "Hogar y Herramientas",
    stock: 15,
    available_colors: ["Roble", "Nogal"],
    sizes: ["4 personas", "6 personas", "8 personas"],
  },
  {
    name: "Juego de Sábanas de Algodón",
    image: "https://example.com/sabanas21.jpg",
    description: "Juego de sábanas de algodón suave y transpirable. Disponible en varios tamaños y colores.",
    brand: "CottonComfort",
    price: 49.99,
    category: "Ropa de Cama",
    type: "Hogar y Herramientas",
    stock: 30,
    available_colors: ["Blanco", "Gris", "Azul"],
    sizes: ["Individual", "Matrimonial", "Queen", "King"],
  },
  {
    name: "Máquina de Café Espresso",
    image: "https://example.com/cafe22.jpg",
    description: "Máquina de café espresso con sistema de preparación avanzado. Disfruta de café de alta calidad en casa.",
    brand: "EspressoMaster",
    price: 199.99,
    category: "Electrodomésticos",
    type: "Hogar y Herramientas",
    stock: 10,
    available_colors: ["Negro", "Acero Inoxidable"],
    sizes: ["Único"],
  },
  {
    name: "Silla de Oficina Ergonómica",
    image: "https://example.com/silla23.jpg",
    description: "Silla de oficina ergonómica con soporte lumbar ajustable. Ideal para largas horas de trabajo.",
    brand: "OfficeComfort",
    price: 149.99,
    category: "Muebles",
    type: "Hogar y Herramientas",
    stock: 20,
    available_colors: ["Negro", "Gris"],
    sizes: ["Único"],
  },
];

async function allCreate () {
    const results = await ProductoApi.create(productsData)
    console.log("Success Creat", results);
    
}

export default allCreate