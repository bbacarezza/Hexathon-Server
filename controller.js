export const getResponse = (msg) => {
  const userWords = msg.split(" ");

  const wordsToQuery = checkIncludes(userWords, words);

  const query = selectQuery(wordsToQuery);

  switch (query) {
    case "saldo":
      return "Sos pobre, $0";
    case "tarjetaSaldo":
      return "Tu saldo disponible es $1500";
    default:
      return "Tu tarjeta vence el 09-03-23";
  }
};

const checkIncludes = (arr1, arr2) => {
  return arr1.filter((word) => arr2.indexOf(word) !== -1);
};

const selectQuery = (filteredWords) => {
  let result;
  let max = 0;

  const arrQSaldo = [checkIncludes(filteredWords, querySaldo).length, "saldo"];
  const arrQSaldoTarjeta = [
    checkIncludes(filteredWords, queryTarjetaSaldo).length,
    "tarjetaSaldo",
  ];
  const arrQVencTarjeta = [
    checkIncludes(filteredWords, queryTarjetaVencimiento).length,
    "tarjetaVenc",
  ];

  const valueNames = [arrQSaldo, arrQSaldoTarjeta, arrQVencTarjeta];

  valueNames.forEach((elem) => {
    if (elem[0] > max) {
      max = elem[0];
      result = elem[1];
    }
  });

  return result;
};

const words = [
  "saldo",
  "cuanto",
  "es",
  "disponible",
  "cuando",
  "vence",
  "vencimiento",
  "tarjeta",
  "quiero",
  "saber",
  "decime",
  "guita",
];

const querySaldo = ["saldo", "guita"];

const queryTarjetaSaldo = ["saldo", "disponible", "tarjeta"];

const queryTarjetaVencimiento = ["cuando", "vence", "vencimiento", "tarjeta"];
