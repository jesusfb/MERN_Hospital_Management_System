export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Convert days to milliseconds
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use true for production
      sameSite: 'None', // Required if using `secure: true`
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
