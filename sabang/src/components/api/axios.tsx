import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-sabang.xyz.co.id/'
});


// baseURL asli : http://192.168.102.182:3001
// baseURL backup : http://192.168.102.10:3001
// baseUrl sekarang : https://api-sabang.xyz.co.id/