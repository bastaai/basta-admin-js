/* eslint-disable @typescript-eslint/no-var-requires */
const { GraphQLObjectType, GraphQLScalarType } = require('graphql/type');

module.exports = {
  /** Custom plugin that outputs raw types with primitive values instead of Scalars. */
  plugin(schema) {
    return Object.entries(schema.getTypeMap())
      .filter(
        (x) => x[1] instanceof GraphQLObjectType && !x[1].name.includes('__', 0)
      )
      .map((x) => {
        const obj = x[1];

        Object.entries(obj.getFields()).map((field) => {
          const propertyName = field[1].name;
          const isScalar = field[1].type.ofType instanceof GraphQLScalarType;
          console.log(
            propertyName,
            ' is scalar: ',
            isScalar,
            '. ',
            isScalar ? field[1].type.ofType : field[1].type.name
          );
        });

        return `
          /** ${obj.description} */
          export const ${obj.name} = "";
        `;
      })
      .join('\n\n');
  },
};
