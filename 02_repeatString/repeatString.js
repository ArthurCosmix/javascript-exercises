const repeatString = function(text, time) {
    let result 
    if(time < 0){
        result = "ERROR"
        return result
    }else if (time == 0 || text == ""){
        result = ""
        return result
    }else{
        let result = text
        for(let i = 0; i < (time - 1); i++){
            result += text
        }
        return result
    }

};

// Do not edit below this line
module.exports = repeatString;
