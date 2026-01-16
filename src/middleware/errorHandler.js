export const errorHandler = (err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message
  });
};
