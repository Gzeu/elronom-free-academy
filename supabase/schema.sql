-- Modules and lessons
create table if not exists modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text,
  position int not null default 0,
  created_at timestamp with time zone default now()
);

create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid references modules(id) on delete cascade,
  title text not null,
  slug text unique not null,
  content text default '',
  excerpt text default '',
  position int not null default 0,
  created_at timestamp with time zone default now()
);

-- Quizzes
create table if not exists quiz_questions (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references lessons(id) on delete cascade,
  question text not null
);

create table if not exists quiz_answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid references quiz_questions(id) on delete cascade,
  answer text not null,
  is_correct boolean not null default false
);

-- User progress
create table if not exists user_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique, -- link to auth.users.id if desired via trigger
  display_name text,
  created_at timestamp with time zone default now()
);

create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  lesson_id uuid references lessons(id) on delete cascade,
  completed boolean not null default false,
  score int default 0,
  updated_at timestamp with time zone default now()
);

-- Certificates
create table if not exists certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  module_id uuid references modules(id) on delete cascade,
  issued_at timestamp with time zone default now()
);