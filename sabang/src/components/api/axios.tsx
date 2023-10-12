import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.102.137:3001'
});

// baseURL asli : http://192.168.102.137:3001
// baseURL backup : http://192.168.102.10:3001