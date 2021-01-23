//Function to call from HTML. Loads the file and passes it to HTML_Formatter.
function markdown(file_url){
    fetch(file_url)
    .then(res => res.blob())
    .then(blob => {
        var reader = new FileReader();
        reader.onload = function() {
            //console.log(reader.result);
            HTML_Format(reader.result);
        }
        reader.readAsText(blob);
    })       
}
// Formats the Markdown file and places on HTML
function HTML_Format(text){
    //console.log(text.split(/\r?\n/));
    var text = text.split(/\r?\n/);
    var i = 0;
    var codeblock_no = 0;
    while(i < text.length){
        // console.log(i)
        // Deal with headings
        if(text[i].startsWith("#")){
            if(text[i].startsWith("##")){
                document.getElementById("markdown_contents").innerHTML += "<h2>"+text[i].replace("##","")+"</h2>"
            }
            else{
                document.getElementById("markdown_contents").innerHTML += "<h1>"+text[i].replace("#","")+"</h1>"
            }
        }
        // Deal with code blocks
        else if (text[i].includes("```")){
            i = i +1;
            document.getElementById("markdown_contents").innerHTML += "<div class='code_block' id='"+codeblock_no+"'>"
            while(text[i]!=="```"){
                if(text[i]==="```"){
                    i++
                    break;
                }
                else{
                    document.getElementById(codeblock_no).innerHTML += `<xmp>`+text[i].toString()+`</xmp>`
                    i++
                }
            }
            document.getElementById(codeblock_no).innerHTML += "</div>";
            codeblock_no++
        }
        // Deal with images ![alt text](url)
        else if(text[i].startsWith("!")){
            var image_details = text[i].replace(/[!()]/g,",").split(",")
            document.getElementById("markdown_contents").innerHTML += "<img alt='"+image_details[1].replace("[","").replace("]","")+"' src='"+image_details[2]+"'>"
        }
            // Deal with text
        else{
            document.getElementById("markdown_contents").innerHTML += "<p>"+text[i].replace("\\","")+"</p>";
        }
        i++
    }
}