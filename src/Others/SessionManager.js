const SESSION = "SESSION";

const FLICK = "FLICK";

export class SessionManager {
    static saveAccessToken(jsonData) {
        localStorage.setItem(SESSION, JSON.stringify(jsonData))
    }

    static getAccessToken() {
        return JSON.parse(localStorage.getItem(SESSION))?.access_token;
    }

    static getUserName() {
        return JSON.parse(localStorage.getItem(SESSION))?.user.name;
    }
    static getUserId() {
        return JSON.parse(localStorage.getItem(SESSION))?.user._id;
    }
    static getUserPicture() {
        return JSON.parse(localStorage.getItem(SESSION))?.user.picture;
    }

    static saveWishedProduct(item) {
        var favs = JSON.parse(localStorage.getItem(FLICK))?JSON.parse(localStorage.getItem(FLICK)):[];
        var flag = true;
        for(let i=0; i<favs.length; i++){
            if(favs[i]._id==item._id){
                flag = false;
                favs.splice(i, 1);
            }
        }
        if(flag)
        favs.push(item)
        localStorage.setItem(FLICK, JSON.stringify(favs));
        console.log(JSON.parse(localStorage.getItem(FLICK)))
    }

    // static saveWishedProduct(jsonData) {
    //     var favs = JSON.parse(localStorage.getItem(SIEMENS))?JSON.parse(localStorage.getItem(SIEMENS)):[];
    //     var flag = true;
    //     for(let i=0; i<favs.length; i++){
    //         if(favs[i]===jsonData){
    //             flag = false;
    //             favs.splice(i,1)
    //         }
    //     }
    //     if(flag)
    //         favs.push(jsonData)
    //     localStorage.setItem(SIEMENS, JSON.stringify(favs));
    //     console.log(JSON.parse(localStorage.getItem(SIEMENS)))
    // }

}