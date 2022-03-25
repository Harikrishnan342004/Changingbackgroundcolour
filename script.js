
// create a list for changing colurs
var color = ["#222f3e" , "#f368e0" ,"#ee5253", "red", "black", "Red" , "#FF0000","Blue", "#0000FF","Green", "#006400","Orange" ,"#FF6600"," #FFFFFF","Black"," #000000","Yellow"," #FFFF00","Purple", "#A020F0"];
// create variable name i and declare 0 value .....
var i = 0;                                 

document.querySelector("button").addEventListener('click',    
function(){
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]                 
})

document.querySelector("h1").style.textAlign = 'center';         // css style  using js