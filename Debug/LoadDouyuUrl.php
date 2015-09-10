<?php

if (isset ( $_GET ["url"]))
{
	$url = $_GET ["url"];
	if ($url!="")
    {
        $html = file_get_contents($url);
        echo $html;
    }
}
else
{
}
?>