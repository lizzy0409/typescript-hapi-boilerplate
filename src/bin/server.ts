import 'dotenv/config'
import Hapi from '@hapi/hapi'
import mongoose from 'mongoose'
import Handlebars from 'handlebars'
import Vision from '@hapi/vision'
import path from 'path'

class Server {
    init = async () => {
        try {
            const server = new Hapi.Server({
                host: process.env.HOST,
                port: process.env.PORT
            })

            global.ObjectId = mongoose.Types.ObjectId

            server.events.on('response', (request) => {
                if(process.env.NODE_ENV === 'development') {
                    console.log("API CALLED:", request.url)
                }
            })

            await server.register(Vision)
        }
        catch(error) {
            console.error(error)
            process.exit(1)
        }
    }
}

export default Server