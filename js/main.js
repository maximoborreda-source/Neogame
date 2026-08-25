// ==========================================
// BASE DE DATOS DE PRODUCTOS
// ==========================================
const productosDB = [
    { 
        id: 1, 
        nombre: "Mouse Gaming DPI 2600", 
        categoria: "perifericos", 
        tags: ["perifericos", "oferta"], 
        precio: 450000, 
        descuento: 15, 
        imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300" 
    },
    { 
        id: 2, 
        nombre: "Gabinete c/Iluminacion Azul", 
        categoria: "gabinetes", 
        tags: ["gabinetes", "oferta"], 
        precio: 65000, 
        descuento: 20,
        imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300" 
    },
    { 
        id: 20, 
        nombre: "Gabinete Gamer CYBERPOWER c/ RGB", 
        categoria: "gabinetes", 
        tags: ["gabinetes"], 
        precio: 135000, 
        imagen: "Imagenes/Productos/Computadora CYBERPOWER.jfif" 
    },
    { 
        id: 3, 
        nombre: "Mouse Pro Wireless", 
        categoria: "perifericos", 
        tags: ["perifericos"], 
        precio: 45000, 
        imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300" 
    },
    { 
        id: 4, 
        nombre: "Notebook Gamer AMD", 
        categoria: "notebooks", 
        tags: ["notebooks", "oferta"], 
        precio: 850000, 
        descuento: 10,
        imagen: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300" 
    },
    { 
        id: 5, 
        nombre: "Kit Periféricos Gamer (Teclado, Mouse y Auriculares)", 
        categoria: "perifericos", 
        tags: ["perifericos", "oferta"], 
        precio: 95000, 
        descuento: 25,
        imagen: "Imagenes/Productos/Kit Perifericos.jfif" 
    },
    { 
        id: 6, 
        nombre: "Mouse Gamer Razer Pro", 
        categoria: "perifericos", 
        tags: ["perifericos"], 
        precio: 52000, 
        imagen: "Imagenes/Productos/Mouse Gamer Razen Pro.jfif" 
    },
    { 
        id: 7, 
        nombre: "Mouse Inalámbrico Redragon", 
        categoria: "perifericos", 
        tags: ["perifericos", "oferta"], 
        precio: 41000, 
        descuento: 15,
        imagen: "Imagenes/Productos/RedDragon Mouse Inalambrico.jfif" 
    },
    { 
        id: 8, 
        nombre: "GIGABYTE GeForce RTX 4090", 
        categoria: "placas-video", 
        tags: ["placas-video", "nvidia", "oferta"], 
        precio: 1850000, 
        descuento: 12,
        imagen: "Imagenes/Productos/GIGABYTE GeForce RTX 4090.jfif" 
    },
    { 
        id: 19, 
        nombre: "Placa de Video ASUS PRIME RX 9070 XT AMD Radeon, 16GB", 
        categoria: "placas-video", 
        tags: ["placas-video"], 
        precio: 1450000, 
        imagen: "Imagenes/Productos/placa-rx9070xt.jfif" 
    },
    { 
        id: 21, 
        nombre: "Gabinete mini-ATX", 
        categoria: "gabinetes", 
        tags: ["gabinetes"], 
        precio: 75000, 
        imagen: "Imagenes/Productos/Gabinete mini-ATX.jfif" 
    },
    { 
        id: 22, 
        nombre: "Kit Computadora + Monitor y Periféricos", 
        categoria: "computadoras", 
        tags: ["computadoras", "oferta"], 
        precio: 350000, 
        descuento: 20,
        imagen: "Imagenes/Productos/Kit pc completa.jfif" 
    },
    { 
        id: 23, 
        nombre: "Notebook Lenovo Slim (Intel Core i7)", 
        categoria: "notebooks", 
        tags: ["notebooks"], 
        precio: 650000, 
        imagen: "Imagenes/Productos/Lenovo Slim con Intel Core i7.jfif" 
    },
    {
        id: 9, 
        nombre: "Procesador AMD RYZEN 5 AM4", 
        categoria: "componentes", 
        tags: ["componentes", "amd", "procesadores"], 
        precio: 210000, 
        imagen: "Imagenes/Productos/Procesador AMD RYZEN 5 AM4 .jfif" 
    },
    { 
        id: 10, 
        nombre: "Procesador Intel Core i5", 
        categoria: "componentes", 
        tags: ["componentes", "intel", "procesadores"], 
        precio: 195000, 
        imagen: "Imagenes/Productos/procesador intel.jfif" 
    },
    { 
        id: 11, 
        nombre: "Disco Sólido SSD Maxell 240 GB", 
        categoria: "componentes", 
        tags: ["componentes", "almacenamiento", "oferta"], 
        precio: 32000, 
        descuento: 10, 
        imagen: "Imagenes/Productos/Maxell Disco solido 240 GB.jfif" 
    },
    { 
        id: 12, 
        nombre: "Memoria RAM DDR4 16 GB (2x8 GB) Kingston Fury", 
        categoria: "componentes", 
        tags: ["componentes", "memoria"], 
        precio: 78000, 
        imagen: "Imagenes/Productos/Memoria Ram DDR4 16 GB (2x8 GB) .jfif" 
    },
    { 
        id: 13, 
        nombre: "Disco Sólido SSD GoldenFir 1 TB", 
        categoria: "componentes", 
        tags: ["componentes", "almacenamiento"], 
        precio: 85000, 
        imagen: "Imagenes/Productos/GoldenFir Disco solido 1 TB.jfif" 
    },
    { 
        id: 14, 
        nombre: "Computadora Gamer Iluminación Azul", 
        categoria: "computadoras", 
        tags: ["computadoras", "oferta"], 
        precio: 1200000, 
        descuento: 15, 
        imagen: "Imagenes/Productos/Computadora Gamer iluminación azul.jfif" 
    },
    { 
        id: 15, 
        nombre: "Monitor Full HD Black NEOVO", 
        categoria: "monitores", 
        tags: ["monitores", "oferta"], 
        precio: 230000, 
        descuento: 10, 
        imagen: "Imagenes/Productos/Monitor Full HD black NEOVO.jfif" 
    },
    { 
        id: 16, 
        nombre: "Placa Madre Gigabyte B760M LGA Micro-ATX", 
        categoria: "componentes", 
        tags: ["componentes"], 
        precio: 160000, 
        imagen: "Imagenes/Productos/Placa Madre Gigabyte B760M LGA Micro-ATX.jfif" 
    },
    { 
        id: 17, 
        nombre: "Silla de Trabajo Morado con Iluminación", 
        categoria: "perifericos", 
        tags: ["perifericos"], 
        precio: 190000, 
        imagen: "Imagenes/Productos/silla de trabajo morado con iluminación.jfif" 
    },
    { 
        id: 18, 
        nombre: "Silla de Trabajo Roja", 
        categoria: "perifericos", 
        tags: ["perifericos"], 
        precio: 175000, 
        imagen: "Imagenes/Productos/silla de trabajo roja.jfif" 
    }
];

// ==========================================
// INICIALIZACIÓN GLOBAL Y AVISO LEGAL
// ==========================================
window.addEventListener('load', () => {
    const modoGuardado = localStorage.getItem('modoNeoGame') || 'claro';
    const textoModo = document.getElementById('texto-modo');
    const iconoModo = document.getElementById('icono-modo');

    if (modoGuardado === 'oscuro') {
        document.body.classList.replace('modo-claro', 'modo-oscuro');
        if(textoModo) textoModo.textContent = 'Modo oscuro';
        if(iconoModo) iconoModo.textContent = '🌙';
    } else {
        document.body.classList.replace('modo-oscuro', 'modo-claro');
        if(textoModo) textoModo.textContent = 'Modo claro';
        if(iconoModo) iconoModo.textContent = '☀️';
    }

    renderizarCatalogo();
});

setTimeout(() => {
    if (!sessionStorage.getItem('avisoCerrado')) {
        const modalAviso = document.getElementById('modal-aviso');
        if(modalAviso) {
            modalAviso.classList.add('aparecer');
        }
    }
}, 4000);

// ==========================================
// MENÚ LATERAL (DRAWER) Y MODO OSCURO
// ==========================================
const btnProductos = document.getElementById('btn-productos');
const drawerMenu = document.getElementById('drawer-menu');
const drawerOverlay = document.getElementById('drawer-overlay');

function abrirDrawer() {
    if(drawerMenu) drawerMenu.classList.add('activo');
    if(drawerOverlay) drawerOverlay.classList.add('activo');

    const modalAviso = document.getElementById('modal-aviso');
    if (modalAviso && modalAviso.classList.contains('aparecer')) {
        modalAviso.classList.remove('aparecer');
        modalAviso.classList.add('ocultar');
        sessionStorage.setItem('avisoCerrado', 'true');
    }
}

function cerrarDrawer() {
    if(drawerMenu) drawerMenu.classList.remove('activo');
    if(drawerOverlay) drawerOverlay.classList.remove('activo');
}

if(btnProductos) btnProductos.addEventListener('click', abrirDrawer);
if(drawerOverlay) drawerOverlay.addEventListener('click', cerrarDrawer);

if (drawerMenu) {
    const drawerLinks = drawerMenu.querySelectorAll('a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('drawer-item-cat')) {
                cerrarDrawer();
            }
        });
    });
}

const itemsCat = document.querySelectorAll('.drawer-item-cat');
const subcatGrupos = document.querySelectorAll('.subcat-grupo');

itemsCat.forEach(item => {
    item.addEventListener('mouseenter', () => {
        itemsCat.forEach(i => i.classList.remove('activo'));
        item.classList.add('activo');

        const targetId = 'subcat-' + item.getAttribute('data-target');
        subcatGrupos.forEach(grupo => {
            if (grupo.id === targetId) {
                grupo.classList.add('activo');
            } else {
                grupo.classList.remove('activo');
            }
        });
    });
});

const btnModo = document.getElementById('btn-modo');
const textoModo = document.getElementById('texto-modo');
const iconoModo = document.getElementById('icono-modo');
const body = document.body;

if(btnModo) {
    btnModo.addEventListener('click', () => {
        if (body.classList.contains('modo-claro')) {
            body.classList.replace('modo-claro', 'modo-oscuro');
            if(textoModo) textoModo.textContent = 'Modo oscuro';
            if(iconoModo) iconoModo.textContent = '🌙';
            localStorage.setItem('modoNeoGame', 'oscuro');
        } else {
            body.classList.replace('modo-oscuro', 'modo-claro');
            if(textoModo) textoModo.textContent = 'Modo claro';
            if(iconoModo) iconoModo.textContent = '☀️';
            localStorage.setItem('modoNeoGame', 'claro');
        }
    });
}

const btnCerrarAviso = document.getElementById('btn-cerrar-aviso');
if(btnCerrarAviso) {
    btnCerrarAviso.addEventListener('click', () => {
        const modalAviso = document.getElementById('modal-aviso');
        if(modalAviso) {
            modalAviso.classList.remove('aparecer');
            modalAviso.classList.add('ocultar');
            sessionStorage.setItem('avisoCerrado', 'true');
        }
    });
}

const btnLinkProductos = document.getElementById('btn-link-productos');
if (btnLinkProductos) {
    btnLinkProductos.addEventListener('click', (e) => {
        e.preventDefault();
        renderizarCatalogo(productosDB);
    });
}

// ==========================================
// FILTRADO DE PRODUCTOS
// ==========================================
const enlacesFiltro = document.querySelectorAll('.filtro-link, .drawer-item-cat, [data-filtro], [data-target], header nav a');
enlacesFiltro.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        const textoEnlace = enlace.textContent.trim().toLowerCase();
        const filtroAttr = (enlace.getAttribute('data-filtro') || enlace.getAttribute('data-target') || '').toLowerCase();
        const filtro = filtroAttr || textoEnlace;
        
        if (!filtro) return;
        
        e.preventDefault();
        let productosFiltrados = [];

        if (filtro.includes('producto') || filtro === 'todos') {
            productosFiltrados = productosDB;
        } else if (filtro.includes('oferta')) {
            productosFiltrados = productosDB.filter(p => p.tags && p.tags.includes('oferta'));
        } else if (filtro.includes('computadora')) {
            productosFiltrados = productosDB.filter(p => p.categoria === 'computadoras' || (p.tags && p.tags.includes('computadoras')));
        } else if (filtro.includes('notebook')) {
            productosFiltrados = productosDB.filter(p => p.categoria === 'notebooks' || (p.tags && p.tags.includes('notebooks')));
        } else if (filtro.includes('monitor')) {
            productosFiltrados = productosDB.filter(p => p.categoria === 'monitores' || (p.tags && p.tags.includes('monitores')));
        } else if (filtro.includes('gabinete')) {
            productosFiltrados = productosDB.filter(p => p.categoria === 'gabinetes' || (p.tags && p.tags.includes('gabinetes')));
        } else if (filtro.includes('placa') || filtro.includes('video')) {
            productosFiltrados = productosDB.filter(p => p.categoria === 'placas-video' || (p.tags && p.tags.includes('placas-video')));
        } else if (filtro.includes('componente')) {
            productosFiltrados = productosDB.filter(p => p.categoria === 'componentes' || (p.tags && p.tags.includes('componentes')));
        } else {
            productosFiltrados = productosDB.filter(p => p.categoria === filtro || (p.tags && p.tags.includes(filtro)));
        }

        renderizarCatalogo(productosFiltrados);
        cerrarDrawer();
    });
});

// ==========================================
// ARMADOR DE PC Y COMPATIBILIDAD
// ==========================================
const btnArmarPC = document.getElementById('btn-arm-pc');
const drawerBtnArmar = document.getElementById('drawer-btn-armar');
const pcBuilderOverlay = document.getElementById('pc-builder-overlay');
const pcBuilderClose = document.getElementById('pc-builder-close');

const selectCpu = document.getElementById('select-cpu');
const selectMother = document.getElementById('select-mother');
const selectRam = document.getElementById('select-ram');
const selectStorage = document.getElementById('select-storage');
const selectGabinete = document.getElementById('select-gabinete');
const selectGpu = document.getElementById('select-gpu');
const selectMonitor = document.getElementById('select-monitor');
const selectPeriferico = document.getElementById('select-periferico');
const selectMueble = document.getElementById('select-mueble');

const pcTotalMonto = document.getElementById('pc-total-monto');
const btnFinalizarPC = document.getElementById('btn-finalizar-pc');

function abrirArmadorPC(e) {
    if(e) e.preventDefault();
    if(pcBuilderOverlay) pcBuilderOverlay.classList.add('activo');
}

function cerrarArmadorPC() {
    if(pcBuilderOverlay) pcBuilderOverlay.classList.remove('activo');
}

if(btnArmarPC) btnArmarPC.addEventListener('click', abrirArmadorPC);
if(drawerBtnArmar) drawerBtnArmar.addEventListener('click', (e) => {
    cerrarDrawer();
    abrirArmadorPC(e);
});
if(pcBuilderClose) pcBuilderClose.addEventListener('click', cerrarArmadorPC);

if(pcBuilderOverlay) {
    pcBuilderOverlay.addEventListener('click', (e) => {
        if(e.target === pcBuilderOverlay) {
            cerrarArmadorPC();
        }
    });
}

function validarCompatibilidadGabinetes() {
    if (!selectMother || !selectGabinete) return;
    
    const optionMother = selectMother.options[selectMother.selectedIndex];
    const socketMother = optionMother.getAttribute('data-socket');
    
    for (let i = 0; i < selectGabinete.options.length; i++) {
        const opt = selectGabinete.options[i];
        if (opt.value === "0") continue;
        
        const formatoGabinete = opt.getAttribute('data-formato');
        
        if (socketMother === 'lga1700' && formatoGabinete === 'mini-itx-estricto') {
            opt.disabled = true;
            if (!opt.text.includes('(No compatible)')) {
                opt.text += ' (No compatible)';
            }
        } else {
            opt.disabled = false;
            opt.text = opt.text.replace(' (No compatible)', '');
        }
    }
}

function calcularTotalPC() {
    validarCompatibilidadGabinetes();

    const precioCpu = selectCpu ? parseInt(selectCpu.options[selectCpu.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioMother = selectMother ? parseInt(selectMother.options[selectMother.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioRam = selectRam ? parseInt(selectRam.options[selectRam.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioStorage = selectStorage ? parseInt(selectStorage.options[selectStorage.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioGabinete = selectGabinete ? parseInt(selectGabinete.options[selectGabinete.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioGpu = selectGpu ? parseInt(selectGpu.options[selectGpu.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioMonitor = selectMonitor ? parseInt(selectMonitor.options[selectMonitor.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioPeriferico = selectPeriferico ? parseInt(selectPeriferico.options[selectPeriferico.selectedIndex].getAttribute('data-precio')) || 0 : 0;
    const precioMueble = selectMueble ? parseInt(selectMueble.options[selectMueble.selectedIndex].getAttribute('data-precio')) || 0 : 0;

    const total = precioCpu + precioMother + precioRam + precioStorage + precioGabinete + precioGpu + precioMonitor + precioPeriferico + precioMueble;
    
    if(pcTotalMonto) {
        pcTotalMonto.textContent = total.toLocaleString('es-AR');
    }
}

const selectsArmador = [selectCpu, selectMother, selectRam, selectStorage, selectGabinete, selectGpu, selectMonitor, selectPeriferico, selectMueble];
selectsArmador.forEach(sel => {
    if(sel) sel.addEventListener('change', calcularTotalPC);
});

if(btnFinalizarPC) {
    btnFinalizarPC.addEventListener('click', () => {
        alert('¡Configuración de PC completa guardada con éxito! Se ha añadido al carrito.');
        cerrarArmadorPC();
    });
}

// ==========================================
// BUSCADOR FLEXIBLE POR PALABRAS CLAVE
// ==========================================
const buscadorInput = document.querySelector('.buscador-input');
const buscadorBtn = document.querySelector('.buscador-btn');

function ejecutarBusqueda() {
    if (!buscadorInput) return;
    
    const textoIngresado = buscadorInput.value.trim().toLowerCase();
    
    if (textoIngresado === '') {
        renderizarCatalogo(productosDB);
        return;
    }

    const palabrasBusqueda = textoIngresado.split(/\s+/);

    const productosFiltrados = productosDB.filter(p => {
        const nombreProd = p.nombre.toLowerCase();
        const categoriaProd = p.categoria.toLowerCase();
        const tagsProd = p.tags ? p.tags.join(' ').toLowerCase() : '';
        
        const textoCompletoProducto = `${nombreProd} ${categoriaProd} ${tagsProd}`;

        return palabrasBusqueda.every(palabra => textoCompletoProducto.includes(palabra));
    });

    renderizarCatalogo(productosFiltrados);
}

if (buscadorBtn) {
    buscadorBtn.addEventListener('click', (e) => {
        e.preventDefault();
        ejecutarBusqueda();
    });
}

if (buscadorInput) {
    buscadorInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            ejecutarBusqueda();
        }
    });
}

// ==========================================
// RENDERIZADO DE CATÁLOGO CON ANIMACIÓN
// ==========================================
function renderizarCatalogo(productosAMostrar = productosDB) {
    const contenedorCatalogo = document.querySelector('.catalogo');
    if (!contenedorCatalogo) return;

    contenedorCatalogo.innerHTML = '';

    if (productosAMostrar.length === 0) {
        contenedorCatalogo.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-color, #2a2a3c); margin: 20px 0;">
                <span style="font-size: 40px; display: block; margin-bottom: 15px;">🔍</span>
                <h3 style="color: var(--text-color); font-size: 20px; margin-bottom: 8px;">No se encontraron productos</h3>
                <p style="color: var(--text-muted, #a0a0b0); font-size: 14px;">Intentá buscando con otras palabras clave o seleccionando otra categoría.</p>
            </div>
        `;
        return;
    }

    productosAMostrar.forEach(prod => {
        const precioActualFormateado = prod.precio.toLocaleString('es-AR');
        let seccionPrecios = `<p class="precio">$${precioActualFormateado}</p>`;

        if (prod.descuento && prod.descuento > 0) {
            const precioAnterior = Math.round(prod.precio / (1 - prod.descuento / 100));
            const precioAnteriorFormateado = precioAnterior.toLocaleString('es-AR');

            seccionPrecios = `
                <div class="contenedor-precios-oferta">
                    <span class="precio-tachado">$${precioAnteriorFormateado}</span>
                    <div class="fila-precio-etiqueta">
                        <span class="precio oferta-actual">$${precioActualFormateado}</span>
                        <span class="etiqueta-descuento">-${prod.descuento}% OFF</span>
                    </div>
                </div>
            `;
        }

        const card = document.createElement('section');
        card.className = 'producto-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            ${seccionPrecios}
        `;

        card.addEventListener('click', () => {
            const mapKeys = { 8: 'rtx4090', 19: 'rx9070xt', 9: 'ryzen5', 10: 'corei5', 14: 'computadora', 15: 'monitor', 16: 'placamadre' };
            const prodKey = mapKeys[prod.id] || 'kit';
            window.location.href = `paginas/productos.html?prod=${prodKey}`;
        });

        contenedorCatalogo.appendChild(card);
    });

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.producto-card').forEach(card => {
        observer.observe(card);
    });
}

// ==========================================
// MODAL DE PREGUNTAS FRECUENTES (FAQ) Y SOPORTE
// ==========================================
const faqOverlay = document.getElementById('faq-overlay');
const btnCerrarFaq = document.getElementById('faq-close-btn');

// Detectar automáticamente los enlaces de soporte/footer por su contenido de texto
document.querySelectorAll('.footer-col a').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        const textoEnlace = enlace.textContent.trim().toLowerCase();
        
        // Si abre una página externa (como la ley 24.240), permitimos su comportamiento normal
        if (enlace.getAttribute('target') === '_blank' || enlace.getAttribute('href').startsWith('http')) {
            return; 
        }

        e.preventDefault();

        if (textoEnlace.includes('preguntas frecuentes')) {
            if (faqOverlay) faqOverlay.classList.add('activo');
        } 
        else if (textoEnlace.includes('seguir mi pedido')) {
            alert('Redirigiendo al sistema de seguimiento de envíos...');
        } 
        else if (textoEnlace.includes('garantía') || textoEnlace.includes('rma') || textoEnlace.includes('botón de arrepentimiento')) {
            alert('Sección de soporte y garantías. Próximamente disponible.');
        }
    });
});

if (btnCerrarFaq && faqOverlay) {
    btnCerrarFaq.addEventListener('click', () => {
        faqOverlay.classList.remove('activo');
    });
}

if (faqOverlay) {
    faqOverlay.addEventListener('click', (e) => {
        if (e.target === faqOverlay) {
            faqOverlay.classList.remove('activo');
        }
    });
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const btn = item.querySelector('.faq-pregunta');
    if (btn) {
        btn.addEventListener('click', () => {
            faqItems.forEach(i => {
                if (i !== item) i.classList.remove('activo');
            });
            item.classList.toggle('activo');
        });
    }
});