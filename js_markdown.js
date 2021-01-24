//V2
//Function to call from HTML. Loads the file and passes it to HTML_Formatter.
function markdown(file_url){
    if(file_url.split('.').pop()!="md"){
        console.log("Bad Extension!");
        return;
    }
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
    var image_id = 0;
    while(i < text.length){
        // console.log(i)
        // Deal with headings
        if(text[i].includes("#")){
            if(text[i].split(" ")[0]==="#"){
                document.getElementById("markdown_contents").innerHTML += "<h1>"+text[i].replace("#","")+"</h1>"
            }   
            if(text[i].split(" ")[0]==="##"){
                document.getElementById("markdown_contents").innerHTML += "<h2>"+text[i].replace("##","")+"</h2>"
            }
            if(text[i].split(" ")[0]==="###"){
                document.getElementById("markdown_contents").innerHTML += "<h3>"+text[i].replace("###","")+"</h3>"
            }
        }
        // Deal with code blocks
        else if (text[i].includes("```")){
            i++;
            document.getElementById("markdown_contents").innerHTML += `<div class='code_block' id='`+codeblock_no+`'> </div>`
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
            codeblock_no++
        }
        // Deal with images ![alt text](url)
        else if(text[i].startsWith("!")){
            var image_details = text[i].replace(/[!()]/g,",").split(",")
            document.getElementById("markdown_contents").innerHTML += "<div class='picture_card' id='image_"+image_id+"'> </div>"
            //Check to see if image has alt-text/caption
            if(image_details[1]!=`[]`){
                document.getElementById("image_"+image_id).innerHTML += `<img id='image' alt="`+image_details[1].replace("[","").replace("]","")+`" src='`+image_details[2]+`'>`
                document.getElementById("image_"+image_id).innerHTML += `<div id="card_container"><p>`+image_details[1].replace("[","").replace("]","")+`</p>`
            }
            else{
                document.getElementById("image_"+image_id).innerHTML += `<img id='image' src='`+image_details[2]+`'>`
            }
            image_id++
        }
        else if(text[i].startsWith("*")){
            document.getElementById("markdown_contents").innerHTML += `<p><i>`+text[i].replace(/\*/g,"")+`<i></p>`;
        }
        else if(text[i].startsWith("[")){
            document.getElementById("markdown_contents").innerHTML+= "<a id='link' href='"+text[i].split("]")[1].replace(/\((.*)\)/, "$1")+"'>"+text[i].split("]")[0].replace(/\[/, "")+"</a>"
        }
        // Deal with text
        else{
            document.getElementById("markdown_contents").innerHTML += "<p>"+text[i].replace("\\","")+"</p>";
        }
        i++
    }
}