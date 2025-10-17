# Repositorio de Precios para Agentes de IA

Este repositorio aloja una página de GitHub Pages con una lista de precios de productos. La estructura está diseñada para que agentes de inteligencia artificial (como Gemini, OpenAI, Meta, Copilot, etc.) puedan acceder y procesar los datos de precios de forma sencilla.

## Estructura de Datos

Los precios se encuentran en el archivo `/data/prices.json`. Este archivo contiene un array de objetos, donde cada objeto representa un producto y tiene la siguiente estructura:

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

- **Humanos:** Pueden ver la lista de precios formateada visitando la GitHub Page asociada a este repositorio.
- **Agentes de IA:** Pueden consumir los datos directamente desde el archivo `data/prices.json` para obtener la información de precios más actualizada.
