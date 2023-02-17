window.onload = function(){
    let selectPaises = document.getElementById("pais");
    selectPaises.addEventListener("change", listadoCiudades);
    let selectCiudades = document.getElementById("ciutat");
    selectCiudades.addEventListener("click", info)
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            let selectPaises = document.getElementById("pais");
            let paises = xmlhttp.responseText;
            let listaPaises = paises.split(",");
                      
            for(let pais of listaPaises)
            {
                let codigo = pais.split("/");
                let option = document.createElement("option");
                option.value=codigo[1];
                option.innerHTML = codigo[0];
                selectPaises.appendChild(option)
            }
        }
    }
    
    xmlhttp.open("GET", "ejer3_paises.php", true)
    xmlhttp.send();
}

function listadoCiudades()
{
    let selectCiudades = document.getElementById("ciutat")
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            let ciudades = this.responseText;
        
            while(selectCiudades.firstChild)
            {
                selectCiudades.removeChild(selectCiudades.firstChild)
            }
            let listaCiudades = ciudades.split(",");
            for(let ciudad of listaCiudades)
            {
                let id = ciudad.split("/")
                let option = document.createElement("option");
                option.innerHTML = id[0]; 
                option.value = id[1];
                selectCiudades.appendChild(option)
            }
        }
    }

    xmlhttp.open("GET", "ejer3_ciudades.php?pais="+pais.value, true)
    xmlhttp.send();

}

function info()
{
    let xmlhttp = new XMLHttpRequest()
    let ciudad = document.getElementById("ciutat").value
    let info = document.getElementById("info")
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            while(info.firstChild)
            {
                info.removeChild(info.firstChild)
            }

            let infoCiudad = xmlhttp.responseText;
            let arrayDatos = infoCiudad.split(",") 
            
            let h1 = document.createElement("h1")
            let district = document.createElement("p")
            let population = document.createElement("p")
            h1.setAttribute("class","nombreInfo")
            h1.innerHTML = arrayDatos[0];               
            district.innerHTML = "Districte: <strong>"+arrayDatos[1]+"</strong>";
            population.innerHTML = "Població: <strong>"+arrayDatos[2]+"</strong>";

            info.appendChild(h1)
            info.appendChild(district)
            info.appendChild(population)
        }
    }
    
    xmlhttp.open("GET", "ejer3_info.php?id="+ciudad, true)
    xmlhttp.send();
}