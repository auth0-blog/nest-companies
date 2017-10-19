import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import {expressJwtSecret} from 'jwks-rsa';

@Middleware()
export class AuthenticationMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://bkrebs.auth0.com/.well-known/jwks.json`
            }),
            audience: 'http://localhost:3000/',
            issuer: 'https://bkrebs.auth0.com/',
            algorithm: 'RS256'
        });
    }
}