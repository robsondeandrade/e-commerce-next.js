export const formatCurrency = (value: string | number) => {
  try {
    value = value.toString();

    var partes = value.split(".");

    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return partes.join(",");
  } catch (error) {
    return value;
  }
};
