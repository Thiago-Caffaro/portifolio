function atribuir() {
  const input = document.getElementById('input_box').value;
  const url = `http://localhost:3000/api/fruit/${input}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}
