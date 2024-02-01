import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        console.log("multer localstorage: destination: file:", file);
        callback(null, "uploads/");
    },
    filename: function(req, file, callback){
        const uniqueSuffix = Date.now();
        callback(null, uniqueSuffix + "-" + file.originalname)
    }
});

const upload = multer({storage});

export default upload;