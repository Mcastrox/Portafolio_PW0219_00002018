var arrayNumbers = [10, 8, 9, 5, 3, 78, 23]

Array.prototype.sortNumbers = function(){
    return this.sort(
        function(a,b){
            return a - b
        }
    );
}
console.log(arrayNumbers.sortNumbers())