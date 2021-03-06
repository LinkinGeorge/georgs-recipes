/* eslint-disable camelcase, no-use-before-define */

export const beautifulNumber = (num) => {
  // convert number to a string that uses fraction symbols
  if (num % 1 === 0) {
    return num.toString();
  }
  const remainder = num % 1;
  const quotient = num - remainder;
  switch (remainder) {
    case 0.25:
      return quotient !== 0 ? `${quotient.toString()} \xBC` : '\xBC';
    case 0.5:
      return quotient !== 0 ? `${quotient.toString()} \xBD` : '\xBD';
    case 0.75:
      return quotient !== 0 ? `${quotient.toString()} \xBE` : '\xBE';
    default:
      return parseFloat(num.toPrecision(2)).toString();
  }
};

const getQuantityString = (value) => {
  const match = value.match(/\d+(\.|,|\/|-)?\d*/i);
  return match ? match[0] : null;
};

export const removeQuantity = (value) => {
  const match = value.match(/\d+(\.|,|\/|-)?\d*/i);
  return match ? value.replace(match[0], '').trim() : value;
};

// get the quantity as a number (is -1 when there is none)
export const getQuantity = (value) => {
  // check if there is a quantity
  if (!getQuantityString(value)) {
    return -1;
  }
  // check if the number is a fraction, such as 1/2
  const fractRegex = /\d+[/]\d+/i;
  const fraction = value.match(fractRegex);
  // check if the number has a comma to be a decimal, such as 1,2
  const commaRegex = /\d+[,]\d+/i;
  const comma = value.match(commaRegex);
  // check if it's a number range, such as 1-2
  const rangeRegex = /\d+[-]\d+/i;
  const range = value.match(rangeRegex);
  // check if it's a regular int or float, such as 1 or 1.2
  const numRegex = /\d+\.?\d*/i;

  if (fraction) {
    const numerator = +fraction[0].match(/^\d/i)[0];
    const denominator = +fraction[0].match(/\d+$/i)[0];
    return numerator / denominator;
  } if (comma) {
    const commaNum = +comma[0].replace(',', '.');
    return commaNum;
  } if (range) {
    const from = +range[0].match(/^\d/i)[0];
    const to = +range[0].match(/\d+$/i)[0];
    return (from + to) / 2;
  }
  // regular and valid number
  return +value.match(numRegex);
};

export const getBaseMetricQuantity = (ingr) => {
  const kiloMetric = /\d+\s?(kg|l)\s+/i;
  if (!ingr.match(kiloMetric)) {
    return getQuantity(ingr);
  }
  return getQuantity(ingr) * 1000;
};

export const convertToBaseMetric = (ingr) => {
  const match = ingr.match(/\d+\s?(kg|l)\s+/i);
  if (!match) return ingr;
  if (match[1] === 'kg') return ingr.replace(/kg/i, 'g');
  if (match[1] === 'l') return ingr.replace(/l/i, 'ml');
  return ingr;
};

const convertMetrics = (ingr, quantity) => {
  // check if the unit is metric
  const validMetric = /\d+\s?(g|kg|ml|l)\s+/i;

  if (!ingr.match(validMetric)) {
    return ingr.replace(getQuantityString(ingr), quantity.toString());
  }
  const metricString = ingr.match(validMetric)[0];

  // check which unit and if quantity reaches breakpoint
  if (metricString.match(/[^k][g]/i) && quantity >= 1000) {
    return ingr
      .replace(getQuantityString(ingr), quantity / 1000)
      .replace(/[g]/i, 'kg');
  } if (metricString.match(/[k][g]/i) && quantity < 1) {
    return ingr
      .replace(getQuantityString(ingr), quantity * 1000)
      .replace(/[k][g]/i, 'g');
  } if (metricString.match(/[m][l]/i) && quantity >= 1000) {
    return ingr
      .replace(getQuantityString(ingr), quantity / 1000)
      .replace(/[m][l]/i, 'l');
  } if (metricString.match(/[^m][l]/i) && quantity < 1) {
    return ingr
      .replace(getQuantityString(ingr), quantity * 1000)
      .replace(/[l]/i, 'ml');
  }
  return ingr.replace(getQuantityString(ingr), quantity.toString());
};

const adjustEnding = (str, qty, newQty) => {
  // regex for german specific quantity units
  const multUnit_n = /\d\s?((prise|zehe|stange|dose|flasche|tasse|messerspitze|päckchen|scheibe|tüte)\w*)/i;
  const multUnit_en = /\d\s?((packung)\w*)/i;
  const glas = /\d\s?(glas|gläser)/i;
  // regex for pluralization of -e ending words (to -en)
  const name_e = /\w*e$/i;
  const name_en = /\w*en$/i;

  const isNowSingle = qty > 1 && newQty <= 1;
  const isNowMultiple = qty <= 1 && newQty > 1;
  if (str.match(multUnit_n)) {
    // quantity unit that pluralizes to -n
    const unit = str.match(multUnit_n)[1];
    if (isNowSingle) {
      return str.replace(unit, unit.slice(0, -1));
    } if (isNowMultiple) {
      return str.replace(unit, `${unit}n`);
    }
    return str;
  } if (str.match(multUnit_en) != null) {
    // quantity unit that pluralizes to -en
    const unit = str.match(multUnit_en)[1];
    if (isNowSingle) {
      return str.replace(unit, unit.slice(0, -2));
    } if (isNowMultiple) {
      return str.replace(unit, `${unit}en`);
    }
    return str;
  } if (str.match(glas) != null) {
    // special quantity unit: Glas
    const unit = str.match(glas)[1];
    if (isNowSingle) {
      return str.replace(unit, 'Glas');
    } if (isNowMultiple) {
      return str.replace(unit, 'Gläser');
    }
    return str;
  } if (str.match(name_e) != null) {
    // ingredient ending with -e (pluralize to -en)
    const name = str.match(name_e)[0];
    if (isNowMultiple) {
      return str.replace(name, `${name}n`);
    }
    return str;
  } if (str.match(name_en)) {
    // ingredient ending with -en (singularize to -e)
    const name = str.match(name_en)[0];
    if (isNowSingle) {
      return str.replace(name, name.slice(0, -1));
    }
    return str;
  }
  // no word adjustment needed
  return str;
};

export const adjustQuantity = (ingredient, newQuantity, format = true) => {
  const quantity = getQuantity(ingredient);
  const converted = convertMetrics(ingredient, newQuantity);
  let name = ingredient;
  if (quantity > 0) {
    const convertedQty = Number(getQuantityString(converted).replace(',', '.'));
    const formatted = format ? beautifulNumber(convertedQty) : convertedQty;
    name = converted
      .replace(getQuantityString(converted), formatted)
      .replace('.', ',');
  }
  if (quantity !== newQuantity) {
    name = adjustEnding(name, quantity, newQuantity);
  }
  return name;
};

export default function calcServings(ingredientName, origServings, newServings) {
  const quantity = getQuantity(ingredientName);
  const newQuantity = quantity * (newServings / origServings);
  return adjustQuantity(ingredientName, newQuantity);
}
