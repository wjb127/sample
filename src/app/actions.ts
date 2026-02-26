"use server";

import { createClient } from "@supabase/supabase-js";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitWaitlist(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const organization = (formData.get("organization") as string)?.trim();

  if (!name || !email) {
    return { status: "error", message: "이름과 이메일은 필수 항목입니다." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "올바른 이메일 형식을 입력해주세요." };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error } = await supabase.from("subscribers").insert({
    name,
    email,
    organization: organization || null,
  });

  if (error) {
    if (error.code === "23505") {
      return { status: "error", message: "이미 등록된 이메일입니다." };
    }
    return {
      status: "error",
      message: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }

  return { status: "success", message: "등록이 완료되었습니다! 곧 연락드리겠습니다." };
}
