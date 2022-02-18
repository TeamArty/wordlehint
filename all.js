function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
}

if (get('n') == "b") {
    reveal(1);
    reveal(2);
    reveal(3);
    reveal(4);
    reveal(5);
}