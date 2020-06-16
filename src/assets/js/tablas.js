$(window).on('load', function () {
  subtotaler();
  $("#tabla tbody tr td").on('mouseover', function () {
    subtotaler();
  });
  $("#tabla tbody tr td").on('mouseout', function () {
    subtotaler();
  });

  $("#tabla_filter label input").on('change', function () {
    subtotaler();
  });

});

function subtotaler() {
  const filas = document.querySelectorAll("#tabla tbody tr");
  const columnas = document.querySelectorAll("#tabla thead tr th");
  const totalFila = document.querySelectorAll("#tabla tfoot tr th");
  for (let i = 1; i < columnas.length; i++) {
    let total = 0;

    filas.forEach((fila) => {
      total += parseFloat(fila.querySelectorAll("td")[i].innerHTML);
    });

    totalFila[i].innerHTML = total.toFixed(0);

    document.getElementById('sub2').innerHTML = '';
    document.getElementById('sub8').innerHTML = '';



  }

}
