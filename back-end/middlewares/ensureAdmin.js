module.exports = (req, res, next) => {
  const admin = false;

  if (admin) return next();
  return res.status(401).json({ error: "Unauthorized" });
};
