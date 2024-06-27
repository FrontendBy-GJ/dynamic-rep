import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { SheetFooter } from '@/components/ui/sheet';
import { LoaderCircle, Trash2 } from 'lucide-react';
import { Fragment } from 'react';
import {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { EditFormProps } from './edit-exercise-log-form';
import { Textarea } from '@/components/ui/textarea';

type EditFormContentProps = {
  register: UseFormRegister<EditFormProps>;
  errors: FieldErrors<EditFormProps>;
  isSubmitting: boolean;
  weightFields: FieldArrayWithId<EditFormProps, 'weight_per_set', 'id'>[];
  addWeight: UseFieldArrayAppend<EditFormProps, 'weight_per_set'>;
  removeWeight: UseFieldArrayRemove;
  repsFields: FieldArrayWithId<EditFormProps, 'reps_per_set', 'id'>[];
  addReps: UseFieldArrayAppend<EditFormProps, 'reps_per_set'>;
  removeReps: UseFieldArrayRemove;
  clearErrors: UseFormClearErrors<EditFormProps>;
  setValue: UseFormSetValue<EditFormProps>;
  getValues: UseFormGetValues<EditFormProps>;
};

export default function EditExerciseFormContent({
  register,
  errors,
  isSubmitting,
  weightFields,
  addWeight,
  removeWeight,
  repsFields,
  addReps,
  removeReps,
  clearErrors,
  setValue,
  getValues,
}: EditFormContentProps) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <Label htmlFor="exercise" className="text-lg">
            Exercise
          </Label>
          {errors.exercise?.message && (
            <p className="text-sm text-red-500">{errors.exercise.message}</p>
          )}
        </div>
        <Input
          disabled={isSubmitting}
          id="exercise"
          placeholder="E.g. Overhead Press"
          {...register('exercise', {
            required: 'Exercise is required',
            pattern: {
              value: /^[a-zA-Z0-9\s]*$/,
              message:
                'Exercise must contain only letters, numbers, and spaces.',
            },
          })}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <Label htmlFor="type" className="text-lg">
            Type
          </Label>
          {errors.type?.message && (
            <p className="text-sm text-red-500">{errors.type.message}</p>
          )}
        </div>
        <Select
          disabled={isSubmitting}
          value={getValues('type') || undefined}
          onValueChange={(type) => {
            if (type) {
              clearErrors('type');
              setValue(
                'type',
                type as
                  | 'None'
                  | 'A'
                  | 'B'
                  | 'Upper 1'
                  | 'Lower 1'
                  | 'Upper 2'
                  | 'Lower 2'
              );
            }
          }}
        >
          <SelectTrigger id="type">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            {['A', 'B', 'Upper 1', 'Lower 1', 'Upper 2', 'Lower 2', 'None'].map(
              (type) => (
                <SelectItem
                  key={type}
                  value={type}
                  {...register('type', {
                    required: 'Please Select Type',
                  })}
                >
                  {type}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <Label htmlFor="rep_goal" className="text-lg">
            Rep Goal
          </Label>
          {errors.rep_goal?.message && (
            <p className="text-sm text-red-500">{errors.rep_goal.message}</p>
          )}
        </div>
        <Input
          disabled={isSubmitting}
          type="number"
          id="rep_goal"
          {...register('rep_goal', {
            min: { value: 1, message: 'Must be greater than zero' },
            required: 'Enter a rep goal',
          })}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <Label htmlFor="sets" className="text-lg">
            Sets
          </Label>
          {errors.sets?.message && (
            <p className="text-sm text-red-500">{errors.sets.message}</p>
          )}
        </div>
        <Input
          disabled={isSubmitting}
          type="number"
          id="sets"
          {...register('sets', {
            min: { value: 1, message: 'Must be greater than zero' },
            required: 'Enter number of sets',
          })}
        />
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        {weightFields.map((field, index) => (
          <Fragment key={field.id}>
            <div className="flex items-center gap-4">
              <Label htmlFor={`weight${index + 1}`} className="text-lg">
                {index > 0 ? 'Set' : 'Weight - Set'} {index + 1}
              </Label>
              {errors.weight_per_set &&
                errors.weight_per_set[index]?.weight?.message && (
                  <p className="text-sm text-red-500">
                    {errors.weight_per_set[index]?.weight?.message}
                  </p>
                )}
            </div>
            <div className="flex items-center gap-4">
              <Input
                disabled={isSubmitting}
                type="number"
                id={`weight${index + 1}`}
                {...register(`weight_per_set.${index}.weight`, {
                  min: { value: 1, message: 'Must be greater than zero' },
                  required: `Enter weight for set ${index + 1}`,
                })}
              />
              {index > 0 && (
                <Button
                  aria-label="Delete"
                  type="button"
                  variant={'secondary'}
                  size={'icon'}
                  onClick={() => removeWeight(index)}
                  disabled={isSubmitting}
                >
                  <Trash2 aria-hidden="true" aria-label="Delete" />
                </Button>
              )}
            </div>
          </Fragment>
        ))}
        <Button
          type="button"
          variant={'secondary'}
          onClick={() => addWeight({ weight: '' as unknown as number })}
          disabled={isSubmitting}
        >
          Add Weight
        </Button>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        {repsFields.map((field, index) => (
          <Fragment key={field.id}>
            <div className="flex items-center gap-4">
              <Label htmlFor={`reps${index + 1}`} className="text-lg">
                {index > 0 ? 'Set' : 'Reps - Set'} {index + 1}
              </Label>
              {errors.reps_per_set &&
                errors.reps_per_set[index]?.reps?.message && (
                  <p className="text-sm text-red-500">
                    {errors.reps_per_set[index]?.reps?.message}
                  </p>
                )}
            </div>
            <div className="flex items-center gap-4">
              <Input
                disabled={isSubmitting}
                type="number"
                id={`reps${index + 1}`}
                {...register(`reps_per_set.${index}.reps`, {
                  min: { value: 1, message: 'Must be greater than zero' },
                  required: `Enter reps performed for set ${index + 1}`,
                })}
              />
              {index > 0 && (
                <Button
                  aria-label="Delete"
                  type="button"
                  variant={'secondary'}
                  size={'icon'}
                  onClick={() => removeReps(index)}
                  disabled={isSubmitting}
                >
                  <Trash2 aria-hidden="true" aria-label="Delete" />
                </Button>
              )}
            </div>
          </Fragment>
        ))}
        <Button
          type="button"
          variant={'secondary'}
          onClick={() => addReps({ reps: '' as unknown as number })}
          disabled={isSubmitting}
        >
          Add Reps
        </Button>
      </div>

      <Textarea
        id="notes"
        {...register('notes')}
        placeholder="Add notes"
        className="resize-none mt-4"
        disabled={isSubmitting}
      />

      <SheetFooter>
        <Button type="submit" disabled={isSubmitting} className="w-full mt-4">
          {!isSubmitting ? (
            'Save Changes'
          ) : (
            <LoaderCircle className="animate-spin" />
          )}
        </Button>
      </SheetFooter>
    </div>
  );
}
