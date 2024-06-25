'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { deleteExercise } from './actions';
import { toast } from '@/components/ui/use-toast';
import { blackOps } from '@/lib/constants';
import ActionsTableCell from './actions-table-cell';

export type TableColumnsProps = {
  id: string;
  created_at: string;
  exercise: string;
  type: string | null;
  rep_goal: number | null;
  sets: number;
  weight_per_set: number[];
  reps_per_set: number[];
  total_reps: number | null;
};

const handleDelete = async (id: string) => {
  const result = await deleteExercise(id);

  if (result.success) {
    toast({
      title: 'Success',
      description: 'Exercise deleted successfully',
    });
  } else {
    console.error('Error:', result.message);
    toast({
      title: 'Error',
      description: result.message,
    });
  }
};

export const tableColumns: ColumnDef<TableColumnsProps>[] = [
  {
    id: 'actions',
    cell: ({ row }) => {
      const exercise = row.original;

      return <ActionsTableCell exercise={exercise} onClick={handleDelete} />;
    },
  },
  {
    accessorKey: 'exercise',
    header: 'Exercise',
    cell: ({ row }) => {
      const exercise = row.getValue('exercise') as string;
      const formattedName = exercise
        .split(' ')
        .map((word) => {
          word.length === 2
            ? (word =
                word.charAt(0).toUpperCase() + word.slice(1).toUpperCase())
            : (word = word.charAt(0).toUpperCase() + word.slice(1));

          return word;
        })
        .join(' ');
      return <div>{formattedName}</div>;
    },
  },
  {
    accessorKey: 'type',
    header: () => <div className="text-center">Type</div>,
    cell: ({ row }) => {
      const type = row.getValue('type') as string;
      return (
        <div
          className={cn(
            blackOps.className,
            'text-lg text-center',
            type === 'A' && 'text-red-500',
            type === 'B' && 'text-blue-500'
          )}
        >
          {type}
        </div>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: ({ column }) => {
      return (
        <Button
          variant={'ghost'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="text-lg"
        >
          Date
          <ArrowUpDown aria-hidden="true" className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const createdAt = row.getValue('created_at') as string;
      return new Date(createdAt).toDateString();
    },
  },
  {
    accessorKey: 'sets',
    header: () => <div className="text-center">Sets</div>,
    cell: ({ row }) => {
      const sets = row.getValue('sets') as number;
      return <div className="text-center">{sets}</div>;
    },
  },
  {
    accessorKey: 'weight_per_set',
    header: () => <div className="text-center">Weight</div>,
    cell: ({ row }) => {
      const weight = row.getValue('weight_per_set') as number[];
      const formatted = weight.join(' / ');
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: 'reps_per_set',
    header: () => <div className="text-center">Reps</div>,
    cell: ({ row }) => {
      const reps = row.getValue('reps_per_set') as number[];
      const formatted = reps.join(' / ');
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: 'rep_goal',
    header: () => <div className="text-center">Rep Goal</div>,
    cell: ({ row }) => {
      const goal = row.getValue('rep_goal') as number;
      return <div className="text-center">{goal === 0 ? '' : goal}</div>;
    },
  },
  {
    accessorKey: 'total_reps',
    header: () => <div className="text-center">Total Reps</div>,
    cell: ({ row }) => {
      const total = row.getValue('total_reps') as number;
      return <div className="text-center">{total}</div>;
    },
  },
];
