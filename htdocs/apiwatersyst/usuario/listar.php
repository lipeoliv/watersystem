<?php
require_once('..\cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);


$start = intVal($postjson['start']);
$limit = intval($postjson['limit']);

$busca = '%' . $postjson['pesquisa'] . '%';
$query = $pdo->query("SELECT * FROM usuario WHERE nome LIKE '$busca' or cpf LIKE '$busca'
            order by idusuario asc limit $start, $limit");

$res = $query->fetchAll(PDO::FETCH_ASSOC);

$total_reg = @count($res);

if($total_reg > 0){
    for($i=0; $i < $total_reg;$i++){
        foreach($res[$i] as $key => $value){ }
        $dados[] = array(
            'idusuario'=> $res[$i]['idUsuario'],
            'nome' => $res[$i]['nome'], 
            'cpf'=> $res[$i]['cpf'], 
            'email' => $res[$i]['email'], 
            'password' => $res[$i]['password'],
        );
    }
    $result = json_encode(array('itens' => $dados));
    echo $result;
}else{
    $result = json_encode(array('itens' => 0));
    echo $result;
}

?>