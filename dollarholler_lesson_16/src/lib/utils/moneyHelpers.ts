export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
  if (!lineItems) return 0;
  return lineItems.reduce((preValue, curValue) => preValue + curValue.amount, 0);
};

export const centsToDollars = (cents: number): string => {
  const dollars = cents / 100;
  const addDecimals = twoDecimals(dollars);
  return addThousandSeparator(addDecimals);
};

export const twoDecimals = (myNum: number): string => {
  return myNum.toFixed(2);
};

export const addThousandSeparator = (myNum: string): string => {
  return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
