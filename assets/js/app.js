---
---

window.addEventListener("load", function(){
        // Show plantuml diagrams.
        document.querySelectorAll("code.language-plantuml").forEach(function(element){
            var code = element.innerText;
            var pre = element.parentElement;
            pre.className = "col-6 sm-width-full inline-block";
            var preParent = pre.parentElement;
            var encoded = plantumlEncoder.encode(code);
            var url = 'https://www.planttext.com/plantuml/img/'+encoded;
            var diagram = document.createElement("div");

            var img = document.createElement("img");
            img.src = url;
            diagram.className = "mt-1 mb-1 col-6 sm-width-full inline-block"
            diagram.appendChild(img);
            preParent.insertBefore(diagram, pre);
            // preParent.removeChild(pre);
    });
}, false);
