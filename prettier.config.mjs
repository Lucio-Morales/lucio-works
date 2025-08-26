/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  // 👇 reglas recomendadas
  semi: true, // agrega ; al final → más claro al leer
  singleQuote: true, // usa '' en lugar de ""
  trailingComma: 'all', // agrega coma final en objetos/arrays → facilita diffs
  bracketSpacing: true, // { foo: bar } en vez de {foo:bar}
  arrowParens: 'always', // (x) => x  en vez de x => x → más claro
  printWidth: 100, // ancho máximo de línea → legible sin scroll
  tabWidth: 2, // 2 espacios por tab → estándar JS
  useTabs: false, // no usar tabs → más consistente entre editores
  proseWrap: 'always', // wrap en markdown → más prolijo
  htmlWhitespaceSensitivity: 'ignore', // ignora espacios en HTML
  endOfLine: 'lf', // evita quilombos de Windows vs Linux
};
