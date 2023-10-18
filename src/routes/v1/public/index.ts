import Hapi from '@hapi/hapi'
import Joi from 'joi'
import { METHOD, VERSION, ENDPOINT } from '../../../constant'

const PUBLIC_ROUTER: Hapi.ServerRoute[] = [
    {
        method: METHOD.GET,
        path: VERSION.V1 + ENDPOINT.GET.DEFAULT,
        options: {
            handler: (request, reply) => {
                return reply.view('index')
            },
            description: 'API base default endpoint',
            notes: 'Hit the endpoint to check if server is alive',
            tags: ['baseurl', 'default', 'check api status']
        }
    }
]

export default PUBLIC_ROUTER