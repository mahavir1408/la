<?php
set_time_limit(0);
include("urls.php");
//echo "<pre>";print_r($urls);exit;
$cwd = getcwd();

$url = "http://newthemes.themeple.co/solveto/wp-content/plugins/woocommerce/assets/js/chosen/chosen.jquery.min.js?ver=1.1.0";
$i = 1;
foreach($urls as $url) {
	$filename = basename($url);
	$filename=strtok($filename,'?');
	$path = parse_url( $url, PHP_URL_PATH );
	$dir = $cwd . dirname($path) . '\\';
	$dir = str_replace("/",DIRECTORY_SEPARATOR,$dir);
	if ( !file_exists( $dir ) ) {
		mkdir( $dir, 0777, true );
	}
	$saveto = $dir . $filename;
	grab_image($url,$saveto);
	echo "[$i] $url ...Done</br>";
	$i++;
}

function grab_image($url,$saveto){
    $ch = curl_init ($url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
    $raw=curl_exec($ch);
    curl_close ($ch);
    if(file_exists($saveto)){
        unlink($saveto);
    }
    $fp = fopen($saveto,'x');
    fwrite($fp, $raw);
    fclose($fp);
}
?>