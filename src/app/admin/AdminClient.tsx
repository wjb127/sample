"use client";

import { useState } from "react";

type Subscriber = {
  id: string;
  name: string;
  email: string;
  organization: string | null;
  created_at: string;
};

const ADMIN_PASSWORD = "1234";

export default function AdminClient({
  subscribers,
}: {
  subscribers: Subscriber[];
}) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  /* ── 로그인 처리 ── */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("비밀번호가 올바르지 않습니다.");
    }
  };

  /* ── 로그인 화면 ── */
  if (!authenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-light dark:bg-background-dark px-4">
        <div className="w-full max-w-sm rounded-2xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-8 shadow-lg">
          {/* 로고 */}
          <div className="mb-6 flex flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="material-icons text-white text-2xl">
                admin_panel_settings
              </span>
            </div>
            <h1 className="mt-3 text-xl font-bold text-text-light dark:text-white">
              관리자 로그인
            </h1>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
              Stories of Impact Admin
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-text-light dark:text-text-dark"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••"
                autoFocus
                className="w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-background-dark px-4 py-2.5 text-sm text-text-light dark:text-text-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                <span className="material-icons text-sm">error_outline</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              로그인
              <span className="material-icons text-base">login</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── 검색 필터 ── */
  const filtered = subscribers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      (s.organization ?? "").toLowerCase().includes(search.toLowerCase())
  );

  /* ── 대시보드 화면 ── */
  return (
    <div className="min-h-screen bg-surface-light dark:bg-background-dark">
      {/* 헤더 */}
      <header className="border-b border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <span className="material-icons text-white text-lg">
                admin_panel_settings
              </span>
            </div>
            <div>
              <h1 className="text-base font-bold text-text-light dark:text-white">
                Admin Dashboard
              </h1>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                Stories of Impact
              </p>
            </div>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="flex items-center gap-1.5 rounded-lg border border-border-light dark:border-border-dark px-3 py-1.5 text-xs font-medium text-text-muted-light dark:text-text-muted-dark transition-colors hover:border-primary hover:text-primary"
          >
            <span className="material-icons text-sm">logout</span>
            로그아웃
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* 통계 카드 */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm">
            <div className="mb-1 flex items-center gap-2">
              <span className="material-icons text-primary text-xl">group</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                전체 신청자
              </span>
            </div>
            <p className="text-3xl font-extrabold text-text-light dark:text-white">
              {subscribers.length}
            </p>
          </div>
          <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm">
            <div className="mb-1 flex items-center gap-2">
              <span className="material-icons text-primary text-xl">
                business
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                소속 기관 입력
              </span>
            </div>
            <p className="text-3xl font-extrabold text-text-light dark:text-white">
              {subscribers.filter((s) => s.organization).length}
            </p>
          </div>
          <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark p-5 shadow-sm">
            <div className="mb-1 flex items-center gap-2">
              <span className="material-icons text-primary text-xl">
                calendar_today
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                최근 신청일
              </span>
            </div>
            <p className="text-lg font-bold text-text-light dark:text-white">
              {subscribers.length > 0
                ? new Date(subscribers[0].created_at).toLocaleDateString(
                    "ko-KR"
                  )
                : "-"}
            </p>
          </div>
        </div>

        {/* 테이블 */}
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark shadow-sm overflow-hidden">
          {/* 테이블 헤더 */}
          <div className="flex flex-col gap-3 border-b border-border-light dark:border-border-dark px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-semibold text-text-light dark:text-white">
              신청자 목록{" "}
              <span className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {filtered.length}명
              </span>
            </h2>
            {/* 검색 */}
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark text-sm">
                search
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="이름, 이메일, 기관 검색"
                className="w-full rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark py-2 pl-9 pr-4 text-sm text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-60"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <span className="material-icons text-4xl text-text-muted-light dark:text-text-muted-dark">
                inbox
              </span>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                {search ? "검색 결과가 없습니다." : "아직 신청자가 없습니다."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark text-left">
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                      이름
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                      이메일
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                      소속 기관
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">
                      신청일
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                  {filtered.map((sub) => (
                    <tr
                      key={sub.id}
                      className="transition-colors hover:bg-primary/5 dark:hover:bg-primary/10"
                    >
                      <td className="px-6 py-4 font-medium text-text-light dark:text-white">
                        {sub.name}
                      </td>
                      <td className="px-6 py-4 text-text-muted-light dark:text-text-muted-dark">
                        <a
                          href={`mailto:${sub.email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {sub.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-text-muted-light dark:text-text-muted-dark">
                        {sub.organization ?? (
                          <span className="text-xs italic opacity-50">
                            미입력
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-text-muted-light dark:text-text-muted-dark">
                        {new Date(sub.created_at).toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
