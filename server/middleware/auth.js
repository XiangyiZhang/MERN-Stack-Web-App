import jwt from "jsonwebtoken";

const SECRET = 'quohoo_secret';

const auth = async (req, res, next) => {
    console.log('authorizing');
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, SECRET);
    req.userId = decodedData.id;
    next();
  } catch (error) {
    console.log(error);

    res.status(400).json({message:'Token error. Please sign in again.'});
  }
};

export default auth;