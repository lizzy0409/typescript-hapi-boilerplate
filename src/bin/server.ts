import 'dotenv/config'
import Hapi from '@hapi/hapi'
import mongoose from 'mongoose'
import Handlebars from 'handlebars'
import Vision from '@hapi/vision'
import path from 'path'

class Server {
    // Initialize Hapi server
    init = async () => {
        try {
            // Create new server
            const server = new Hapi.Server({
                host: process.env.HOST,
                port: process.env.PORT
            })

            // Define global type
            global.ObjectId = mongoose.Types.ObjectId

            // Add event hooker to handle response on development environment
            server.events.on('response', (request) => {
                if(process.env.NODE_ENV === 'development') {
                    console.log("API CALLED:", request.url)
                }
            })

            // Add rendering plug-in
            await server.register(Vision)

            // Add view engine
            await server.views({
                engines: { html: Handlebars },
                relativeTo: __dirname,
                path: path.join(__dirname, '../views')
            })

            // Start server
            await server.start()

            // Print server endpoint
            console.log('Server is running on %s', server.info.uri)
        }
        catch(error) {
            // Print error and force exit process
            console.error(error)
            process.exit(1)
        }
    }
}

export default Server