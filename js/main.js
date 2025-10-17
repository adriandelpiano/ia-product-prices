document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('price-table-body');

    fetch('data/prices.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="3">No hay productos para mostrar.</td></tr>';
                return;
            }

            data.forEach(item => {
                const row = document.createElement('tr');
                
                const productNameCell = document.createElement('td');
                productNameCell.textContent = item.product;
                
                const descriptionCell = document.createElement('td');
                descriptionCell.textContent = item.description;
                
                const priceCell = document.createElement('td');
                priceCell.textContent = `${item.price.toFixed(2)} ${item.currency}`;
                
                row.appendChild(productNameCell);
                row.appendChild(descriptionCell);
                row.appendChild(priceCell);
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos de precios:', error);
            tableBody.innerHTML = '<tr><td colspan="3">Error al cargar los datos. Por favor, intente más tarde.</td></tr>';
        });
});
