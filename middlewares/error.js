const error = (err, req, res, next) => {
  console.log(err.toString());
  
  return res.status(500).json({ message: 'An Error Occured'});
};

module.exports = {
  error,
}