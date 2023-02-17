window.onload = function()
{
  let busqueda = document.getElementById("pais")
  busqueda.addEventListener("keyup", buscarPaises)
}

function buscarPaises() {
    let busqueda = document.getElementById("pais").value;
      
      let llamada = new XMLHttpRequest();
      let url = "ejer1.php"; 
      let params = "?busqueda=" + busqueda;

      llamada.onreadystatechange = function () 
      {
      if (this.readyState === 4 && this.status === 200) 
      {
        let nombres = this.responseText;
        let listaPaises = nombres.split(",")
        let p = document.getElementById("paises");
        p.innerHTML = "";
        listaPaises.pop()
        for (let pais of listaPaises) 
        {
          let text = document.createTextNode(pais);
          
            p.appendChild(text);
            p.innerHTML += ", "


        }
      }
    }

  llamada.open("GET", url+params, true);
  llamada.send(params);   
}