import { useState } from 'react';
import EditExerciseLogForm, {
  ExerciseDataProps,
} from './edit-exercise-log-form';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export default function ActionsTableCell({
  exercise,
  onClick,
}: {
  exercise: ExerciseDataProps;
  onClick: (id: string) => Promise<void>;
}) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

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
            onClick={() => onClick(exercise.id)}
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
}
