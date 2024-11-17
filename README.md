# Fullstack Authentication Example with Next.js and NextAuth.js

This is the starter project for the fullstack tutorial with Next.js and Prisma. You can find the final version of this project in the [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final) branch of this repo.

// connection string: postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]
                    : postgresql://postgres:mysecretpassword@localhost:5432/blogr

# To Start the docker compose services:
```
docker-compose up -d
```


# To stop the services but keep the volumes and networks

```
docker-compose stop
```

# To stop the docker compose file and delete volumes and networks
```
docker-compose down
```

npm install prisma --save-dev
npx prisma init

# To actually create the tables in your database, you now can use
npx prisma db push

npx prisma studio

# install-and-generate-prisma-client
npm install @prisma/client

 - Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:
 
npx prisma generate

