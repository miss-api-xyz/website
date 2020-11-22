function set(elementID, volume){
    var doc = document.getElementById(elementID);
    doc.volume = volume; 
}

function get(elementID){
    var doc = document.getElementById(elementID);
    return doc.volume;
}