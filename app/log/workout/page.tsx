import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import WorkoutTable from './workout-table';
import { cn } from '@/lib/utils';
import { blackOps, schedule1, schedule2, workout } from '@/lib/constants';

export default function WorkoutPage() {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-8 lg:gap-6 lg:flex-row lg:justify-between">
        <WorkoutTable workout={workout} />
      </div>

      <h3
        className={cn(
          'my-6 text-xl text-center lg:text-2xl capitalize',
          blackOps.className
        )}
      >
        Schedule examples
      </h3>
      <div className="flex flex-col gap-12 sm:gap- sm:flex-row justify-between items- sm:max-w- mx-">
        <ScheduleTable schedule={schedule1} />
        <ScheduleTable schedule={schedule2} />
      </div>
    </div>
  );
}

const ScheduleTable = ({
  schedule,
}: {
  schedule: {
    day: string;
    activity: string;
  }[];
}) => {
  const tableHeaders = ['Day', 'Workout'];

  return (
    <Table className="rounded border">
      <TableHeader>
        <TableRow className="bg-muted">
          {tableHeaders.map((header) => (
            <TableHead
              key={header}
              className={cn('text-lg', header !== 'Day' && 'text-center')}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedule.map((s, index) => (
          <TableRow key={index}>
            <TableCell>{s.day}</TableCell>
            <TableCell
              className={cn(
                blackOps.className,
                'capitalize text-center',
                s.activity === 'A' && 'text-red-500',
                s.activity === 'B' && 'text-blue-500',
                s.activity === 'rest' && 'text-orange-500'
              )}
            >
              {s.activity}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
