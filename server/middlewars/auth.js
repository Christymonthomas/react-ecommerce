import jwt from "jsonwebtoken";

export const requireSignin = (req, res, next) => {
  //   console.log("REQUEST HEADES=>", req.headers);

  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // console.log("DECODED=>", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
};
