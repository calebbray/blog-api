# GraphQL Blog API

## Making Changs to the Datamodel

Making changes to the datamodel is a multi-step process. It is not as simple as just adding information to the `server/typeDefs/index.js` file.

This API uses [prisma](https://www.prisma.io/docs/understand-prisma/prisma-introduction-what-why-how-j9ff/) as an ORM. It is similar to `mongoose` in the way that it makes interacting with data in the DB easier. TODO: ADD MORE ABOUT WHAT MAKES PRISMA SO GREAT
You can find the configuration for `prisma` in the appropriate directory which contains `datamodel.prisma` and `prisma.yml`.

`prisma.yml` has basic configuration for where to find the prisma endpoint, where to find the datamodel, and since we use a NoSQL DB, specification of the databaseType (document).

`datamodel.prisma` is the outline for all of our types. Once we specify our types we can deploy our prisma service and generate a new schema (we'll get there below).

### Steps add or edit Types in the GraphQL API

- Add a type to `datamodel.prisma`. The most basic types will only have scalar options (String, Boolean, Int, Float...). We can also add types that have relations to each other. So if we had a `Users` type and a `Posts` type, A user might have a `posts` attribute that references an array of `Posts`.
- Now that we have updated our datamodel, we need to deploy it to prisma. We need to make sure that our Docker container is running as wellso prisma can find the correct endpoint.
```bash
docker-compose up -d
prisma deploy
```
If you updated your data model correctly you should see that your changes have been made and can be found at the endpoint that we specified in `prisma.yml`. 

Make sure you `docker-compose down` and make sure the container is stopped.

- Now that the datamodel has been updated we need to generate regenerate our schema. The configuration for this is in the `.graphqlconfig` file. 
```
npm run get-schema`
```

This script uses the [GraphQL CLI](https://github.com/Urigo/graphql-cli) it generates the schema and puts it in the `src/generated` directory. **Do not edit files in this directory.**

Once the schema is generated you should be able to go to the prisma endpoint (`localhost:4466`) and see the new datatype in the docs tab in GraphQL Playground.

- You should notice multiple new mutations that we now have access to. Prisma by default gives us these create, update, delete, etc... without us having to worry about it.

## Applying Changes to the GraphQL Lambda Server

- While we could just use the Prisma endpoint to make our requests, we instead want to wrap our nodejs application around it so we can do things like authentication, and prevent users to have unchecked access to our data.
- The node server itself is in `graphqlLambda.js` in the file you should see a lambda that contains `typeDefs`, `resolvers`, and `context`. These are the places we need to update to be able to use the new type.
- In `server/typeDefs`, start by adding the new type like we did in the `datamodel.prisma` file. Add a query to the `Query` type that uses our new data type. You can also add any mutations or inputs that deem necessary to use this new data type.
- Next, we need to add these new queries and mutations to our resolvers. 
- You should now be able to run `npm start` and go to `localhost:5000` and run these queries and mutations.

