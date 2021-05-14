let fs = require("fs");
let path = require("path");

function viewHelper(dirname,mode){
    if(mode == "tree"){
        viewTree(dirname,"");
    } else if(mode == "flat"){
        viewFlat(dirname);
    } else{
        console.log("wrong mode type help for commands ");
    }
}

module.exports= {
    fn:viewHelper
}



function isFileOrNot(src){
    return fs.lstatSync(src).isFile();
}
function readContent(src){
    return fs.readdirSync(src);
}
function viewFlat(src){
    // how to find if a given path is file or directory 
    let isFile = isFileOrNot(src);
    if(isFile == true){
        console.log(src, "*");
    }else{
        //print
        console.log(src);
        // content read fro os
        let fDirnames = readContent(src);
        //recursion
        //console.lof(fDirnames);
        for(let i = 0 ; i < fDirnames.length; i++){
            let child = fDirnames[i];
            // good practise??
            //let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src,child);
            viewFlat(dirNamepath);
        }
    }
}
function viewTree(src,indent){
    let isFile = isFileOrNot(src);
    if(isFile == true){
        console.log(indent, path.basename(src), "*");
    }else{
        // print
        console.log(indent, path.basename(src), "*");
        // read content from os
        let fDirnames = readContent(src);
        //recursion
        //console.lof(fDirnames);
        for(let i = 0 ; i < fDirnames.length; i++){
            let child = fDirnames[i];
            // good practise??
            //let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src,child);
            viewTree(dirNamepath,indent + "\t");
        }

    }

}

// node flatfile "path"
//let input = process.argv.slice(2);

//viewFlat(input[0]);
// let pathArray=path.split("\\")