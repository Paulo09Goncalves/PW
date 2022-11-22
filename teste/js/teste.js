function comprar() {
    var qtde, codProduto, valorUnitario, valorTotal, nomeSuite;
    codProduto = document.frmCompra.slcSuite.selectedIndex;
    nomeSuite = document.frmCompra.slcSuite [codProduto].text;
    switch (codProduto) {
        case 1:
            valorUnitario = 2545.73;
            break;
        case 2:
            valorUnitario = 3330.99;
            break;
        case 3:
            valorUnitario = 6959.22;
            break;
        default:
            valorUnitario = 0;
            break;
    }
    qtde = parseInt(document.getElementById('qtde').value);
    valorTotal = valorUnitario * qtde;
    document.getElementById('nomeSuite').innerHTML = "Suite " + nomeSuite;
    document.getElementById('valorUnitario').innerHTML = "Valor Unitario: R$" + valorUnitario;
    document.getElementById('valorTotal').innerHTML = "Valor Total: R$ " + valorTotal;
    
} 