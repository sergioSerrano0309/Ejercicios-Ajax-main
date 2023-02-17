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
            let paises = JSON.parse(xmlhttp.responseText);
            //let listaPaises = paises.split(",");
                      
            for(let pais of paises)
            {
                let option = document.createElement("option");
                option.value= pais.Code;
                option.innerHTML = pais.Name;
                selectPaises.appendChild(option)
            }
        }
    }
    
    xmlhttp.open("GET", "ejer4_paises.php", true)
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
            let ciudades = JSON.parse(this.responseText);
        
            while(selectCiudades.firstChild)
            {
                selectCiudades.removeChild(selectCiudades.firstChild)
            }

            for(let ciudad of ciudades)
            {

                let option = document.createElement("option");
                option.innerHTML = ciudad.Name; 
                option.value = ciudad.ID;
                selectCiudades.appendChild(option)
            }
        }
    }

    xmlhttp.open("GET", "ejer4_ciudades.php?pais="+pais.value, true)
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

            let infoCiudad = JSON.parse(xmlhttp.responseText);
            console.log(infoCiudad)
            
            for(datos of infoCiudad)
            {
                let h1 = document.createElement("h1")
                let district = document.createElement("p")
                let population = document.createElement("p")
                h1.setAttribute("class","nombreInfo")
                h1.innerHTML = datos.Name;               
                district.innerHTML = "Districte: <strong>"+datos.District+"</strong>";
                population.innerHTML = "Població: <strong>"+datos.Population+"</strong>";

                info.appendChild(h1)
                info.appendChild(district)
                info.appendChild(population)
            }
            
        }
    }
    
    xmlhttp.open("GET", "ejer4_info.php?id="+ciudad, true)
    xmlhttp.send();
}