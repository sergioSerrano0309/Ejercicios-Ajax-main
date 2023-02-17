<?php
    ini_set('display_errors', 'On');
    ini_set('html_errors', 0);
    $conexion = mysqli_connect('127.0.0.1','root','12345');
	if (mysqli_connect_errno())
	{
		echo "Error al conectar a MySQL: ". mysqli_connect_error();
	}

    mysqli_select_db($conexion, 'world');
    $letra = $_GET['letra'];
 
    $resultado = mysqli_query($conexion, "select Name from country where lower(Name) LIKE '" . $letra . "%' order by Name");
 
    $paises = array();
 
    while ($fila = mysqli_fetch_assoc($resultado)) {
        array_push($paises, $fila['Name']);
    }
      
    for ($i=0; $i < count($paises); $i++) { 
        echo ($paises[$i]).",";
    }

?>