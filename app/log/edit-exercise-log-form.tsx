'use client';

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import EditExerciseFormContent from './edit-exercise-form-content';
import { useFieldArray, useForm } from 'react-hook-form';
import { editFormData } from './actions';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { Dispatch, SetStateAction } from 'react';

export type ExerciseDataProps = {
  id: string;
  exercise: string;
  sets: number;
  type: string | null;
  weight_per_set: number[];
  reps_per_set: number[];
  rep_goal: number | null;
  total_reps: number | null;
  notes?: string | null;
};

export type EditFormProps = {
  id: string;
  exercise: string;
  sets: number;
  type: string | null;
  weight_per_set: { weight: number }[];
  reps_per_set: { reps: number }[];
  rep_goal: number | null;
  total_reps: number | null;
  notes?: string | null;
};

export default function EditExerciseLogForm({
  exerciseData,
  setIsEditFormOpen,
}: {
  exerciseData: ExerciseDataProps;
  setIsEditFormOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    register,
    clearErrors,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<EditFormProps>({
    defaultValues: {
      id: exerciseData.id,
      exercise: exerciseData.exercise,
      type: exerciseData.type,
      rep_goal: exerciseData.rep_goal,
      sets: exerciseData.sets,
      notes: exerciseData.notes,
      weight_per_set: exerciseData.weight_per_set.map((weight) => ({
        weight: weight,
      })) as unknown as [],
      reps_per_set: exerciseData.reps_per_set.map((reps) => ({
        reps: reps,
      })) as unknown as [],
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

  const onSubmit = async (values: EditFormProps) => {
    const weightPerSet = values.weight_per_set.map((val) => ({
      weight: Number(val.weight),
    }));
    const repsPerSet = values.reps_per_set.map((val) => ({
      reps: Number(val.reps),
    }));

    const repsPerSetValues = repsPerSet.map((val) => val.reps);

    const totalReps = repsPerSetValues.reduce((total, reps) => total + reps, 0);

    values = {
      id: values.id,
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
      await editFormData(values);
      setIsEditFormOpen(false);
      router.refresh();
      toast({
        title: 'Success',
        description: 'Exercise updated successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: `Error submitting form: ${(error as Error).message}`,
      });
    }
  };

  return (
    <SheetContent className="overflow-y-scroll w-full md:w-auto">
      <SheetHeader>
        <SheetTitle>Edit</SheetTitle>
        <SheetDescription>
          Set the correct reps, sets, weight for this exercise.
        </SheetDescription>
      </SheetHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <EditExerciseFormContent
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
          getValues={getValues}
        />
      </form>
    </SheetContent>
  );
}
