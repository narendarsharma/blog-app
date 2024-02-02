//isLoggedIn
export const isLoggedIn=()=>{
    let data =localStorage.getItem("data");
    if(data!=null) return true;
    else return false;
    
};  

//doLogin=>set to localstorage

export const doLogin=(data,next) =>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
}

//doLogOut =>remove from localStorage

export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
}
//get Current user
export const getCurrentUserDetail=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return false;
    }
};