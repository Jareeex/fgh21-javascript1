const printSegitiga = 5; 
function cetakSegitiga(num) {
        for (var i = num; i >= 1; i--) {
        var row = '';       
        for (var j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
cetakSegitiga(printSegitiga);
