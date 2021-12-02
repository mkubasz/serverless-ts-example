import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"
import { Logger } from '@common/Logger';

export const handler = async(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;
  Logger.log(`Start FP_API: ${JSON.stringify(event)}`);

  Logger.log('End FP_API');
  return {
    statusCode: 200,
    body: JSON.stringify({})
  }
};
