import WorkoutTable from './workout-table';

const workout = [
  {
    type: 'A',
    exercises: [
      { exercise: 'bench press', sets: 3, reps: [8, 15] },
      { exercise: 'pullover', sets: 3, reps: [8, 15] },
      { exercise: 'overhead press', sets: 3, reps: [8, 15] },
      { exercise: 'bicep curl', sets: 3, reps: [12, 20] },
      { exercise: 'skullcrusher', sets: 3, reps: [15, 20] },
      { exercise: 'read delt fly', sets: 3, reps: [15, 20] },
      { exercise: 'lateral raise', sets: 3, reps: [15, 20] },
      { exercise: 'front squat', sets: 3, reps: [8, 15] },
      { exercise: 'romanian deadlift', sets: 3, reps: [8, 15] },
      { exercise: 'calf raise', sets: 3, reps: [15, 25] },
    ],
  },
  {
    type: 'B',
    exercises: [
      { exercise: 'overhead press', sets: 3, reps: [8, 15] },
      { exercise: 'dumbbell row', sets: 3, reps: [8, 15] },
      { exercise: 'inlcine bench press', sets: 3, reps: [8, 15] },
      { exercise: 'hammer curl', sets: 3, reps: [12, 20] },
      { exercise: 'tricep kickback', sets: 3, reps: [12, 20] },
      { exercise: 'read delt fly', sets: 3, reps: [15, 20] },
      { exercise: 'lateral raise', sets: 3, reps: [15, 20] },
      { exercise: 'lunges', sets: 3, reps: [12, 15] },
      { exercise: 'front squat', sets: 3, reps: [8, 15] },
      { exercise: 'calf raise', sets: 3, reps: [15, 25] },
    ],
  },
];

const schedule1 = [
  { day: 'Monday', activity: 'workout A' },
  { day: 'Tuesday', activity: 'workout B' },
  { day: 'Wednesday', activity: 'rest' },
  { day: 'Thursday', activity: 'workout A' },
  { day: 'Friday', activity: 'workout B' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'rest' },
];
const schedule2 = [
  { day: 'Monday', activity: 'workout A' },
  { day: 'Tuesday', activity: 'rest' },
  { day: 'Wednesday', activity: 'workout B' },
  { day: 'Thursday', activity: 'rest' },
  { day: 'Friday', activity: 'workout A' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'workout B' },
];

export default function WorkoutPage() {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-8 lg:gap-6 lg:flex-row lg:justify-between">
        <WorkoutTable workout={workout} />
      </div>

      <h3 className="my-6 text-xl text-center">Schedule examples</h3>
      <div className="flex flex-col gap-12 sm:gap- sm:flex-row justify-between items- sm:max-w-md mx-auto">
        <ul className="space-y-4 list-decimal list-inside">
          {schedule1.map((day, index) => (
            <li key={index}>
              {day.day} - {day.activity}
            </li>
          ))}
        </ul>

        <ul className="space-y-4 list-decimal list-inside">
          {schedule2.map((day, index) => (
            <li key={index}>
              {day.day} - {day.activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
