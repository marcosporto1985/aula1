//Mostrar os anos bissextos a partir de 1004 até 2020.

var ano = 1004;
while (ano <= 2020) {
  if (!(ano % 100 == 0) || ano % 400 == 0) {
    document.write(ano + "<br>");
  } else {
    document.write(ano + " nao é bissexto " + "<br>");
  }
  ano = ano + 4;
}
document.write("fim");
