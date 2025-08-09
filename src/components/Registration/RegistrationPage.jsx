"use client";
import React, { useEffect, useRef, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
// import logo from "@/assets/Navbar/logo.png";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
// import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
  const steps = ["Personal Information", "Verification Account"];
  const [currentStep, setCurrentStep] = useState(0);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown (120 seconds)
  const [resendEnabled, setResendEnabled] = useState(false);
  const inputRefs = useRef([]);
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [genderError, setGenderError] = useState(false);
  const [ip, setIp] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [locationLoading, setLocationLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  // Date generate---
  const today = new Date();
  const padZero = (num) => (num < 10 ? "0" + num : num);

  // Format the date to DD/MM/YYYY
  const formattedDate = `${padZero(today.getDate())}/${padZero(
    today.getMonth() + 1
  )}/${today.getFullYear()}`;

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => setIp(response.data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);

  // Fetching Location when component mounts
  useEffect(() => {
    if ("geolocation" in navigator) {
      setLocationLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            const response = await fetch(url);
            const data = await response.json();
            const fullAddress = `${data?.address?.city || ""}, ${
              data?.address?.country || ""
            }`;
            setUserAddress(fullAddress.trim());
          } catch (error) {
            console.error("Error fetching address:", error);
          } finally {
            setLocationLoading(false);
          }
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setLocationLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handler for changes in input field
  const handleAddressChange = (e) => {
    setUserAddress(e.target.value);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendEnabled(true);
    }
  }, [timeLeft]);

  const updateStep = (step) => {
    if (step >= 0 && step < steps.length) setCurrentStep(step);
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(120);
    setResendEnabled(false);
    alert("A new verification code has been sent to your email.");
  };

  const handleGenderChange = () => setGenderError(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const gender = formData.get("gender");

    if (!gender) {
      setGenderError(true);
      return;
    }

    const genderText = e.target
      .querySelector(`input[name="gender"]:checked`)
      .nextSibling.textContent.trim();

    const data = {
      name: formData.get("userName"),
      email: formData.get("userEmail"),
      password: formData.get("accountPassword"),
      verifyEmail: false,
      publicIp: ip,
      userImage: "",
      userStatus: "active",
      ruler: "admin",
      address: formData.get("userAddress") || userAddress,
      phone: formData.get("userPhone"),
      gender: genderText,
      joiningDate: new Date().toISOString().split("T")[0],
      failedLoginAttempts: 0,
      lockUntil: null,
    };
    console.log(data, "dd");
    try {
      setHidden(true);
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/create-user",
        data
      );
      const result = response.data;
      const cookiesData = result?.data;

      if (result?.success && cookiesData) {
        const expirationTime = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
        Cookies.set("accessToken", JSON.stringify(cookiesData?.accessToken), {
          expires: expirationTime,
        });
        Cookies.set("CookieYouserData", JSON.stringify(cookiesData));

        Swal.fire({
          position: "center",
          icon: "success",
          title: `${result?.message}`,
          text: "Thank you",
          showConfirmButton: false,
          timer: 2500,
        });

        setTimeout(() => {
          // router.push("/myProfile");
          window.location.href = "/myProfile";
        }, 500);
        setHidden(false);
      }
    } catch (error) {
      console.error("Error creating user:", error);

      Swal.fire({
        title: `${error?.response?.data?.errorMessages[0]?.message}`,
        // text: `Field: ${error?.response?.data?.errorMessages[0]?.path}`,
        icon: "error",
      });

      setHidden(false);
    }
  };

  return (
    <div className="bg-[#FFFFFF] md:py-16 md:pt-10 py-10 flex items-center justify-center">
      <div className="w-full md:max-w-3xl p-6 md:p-10 pb-[70px] bg-white rounded-lg shadow-full">
        <Link
          href={"/"}
          className="border-[1px] border-[#eaeaea] p-[3px] flex justify-center items-center md:w-[100px] w-[80px]  h-[80px] md:h-[100px] rounded-full mx-auto"
        >
          <Image
            width={80}
            height={60}
            className="w-[100%] h-[100%]"
            src="/logo (2).png"
            alt=""
          />
        </Link>

        {currentStep === 0 && (
          <div>
            <h2 className="text-[18px] md:text-[20px] text-[#757575] font-[600] text-center mt-2 mb-4">
              Registration  KomTaka.Com Account
            </h2>

            <form className="mt-[36px]" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5 mb-[15px] md:mb-6">
                <div className="bg-white rounded-lg">
                  <label
                    className="block mb-1 text-[14px] md:text-[16px] font-[600] text-[#757575]"
                    htmlFor="username"
                  >
                    Your full name
                    <span className="text-red-400 font-[700]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="username"
                    name="userName"
                    className="bg-transparent h-[40px] md:h-[46px] w-[100%] px-[15px] rounded-[2px] text-[14px] md:text-[16px] font-[500] text-[#757575] placeholder:text-[#eaeaea] placeholder:font-[400] ring-2 ring-[#eaeaea] focus:ring-[#757575] focus:outline-none focus:border-rose-600"
                    placeholder="johir khan"
                  />
                </div>

                <div className="bg-white rounded-lg">
                  <label
                    className="block mb-1 text-[14px] md:text-[16px] font-[600] text-[#757575]"
                    htmlFor="userAddress"
                  >
                    Your Address
                    <span className="text-red-400 font-[700]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="userAddress"
                    name="userAddress"
                    value={userAddress}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    className="bg-transparent h-[40px] md:h-[46px] w-full px-[15px] rounded-[2px] text-[14px] md:text-[16px] font-[500] text-[#757575] placeholder:text-[#eaeaea] placeholder:font-[400] ring-2 ring-[#eaeaea] focus:ring-[#757575] focus:outline-none focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-[10px] md:mb-6">
                <div className="bg-white rounded-lg">
                  <label
                    className="block mb-1 text-[14px] md:text-[16px] font-[600] text-[#757575]"
                    htmlFor="userPhone"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    pattern="\d{11}"
                    maxLength={11}
                    minLength={11}
                    id="userPhone"
                    name="userPhone"
                    className="bg-transparent h-[40px] md:h-[46px] w-full px-[15px] rounded-[2px] text-[14px] md:text-[16px] font-[500] text-[#757575] placeholder:text-[#eaeaea] placeholder:font-[400] ring-2 ring-[#eaeaea] focus:ring-[#757575] focus:outline-none"
                    placeholder="018248XXXXX"
                    required
                  />
                </div>

                <div className="bg-white rounded-lg">
                  <label
                    className="block mb-1 text-[14px] md:text-[16px] font-[600] text-[#757575]"
                    htmlFor="gender"
                  >
                    Select Your Gender
                    <span className="text-red-400 font-[700]">*</span>
                  </label>
                  <div className="md:flex gap-4">
                    {["Male", "Female", "Others"].map((gender) => (
                      <label
                        key={gender}
                        className="flex items-center bg-[#ffffff] text-gray-700 rounded-md px-3 py-2 hover:bg-[#eaeaea] cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          onChange={handleGenderChange}
                        />
                        <span className="pl-2 text-[14px] text-[#757575] font-[600]">
                          {gender}
                        </span>
                      </label>
                    ))}
                  </div>
                  {genderError && (
                    <p className="text-red-500 text-sm mt-1">
                      Please select a gender.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-[15px] md:mb-6">
                <div className="bg-white rounded-lg">
                  <label
                    className="block mb-1 text-[14px] md:text-[16px] font-[600] text-[#757575]"
                    htmlFor="userEmail"
                  >
                    Your Email
                    <span className="text-red-400 font-[700]">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    className="bg-transparent h-[40px] md:h-[46px] w-[100%] px-[15px] rounded-[2px] text-[14px] md:text-[16px] font-[500] text-[#757575] placeholder:text-[#eaeaea] placeholder:font-[400] ring-2 ring-[#eaeaea] focus:ring-[#757575] focus:outline-none focus:border-rose-600"
                    placeholder="johir-dev@gmail.com"
                  />
                </div>

                <div className="bg-white rounded-lg relative">
                  <label
                    className="block mb-1 text-[14px] md:text-[16px] font-[600] text-[#757575]"
                    htmlFor="accountPassword"
                  >
                    Password
                    <span className="text-red-400 font-[700]">*</span>
                  </label>
                  <input
                    required
                    maxLength={40}
                    minLength={6}
                    type={showPassword ? "text" : "password"}
                    id="accountPassword"
                    name="accountPassword"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-transparent h-[40px] md:h-[46px] w-full px-[15px] rounded-[2px] text-[14px] md:text-[16px] font-[500] text-[#757575] placeholder:text-[#eaeaea] placeholder:font-[400] ring-2 ring-[#eaeaea] focus:ring-[#757575] focus:outline-none"
                    placeholder="••••••••"
                  />
                  {password && (
                    <button
                      type="button"
                      className="absolute right-[15px] top-[50%] transform text-[#757575] hover:text-black"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-6 w-6" />
                      ) : (
                        <EyeSlashIcon className="h-6 w-6" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-[30px]">
                <button
                  type="submit"
                  className="inline-block w-full h-[46px] md:h-[50px] md:mb-3 mb-2 text-center text-[16px] md:text-[18px] leading-6 text-white font-[600] bg-blue-600 shadow rounded transition duration-200"
                >
                  Submit
                </button>
                <p className="text-center font-[500] text-[#757575] text-[14px]">
                  Don&rsquo;t have an account?{" "}
                  <Link className="text-red-500 hover:underline" href="/login">
                    / Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-lg text-center md:text-2xl font-semibold mb-4">
              Verification Confirm
            </h2>
            <p className="py-[20px] text-[14px] lg:w-[50%] mx-auto text-center">
              You have been sent an email. Please enter the 5-digit code
              received in that email here.
            </p>

            <div className="mb-[15px] md:mb-6">
              <div className="bg-white rounded-lg">
                <div className="flex justify-center gap-2 mb-[15px] md:mb-6">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      autoComplete="one-time-code"
                      required
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  ))}
                </div>
              </div>
            </div>

            <button className="inline-block w-full h-[46px] md:h-[50px] md:mb-3 mb-2 text-center text-[16px] md:text-[18px] leading-6 text-white font-[600] bg-blue-600 shadow rounded transition duration-200">
              Confirm
            </button>

            <div className="text-center mt-1">
              {resendEnabled ? (
                <button
                  onClick={handleResend}
                  className="text-teal-500 hover:text-teal-700 font-bold text-sm"
                >
                  Resend OTP
                </button>
              ) : (
                <p className="text-sm text-gray-600">
                  Resend OTP in {formatTime(timeLeft)}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          {currentStep === 0 && (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded transition duration-300 hover:bg-[#106C4F]"
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  updateStep(currentStep + 1);
                } else {
                  alert("Registration Complete!");
                }
              }}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;