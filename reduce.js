const reduce = function (nums, fn, init) {
    let result = init;
    for(let i =0; i<nums.length; i++){
        result = fn(result, nums[i])
    }
    return result
}

console.log(reduce([1,2,3,4],(acc, curr)=>acc+curr,0))