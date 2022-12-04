import axios from "axios";

async function getBkd() {
    
    const id = "characters"
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