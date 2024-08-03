import axios from "axios";

export const FetchAPI = async()=>{
    const {data} = await axios.get("https://cms.samespace.com/items/songs");
    return data;
};

