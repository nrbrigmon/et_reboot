export const set = (name, object) => {
    try {
        localStorage.setItem(name,JSON.stringify(object));  
    } catch (e) {
        console.log("ERROR SETTING LOCAL STORAGE");
        console.log(e)
    }
}

export const get = (name) => {
    return JSON.parse(localStorage.getItem(name));
}

export const itemExists = (name) => {    
	if (localStorage.getItem(name)){
        return true;
    } else {
        return false;
    }
}