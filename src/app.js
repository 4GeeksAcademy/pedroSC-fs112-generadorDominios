import "./style.css";

window.onload = function () {
  let pronombres = ['mi', 'tu', 'el', 'la', 'nuestro', 'vuestro', 'su'];
  let adjetivos = ['alegre', 'rapido', 'pequeño', 'inteligente', 'triste', 'oscuro', 'brillante', 'extraño'];
  let sustantivos = ['perro', 'ciudad', 'libro', 'arbol', 'ordenador', 'guitarra', 'coche', 'zapato'];
  let extensiones = ['.com', '.es', '.en', '.io', '.org', '.net', '.info', '.gob'];

  const contenedor = document.getElementById("lista-de-dominios");
  let listaDeDominios = '';

  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        for (let extension of extensiones) {
          let dominio = 'www.' + pronombre + adjetivo + sustantivo + extension;
          listaDeDominios += dominio + '\n';
        }
      }
    }
  }

  contenedor.textContent = listaDeDominios;
};