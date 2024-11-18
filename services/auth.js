const JWT = require('jsonwebtoken');

const secret = "$Rajesh&Ravina@143$";

// Function to create a token for a user
function createTokenForUser(user) { // Accept user as a parameter
    const payload = {
        _id: user.id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };

    // Add an expiration time to the token (e.g., 1 hour)
    const token = JWT.sign(payload, secret, { });
    return token;
}

// Function to validate a token
function validateToken(token) {
    try {
        const payload = JWT.verify(token, secret);
        return payload; // Return the decoded payload
    } catch (error) {
        console.error("Token validation error:", error);
        return null; // Return null if validation fails
    }
}

module.exports = {
    createTokenForUser,
    validateToken,
};
