import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { blackOps } from '@/lib/constants';
import { cn } from '@/lib/utils';

type Workout = {
  type: string;
  exercises: {
    exercise: string;
    sets: number;
    reps: number[];
  }[];
};

export default function WorkoutTable({ workout }: { workout: Workout[] }) {
  return (
    <>
      {workout.map((w) => {
        const tableHeaders = ['Exercise', 'Sets', 'Reps'];

        return (
          <div key={w.type} className="max-w-xl w-full mx-auto lg:mx-0">
            <h2
              className={`${blackOps.className} text-xl text-center lg:text-2xl mb-4`}
            >
              Workout{' '}
              <span
                className={cn(
                  w.type === 'A' && 'text-red-500',
                  w.type === 'B' && 'text-blue-500'
                )}
              >
                {w.type}
              </span>
            </h2>

            <Table className="rounded border">
              <TableHeader>
                <TableRow className="bg-muted">
                  {tableHeaders.map((header) => (
                    <TableHead
                      key={header}
                      className={cn(
                        'text-lg',
                        header !== 'Exercise' && 'text-center'
                      )}
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {w.exercises.map((exercise, index) => (
                  <TableRow key={index} className="h-16">
                    <TableCell className="capitalize">
                      {exercise.exercise}
                    </TableCell>
                    <TableCell className="text-center">
                      {exercise.sets}
                    </TableCell>
                    <TableCell className="text-center">
                      {exercise.reps.join(' - ')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      })}
    </>
  );
}
