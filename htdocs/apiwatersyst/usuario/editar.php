<?php
require_once('..\cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

# Variáveis que vão ser utilizadas para pegar as 
# informações do usuário
$idusuario = (isset($postjson['idusuario'])? $postjson['idusuario']: ""); 
$nome = (isset($postjson['nome'])? $postjson['nome']: ""); 
$cpf = (isset($postjson['cpf'])? $postjson['cpf']: ""); 
$email = (isset($postjson['email'])? $postjson['email']: ""); 
$password = (isset($postjson['password'])? $postjson['password']: ""); 

# Algoritmos de validação dos dados
if (isset($postjson['nome']) && $postjson['nome'] != ""){
    $nome = $postjson['nome'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Nome!'));
    exit();
}


if (isset($postjson['cpf']) && $postjson['cpf'] != ""){
  //  if(is_numeric($postjson['cpf'])){
        $cpf = $postjson['cpf'];
    }
   /* }else{
        echo json_encode(array('erro' =>1, 'mensagem' => 'Digite um CPf válido!'));
        exit();
}*/
else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo CPF!'));
    exit();
}


if (isset($postjson['email']) && $postjson['email'] != ""){
    $email = $postjson['email'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo E-mail!'));
    exit();
}

# Preencha o SQL com as informações do banco
$res = $pdo->prepare("UPDATE usuarios SET nome = :nome,
        cpf = :cpf,
        email = :email,
        password = :password,
        WHERE idUsuario = :idusuario
        ");

# bind do sql com os dados que serão inseridos no banco
$res->bindValue(":nome", $nome);
$res->bindValue(":cpf", $cpf);
$res->bindValue(":email", $email);
$res->bindValue(":password", $password);
$res->bindValue(":idusuario", $idusuario);

$res->execute();


$result = json_encode(array('erro' => 0, 'mensagem' => 'Salvo com Sucesso'));
echo $result;

?>