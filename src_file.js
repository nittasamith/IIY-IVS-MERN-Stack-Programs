var fs = require('fs');
var content ="html\n Hello NodeJS";
fs.writeFile("src.txt",content,err=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("src.txt file created");    
    }
})