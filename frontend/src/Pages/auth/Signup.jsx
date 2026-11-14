import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup data:", formData);
    alert("Signup form submitted successfully!");
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your details to get started."
      footerText="Already have an account?"
      footerLink="/login"
      footerLabel="Login"
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">

        {/* Full Name */}
        <AuthInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
        />

        {/* Email */}
        <AuthInput
          label="Email address"
          name="email"
          type="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="mb-2 text-xs font-medium text-neutral-500 transition hover:text-black"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <AuthInput
            label={null}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-neutral-800"
            >
              Confirm Password
            </label>

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword((prev) => !prev)
              }
              className="mb-2 text-xs font-medium text-neutral-500 transition hover:text-black"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <AuthInput
            label={null}
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Create Account
        </button>

      </form>
    </AuthLayout>
  );
}
