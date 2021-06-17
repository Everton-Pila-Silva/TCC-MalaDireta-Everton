function aaa(file){
const arq = document.getElementById('conv');
const reader = new FileReader();
 reader.readAsDataURL(arq.files[0]);
	reader.onload = function (){
  // Aqui temos a sua imagem convertida em string em base64. console.log(reader.result);
  		console.log("reader.result");
  			alert("deu certin");
}}