import React, { useState } from "react";
import { LogOut, Check, X, LogIn } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ collapsed, onLogout }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.authSlice);
  const [confirming, setConfirming] = useState(false);

  if (collapsed) {
    return (
      <div className="flex shrink-0 flex-col items-center gap-2 border-t border-[#ECE9F8] px-2 py-3 dark:border-[#211D2E]">
        {currentUser.user ? (
          <>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6D5DF6] to-[#22D3C7] font-display text-[13px] font-700 text-white capitalize">
              {currentUser.user?.slice(0, 1)}
            </div>

            <button
              type="button"
              onClick={onLogout}
              title="Log out"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#9A96AC] hover:bg-[#FDF1F1] hover:text-[#E24C4C] transition-colors dark:text-[#6B6780] dark:hover:bg-[#2A1414] dark:hover:text-[#F29B9B]"
            >
              <LogOut size={15} strokeWidth={2} />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => navigate("/login")}
            title="Log in"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6B6780] hover:bg-[#F1EFFC] hover:text-[#5847E0] transition-colors dark:text-[#8A85A3] dark:hover:bg-[#211D2E] dark:hover:text-[#B7AEF0]"
          >
            <LogIn size={17} strokeWidth={2} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="shrink-0 border-t border-[#ECE9F8] p-3 dark:border-[#211D2E]">
      {currentUser.user ? (
        confirming ? (
          <div className="flex items-center justify-between gap-2 rounded-xl bg-[#FDF1F1] px-3 py-2.5 dark:bg-[#2A1414]">
            <span className="font-body text-[12.5px] font-500 text-[#B23B3B] dark:text-[#F29B9B]">
              Log out of AURA?
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setConfirming(false)}
                className="flex h-6 w-6 items-center justify-center rounded-md text-[#9A96AC] hover:bg-white dark:text-[#8A85A3] dark:hover:bg-[#1A1626]"
              >
                <X size={13} strokeWidth={2.25} />
              </button>
              <button
                onClick={() => {
                  setConfirming(false);
                  onLogout();
                }}
                className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E24C4C] text-white hover:brightness-95"
              >
                <Check size={13} strokeWidth={2.25} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 rounded-xl px-1.5 py-1.5 hover:bg-[#F5F3FC] transition-colors dark:hover:bg-[#1A1626]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6D5DF6] to-[#22D3C7] font-display text-[13px] font-700 text-white capitalize">
              {currentUser.user?.slice(0, 1)}
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-display truncate text-[13.5px] font-600 text-[#1C1A27] capitalize dark:text-[#F2F0FA]">
                {currentUser.user || "User"}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setConfirming(true)}
              title="Log out"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#9A96AC] hover:bg-[#FDF1F1] hover:text-[#E24C4C] transition-colors dark:text-[#6B6780] dark:hover:bg-[#2A1414] dark:hover:text-[#F29B9B]"
            >
              <LogOut size={15} strokeWidth={2} />
            </button>
          </div>
        )
      ) : (
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex w-full items-center justify-between rounded-xl bg-gradient-to-br from-[#6D5DF6]/10 to-[#22D3C7]/10 px-3 py-2.5 text-left transition-colors hover:from-[#6D5DF6]/15 hover:to-[#22D3C7]/15 dark:from-[#6D5DF6]/15 dark:to-[#22D3C7]/15"
        >
          <span className="font-body text-[13px] font-600 text-[#3A3650] dark:text-[#E5E2F0]">
            Please log in
          </span>
          <LogIn size={16} strokeWidth={2.25} className="text-[#5847E0] dark:text-[#B7AEF0]" />
        </button>
      )}
    </div>
  );
};

export default UserProfile;
