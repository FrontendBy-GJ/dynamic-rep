import Navbar from '@/components/navbar';
import { createClient } from '@/utils/supabase/server';
import ExerciseLogForm from './exercise-log-form';
import LogTable from './table';
import { tableColumns } from './table-columns';

export default async function LogPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: logs } = await supabase
    .from('ExerciseLogs')
    .select('*')
    .eq('profile_id', user?.id!)
    .order('created_at', { ascending: false });

  return (
    <>
      {/* <Navbar /> */}
      <div>
        {!logs?.length ? (
          <div className="flex justify-center mt-[40vh]">
            <ExerciseLogForm />
          </div>
        ) : (
          <div
          // className="px-4 md:px-6 xl:px-0 max-w-7xl mx-auto"
          >
            <LogTable columns={tableColumns} data={logs} />
          </div>
        )}
      </div>
    </>
  );
}
