import axios from "axios";
const endpoint = `http://localhost:4000/`
const usePost = async(url,data) => {
try {
    const loginCredintial = await axios.post(String(endpoint+url),data)
    return [loginCredintial]

} catch (error) {
    console.log(error);
}
}