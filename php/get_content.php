<?php
	$url = '../xml/person.xml';
	$file = file_get_contents($url);
	$xml = simplexml_load_string($file);
	$content = array();
	$i=0;
		while ($i < 6) {
				$content[$i] = $xml->person[$i+1-1];
				$i++;
		}
	echo json_encode($content);
?>