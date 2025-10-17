#!/bin/bash

JSON_FILE="data/productos.json"

TABLE_ROWS=$(jq -r '.["@graph"] | .[] | "<tr><td>" + .name + "</td><td>" + (if .offers["@type"] == "AggregateOffer" then (.offers.lowPrice | tostring) + " - " + (.offers.highPrice | tostring) else (.offers.price | tostring) end) + " " + .offers.priceCurrency + "</td></tr>"' $JSON_FILE)

JSON_LD_BLOCKS=$(jq -r '.["@graph"] | .[] | "<script type=\"application/ld+json\">" + tojson + "</script>"' $JSON_FILE)

cat <<EOF > index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Precios de Productos</title>
    <link rel="stylesheet" href="css/style.css">
    $JSON_LD_BLOCKS
</head>
<body>

    <header>
        <h1>Lista de Precios de Productos</h1>
    </header>

    <main>
        <table id="price-table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody id="price-table-body">
                $TABLE_ROWS
            </tbody>
        </table>
    </main>

    <footer>
        <p>Datos actualizados dinámicamente. Para consumo de API, usar el archivo /data/productos.json</p>
    </footer>

</body>
</html>
EOF
