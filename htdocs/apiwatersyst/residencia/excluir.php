<?php
require_once('..\cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);


$id= $postjson['id'];

$query = $pdo->query("DELETE FROM residencia WHERE id = '$id' ");


$result = json_encode(array('erro' => 0, 'mensagem' => 'Residencia Excluída com Sucesso,'));
echo $result;

?>