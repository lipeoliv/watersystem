<?php
require_once('..\cnn.php');
$postjson = json_decode(file_get_contents('php://input'), true);


$start = intVal($postjson['start']);
$limit = intval($postjson['limit']);

$busca = '%' . $postjson['pesquisa'] . '%';
$query = $pdo->query("SELECT * FROM residencia WHERE bairro LIKE '$busca' or endereco LIKE '$busca'
            order by id asc limit $start, $limit");

$res = $query->fetchAll(PDO::FETCH_ASSOC);

$total_reg = @count($res);

if($total_reg > 0){
    for($i=0; $i < $total_reg;$i++){
        foreach($res[$i] as $key => $value){ }
        $dados[] = array(
            'id'=> $res[$i]['id'],
            'complemento'=> $res[$i]['complemento'],
            'cidade' => $res[$i]['cidade'], 
            'estado'=> $res[$i]['estado'], 
            'bairro' => $res[$i]['bairro'], 
            'endereco' => $res[$i]['endereco'],

        );
    }
    $result = json_encode(array('itens' => $dados));
    echo $result;
}else{
    $result = json_encode(array('itens' => 0));
    echo $result;
}

?>