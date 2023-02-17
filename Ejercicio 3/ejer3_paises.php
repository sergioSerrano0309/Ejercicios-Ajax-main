<?php
    ini_set('display_errors', 'On');
    ini_set('html_errors', 0);
    $conexion = mysqli_connect('127.0.0.1','root','12345');
	if (mysqli_connect_errno())
	{
		echo "Error al conectar a MySQL: ". mysqli_connect_error();
	}

    mysqli_select_db($conexion, 'world');
 
    $resultado = mysqli_query($conexion, "select Name, Code from country order by Name");
 
    $paises = array();
 
    while ($fila = mysqli_fetch_assoc($resultado)) {
        array_push($paises, $fila['Name']."/".$fila['Code']);
    }
      
    for ($i=0; $i < count($paises); $i++) { 
        echo ($paises[$i]).",";
    }

?>