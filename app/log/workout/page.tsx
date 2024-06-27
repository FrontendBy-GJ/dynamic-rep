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
import {
  blackOps,
  FULLBODY_A_B_WORKOUT,
  FULLBODY_A_B_SCHEDULE_1,
  FULLBODY_A_B_SCHEDULE_2,
  UPPER_LOWER_SPLIT,
  UPPER_LOWER_SPLIT_SCHEDULE,
} from '@/lib/constants';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function WorkoutPage() {
  return (
    <Tabs defaultValue="fullbody" className="mt-6">
      <TabsList>
        <TabsTrigger value="fullbody">Fullbody</TabsTrigger>
        <TabsTrigger value="upper-lower">Upper/Lower</TabsTrigger>
      </TabsList>
      <TabsContent value="fullbody">
        <FullbodyWorkout />
      </TabsContent>
      <TabsContent value="upper-lower">
        <UpperLowerWorkout />
      </TabsContent>
    </Tabs>
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
                (s.activity === 'A' ||
                  s.activity === 'Upper 1' ||
                  s.activity === 'Lower 1') &&
                  'text-red-500',
                (s.activity === 'B' ||
                  s.activity === 'Upper 2' ||
                  s.activity === 'Lower 2') &&
                  'text-blue-500',
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

const FullbodyWorkout = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <WorkoutTable workout={FULLBODY_A_B_WORKOUT} />
      </div>

      <h3
        className={cn(
          'my-6 text-xl text-center lg:text-2xl capitalize',
          blackOps.className
        )}
      >
        Schedule examples
      </h3>
      <div className="flex flex-col gap-12 sm:flex-row">
        <ScheduleTable schedule={FULLBODY_A_B_SCHEDULE_1} />
        <ScheduleTable schedule={FULLBODY_A_B_SCHEDULE_2} />
      </div>
    </div>
  );
};

const UpperLowerWorkout = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <WorkoutTable workout={UPPER_LOWER_SPLIT} />
      </div>

      <h3
        className={cn(
          'my-6 text-xl text-center lg:text-2xl capitalize',
          blackOps.className
        )}
      >
        Schedule examples
      </h3>
      <div className="max-w-3xl mx-auto">
        <ScheduleTable schedule={UPPER_LOWER_SPLIT_SCHEDULE} />
      </div>
    </div>
  );
};
