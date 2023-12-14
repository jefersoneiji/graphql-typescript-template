import { extendType, objectType } from "nexus";

export const Ok = objectType({
    name: 'Ok',
    description: 'example of object type that returns ok',
    definition(t) {
        t.nonNull.boolean('value');
    },
});

export const OkQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('ok', {
            type: 'Ok',
            description: 'example of query that return type ok',
            resolve(_root, _args, _ctx) {
                return { value: true };
            }
        });
    },
});