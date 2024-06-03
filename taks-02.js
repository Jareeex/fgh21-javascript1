function hitungRataRataUN(indonesia, inggris, matematika, ipa) {
    var rataRata = (indonesia + inggris + matematika + ipa) / 4;
    return rataRata;
}

function konversiGrade(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return 'A';
    } else if (nilai >= 80 && nilai <= 89) {
        return 'B';
    } else if (nilai >= 70 && nilai <= 79) {
        return 'C';
    } else if (nilai >= 60 && nilai <= 69) {
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
