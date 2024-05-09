'use server';

import { createClient } from '@/utils/supabase/server';
import { FormProps } from './exercise-log-form';
import { EditFormProps } from './edit-exercise-log-form';
import { revalidatePath } from 'next/cache';

export const getFormData = async (values: FormProps) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const { error } = await supabase
      .from('ExerciseLogs')
      .insert([
        {
          profile_id: user?.id,
          exercise: values.exercise,
          type: values.type,
          sets: values.sets,
          rep_goal: values.rep_goal,
          total_reps: values.total_reps,
          weight_per_set: values.weight_per_set.map((val) => val.weight),
          reps_per_set: values.reps_per_set.map((val) => val.reps),
        },
      ])
      .select();

    if (error) {
      throw new Error('Failed to add exercise');
    }
  } catch (error) {
    console.error('Error adding exercise:', (error as Error).message);
    throw error;
  }
};

export const editFormData = async (values: EditFormProps) => {
  const supabase = createClient();

  try {
    const { error } = await supabase
      .from('ExerciseLogs')
      .update({
        updated_at: new Date().toISOString(),
        exercise: values.exercise,
        type: values.type,
        sets: values.sets,
        rep_goal: values.rep_goal,
        total_reps: values.total_reps,
        weight_per_set: values.weight_per_set.map((val) => val.weight),
        reps_per_set: values.reps_per_set.map((val) => val.reps),
      })
      .eq('id', values.id)
      .select();

    if (error) {
      throw new Error('Failed to update exercise');
    }
  } catch (error) {
    console.error('Error updating exercise:', (error as Error).message);
    throw error;
  }
};

export const deleteExercise = async (id: string) => {
  const supabase = createClient();
  try {
    const { error } = await supabase.from('ExerciseLogs').delete().eq('id', id);

    if (error) {
      return { success: false, message: 'Failed to delete exercise' };
    } else {
      revalidatePath('/log');
    }
    return { success: true };
  } catch (error) {
    console.error('Error deleting exercise:', (error as Error).message);
    return { success: false, message: 'An unexpected error occurred' };
  }
};
