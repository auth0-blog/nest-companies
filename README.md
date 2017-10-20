# Nest.js Brings TypeScript to Node.js and Express

This repository accompanies the [Nest.js Brings TypeScript to Node.js and Express article](https://auth0.com/blog/nestjs-brings-typescript-to-nodejs-and-express/)
on Auth0's blog. Head there to learn about SQLAlchemy ORM.

## List of Commands

To run the application, just issue:

```bash
node index
```

To fetch an `access_token` from Auth0, first we need to set three variables: `CLIENT_ID`, `CLIENT_SECRET`, `AUTH0_DOMAIN`.
These variables have to be copied from our *Client* on Auth0's management dashboard:

```bash
# DO change these
CLIENT_ID=1jgwQXJ1MGS7FoGzmyNyPGwzsoBGjgzv
CLIENT_SECRET=etIijATVlYQRvMV7kul-qqKqiuplK6GETdNcEAn2nQgxPmwZCS9pDC1tvjRBkWNe
AUTH0_DOMAIN=bkrebs.auth0.com
```

After that, we can submit a request to Auth0's endpoint to get an `access_token`:
```bash
JWT=$(curl -X POST -H 'content-type: application/json' -d '{
    "client_id": "'$CLIENT_ID'",
    "client_secret": "'$CLIENT_SECRET'",
    "audience": "http://localhost:3000/",
    "grant_type": "client_credentials"
}' https://$AUTH0_DOMAIN/oauth/token  | jq '.access_token')
```

With this token, we can issue requests to secured endpoints:

```bash
# issuing GET request to fetch companies
curl -H 'authorization: Bearer '$JWT http://localhost:3000/companies
```