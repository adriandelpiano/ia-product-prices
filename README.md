# Repositorio de Precios para Agentes de IA

Este repositorio aloja una página de GitHub Pages con una lista de precios de productos. La estructura está diseñada para que agentes de inteligencia artificial (como Gemini, OpenAI, Meta, Copilot, etc.) puedan acceder y procesar los datos de precios de forma sencilla y semántica.

## Estructura de Datos

Los datos de precios están disponibles de dos formas principales para los agentes de IA:

1.  **JSON-LD (Schema Markup) incrustado en `index.html`:**
    *   La página `index.html` contiene datos estructurados en formato JSON-LD, siguiendo el vocabulario de [Schema.org](https://schema.org/).
    *   Esto permite a los rastreadores y agentes de IA entender el contexto de los productos y sus ofertas directamente desde el HTML.
    *   Se utilizan tipos como `WebPage`, `OfferCatalog`, `Offer` y `Product`, incluyendo propiedades como `name`, `description`, `price`, `priceCurrency` y `validThrough`.

2.  **Archivo `data/prices.json`:**
    *   Un archivo JSON plano (`/data/prices.json`) que contiene la misma información de productos en un formato de array de objetos.
    *   Este archivo es ideal para el consumo directo por APIs o scripts que prefieran un formato de datos puro.

### Formato de `data/prices.json` (ejemplo):

```json
[
  {
    "id": "sku-001",
    "product": "Nombre del Producto",
    "description": "Descripción breve del producto.",
    "price": 99.99,
    "currency": "USD"
  }
]
```

## Uso

-   **Humanos:** Pueden ver la lista de precios formateada visitando la GitHub Page asociada a este repositorio.
-   **Agentes de IA:**
    *   Pueden parsear el JSON-LD incrustado en `index.html` para obtener datos estructurados y semánticamente ricos.
    *   Pueden consumir los datos directamente desde el archivo `data/prices.json` para obtener la información de precios más actualizada en formato JSON puro.