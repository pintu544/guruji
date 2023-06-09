const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers["access-token"];

    console.log(token);
    if (!token) {
      return res.status(400).json({ message: "Jwt token is required" });
    }

    jwt.verify(token, req.app.get("secretKey"), function (err, decodedData) {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
      }

      req.body.userId = decodedData._id;
    });
    next();
  } catch (e) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
