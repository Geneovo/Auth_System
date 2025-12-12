import jwt from "jsonwebtoken";

// Function to find the token from the cookie and then find the user id from the token
const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded.id) {
        req.body.userId = decoded.id;
    } else {
        return res.json({success: false, message: 'Not Authorized. Login Again' })
    }

    next()
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
