"use client";

import { Suspense } from "react";
import LoginForm from "@/components/modules/auth/login-form";
import PBLoading from "@/components/ui/PBLoading";

const LoginPage = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <PBLoading />
          </div>
        }
      >
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
            <LoginForm />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default LoginPage;
