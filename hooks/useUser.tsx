import { createClient } from '@/utils/supabase/server';

export default async function useUser(userId: string) {
  const supabase = createClient();
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return data;
}

// import { useQuery } from '@tanstack/react-query';
// import supabaseBrowser from '@/utils/supabase/client';

// const initialUser = {
//   created_at: '',
//   display_name: '',
//   email: '',
//   id: '',
//   image_url: '',
// };

// export default function useUser() {
//   return useQuery({
//     queryKey: ['user'],
//     queryFn: async () => {
//       const supabase = supabaseBrowser();
//       const { data } = await supabase.auth.getSession();

//       if (data.session?.user) {
//         // fetch user information from profiles table
//         const { data: user } = await supabase
//           .from('profiles')
//           .select('*')
//           .eq('id', data.session.user.id)
//           .single();
//         return user;
//       }
//       return initialUser;
//     },
//     staleTime: Infinity,
//     // initialData: initialUser,
//   });
// }
