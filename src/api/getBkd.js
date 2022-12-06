import axios from "axios";

async function getBkd() {
    const id = "most-popular?page=1"
    try {
        const response = await axios({
            url: process.env.REACT_APP_BKD_URL + id,
            method: "GET",
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}
export default getBkd;