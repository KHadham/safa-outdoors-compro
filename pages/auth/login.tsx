import React, { useState, useEffect } from "react";
import Button from "components/atoms/Button";
import InputGroup from "components/molecules/FormGroup/InputGroup";
import IconListItem from "components/molecules/IconListItem";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Login handler
  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };
    ///v1/auth/email/register
    ///v1/users/
    try {
      const response = await fetch(
        "https://nestjs-boilerplate-test.herokuapp.com/api/v1/auth/email/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Save the token or other login info in localStorage
        localStorage.setItem("token", result.token);
        setIsLoggedIn(true); // Set user as logged in
        setSuccess("Login successful!");
        setError("");
      } else {
        setError(result.message || "Login failed");
        setSuccess("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    setIsLoggedIn(false); // Set user as logged out
    setSuccess("Logged out successfully!");
  };

  return (
    <PageTemplate title="Contact - Safa-Outdoor">
      <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
        <aside
          className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start"
          data-aos="fade-up-right"
        >
          <div className="sm:text-center lg:text-left">
            <PageSentence
              title="gak punya akun nya ? klik tombol dibawah ini buat daftar"
              badge={isLoggedIn ? "LOGGED IN" : "LOGIN"}
            />
          </div>
          <Button value={"Register"} />
        </aside>
        <aside
          className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
          data-aos="fade-down-left"
        >
          <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
            {isLoggedIn ? (
              <>
                <p className="text-green-500">You are logged in!</p>
                <Button value="Logout" onClick={handleLogout} />
              </>
            ) : (
              <>
                <InputGroup
                  label="Email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup
                  label="Password"
                  // type="password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <Button value="Login" onClick={handleLogin} />
              </>
            )}
          </div>
        </aside>
      </section>
    </PageTemplate>
  );
};

export default Contact;
