<?php
    ini_set('display_errors', 'On');
    ini_set('html_errors', 0);
    $conexion = mysqli_connect('127.0.0.1','root','12345');
	if (mysqli_connect_errno())
	{
		echo "Error al conectar a MySQL: ". mysqli_connect_error();
	}

    mysqli_select_db($conexion, 'world');
    $pais = $_GET['pais'];
    $resultado = mysqli_query($conexion, "select Name, ID from city where CountryCode = '".$pais."' order by Name");
 
    $ciudades = array();
 
    while ($fila = mysqli_fetch_assoc($resultado)) {
        array_push($ciudades, $fila);        
    }
      
    
    /* for ($i=0; $i < count($ciudades); $i++) { 
        echo ($ciudades[$i]).",";
    } */

    echo json_encode($ciudades)

?>