const workTime = function (timeString) {
  const [hours, minutes] = timeString.split(':');
  return hours * 60 + Number(minutes);
};

const miteengTime = function (workSrart, workEnd, meetStart, meetTime) {
  const workStartMin = workTime(workSrart);
  const workendtMin = workTime(workEnd);
  const meetStartMin = workTime(meetStart);

  console.log(meetStartMin >= workStartMin && meetStartMin + meetTime <= workendtMin)
};


miteengTime('08:00', '17:30', '16:00', 90);
