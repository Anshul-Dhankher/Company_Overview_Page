//Logic to convert a timeStamp/Date into a human readable.
export const getYearsAgo = (date: Date) => {
  const currentTime = new Date();
  const timeDiff = currentTime.valueOf() - date.valueOf();
  const seconds = Math.floor(timeDiff / 1000);

  let result = "";

  if (seconds < 60) {
    result = `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    result = `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    result = `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (seconds < 2592000) {
    // 30 days
    const days = Math.floor(seconds / 86400);
    result = `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (seconds < 31536000) {
    // 365 days
    const months = Math.floor(seconds / 2592000); // 30 * 24 * 60 * 60
    result = `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(seconds / 31536000); // 365 * 24 * 60 * 60
    result = `${years} year${years !== 1 ? "s" : ""} ago`;
  }
  return result;
};

//checking is the value is defined or not
export const isDefined = <T>(value: T | undefined | null): value is T => {
  if (value === null) {
    return false;
  }
  if (value === undefined) {
    return false;
  }
  if ((typeof value).toLowerCase() === "number") {
    if (value === Infinity || value === -Infinity) return false;

    return !isNaN(value as number);
  }
  return true;
};
