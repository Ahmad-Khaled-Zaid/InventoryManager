import axios from "axios"
export const getAuthToken = () => {
    const accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
        return null
    }
    return {
        headers: { Authorization: `Bearer ${accessToken}`}
    }
}

export const logOut = () => {
    localStorage.removeItem("accessToken")
    window.location.href = '/Login'
}

export const authHandler = async () => {
    const headers = getAuthToken()
    if (!headers) {
        return null
    }

    const response = await axios.get("https://inventer-ms.herokuapp.com/user/me", headers).catch(e => { })
    if (response) {
        return response.data
        // console.log(response)
    }
    return null
}