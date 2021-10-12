export let accessToken = ""

export const setAccessToken = (s:string) =>{
    accessToken = s;
}


export const getAccessToke = () =>{
    return accessToken;
}