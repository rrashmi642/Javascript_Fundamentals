var ipod = {
 color: "black",
 y:15,
 x:10,
 songs: ["chhaiya chhaiya","dhoom machale", "tung tung"],

 play: function(){
    console.log("let's play song ", ipod.songs[1], "for", this.y, "minutes");       
 }
 
};
ipod.play();
//for loop
console.log(ipod);
for(let i=0; i<ipod.songs.length; i++){
    console.log(i, ipod.songs[i]);


}

//for each loop

ipod.songs.forEach(function(val, idx){
console.log("for each usage", idx,val);})