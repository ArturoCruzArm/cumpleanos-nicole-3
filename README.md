# 🎂 Cumpleaños de Nicole - 3 Años

Galería de fotos interactiva para celebrar el tercer cumpleaños de Nicole.

## 📁 Estructura del Proyecto

```
cumpleanos-nicole-3/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript con funcionalidad de galería
├── imagenes/           # Carpeta para archivos .webp
└── README.md           # Este archivo
```

## 🖼️ Cómo Agregar Fotos

1. Coloca tus archivos `.webp` en la carpeta `imagenes/`
2. Los archivos deben seguir el formato de nombres: `nicole_0001.webp`, `nicole_0002.webp`, etc.
3. Actualiza el número total de imágenes en `script.js`:
   - Abre `script.js`
   - Busca la línea `const totalImages = 50;` (aproximadamente línea 79)
   - Cambia `50` por el número total de fotos que tienes

### Ejemplo:
Si tienes 100 fotos, nombradas desde `nicole_0001.webp` hasta `nicole_0100.webp`:
```javascript
const totalImages = 100; // CAMBIA ESTE NÚMERO AL TOTAL DE FOTOS QUE TENGAS
```

## ✨ Características

- **Galería Responsive**: Se adapta a cualquier tamaño de pantalla
- **Lightbox**: Visualiza las fotos en grande al hacer clic
- **Navegación**: Usa las flechas o el teclado para navegar entre fotos
- **Animaciones**: Efectos suaves al cargar y al hacer scroll
- **Diseño Colorido**: Tema alegre perfecto para un cumpleaños infantil

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css` (líneas 5-12):
```css
--rosa-pastel: #FFB6D9;
--azul-cielo: #A8D8FF;
--amarillo-suave: #FFF4A3;
--verde-menta: #B4E7CE;
--morado-suave: #D4B5E8;
```

### Cambiar Textos
Edita los textos en `index.html`:
- Nombre: línea 49 (`<h1 class="hero-title">NICOLE</h1>`)
- Edad: línea 52 (`<span class="age-number">3</span>`)
- Textos adicionales según necesites

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador web
2. Haz clic en cualquier foto para verla en grande
3. Usa las flechas o las teclas ← → para navegar
4. Presiona ESC o el botón X para cerrar la vista ampliada

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Móviles y tablets
- ✅ Responsive design

## 🎉 Disfruta la Celebración

¡Comparte estos hermosos recuerdos del cumpleaños de Nicole!
