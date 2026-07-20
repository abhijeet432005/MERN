import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogIn, AlertCircle } from "lucide-react";
import axios from "../api/axiosConfig";
import { getCurrentUser } from "../App";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Login = () => {
  useDocumentTitle("Log in", "Log in to AURA AI to continue your conversations.");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    setServerError(null);
    setIsSubmitting(true);
    try {
      await axios.post(
        "/auth/login",
        { email: data.email, password: data.password },
        { withCredentials: true },
      );
      await dispatch(getCurrentUser());
      navigate("/");
    } catch (error) {
      setServerError(
        error?.response?.data?.message ||
          "We couldn't sign you in. Check your email and password and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#FAFAFF] px-4 py-10 dark:bg-[#100E19]">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 15% 10%, rgba(109,93,246,0.14) 0%, rgba(109,93,246,0) 70%), radial-gradient(45% 40% at 90% 85%, rgba(34,211,199,0.12) 0%, rgba(34,211,199,0) 70%)",
        }}
      />

      <div className="w-full max-w-[420px] rounded-[28px] border border-[#ECE9F8] bg-white/90 p-8 shadow-[0_24px_70px_rgba(88,71,224,0.12)] backdrop-blur-sm dark:border-[#211D2E] dark:bg-[#141020]/90 dark:shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-display mt-4 text-[24px] font-700 text-[#1C1A27] dark:text-[#F2F0FA]">
            Welcome back
          </h1>
          <p className="font-body mt-1.5 text-[13.5px] text-[#8A8698] dark:text-[#8A85A3]">
            Sign in to continue to AURA AI.
          </p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="mt-7 space-y-4">
          {serverError && (
            <div className="flex items-start gap-2 rounded-xl bg-[#FDF1F1] px-3.5 py-2.5 text-[12.5px] text-[#B23B3B] dark:bg-[#2A1414] dark:text-[#F29B9B]">
              <AlertCircle size={15} strokeWidth={2.25} className="mt-0.5 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <div>
            <label className="font-body mb-1.5 block text-[12.5px] font-600 text-[#6B6780] dark:text-[#8A85A3]">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="you@example.com"
              className="font-body w-full rounded-xl border border-[#ECE9F8] bg-[#FAFAFF] px-3.5 py-2.5 text-[14px] text-[#1C1A27] placeholder:text-[#B2AEC4] outline-none transition-colors focus:border-[#C9C0F8] focus:bg-white dark:border-[#2A2740] dark:bg-[#1A1626] dark:text-[#F2F0FA] dark:placeholder:text-[#5C5772] dark:focus:border-[#5847E0] dark:focus:bg-[#1F1B2E]"
            />
            {errors.email && (
              <p className="mt-1 text-[11.5px] text-[#E24C4C]">Please enter a valid email address.</p>
            )}
          </div>

          <div>
            <label className="font-body mb-1.5 block text-[12.5px] font-600 text-[#6B6780] dark:text-[#8A85A3]">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="••••••••"
              className="font-body w-full rounded-xl border border-[#ECE9F8] bg-[#FAFAFF] px-3.5 py-2.5 text-[14px] text-[#1C1A27] placeholder:text-[#B2AEC4] outline-none transition-colors focus:border-[#C9C0F8] focus:bg-white dark:border-[#2A2740] dark:bg-[#1A1626] dark:text-[#F2F0FA] dark:placeholder:text-[#5C5772] dark:focus:border-[#5847E0] dark:focus:bg-[#1F1B2E]"
            />
            {errors.password && (
              <p className="mt-1 text-[11.5px] text-[#E24C4C]">Please enter your password.</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="font-body flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#6D5DF6] to-[#5847E0] px-4 py-3 text-[13.5px] font-600 text-white shadow-[0_2px_10px_rgba(88,71,224,0.3)] transition-all hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LogIn size={16} strokeWidth={2.25} />
            {isSubmitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="font-body mt-5 text-center text-[13px] text-[#8A8698] dark:text-[#8A85A3]">
          Don't have an account?{" "}
          <Link to="/register" className="font-600 text-[#5847E0] hover:underline dark:text-[#B7AEF0]">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
