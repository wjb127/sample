-- Supabase 테이블 생성 SQL
-- Supabase 대시보드 > SQL Editor 에서 실행하세요.

create table if not exists subscribers (
  id          uuid default gen_random_uuid() primary key,
  name        text not null,
  email       text not null unique,
  organization text,
  created_at  timestamp with time zone default now()
);

-- 이메일 중복 방지 인덱스
create unique index if not exists subscribers_email_idx on subscribers (email);

-- RLS(Row Level Security) 활성화
alter table subscribers enable row level security;

-- 익명 사용자: INSERT만 허용 (폼 제출)
create policy "Allow anonymous insert"
  on subscribers for insert
  to anon
  with check (true);

-- 인증된 사용자(관리자): 전체 조회 허용
create policy "Allow authenticated select"
  on subscribers for select
  to authenticated
  using (true);
