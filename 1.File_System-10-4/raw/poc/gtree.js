
let root = {
    name: "d10",
    children: [
        {
            name: "d20",
            children: [{
                name: "d50",
                children: []
            }, {
                name: "d60",
                children: []
            }]
        },
        {
            name: "d30",
            children: [{
                name: "d70",
                children: []
            }]
        },
        {
            name: "d40",
            children: [

            ]
        }
    ]
}
// print
// logic -> folders
function printGTree(node, nsp) {
    //    print self 
    console.log(nsp + node.name)
    // children loop
    for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        printGTree(child, nsp + "\t");
    }
}


let fs = require("fs");
function checkFileOrFOlder(path) {
    return fs.lstatSync(path).isFile();
}
function contentReader(path) {
    return fs.readdirSync(path);
}

// poc
    // f10
        // f20
            //   f1.txt*
              //f40
        // f30
            // f50
            // f60
        // f1.txt*







// printGTree(root, "");
function printFlat(path) {
    // if this path is a file of directory
    // is File -> true
    // is file-> false
    let isFile = checkFileOrFOlder(path);
    if (isFile == true) {
        // console.log("path is a file");
        // print file
            console.log(path, "*");
    } else {
        // name print
        // console.log("path is a dir");
        console.log(path);
        // may it can contains something
        //  content read
        let childrens = contentReader(path);
        // console.log(childrens);
        // call
        for (let i = 0; i < childrens.length; i++) {
            printFlat(path + "\\" + childrens[i]);
        }
    }
}
printFlat("E:\\PAB_DEV\\1.File_System-10-4\\raw\\poc\\f10");
// printFlat("C:\\Users\\Ritik Singh\\Desktop\\Batches\\PAB\\2_File_System_10_02_2021\\raw\\poc\\client.js")
