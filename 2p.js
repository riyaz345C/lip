let x =[7,8,9,2]

const twoSum =(arr,target)=>{
    let len = arr.length
    for(i=0;i<len;i++){
        for(j=0;j<len -1;j++){
            if(arr[i]<arr[j]){
                let t=arr[i]
                arr[i]=arr[j]
                arr[j]=t
            }
        }
    }
    let left = 0;
    let right = len - 1
    // while(left<right){
    //     let sum = arr[left] + arr[right]
    //     if(sum === target){
    //         return [left,right,arr]
    //     }
    //     else if(sum<target){
    //         left++
    //         return 'l'
    //     }
    //     else{
    //         right--
    //     }
    // }
    return [arr,null]
}