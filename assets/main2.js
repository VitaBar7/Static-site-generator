//src="https://cdn.jsdelivr.net/npm/showdown@2.1.0/dist/showdown.min.js">

//let converter = new showdown.Converter()
//file = "./index.md"
//html = converter.makeHtml(file)

let container = document.querySelector(".container_page2")

//container.innerHTML = html

hashChange()

function hashChange() {

    fileName = location.hash ? location.hash.split( '#' )[1] : 'page2.md'

    document.title = document.title ? document.title : fileName

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( 'GET', fileName, true )
    xmlHttp.onreadystatechange = function() {

        container.innerHTML = xmlHttp.readyState === 4 ? new showdown.Converter({tables: true}).makeHtml( xmlHttp.responseText ) : ''

    };

    xmlHttp.send( null )

}