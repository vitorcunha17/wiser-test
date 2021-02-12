const getMoney = (str) => {
  return parseInt(str.replace(/[\D]+/g, ''));
};

const formatReal = (int) => {
  let tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, '.$1');

  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}), ([0-9]{2}$)/g, '.$1,$2');
  }

  return tmp;
};

export const currencyStringToFloat = (str) => {
  return parseFloat(formatReal(getMoney(str)));
};
export const currencyFloatToString = (money) => {
  return money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
