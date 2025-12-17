let nomor = 1;


function tambahAbsen() {
const nama = document.getElementById('nama').value;
const status = document.getElementById('status').value;
const tanggal = new Date().toLocaleDateString('id-ID');


if (nama === '') {
alert('Nama tidak boleh kosong');
return;
}


const tabel = document.getElementById('tabelAbsen');
const row = tabel.insertRow();


row.insertCell(0).innerText = nomor++;
row.insertCell(1).innerText = nama;
row.insertCell(2).innerText = status;
row.insertCell(3).innerText = tanggal;


document.getElementById('nama').value = '';
}
