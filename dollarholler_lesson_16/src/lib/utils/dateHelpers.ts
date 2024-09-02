import { isBefore } from 'date-fns';
export const convertDate = (myDate: string): string => {
  //break aprt the date
  const [year, month, day] = splitDate(myDate);
  console.log(day);
  return `${parseInt(month)} / ${parseInt(day)} / ${year}`;
};

export const isLate = (myDate: string): boolean => {
  const [year, month, date] = splitDate(myDate);
  const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date));
  const today = new Date();
  return isBefore(dueDate, today);
};

export const splitDate = (myDate: string): Array<string> => {
  return myDate.split('-');
};
