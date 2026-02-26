"use client";

import { useActionState } from "react";
import { submitWaitlist, type FormState } from "@/app/actions";

const initialState: FormState = { status: "idle", message: "" };

export default function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(
    submitWaitlist,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <span className="material-icons text-primary text-3xl">check_circle</span>
        </div>
        <p className="text-center text-base font-semibold text-text-light dark:text-white">
          {state.message}
        </p>
        <p className="text-center text-sm text-text-muted-light dark:text-text-muted-dark">
          Stories of Impact 얼리 액세스 명단에 등록되었습니다.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* 이름 */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-text-light dark:text-text-dark"
        >
          이름 <span className="text-primary">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="홍길동"
          className="w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-4 py-2.5 text-sm text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* 이메일 */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-text-light dark:text-text-dark"
        >
          이메일 <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@email.com"
          className="w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-4 py-2.5 text-sm text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* 소속 기관 */}
      <div>
        <label
          htmlFor="organization"
          className="mb-1.5 block text-sm font-medium text-text-light dark:text-text-dark"
        >
          소속 기관{" "}
          <span className="text-text-muted-light dark:text-text-muted-dark font-normal">
            (선택)
          </span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          placeholder="UNICEF Korea"
          className="w-full rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-4 py-2.5 text-sm text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* 에러 메시지 */}
      {state.status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
          <span className="material-icons text-base">error_outline</span>
          {state.message}
        </div>
      )}

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <>
            <span className="material-icons animate-spin text-base">
              autorenew
            </span>
            등록 중...
          </>
        ) : (
          <>
            얼리 액세스 신청하기
            <span className="material-icons text-base">arrow_forward</span>
          </>
        )}
      </button>

      <p className="text-center text-xs text-text-muted-light dark:text-text-muted-dark">
        개인정보는 안전하게 보호되며 마케팅 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
