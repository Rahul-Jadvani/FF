"use client";
// import "@fontsource/orbitron";
import React, { useState } from "react";
import { Sun, Moon, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div className="absolute top-6 right-6 animate-fade-in">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-gray-800 hover:bg-gray-100 shadow-md"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            {/* <h1
              className={`text-4xl font-bold mb-3 text-transparent bg-clip-text animate-glow ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            > */}
            <h1
              className={`text-5xl font-bold mb-3  animate-glow text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 `}
            >
              Welcome to Project Feed Forward
            </h1>
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Together, We Turn Leftovers into Lifelines
            </p>
          </div>

          <div
            className={`relative p-8 rounded-2xl transition-all duration-300 animate-scale ${
              isDarkMode
                ? "bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 shadow-[0_0_50px_rgba(79,70,229,0.2)]"
                : "bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-100"
            }`}
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl animate-pulse" />
              {isDarkMode && (
                <>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" />
                  <div
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "-2s" }}
                  />
                </>
              )}
            </div>

            <form className="space-y-6">
              {!isSignIn && (
                <div className="animate-fade-in">
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className={`w-full px-4 py-2 rounded-lg outline-none transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                        : "bg-gray-50 text-gray-900 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    } border hover:border-blue-500/50`}
                  />
                </div>
              )}

              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-lg outline-none transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                      : "bg-gray-50 text-gray-900 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  } border hover:border-blue-500/50`}
                />
              </div>

              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`w-full px-4 py-2 rounded-lg outline-none transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800 text-white border-gray-700 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                        : "bg-gray-50 text-gray-900 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    } border hover:border-blue-500/50`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-500 hover:text-gray-600"
                    }`}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {isSignIn && (
                <div
                  className="flex justify-end animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <button
                    type="button"
                    className={`text-sm hover:underline ${
                      isDarkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 animate-scale hover:scale-105 ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                }`}
              >
                <span>{isSignIn ? "Sign In" : "Sign Up"}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="relative my-8 ">
                <div
                  className={`absolute inset-0 flex items-center ${
                    isDarkMode ? "text-gray-700" : "text-gray-300"
                  }`}
                >
                  {/* <div className="w-full border-t "></div> */}
                </div>
                <div className="relative flex justify-center text-sm">
                  <div className=" border-t mt-2 w-[25%]"></div>
                  <span
                    className={`px-4 ${
                      isDarkMode
                        ? "bg-gray-900/50 text-gray-400"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    Or continue with
                  </span>
                  <div className=" border-t mt-2 w-[25%]"></div>
                </div>
              </div>

              <button
                type="button"
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 animate-scale hover:scale-105 ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 shadow-md"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <div
                className="text-center mt-6 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <button
                  type="button"
                  onClick={() => setIsSignIn(!isSignIn)}
                  className={`text-sm hover:underline ${
                    isDarkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-700"
                  }`}
                >
                  {isSignIn
                    ? "New to Project FF? Sign Up"
                    : "Already have an account? Sign In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
