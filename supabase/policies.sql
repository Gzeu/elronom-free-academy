alter table modules enable row level security;
alter table lessons enable row level security;
alter table quiz_questions enable row level security;
alter table quiz_answers enable row level security;
alter table user_profiles enable row level security;
alter table user_progress enable row level security;
alter table certificates enable row level security;

-- Public read for curriculum
create policy "read_modules_public" on modules for select using (true);
create policy "read_lessons_public" on lessons for select using (true);
create policy "read_quiz_public" on quiz_questions for select using (true);
create policy "read_answers_public" on quiz_answers for select using (true);

-- Authenticated users manage their own progress/profile
create policy "manage_own_progress" on user_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "manage_own_profile" on user_profiles
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Certificates: user can see and insert their own
create policy "read_own_certificates" on certificates
  for select using (auth.uid() = user_id);
create policy "insert_own_certificates" on certificates
  for insert with check (auth.uid() = user_id);