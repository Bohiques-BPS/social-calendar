import axios from "axios"

export const uploadSingleFile = async file => {
    const form = new FormData()
    form.set('image', file)
    return await axios.post(`${process.env.REACT_APP_BACKEND_URL}/files`, form)
}