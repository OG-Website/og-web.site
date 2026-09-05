create index if not exists academy_messages_sender_id_idx
  on public.academy_messages (sender_id, created_at);
create index if not exists academy_messages_recipient_id_idx
  on public.academy_messages (recipient_id, created_at);
create index if not exists academy_auth_events_user_id_idx
  on public.academy_auth_events (user_id, created_at);
