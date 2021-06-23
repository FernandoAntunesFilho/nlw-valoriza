module.exports = async (req, res) => {
  const userData = req.body;
  // const newUser = await createUser
  res.status(200).json(userData);
};

// module.exports = {
//   createUser,
// };
