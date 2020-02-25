export default function reducer(status={},action){
    switch(action.type){
        case "login":
             return status ={userInfo:action.payload} 
        case "logout":
            console.log("리덕스 로그아웃 액션")
            console.log(action.payload)
            return

        default:
            console.log("기본값")

        return status;
    }
 
}