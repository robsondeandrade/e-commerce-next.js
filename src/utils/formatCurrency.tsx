export const formatCurrency = (value: string | number) => {
  try {
    let formattedValue = Number(value).toFixed(2).toString();

    var partes = formattedValue.split(".");

    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return partes.join(",");
  } catch (error) {
    return value.toString();
  }
};
