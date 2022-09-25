import AxiosRequest from '../utils/AxiosRequest'


export const getList = () => {
    
    
    
    const request = {
        method: 'get',
        url: `/list`,
    };
    return AxiosRequest(request)
}