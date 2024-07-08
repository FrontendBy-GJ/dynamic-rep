'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Database } from '@/types/supabase';
import { CirclePlus } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import ExericseLogFormContent from './exercise-log-form-content';
import { useState } from 'react';
import { getFormData } from './actions';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

type Exercise = Database['public']['Tables']['ExerciseLogs']['Row'];

export type FormProps = {
  exercise: Exercise['exercise'];
  type: Exercise['type'];
  rep_goal: Exercise['rep_goal'];
  sets: Exercise['sets'];
  weight_per_set: { weight: number }[];
  reps_per_set: { reps: number }[];
  total_reps: number | null;
  notes: string | null;
};

export default function ExerciseLogForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    register,
    clearErrors,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>({
    defaultValues: {
      exercise: '',
      type:
        'None' ||
        'A' ||
        'B' ||
        'Upper 1' ||
        'Lower 1' ||
        'Upper 2' ||
        'Lower 2',
      rep_goal: 0 || null,
      sets: '' as unknown as number,
      notes: '',
      weight_per_set: [
        {
          weight: '' as unknown as number,
        },
      ],
      reps_per_set: [
        {
          reps: '' as unknown as number,
        },
      ],
    },
  });

  const {
    fields: weightFields,
    append: addWeight,
    remove: removeWeight,
  } = useFieldArray({
    control,
    name: 'weight_per_set',
  });

  const {
    fields: repsFields,
    append: addReps,
    remove: removeReps,
  } = useFieldArray({
    control,
    name: 'reps_per_set',
  });

  const onSubmit = async (values: FormProps) => {
    const weightPerSet = values.weight_per_set.map((val) => ({
      weight: Number(val.weight),
    }));
    const repsPerSet = values.reps_per_set.map((val) => ({
      reps: Number(val.reps),
    }));

    const repsPerSetValues = repsPerSet.map((val) => val.reps);

    const totalReps = repsPerSetValues.reduce((total, reps) => total + reps, 0);

    values = {
      exercise: values.exercise.trim(),
      sets: Number(values.sets),
      rep_goal: Number(values.rep_goal),
      weight_per_set: weightPerSet,
      reps_per_set: repsPerSet,
      total_reps: totalReps,
      type: values.type,
      notes: values.notes,
    };

    if (
      !values.exercise ||
      !values.sets ||
      !values.rep_goal ||
      !values.weight_per_set ||
      !values.reps_per_set ||
      !values.type
    ) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
      });
      return;
    }
    try {
      await getFormData(values);
      setIsFormOpen(false);
      reset();
      toast({ title: 'Success', description: 'Exercise added successfully' });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: `Error submitting form: ${(error as Error).message}`,
      });
    }
  };

  return (
    <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
      <SheetTrigger asChild className="w-full sm:w-auto">
        <Button className="flex items-center gap-2">
          <CirclePlus aria-hidden="true" aria-label="Add Exercise" /> Add
          Exercise
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll w-full md:w-auto">
        <SheetHeader>
          <SheetTitle>Log Exercise</SheetTitle>
          <SheetDescription>
            Enter exercise name, sets, rep goal, weight used, and reps
            performed.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ExericseLogFormContent
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
            weightFields={weightFields}
            addWeight={addWeight}
            removeWeight={removeWeight}
            repsFields={repsFields}
            addReps={addReps}
            removeReps={removeReps}
            clearErrors={clearErrors}
            setValue={setValue}
          />
        </form>
      </SheetContent>
    </Sheet>
  );
}
