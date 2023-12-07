import 'dotenv/config'
// ** import external libraries
import Hapi from '@hapi/hapi'
import mongoose from 'mongoose'
import Handlebars from 'handlebars'
import Vision from '@hapi/vision'
import path from 'path'

// ** import routes
import { ROUTER_V1 } from '../routes'

// ** import app constants
import { METHOD, ENDPOINT } from '../constant'

declare global {
    namespace NodeJS {
        interface Global {
            ObjectId: mongoose.Types.ObjectId
        }
    }
}

class Server {
    // initialize Hapi server
    init = async () => {
        try {
            // server option
            const serverOption: Hapi.ServerOptions = {
                port: process.env.PORT,
                host: process.env.HOST,
                routes: {
                    cors: true
                }
            }

            // create new server
            const server = new Hapi.Server(serverOption)

            // add rendering plug-in
            await server.register(Vision)

            // add view engine
            await server.views({
                engines: { html: Handlebars },
                relativeTo: __dirname,
                path: path.join(__dirname, '../views')
            })

            // set routes
            await server.route(ROUTER_V1)

            // set built-in router
             server.route({
                method: METHOD.GET,
                path: ENDPOINT.GET.DEFAULT,
                handler: async (request, reply) => {
                    return reply.view('index')
                }
            })

            // set event listener
            server.events.on('request', (request) => {
                console.log(`API HIT (request): ${request.url}`)
            })

            server.events.on('response', (request) => {
                console.log(`API HIT (response): ${request.url}`)
            })

            // start server
            await server.start()

            // print server endpoint
            console.log('Server is running on %s', server.info.uri)
        }
        catch(error) {
            // print error and force exit process
            console.error(error)
            process.exit(1)
        }
    }
}

export default Server