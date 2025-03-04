import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = ({ workouts, onSelectWorkout }) => {
  const events = workouts.map((workout) => ({
    title: 'Workout',
    start: new Date(workout.date),
    end: new Date(workout.date),
    allDay: true,
    resource: workout,
  }));

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => onSelectWorkout(event.resource)}
      />
    </div>
  );
};

export default CalendarView;