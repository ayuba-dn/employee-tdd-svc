import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'
import dotenv from 'dotenv'
dotenv.config();

class Auth0Client{
    checkJwt = jwt({
        // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
        secret: jwksRsa.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${process.env.AUTH0_DOMAIN!}/.well-known/jwks.json`   
        }),
        algorithms: ['RS256'],
        audience: process.env.AUTH0_AUDIENCE!,
        issuer: `https://${process.env.AUTH0_DOMAIN!}/`
    })

    jwtAuthzOptions = {
        customScopeKey: 'permissions'
    }
}

export default new Auth0Client()