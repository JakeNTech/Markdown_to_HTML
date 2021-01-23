# This is some bad code right here!
```
Heya! So I've uhhh, borrowed, some of my friends code. They said that they were hiding something ... can you find out what it is?
```

First we nmap, `nmap -A -vvv 10.10.10.206 | tee nmap_scan`:\
Once we have downloaded we can see that it's a binary file, Going by the name of the file we should be able to pick out a flag fairly easily, and so we run strings and examin the output:
```
<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0">
	<channel>
 	<title>Archive</title>
 	<item><title>25</title></item>
			</channel>
```
If I had to be a cat I would be a dog. That's just the way it is!\
steve is simply the best!
![](images/hello.png)
```
<?php
$output = shell_exec('ls -lart');
echo "<pre>$output</pre>";
?>
```