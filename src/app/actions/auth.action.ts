// app/actions/auth.action.ts
"use server";

import { AuthService } from "../../../services/auth.services";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await AuthService.login(email, password);

  // side effects
  // set cookies / session here

  redirect("/post"); // ✅
}
