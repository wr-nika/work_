const formatDate = (date, template) => {
  const weekNames = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресение",
  ];
  const monthNames = [
    "Января",
    "Февраля",
    "Март",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let dateY = date.getDate();
  let day = date.getDay();
  let monthNumber = date.getMonth();
  let currentMonthName = monthNames[monthNumber];
  let year = date.getFullYear();
  var weekAll = dateY / 7;
  var week = Math.ceil(weekAll);
  let dayOfWeek = weekNames[day - 1];

  return `${dayOfWeek},${week} неделя ${currentMonthName},${year} года`;
};
