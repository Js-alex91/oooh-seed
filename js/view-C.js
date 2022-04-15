const urlParams = new URLSearchParams(window.location.search);
const calculation = urlParams.get('calculation');

calculation ? alert(calculation) : alert('We don´t have parameter from B')