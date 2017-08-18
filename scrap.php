
<?php
include('simple_html_dom.php');
  
 $url= $_GET["url"];
 $i= $_GET["i"];
 $j= $_GET["j"];
  $k= $_GET["k"];
$total=$i+$j+$k;

if (substr($url, -1) != '/'){$url=$url.'/';}
if(substr($url, 0, 4) != "http") { $url = 'http://'.$url;}
 
$html = file_get_html($url);

foreach($html ->find('a') as $item) {

        $value = $item->href;

       if (filter_var($value, FILTER_VALIDATE_URL)) { 
  $item->href=$value;
}
else{       $item->href = $url.$value;}
    }

foreach($html ->find('img') as $item) {

        $value = $item->src;
     

if (filter_var($value, FILTER_VALIDATE_URL)) { 
  $item->src=$value;
} 
else{ $item->src = $url.$value;}

    }

$html->save();
$result=array();		$classs=array();$typeee=array();$pclass=array();$ptype=array();$position=array();$pssclass=array();$psstype=array();$respclass=array();$resposition=array();   

foreach($_GET['classs'] as $value) {
    array_push($classs,$value);
}
foreach($_GET['typeee'] as $value) {
    array_push($typeee,$value);
}
foreach($_GET['pclass'] as $value) {
  array_push($pclass,$value);
}
foreach($_GET['ptype'] as $value) {
  array_push($ptype,$value);
}
foreach($_GET['position'] as $valuee) {
   array_push($position,$valuee);
}
foreach($_GET['pssclass'] as $value) {
  array_push($pssclass,$value);
}
foreach($_GET['psstype'] as $value) {
  array_push($psstype,$value);
}

foreach ($classs as $index => $value)
{   
$res=array();
 foreach($html->find($typeee[$index]) as $post) {
    $text=$post->children($value)->plaintext; 
    
    array_push($res,$text);
 }
array_push($result, $res);
unset($res);
}
/////////////////////////////////////

foreach ($pclass as $index => $value)
{   
$res=array();
 foreach($html->find($ptype[$index].'[class='.$value.']') as $post) {
    $text=$post->children($position[$index])->plaintext; 
    
    array_push($res,$text);
 }
array_push($result, $res);
unset($res);
}

foreach ($pssclass as $index => $value)
{   
$res=array();
 foreach($html->find($psstype[$index].'[class='.$value.']') as $post) {
    $text=$post->plaintext; 
    
    array_push($res,$text);
 }
array_push($result, $res);
unset($res);
}



$coef=count($result[0]);
$test = array();
$c=count($result);


$check;

for($i=0; $i<$c; $i++){
  $x=$i+1;

if($x<$c){

     $resultcounter= count($result[$i]);
  $nextresultcounter= count($result[$x]);

  if($resultcounter==$nextresultcounter){
$check=TRUE;
  }
else{
  $check=FALSE;
break;
}



}  
}


if($check){
  for ($y=0; $y<$coef; $y++){

for ($x=0; $x<$c; $x++){

array_push($test,$result[$x][$y]);

 }
}
}
else{
  $test=$result;
}

$test=array_chunk($test, $total);

header('Content-Type: application/json; charset=utf-8');
echo json_encode(array("result"=>$test),JSON_UNESCAPED_SLASHES);

//$abc = array('Subj1'=>'Physics','Subj2'=>'Chemistry','Subj3'=>'Mathematics','Class'=>array(5,6,7,8));  
//print_r($abc);  


/////////////////////////////////////////////////////////////////////////////////////////////
//$length = count($res); $half=$length/2;
//for ($i = 0; $i < $half; $i++) {
 // array_push($respclass,$res[$i]);
//}
//$secondhalf=$half+1;
//for ($i = $secondhalf; $i < $length; $i++) {
 // array_push($resposition,$res[$i]);
//}



//header('Content-Type: application/json; charset=utf-8');
//echo json_encode(array("result"=>$result),JSON_UNESCAPED_SLASHES);
?>