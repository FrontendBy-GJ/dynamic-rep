import { Bebas_Neue, Black_Ops_One, Nunito } from 'next/font/google';

export const blackOps = Black_Ops_One({ subsets: ['latin'], weight: '400' });

export const nunito = Nunito({ subsets: ['latin'], weight: ['500', '600'] });

export const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const protectedPaths = ['/log', '/log/workout', '/log/stats'];

export const workout = [
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

export const schedule1 = [
  { day: 'Monday', activity: 'A' },
  { day: 'Tuesday', activity: 'B' },
  { day: 'Wednesday', activity: 'rest' },
  { day: 'Thursday', activity: 'A' },
  { day: 'Friday', activity: 'B' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'rest' },
];
export const schedule2 = [
  { day: 'Monday', activity: 'A' },
  { day: 'Tuesday', activity: 'rest' },
  { day: 'Wednesday', activity: 'B' },
  { day: 'Thursday', activity: 'rest' },
  { day: 'Friday', activity: 'A' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'B' },
];
