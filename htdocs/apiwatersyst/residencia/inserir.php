<?php
require_once('../cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

# Variáveis que vão ser utilizadas para pegar as 
# informações do usuário
 $id = "";
 $complemento = "";
 $cidade = "";
 $estado = "";
 $bairro = "";
 $endereco = "";

 
  

# Algoritmos de validação dos dados
if (isset($postjson['complemento']) && $postjson['complemento'] != ""){
    $complemento = $postjson['complemento'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Complemento!'));
    exit();
}






if (isset($postjson['cidade']) && $postjson['cidade'] != ""){
    $cidade = $postjson['cidade'];
}else{
    echo json_encode(array('erro' =>1,'mensagem' => 'Preencha o Campo Cidade!'));
    exit();
}


if (isset($postjson['estado']) && $postjson['estado'] != ""){
    $estado = $postjson['estado'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Estado!'));
    exit();
}


if (isset($postjson['bairro']) && $postjson['bairro'] != ""){
    $bairro = $postjson['bairro'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Bairro!'));
    exit();
}

if (isset($postjson['endereco']) && $postjson['endereco'] != ""){
    $endereco = $postjson['endereco'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Endereco!'));
    exit();
}




# Preencha o SQL com as informações do banco
$res = $pdo->prepare("INSERT INTO residencia SET complemento = :complemento, cidade = :cidade, estado = :estado, bairro = :bairro, endereco =:endereco");

# bind do sql com os dados que serão inseridos no banco
$res->bindValue(":complemento", $complemento);
$res->bindValue(":cidade", $cidade);
$res->bindValue(":estado", $estado);
$res->bindValue(":bairro", $bairro);
$res->bindValue(":endereco", $endereco);


$res->execute();

$result = json_encode(array('erro' => 0, 'mensagem' => 'Salvo com Sucesso'));
echo $result;

?>