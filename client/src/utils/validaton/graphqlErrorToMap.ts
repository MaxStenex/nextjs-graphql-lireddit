import { GraphQLError } from "graphql";

export const graphqlErrorToMap = (error: GraphQLError): { [key: string]: string } => {
  const errorsMap: { [key: string]: string } = {};

  error.extensions!.exception.validationErrors.map((err: any) => {
    Object.values(err.constraints).map((message: any) => {
      errorsMap[err.property] = message;
    });
  });

  return errorsMap;
};
