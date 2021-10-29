import multer from "multer";
import { join, extname } from "path";

export default {
  storage: multer.diskStorage({
    destination: join(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-image-${file.originalname.length}${extname(file.originalname)}`;

      cb(null, fileName);
    },
  }),
};
