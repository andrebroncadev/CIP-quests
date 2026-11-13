-- Schema exclusivo do formulário de levantamento de requisitos do CiP.
create extension if not exists pgcrypto;

create table if not exists public.cip_responses (
  id uuid primary key default gen_random_uuid(),
  respondent_name text not null check (char_length(trim(respondent_name)) between 2 and 150),
  respondent_role text not null check (char_length(trim(respondent_role)) between 2 and 150),
  answers jsonb not null check (jsonb_typeof(answers) = 'object'),
  form_version text not null default '1.0',
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.cip_responses enable row level security;

-- O formulário público pode somente enviar novas respostas.
-- Não concedemos SELECT, UPDATE ou DELETE ao navegador.
revoke all on table public.cip_responses from anon, authenticated;
grant insert on table public.cip_responses to anon, authenticated;

drop policy if exists "Public can submit CiP questionnaire" on public.cip_responses;
create policy "Public can submit CiP questionnaire"
  on public.cip_responses
  for insert
  to anon, authenticated
  with check (
    char_length(trim(respondent_name)) between 2 and 150
    and char_length(trim(respondent_role)) between 2 and 150
    and jsonb_typeof(answers) = 'object'
  );

comment on table public.cip_responses is
  'Respostas do questionário público de levantamento de requisitos do projeto CiP. Acesso público restrito a INSERT.';
