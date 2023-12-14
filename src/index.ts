import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import { graphqlHTTP } from 'koa-graphql';

import { schema } from './graphql/schema';
import { context } from './graphql/context';

const app = new Koa();
const router = new Router();

router.all('/graphql',
    graphqlHTTP({
        schema,
        context,
        graphiql: true
    }));
app
    .use(cors({ origin: '*' }))
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
});