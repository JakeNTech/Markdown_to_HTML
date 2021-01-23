# Markdown_JS
Im bored and need something to do, so im making this, a Javascript file that will read a Markdown file and turn in into HTML.\
There are two JS files, one is for reading any markdown files and one has been tailored for reading markdowns into a blog post, mainly as this is what I wanted this tiny project to do and that I didn't wanna mess up the original one lol!\
The only difference between the two is the way headings are done, the `js_markdown.js` just converts `#` into `<h1>` but in the blog post one they are placed into a container and the `##` goes to `<p>` and `###` goes to `<h5>` instead as it makes it look nicer!
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

`code_block` is a class. This can be used to style code blocks. div's that have this class will also have a number as an ID, this is to allow for multiple code blocks in one document and what the script uses to add the correct lines to the correct div's. 

`<xmp>` is the tags used for code snippets, to force HTML code and XML to show on the page

`image` is the ID for images.

`picture_card` is the container for the image.

`card_container` is where the alt-text/caption for the image sits. Images don't have to use this, alt-text and caption will not be populated

## Notes
Inline ` doesn't work...can't think how to do that bit efficiently!