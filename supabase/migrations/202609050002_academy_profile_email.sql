alter table public.academy_profiles add column if not exists email text;
update public.academy_profiles p set email = lower(u.email)
from auth.users u where u.id = p.id and p.email is null;
alter table public.academy_profiles alter column email set not null;
create unique index if not exists academy_profiles_email_unique on public.academy_profiles (lower(email));

create or replace function private.create_academy_profile() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.academy_profiles (id, email, display_name, role)
  values (
    new.id,
    lower(new.email),
    coalesce(nullif(new.raw_user_meta_data ->> 'display_name', ''), split_part(coalesce(new.email, 'Learner'), '@', 1)),
    'learner'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
