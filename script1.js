function maximum(array)
{
    var val = array[0];
    for (var i = 1; i < array.length; i++)
    {
        if (array[i] > val) 
        val = array[i];
    }
    return val;
}
a = maximum([10, 21, 35, 11, 50])
console.log(a);