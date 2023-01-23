const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const formatPrice = price => {
  return formatter.format(price);
};

function getDeltaTimeFromNow(date) {
  return new Intl.DateTimeFormat().format(new Date(date));
}

function formatDate(date) {
  if (date) {
    return new Intl.DateTimeFormat().format(new Date(date));
  }
}

function changeDatetoISOString(date) {
  const [withoutTime] = new Date(date).toISOString().split('T');
  return withoutTime;
}

function formatDateTime(date) {
  if (date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles',
    }).format(new Date(date));
  }
}

function getDeltaDate(date, delta) {
  let tempDate = new Date(date);
  tempDate.setDate(tempDate.getDate() + delta);
  return tempDate;
}

export {
  getDeltaTimeFromNow,
  formatDate,
  formatPrice,
  getDeltaDate,
  formatDateTime,
  changeDatetoISOString,
};
