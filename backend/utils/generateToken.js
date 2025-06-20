import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  if (!process.env.JWT_SECRET) {
    console.log('Missing JWT_SECRET!');
    process.exit(1);
  }
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms
    httpOnly: true, // prevent XSS attacks
    sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== 'development',
  });
};

export default generateTokenAndSetCookie;
