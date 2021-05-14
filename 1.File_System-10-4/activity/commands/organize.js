let fs = require("fs");
let path = require("path")
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', "ar", "iso", "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'ods', 'odp', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}
function readContent(src) {
    return fs.readdirSync(src);
}
function copyFile(src, desFolder) {
    //console.log("I will copy");

    if (fs.existsSync(desFolder) == false) {
        fs.mkdirSync(desFolder);
    }
    // src -> E:\PAB_DEV\1.File_System-10-4
    let fileName = path.basename(src);
    //console.log("dest",path.join(desFolder,fileName))
    fs.copyFileSync(src, path.join(desFolder, fileName));
}
function getdestName(src) {
    //E:\PAB_DEV\1.File_System-10-4\activity\mycli.js
    let ext = src.split(".").pop();
    //console.log(ext);
    for (let key in types) {
        for (let i = 0; i < types[key].length; i++) {
            if (ext == types[key][i]) {
                return key;
            }
        }
    }
    return "others";
}

function organize(src, dest) {
    // content read
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        // copy to organized files folder -> segregate
        let folderName = getdestName(src);
        //console.log(folderName," -> ",path.basename(src));
        // src/orgqanized files/media
        copyFile(src, path.join(dest, folderName));

    } else {

        // console.log(src);
        // folder -> recursive call
        let fDirnames = readContent(src);
        // recursion
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            let dirNamepath = path.join(src, child);
            organize(dirNamepath, dest);
        }

    }

}

function organizeFiles(src) {
    // create organize file folder in src
    let destfolderPath = path.join(src, "Organized_files");
    // console.log(destfolderPath);
    if (fs.existsSync(destfolderPath) == false) {
        fs.mkdirSync(destfolderPath);
    }
    // deep copy all the files organixe file folder
    organize(src, destfolderPath);
    // not present ->create a directory
    // organize -> files inside different folders
}

function organizefn(src) {
    if(src == undefined){
        src = process.cwd();
    }
    organizeFiles(src);
}


module.exports = {
    fn: organizefn
}