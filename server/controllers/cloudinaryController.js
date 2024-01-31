import { uploadToCloudinary } from '../lib/cloudinary.js';

const uploadImage = async (req, res) => {
  try {
    const imageUrl = await uploadToCloudinary(req.file);
    res.json({ imageUrl });
  } catch (error) {
    console.error('Error in uploadImage controller:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { uploadImage };