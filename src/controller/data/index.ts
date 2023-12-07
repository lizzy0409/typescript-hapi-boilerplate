// ** import custom type
import { ResponsePayload, RequestPayload } from "../../types"

class DataController {
    /**
     * 
     * @param {RequestPayload} payload 
     * @returns {ResponsePayload}
     */
    static checkResponse = (payload: RequestPayload): ResponsePayload => {
        return { data: payload }
    }
}

export default DataController