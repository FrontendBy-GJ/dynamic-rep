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
    link?: string;
    note?: string;
  }[];
};

export default function WorkoutTable({ workout }: { workout: Workout[] }) {
  return (
    <>
      {workout.map((w) => {
        const tableHeaders = ['Exercise', 'Sets', 'Reps'];

        return (
          <div key={w.type} className="w-full">
            <h2
              className={`${blackOps.className} text-xl text-center md:text-2xl mb-4`}
            >
              Workout:{' '}
              <span
                className={cn(
                  (w.type === 'A' ||
                    w.type === 'Upper 1' ||
                    w.type === 'Lower 1') &&
                    'text-red-500',
                  (w.type === 'B' ||
                    w.type === 'Upper 2' ||
                    w.type === 'Lower 2') &&
                    'text-blue-500'
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
                    <TableCell className="capitalize text-balance">
                      {exercise.link ? (
                        <>
                          {exercise.exercise}{' '}
                          {exercise.note && (
                            <span className="text-muted-foreground">
                              ( {exercise.note} )
                            </span>
                          )}
                          <a
                            tabIndex={0}
                            className="text-muted-foreground w-fit group/link"
                            href={exercise.link}
                            target="_blank"
                          >
                            ({' '}
                            <span className="group-visited/link:text-purple-800 group-hover/link:underline group-active/link:text-black group-focus-visible/link:underline">
                              how to
                            </span>{' '}
                            )
                          </a>
                        </>
                      ) : (
                        <>
                          {exercise.exercise}{' '}
                          {exercise.note && (
                            <span className="text-muted-foreground">
                              ( {exercise.note} )
                            </span>
                          )}
                        </>
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {exercise.sets}
                    </TableCell>
                    <TableCell className="text-center w-[120px]">
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
