
// My solution
function checkForFactor(base, factor){
    if (base % factor == 0){
        return true;
    }else{
        return false
    }
}

// Best practices
function checkForFactor(base, factor){
    return base % factor === 0; 
}
