const fs = require('fs');
const path = require('path');

// Leer archivo JSON con @context y @graph
const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json'), 'utf8'));
const productos = raw['@graph'] || [];

const jsonld = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Catálogo de Productos",
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
  <title>Catálogo de Productos</title>
  <meta name="description" content="Lista de precios actualizada de productos tecnológicos">
  <script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
  </script>
</head>
<body>
  <h1>Lista de Productos</h1>
`;

productos.forEach(p => {
  html += `<article>
    <h2>${p.brand} ${p.name}</h2>
    <p>SKU: ${p.sku}</p>
    <p>Categoría: ${p.category}</p>
    <p>Precio: <strong>$${p.offers.price} ${p.offers.priceCurrency}</strong></p>
    <p>Estado: ${p.offers.itemCondition === "https://schema.org/NewCondition" ? "Nuevo" : "Usado"}</p>
  </article>\n`;
});

html += `</body></html>`;
fs.writeFileSync(path.join(__dirname, '../docs/index.html'), html);
console.log("✅ HTML generado en docs/index.html");
