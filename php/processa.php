<?php
session_start();
include_once("../php/conexao.php");

if(!empty($_GET['estrela'])){
	$estrela = $_GET['estrela'];
	
	//Salvar no banco de dados
	$result_avaliacos = "INSERT INTO avaliacos (qnt_estrela, created) VALUES ('$estrela', NOW())";
	$resultado_avaliacos = mysqli_query($conn, $result_avaliacos);
	
	if(mysqli_insert_id($conn)){
		$_SESSION['msg'] = "Avaliação cadastrada com sucesso";
		header("Location: /index.html");
	}else{
		$_SESSION['msg'] = "Erro ao cadastrar a avaliação";
		header("Location: /index.html");
	}
	
}else{
	$_SESSION['msg'] = "Necessário selecionar pelo menos 1 estrela";
	header("Location: /index.html");
}