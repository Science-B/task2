export function displayDate(initialState, mins) {
  const arr = initialState.split(":");
  const hours = arr[0];
  const minutes = arr[1];
  const date = new Date(2022, 9, 15, hours, minutes);
  date.setUTCMinutes(date.getMinutes() + 50);
  return date.getHours() + ":" + date.getMinutes();
}
