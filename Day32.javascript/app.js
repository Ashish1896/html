// letarr=[8,9,10,1,2,3,4,5,6,7];
// letnum=5;
// //elementslargerthananumbernum
// function getElements(arr,num){
//     for(leti=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//             }}}
//             getElements(arr,num);
            let str ="abcdabcdabcdabcdabcd";
            function getUnique(str){
                let ans="";
            
            for(let i=0;i<str.length;i++){
                let currChar=str[i];
                if(ans.indexOf(currChar)== -1){
                    ans+= churrChar;
                }
            }
            return  ans;
        }
        getUnique(str);