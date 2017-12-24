import axios from 'axios'
import '../config/http'

export const doDataPost = (dataUrl, data) => axios.post(process.env.HTTP_PREFIX + dataUrl, data)
