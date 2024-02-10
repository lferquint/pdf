function convertInArray(data){
    if(typeof(data) == 'string'){
        let newData = [];
        newData.push(data);
        return newData;
    }else{
        return data;
    }
}
export default convertInArray;