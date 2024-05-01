const { program } = require("commander");

program
  .name("flp")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .option("-h, --help", "Muestra la ayuda")
  .option("-e, --env", "Imprime una variable de entorno")
  .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse(process.argv);
const options = program.opts();

//Logic here
if (options.help) {
  program.outputHelp();
} else if (options.env) {
  console.log(process.env.PATH);
} else if (options.pizzaType) {
  console.log(`- ${options.pizzaType}`);
} else {
  console.log("No se ha especificado ninguna opción");
}
