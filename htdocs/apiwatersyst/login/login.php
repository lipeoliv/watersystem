<?php
require_once('..\cnn.php') ;
$postjson = json_decode(file_get_contents('php://input'), true);

$usuario = (isset($postjson['usuario']) ? $postjson['usuario'] : "" );
$password = (isset($postjson['password']) ? $postjson['password'] : "" );

if($usuario == "") {
    echo json_encode(array('mensagem' => 'Preencha o campo usúario' ));
    exit();
}

if($password == "") {
    echo json_encode(array('mensagem' => 'Preencha o campo Senha' ));
    exit();
}

$sql = "SELECT * FROM usuario WHERE email = '$usuario' AND password = '$password';";

/*if(true){
    $result = json_encode(array('mensagem' => $sql, 'ok' => false));
    echo $result;
}*/

$query = $pdo->query($sql);

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

$total_reg = @count($res);

if($total_reg > 0){
    for($i=0; $i < $total_reg;$i++){
        $dados[] = array(
            'idusuario' => $res[$i]['idUsuario'],
            'nome' => $res[$i]['nome'],
            'cpf' => $res[$i]['cpf'],
            'nivel' => $res[$i]['nivel'],
        );
    }
    $result = json_encode(array('mensagem' => 'Logado com Sucesso', 'ok' => true, 'usu' => $dados));
    echo $result;
}else{
    $result = json_encode(array('mensagem' => 'Login e senha nao conferem', 'ok' => false));
    echo $result;
}

?>