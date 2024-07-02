import { Bebas_Neue, Black_Ops_One, Nunito } from 'next/font/google';

export const blackOps = Black_Ops_One({ subsets: ['latin'], weight: '400' });

export const nunito = Nunito({ subsets: ['latin'], weight: ['500', '600'] });

export const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

export const protectedPaths = ['/log', '/log/workout', '/log/stats'];

export const FULL_BODY_A_B_WORKOUT = [
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

export const FULL_BODY_A_B_SCHEDULE_1 = [
  { day: 'Monday', activity: 'A' },
  { day: 'Tuesday', activity: 'B' },
  { day: 'Wednesday', activity: 'rest' },
  { day: 'Thursday', activity: 'A' },
  { day: 'Friday', activity: 'B' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'rest' },
];
export const FULL_BODY_A_B_SCHEDULE_2 = [
  { day: 'Monday', activity: 'A' },
  { day: 'Tuesday', activity: 'rest' },
  { day: 'Wednesday', activity: 'B' },
  { day: 'Thursday', activity: 'rest' },
  { day: 'Friday', activity: 'A' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'B' },
];

export const UPPER_LOWER_SPLIT = [
  {
    type: 'Upper 1',
    exercises: [
      { exercise: 'Barbell Bench Press', sets: 3, reps: [6, 10] },
      { exercise: 'Barbell/Dumbbell Bent Over Row', sets: 3, reps: [8, 12] },
      { exercise: 'Dumbbell Overhead Press', sets: 3, reps: [8, 12] },
      { exercise: 'Dumbbell/Machine Chest Fly', sets: 3, reps: [10, 15] },
      {
        exercise: 'Barbell/Dumbbell Overhead Tricep Extension',
        sets: 3,
        reps: [8, 12],
        note: 'OR any tricep exercise',
      },
      {
        exercise: 'Reverse / Hammer / Wrist curl',
        sets: 3,
        reps: [10, 20],
        note: 'Pick one',
      },
    ],
  },
  {
    type: 'Lower 1',
    exercises: [
      { exercise: 'Barbell Squat', sets: 3, reps: [4, 6] },
      { exercise: 'Pull-up (Bodyweight OR Weighted)', sets: 3, reps: [5, 8] },
      { exercise: 'Romanian Deadlifts', sets: 3, reps: [6, 10] },
      {
        exercise: 'Resistance Band / Machine Leg Extension',
        sets: 3,
        reps: [10, 15],
        link: 'https://www.youtube.com/watch?v=bhMWEIAKzs4',
      },
      {
        exercise: 'Barbell/Dumbbell Bicep Curl',
        sets: 3,
        reps: [8, 12],
        note: 'Standing, Incline, Preacher, Concentration curl',
      },
      { exercise: 'Barbell/Dumbbell Upright Row', sets: 3, reps: [10, 20] },
    ],
  },
  {
    type: 'Upper 2',
    exercises: [
      { exercise: 'Barbell overhead press', sets: 3, reps: [6, 10] },
      {
        exercise: 'Meadows row',
        sets: 3,
        reps: [8, 12],
        link: 'https://www.youtube.com/watch?v=g5Wlw-k8fek',
      },
      { exercise: 'Dumbbell Bench Press', sets: 3, reps: [8, 12] },
      {
        exercise: 'Dumbbell/Barbell Upright Row',
        sets: 3,
        reps: [10, 15],
        note: 'OR any shoulder exercise',
      },
      { exercise: 'Dumbbell/Barbell Skull Crusher', sets: 3, reps: [8, 12] },
      {
        exercise: 'Reverse / Hammer / Wrist curl',
        sets: 3,
        reps: [10, 20],
        note: 'Pick one, Different from Upper 1',
      },
    ],
  },
  {
    type: 'Lower 2',
    exercises: [
      { exercise: 'Barbell Deadlift', sets: 3, reps: [4, 6] },
      {
        exercise: 'T-Bar/Landmine Row',
        sets: 3,
        reps: [8, 12],
        link: 'https://www.youtube.com/watch?v=tgSL6yDCjmo',
      },
      { exercise: 'Front Squat', sets: 3, reps: [6, 10] },
      {
        exercise: 'Resistance Band / Machine Leg Curl',
        sets: 3,
        reps: [10, 15],
        link: 'https://www.youtube.com/watch?v=9nEyLG-mjxg',
      },
      {
        exercise: 'Barbell/Dumbbell Bicep Curl',
        sets: 3,
        reps: [6, 10],
        note: 'Different from Lower 1',
      },
      { exercise: 'Dumbbell Lateral Raise', sets: 3, reps: [10, 20] },
    ],
  },
];

export const UPPER_LOWER_SPLIT_SCHEDULE = [
  { day: 'Monday', activity: 'Upper 1' },
  { day: 'Tuesday', activity: 'Lower 1' },
  { day: 'Wednesday', activity: 'rest' },
  { day: 'Thursday', activity: 'Upper 2' },
  { day: 'Friday', activity: 'Lower 2' },
  { day: 'Saturday', activity: 'rest' },
  { day: 'Sunday', activity: 'rest' },
];
