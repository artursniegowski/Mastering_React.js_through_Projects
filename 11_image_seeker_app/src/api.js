// this file will be responsible for makign request
// to the unsplash API
import axios from "axios";

const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY_API;
const url = process.env.REACT_APP_UNSPLASH_ENDPOINT_API;

const searchImages = async (searchText) =>{
    const res = await axios.get(
        url,
        {
            headers: {
                Authorization: `Client-ID ${apiKey}`
            },
            params: {
                query: searchText
            }
        }
    );
    // only interested in the urls, which are stored in the results
    // console.log(res.data.results)
    return res.data.results;
};

export default searchImages;