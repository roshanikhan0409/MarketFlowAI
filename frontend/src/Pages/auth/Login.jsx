import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login data:", formData);
    alert("Login form submitted successfully!");
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your workspace."
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLabel="Create account"
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <AuthInput
          label="Email address"
          name="email"
          type="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
        />

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
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
}

