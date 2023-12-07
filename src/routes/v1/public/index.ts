// ** import external libraries
import Hapi from '@hapi/hapi'
import Joi from '@hapi/joi'

// ** import controller
import { DataController } from '../../../controller'

// ** import custom utilities
import { ResponseUtil } from '../../../utils'

// ** import app constants
import { METHOD, VERSION, ENDPOINT } from '../../../constant'

const PUBLIC_ROUTER: Hapi.ServerRoute[] = [
    /**
     * GET endpoints
     */
    {
        method: METHOD.GET,
        path: VERSION.V1 + ENDPOINT.GET.DEFAULT,
        options: {
            handler: (request, reply) => {
                return reply.view('index')
            },
            description: 'API base default public endpoints (GET)',
            notes: 'Hit the endpoint to check if server is alive',
            tags: ['baseurl', 'default', 'check api status']
        }
    },
    /**
     * POST endpoints
     */
    {
        method: METHOD.POST,
        path: VERSION.V1 + ENDPOINT.POST.DEFAULT,
        options: {
            handler: (request, reply) => {
                const response = DataController.checkResponse(request.payload)

                return ResponseUtil.sendResponse(response, reply)
            },
            validate: {
                failAction: ResponseUtil.faileAction,
                payload: Joi.object({
                    number: Joi.number().required(),
                    string: Joi.string().required(),
                    optional: Joi.any()
                })
            },
            description: 'API base default public endpoints (POST)',
            notes: 'Hit the endpoint to check if server is alive',
            tags: ['baseurl', 'default', 'check api status']
        }
    }
]

export default PUBLIC_ROUTER