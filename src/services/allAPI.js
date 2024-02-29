import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// first API call will be upload video - store video in http://localhost:3000/videos
//add component upload video to store in http://localhost:3000/videos
export const uploadVideoAPI = async (video)=>{
    // send response to add component
    //commonAPI arguments should be httpMethod , url, body ; POST api call
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}


//get video api called by View component; since all videos are displayed in View Component
export const getAllVideosAPI = async()=>{
    //since we need all videos so there is no need of arguments; GET request is needed
    return await commonAPI("GET", `${SERVER_URL}/videos`,"")
}


//store watch history by videocard to http://localhost:3000/hisory
export const saveHistoryAPI = async(videoDetails)=>{
    //argument is needed; since it is saving POST request is using
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component to http://localhost:3000/hisory
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history to watch component; deleting on the base on id
export const removeHistoryAPI = async(videoId) =>{
    //while deleting we should give body as empty object
    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`,{})
}


//remove a video by videocard
export const removeVideoAPI = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}


//api for saving category to cateory component
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

//get category api to category component
export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category api
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${categoryId}`,{})
}


//category drag and drop
    //get single video api
    export const getAVideoAPI = async (videoId)=>{
        return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
    }

    //updateCategory api
    export const updateCategoryAPI = async(categoryId,updatedCategoryDetails)=>{
        return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
    }

    //getSingleCAtegory api
    export const getSingleCategoryAPI = async(categoryId)=>{
        return await commonAPI("GET", `${SERVER_URL}/categories/${categoryId}`,"")
    }

