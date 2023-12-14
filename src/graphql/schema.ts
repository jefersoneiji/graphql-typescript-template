import { join } from 'path';
import { makeSchema } from 'nexus';

import * as types from './types';

export const schema = makeSchema({
    types,
    outputs: {
        schema: join(process.cwd(), 'schema.graphql'),
        typegen: join(process.cwd(), 'nexus-typegen.ts')
    }
});