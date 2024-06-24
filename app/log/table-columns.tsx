'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import EditExerciseLogForm from './edit-exercise-log-form';
import { deleteExercise } from './actions';
import { toast } from '@/components/ui/use-toast';
import { blackOps } from '@/lib/constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

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
      const [isEditFormOpen, setIsEditFormOpen] = useState(false);
      const exercise = row.original;

      return (
        <Sheet open={isEditFormOpen} onOpenChange={setIsEditFormOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="size-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              sideOffset={10}
              align="start"
              className="space-y-4 py-3"
            >
              <DropdownMenuItem asChild className="w-full cursor-pointer">
                <SheetTrigger asChild className="text-left">
                  <Button>Edit</Button>
                </SheetTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="w-full cursor-pointer"
                onClick={() => handleDelete(exercise.id)}
              >
                <Button variant={'destructive'}>Delete</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <EditExerciseLogForm
            exerciseData={exercise}
            setIsEditFormOpen={setIsEditFormOpen}
          />
        </Sheet>
      );
    },
  },
  {
    accessorKey: 'exercise',
    header: 'Exercise',
    cell: ({ row }) => {
      const exercise = row.getValue('exercise') as string;
      const formatted = exercise
        .split(' ')
        .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
        .join(' ');
      return <div>{formatted}</div>;
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
