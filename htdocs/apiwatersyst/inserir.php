<?php
require_once('cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);

# Variáveis que vão ser utilizadas para pegar as 
# informações do usuário
$idusuario = ""; 
$nome = ""; 
// $idade = ""; 
// $categoria = ""; 
$cpf = ""; 
$email = ""; 
$password = ""; 
// $nivel = ""; 

 

# Algoritmos de validação dos dados
if (isset($postjson['nome']) && $postjson['nome'] != ""){
    $nome = $postjson['nome'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Nome!'));
    exit();
}

// if (isset($postjson['idade']) && $postjson['idade'] != ""){
//     if(is_numeric($postjson['idade'])){
//         $idade = $postjson['idade'];
//     }
//     else{
//         echo json_encode(array('erro' =>1, 'mensagem' => 'Digite uma Idade Valida!'));
//         exit();
//     }
// }else{  
//     echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Idade!'));
//     exit();
// }



// if (isset($postjson['categoria']) && $postjson['categoria'] != ""){
//     $categoria = $postjson['categoria'];
// }else{
//     echo json_encode(array('erro' =>1,'mensagem' => 'Preencha o Campo Categoria!'));
//     exit();
// }



if (isset($postjson['cpf']) && $postjson['cpf'] != ""){
    $cpf = $postjson['cpf'];
}else{
    echo json_encode(array('erro' =>1,'mensagem' => 'Preencha o Campo CPF!'));
    exit();
}


if (isset($postjson['email']) && $postjson['email'] != ""){
    $email = $postjson['email'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo E-mail!'));
    exit();
}


if (isset($postjson['password']) && $postjson['password'] != ""){
    $password = $postjson['password'];
}else{
    echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Senha!'));
    exit();
}


// if (isset($postjson['nivel']) && $postjson['nivel'] != ""){
//     $nivel = $postjson['nivel'];
// }else{
//     echo json_encode(array('erro' =>1, 'mensagem' => 'Preencha o Campo Nivel!'));
//     exit();
// }

# Preencha o SQL com as informações do banco
$res = $pdo->prepare("INSERT INTO usuario SET nome = :nome,   cpf = :cpf, email = :email, password = :password");

# bind do sql com os dados que serão inseridos no banco
$res->bindValue(":nome", $nome);
// $res->bindValue(":idade", $idade);
// $res->bindValue(":categoria", $categoria);
$res->bindValue(":cpf", $cpf);
$res->bindValue(":email", $email);
$res->bindValue(":password", $password);
// $res->bindValue(":nivel", $nivel);

$res->execute();

$result = json_encode(array('erro' => 0, 'mensagem' => 'Salvo com Sucesso'));
echo $result;

?>