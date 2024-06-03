const printSegitiga = 5; 
function cetakSegitiga(num) {
        for (let i = num; i >= 1; i--) {
        let row = '';       
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
cetakSegitiga(printSegitiga);
