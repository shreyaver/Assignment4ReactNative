
const convertAndFormatDateToLocalTime = (date) => {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };
  const stringDate = (new Date(date) + new Date(date).getTimezoneOffset()).toString();
  const dateArray = stringDate.split(' ');
  const refinedDateArray = [dateArray[2].length === 1 ? `0${dateArray[2]}` : dateArray[2], months[dateArray[1]], dateArray[3]];
  return `${refinedDateArray.join('/')} ${dateArray[4]}`;
};
export default convertAndFormatDateToLocalTime;
