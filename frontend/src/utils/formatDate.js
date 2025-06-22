const formatDate = (ts, format) => {
  const d = new Date(ts);
  let result = '???';
  switch (format.toLowerCase()) {
    case 'time-absolute':
      result = d.toLocaleTimeString('de-de', {
        hour12: false,
        hour: 'numeric',
        minute: '2-digit',
      });
      break;
    case 'time-relative':
      result = '?missing';
  }
  return result;
};
export default formatDate;
