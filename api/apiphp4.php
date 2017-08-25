<?php

session_start();
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

// connect to the mysql database
$conn = mysqli_connect('localhost', 'root', '', 'app_database');
mysqli_set_charset($conn,'utf8');
 
// retrieve the table, field name and key value from the path
$table = preg_replace('/[^a-z0-9_]+/i','',array_shift($request));
$fld = array_shift($request);
$key = array_shift($request);

$table = "user_data";

if(isset($_SESSION['field']))
{
    $y = $_SESSION['field'];
    $fld = (string)$y;
    
}

if(isset($_SESSION['key']))
{
    $z = $_SESSION['key'];
    $key = (string)$z;
}

if(isset($_SESSION['field1']))
{
    $a = $_SESSION['field1'];
    $fld1 = (string)$a;
    
}

if(isset($_SESSION['key4']))
{
    $b = $_SESSION['key4'];
    $key4 = (string)$b;
}


// retrieve the data to prepare set values
if (isset ($input))  {
	$columns = preg_replace('/[^a-z0-9_]+/i','',array_keys($input));
	$values = array_map(function ($value) use ($conn) {
		if ($value===null) return null;
		return mysqli_real_escape_string($conn,(string)$value);
	},array_values($input));

	$set = '';
	for ($i=0;$i<count($columns);$i++) {
		$set.=($i>0?',':'').'`'.$columns[$i].'`=';
		$set.=($values[$i]===null?'NULL':'"'.$values[$i].'"');
	}
}



// create SQL
switch ($method) {
  case 'GET':
    $sql = "select * from `user_calender`"; break;
        //.($key2?" WHERE `user_id`='$key4'":'')
  case 'PUT':
    $sql = "update `$table` set $set where ".($key?"$fld='$key'":"0=1"); break;
  case 'POST':
    $sql = "insert into `user_calender` set $set"; break;
  case 'DELETE':
    $sql = "delete from `$table` where ".($key?"$fld='$key'":"0=1"); break;
}

// execute SQL statement
$result = mysqli_query($conn,$sql);
if ($result) {
	if ($method == 'GET') {
		header('Content-Type: application/json');
		echo '[';
		for ($i=0;$i<mysqli_num_rows($result);$i++) {
			echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
		}
		echo ']';
	} elseif ($method == 'POST') {
		echo mysqli_insert_id($conn);
	} else {
		echo mysqli_affected_rows($conn); 
	}
} 

// close mysql connection
mysqli_close($conn);
?>

