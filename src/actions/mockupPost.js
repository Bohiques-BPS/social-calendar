import AxiosRequest from '../utils/AxiosRequest'


export const getList = () => {
    /*
    author: "Alejandro Escamilla"
    download_url: "https://picsum.photos/id/1/5616/3744"
    height: 3744
    id: "1"
    url: "https://unsplash.com/photos/LNRyGwIJr5c"
    width: 5616
    */
    const request = {
        method: 'get',
        url: `/list`,
    };
    return AxiosRequest(request)
}