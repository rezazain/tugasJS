var celcius = 34;
var kelvin = 5 / 5;
var rumus = 273.15;
var fahreinheit = 9 / 5;
var rf = 32;
var reamur = 4 / 5;

var hasil = kelvin * celcius + rumus;
document.write(
  " 13. Suhu kelvin : 5/5 * 34°C  + 273.15 = ",
  hasil,
  " K" + "<br>"
);
console.log(kelvin * celcius + rumus);

var hasil = fahreinheit * celcius + rf;
document.write(" Suhu fahreinheit : 9/5 * 34°C  + 32 =", hasil, "°F" + "<br>");
console.log(fahreinheit * celcius + rf);

var hasil = reamur * celcius;
document.write(" Suhu reamur : 4/5 * 34°C =", hasil, "°R" + "<br>");
console.log(reamur * celcius);
