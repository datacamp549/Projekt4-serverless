import 'source-map-support/register'
import { createLogger } from '../../utils/logger'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import {getTodoItemsByPriority} from '../../businessLogic/todos'
import {getUserId} from '../utils'

const logger = createLogger('GetAllTodosByPriorityFunction')

export const handler = middy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.info('Getting Todos', { event });
  const priority = event.pathParameters.priority
  const userId = getUserId(event)
  const items = await getTodoItemsByPriority(userId, priority)

  return {
    statusCode: 200,
    body: JSON.stringify({
      items
    })
  }
})

handler.use(
  cors({
    credentials: true
  })
)