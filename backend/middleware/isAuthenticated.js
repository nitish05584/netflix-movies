const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    // Extract the token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided", success: false });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Invalid token", success: false });
    }

    // Assign decoded payload to req.user
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};

module.exports = isAuthenticated;
