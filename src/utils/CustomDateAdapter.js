import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function CustomDateAdapter(options) {
  const adapter = new AdapterDateFns(options);

  const constructDayObject = (day) => ({ charAt: () => day });

  return {
    ...adapter,

    getWeekdays() {
      // Feel free to replace this with your custom value
      // e.g const customWeekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
      const customWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      return customWeekdays.map((day) => constructDayObject(day));
    },
  };
}
