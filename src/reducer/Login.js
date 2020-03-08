export default function reducer(status={islogin:false},action){
    switch(action.type){
        case "login":
             return status ={userInfo:action.payload,islogin:true} 
        case "logout":
            console.log("리덕스 로그아웃 액션")
            console.log(action.payload)
            return

        default:
        return status;
    }
 
}