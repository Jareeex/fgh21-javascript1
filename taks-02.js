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

var bahasaIndonesia = 85;
var bahasaInggris = 90;
var matematika = 75;
var ipa = 80;

var rataRata = hitungRataRataUN(bahasaIndonesia, bahasaInggris, matematika, ipa);
var grade = konversiGrade(rataRata);

console.log("Rata-rata UN: " + rataRata);
console.log("Grade: " + grade);