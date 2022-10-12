export function classNames(...classes) {
  const string = [];
  classes.forEach((item) => {
    if (typeof item === 'string' && item.length > 0) {
      string.push(item);
    } else if (Array.isArray(item)) {
      string.push(classNames(...item));
    } else if (typeof item === 'object') {
      Object.keys(item).forEach((key) => {
        if (item[key]) {
          string.push(key);
        }
      });
    }
  });

  return string.join(' ');
}
