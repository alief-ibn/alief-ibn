function myFunction() {
  var nowa = prompt("Masukkan no wa tujuan , nk wa awalan harus 62", "6285348847199");
  var isi = prompt("Masukkan text nya , ubah spasi menjadi %20");
  if (nowa != null) {
    document.getElementById("demo").innerHTML =
    "https://api.whatsapp.com/send?phone=" +nowa+"&text="+isi;
  }
  if (isi != null) {
      document.getElementById("btn-copy");
      "copy"}}
      /*
      */
      
      function copy() {
    document.getElementById("demo").select();
        document.execCommand("copy");
        alert("Text berhasil dicopy");
}