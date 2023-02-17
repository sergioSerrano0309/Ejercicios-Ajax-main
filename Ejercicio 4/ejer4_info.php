<?php
    ini_set('display_errors', 'On');
    ini_set('html_errors', 0);
    $conexion = mysqli_connect('127.0.0.1','root','12345');
	if (mysqli_connect_errno())
	{
		echo "Error al conectar a MySQL: ". mysqli_connect_error();
	}

    mysqli_select_db($conexion, 'world');
    $id = $_GET['id'];
    $resultado = mysqli_query($conexion, "select Name, District, Population from city where ID = '$id'");

    $ciudadInfo = array();
    while ($fila = mysqli_fetch_assoc($resultado)) {
        array_push($ciudadInfo, $fila);  
    }

    echo json_encode($ciudadInfo);

?>