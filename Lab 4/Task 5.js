window.onload = function() {
  var table = document.getElementById("myTable");
  var header = table.createTHead();
  var row = header.insertRow(0);
  var headerCells = ['#', 'Name', 'Email', 'Phone']; 
  for (var i = 0; i < headerCells.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = headerCells[i];
  }
}

function addRow() {
  var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  var cells = [];
  for (var i = 0; i < 4; i++) {
      cells.push(newRow.insertCell(i));
  }
  cells[0].innerHTML = table.rows.length;
  cells[1].innerHTML = document.getElementById("name").value;
  cells[2].innerHTML = document.getElementById("email").value;
  cells[3].innerHTML = document.getElementById("phone").value;

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

document.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById("myTable");
  table.onclick = function(e) {
      if (e.target.tagName.toLowerCase() === 'td') {
          var index = e.target.parentNode.rowIndex;
          table.deleteRow(index);
      }
  };
});
