function hitungRataRataUN(indonesia, inggris, mtk, ipa) {
    var rataRata = (indonesia + inggris + mtk + ipa) / 4;
    return rataRata;
}

function konversiGrade(rataRata) {
    if (rataRata >= 90 && nilai <= 100) {
        return 'A';
    } else if (rataRata >= 80 && rataRata <= 89) {
        return 'B';
    } else if (rataRata >= 70 && rataRata <= 79) {
        return 'C';
    } else if (rataRata >= 60 && rataRata <= 69) {
        return 'D';
    } else {
        return 'E';
    }
}

const bahasaIndonesia = 90;
const bahasaInggris = 89;
const mtk = 80;
const ipa = 69;

var rataRata = hitungRataRataUN(bahasaIndonesia, bahasaInggris, mtk, ipa);
var grade = konversiGrade(rataRata);

console.log("Rata-rata UN: " + rataRata);
console.log("Grade: " + grade);
