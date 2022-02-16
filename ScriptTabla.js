
        var rIndex,
        table = document.getElementById("table");
        //---- chequeo que los inputs no esten vacios
        function checkEmptyInput()
        {
            var isEmpty = false,
                nombreProduct = document.getElementById("nombreProduct").value,
                detalle = document.getElementById("detalle").value,
                cantidad = document.getElementById("cantidad").value;
                precio = document.getElementById("precio").value;
        
            if(nombreProduct === ""){
                alert("El nombre no puede estar vacio");
                isEmpty = true;
            }
            else if(detalle === ""){
                alert("El detalle no puede estar vacio");
                isEmpty = true;
            }
            else if(cantidad === ""){
                alert("Cantidad no puede estar vacio");
                isEmpty = true;
            }
            else if(precio === ""){
                alert("El precio no puede estar vacio");
                isEmpty = true;
            }
            return isEmpty;
        }
            
        // agregar producto
        function addHtmlTableRow()
        {
            if(!checkEmptyInput()){
            var newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3)
                nombreProduct = document.getElementById("nombreProduct").value,
                detalle = document.getElementById("detalle").value,
                cantidad = document.getElementById("cantidad").value;
                precio = document.getElementById("precio").value;
            
            cell1.innerHTML = nombreProduct;
            cell2.innerHTML = detalle;
            cell3.innerHTML = cantidad;
            cell4.innerHTML = precio;
            selectedRowToInput();
            }
        }
        
        function selectedRowToInput()
        {
            
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                    rIndex = this.rowIndex;
                    document.getElementById("nombreProduct").value = this.cells[0].innerHTML;
                    document.getElementById("detalle").value = this.cells[1].innerHTML;
                    document.getElementById("cantidad").value = this.cells[2].innerHTML;
                    document.getElementById("precio").value = this.cells[3].innerHTML;
                };
            }
        }
        selectedRowToInput();
        
        function editHtmlTbleSelectedRow()
        {
            var nombreProduct = document.getElementById("nombreProduct").value,
                detalle = document.getElementById("detalle").value,
                cantidad = document.getElementById("cantidad").value;
                precio = document.getElementById("precio").value;
            if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = nombreProduct;
                table.rows[rIndex].cells[1].innerHTML = detalle;
                table.rows[rIndex].cells[2].innerHTML = cantidad;
                table.rows[rIndex].cells[3].innerHTML = precio;
            }
        }
        
        function removeSelectedRow()
        {
            table.deleteRow(rIndex);
            // clear input text
            document.getElementById("nombreProduct").value = "";
            document.getElementById("detalle").value = "";
            document.getElementById("cantidad").value = "";
            document.getElementById("precio").value = "";
        }