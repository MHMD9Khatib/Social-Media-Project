const notFoundError = (req, res, next) => {

  res.status(404).sendFile(file);
  return res.json({ message: 'ERROR 404 !!' });
};

module.exports = notFoundError;
