import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("🚀 ~ multer localstorage: destination: file:", file);
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    // image/jpeg, webp
    const extension = file.fieldname.includes("image")
      ? file.mimetype.slice(6)
      : "";
    console.log("🚀 ~ extension:", extension);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

export default upload;
