# Markdown_JS
Im bored and need something to do, so im making this, a Javascript file that will read a Markdown file and turn in into HTML.
## Test Data
Example test data can be found in `/test`
## How to use
Inside the HTML the following code is needed, Where path_to_markdown_file is the path to the file that you would like to read
```HTML
<body onload='markdown("path_to_markdown_file")'>
    <div id="markdown_contents"> </div>
    <script src="/assets/js/js_markdown.js"></script>
</body>
```
## CSS Info
`markdown_contents` is an ID. This is the ID that it used to add the contents from the markdown file

`code_block` is a class. This can be used to style code blocks. DIV's that have this class will also have a number as an ID, this is to allow for multiple code blocks in one document and what the script uses to add the correct lines to the correct divs. 

`<xmp>` is the tags used for code snippets, to force HTML code and XML to show on the page

## Notes
If you have PHP code in your markdown file it may cause the JS to crash as the HTML will try to run that PHP Code. It seems to be working but your milage may vary!