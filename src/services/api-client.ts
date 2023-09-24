import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '55023ec0b25341ce80a78126229bf899'
    }
})