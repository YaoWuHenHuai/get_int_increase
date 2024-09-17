function get_int_increase(array){
        let uid; let uid_array = []; let max;
        for (let i = 0; array.length > i ;i++){
                console.log(array[i]);
                uid = array[i];
                console.log("uid:", uid);
                out_num = uid.match(/(\d+)/); //uid.split('d') //could also work
                console.log("number:" , out_num);
                out_num = parseInt(out_num);
                console.log(out_num, "number_is:" , Number.isInteger(out_num));
                uid_array.push(out_num);
        }
        console.log("output array:" , uid_array);
        max = uid_array[0];
        console.log("uid_array length:" ,  uid_array.length);
        for (let i = 0; uid_array.length > i; i++){
                console.log("current iteration:" , uid_array[i]);
                console.log("current max:" , max);
                if (uid_array[i] > max){
                        max = uid_array[i];
                }
        }
        console.log("Max:" , max);
        max++;
        uid = "uid" + max;
        console.log("new_value:", uid);
        return max;
}
