---
---
$.when($.ready).then(function(){
    // {{ site.url }}
    $("code.language-plantuml").each(function(){
        var code = $(this).text();
        var encoded = plantumlEncoder.encode(code);
        var url = 'https://www.planttext.com/plantuml/img/'+encoded;
        var $img = $("<img/>", { src : url});
        $(this).parent('pre').after($img);
    });
});
