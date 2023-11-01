/**
 * root node call defines
 */
import 'dotenv/config'
import Server from './src/bin/server'

const server: Server = new Server()

server.init()