const fs = require('fs');
const path = require('path');

// Leer JSON de productos
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/precios-telefonos.json'), 'utf8'));

// Generar bloque JSON-LD
const jsonld = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Catálogo de Teléfonos",
  "itemListElement": productos.map(p => ({
    "@type": "Offer",
    "itemOffered": p
  }))
};

// Generar HTML visible
let html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Precios de Teléfonos</title>
  <meta name="description" content="Lista de precios actualizada de teléfonos">
  <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
  </script>
</head>
<body>
  <h1>Lista de Precios</h1>
`;

productos.forEach(p => {
  html += `<article>
    <h2>${p.brand} ${p.name}</h2>
    <p>SKU: ${p.sku}</p>
    <p>Precio: <strong>$${p.offers.price} ${p.offers.priceCurrency}</strong></p>
    <p>Estado: ${p.offers.itemCondition === "https://schema.org/NewCondition" ? "Nuevo" : "Usado"}</p>
  </article>\n`;
});

html += `</body></html>`;

// Guardar en docs/index.html
fs.writeFileSync(path.join(__dirname, '../docs/index.html'), html);
console.log("✅ HTML generado en docs/index.html");
