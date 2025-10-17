# Repositorio de Precios para Agentes de IA

Este repositorio aloja una lista de precios de productos en formato JSON-LD, diseñada para que agentes de inteligencia artificial y motores de búsqueda puedan acceder y procesar los datos de forma semántica y estructurada.

## Archivo de Datos

El archivo principal de datos es `data/precios_telefonos.json`. Este archivo está en formato JSON-LD y contiene una lista de productos tecnológicos (teléfonos móviles).

## Estructura del JSON-LD

El archivo utiliza el vocabulario de `schema.org` para describir los productos. La estructura principal es un objeto JSON con una clave `@graph` que contiene un array de productos.

Cada objeto en el array `@graph` es un producto con el tipo `@type: "Product"`.

### Propiedades del Producto

-   `@type`: Siempre es `"Product"`.
-   `name`: El nombre completo del producto.
-   `brand`: La marca del dispositivo.
-   `category`: La categoría del producto (ej. "Smartphone").
-   `sku`: El identificador único del producto.
-   `offers`: Contiene la información de la oferta para el producto. Puede ser un objeto `Offer` o un `AggregateOffer`.

### Tipos de Ofertas

#### 1. `Offer` (Oferta Individual)

Si un producto tiene una única oferta, la propiedad `offers` contendrá un objeto con `@type: "Offer"`.

**Ejemplo de Producto con Oferta Individual:**

```json
{
  "@type": "Product",
  "name": "CATERPILLAR S62 PRO",
  "brand": "CATERPILLAR",
  "category": "Smartphone",
  "sku": "23627",
  "offers": {
    "@type": "Offer",
    "price": 410.0,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
```

#### 2. `AggregateOffer` (Ofertas Agregadas)

Si un producto tiene múltiples ofertas (por ejemplo, diferentes variantes del mismo modelo), la propiedad `offers` contendrá un objeto con `@type: "AggregateOffer"`.

Este objeto agrupa las ofertas individuales y proporciona un rango de precios (`lowPrice` y `highPrice`) y el número total de ofertas (`offerCount`).

**Ejemplo de Producto con Ofertas Agregadas:**

```json
{
  "@type": "Product",
  "name": "IPHONE 11 128GB",
  "brand": "IPHONE SWAP",
  "category": "Smartphone",
  "sku": "4893",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": 205.0,
    "highPrice": 215.0,
    "offerCount": 2,
    "offers": [
      {
        "@type": "Offer",
        "price": 215.0,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      {
        "@type": "Offer",
        "price": 205.0,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    ]
  }
}
```

## Uso

-   **Agentes de IA y Motores de Búsqueda:** Pueden consumir directamente el archivo `data/precios_telefonos.json` para obtener datos estructurados y semánticamente ricos de los productos.
-   **Desarrolladores:** Pueden parsear el archivo JSON-LD para utilizar los datos en sus aplicaciones.
