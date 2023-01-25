function dataini() {
    const angka = document.getElementById('angka').value;;
    let hasil = "";

    if (angka % 3 === 0) {
        hasil = hasil + "Fizz"; 
    }

    if (angka % 5 === 0) {
        hasil += "Buzz";
    }

    const tulis = document.getElementById('hasil');
    const fontype = document.createElement('h4');
    fontype.innerHTML  = hasil;
    tulis.append(fontype);


}