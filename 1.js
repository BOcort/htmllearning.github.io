function dataini() {
    const angka = document.getElementById('angka').value;;
    let hasil = "";
    if (angka !== 0) {
        if (angka % 3 === 0) {
            hasil = hasil + "Fizz"; 
        }
    
        else if (angka % 5 === 0) {
            hasil += "Buzz";
        } else {
            hasil += "not found"
        }
        
    }
    

    const tulis = document.getElementById('hasil');
    const fontype = document.createElement('h4');
    fontype.innerHTML  = hasil;
    tulis.append(fontype);


}
