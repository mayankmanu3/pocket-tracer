const { JsonWebTokenError } = require('jsonwebtoken');

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'authorization denied, no token found' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwt_secret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
