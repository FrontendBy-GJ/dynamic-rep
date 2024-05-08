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

export default function WorkoutPage() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:justify-between py-8">
      <WorkoutTable workout={workout} />
    </div>
  );
}
