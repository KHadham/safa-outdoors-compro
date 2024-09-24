import React, { useState, useEffect } from "react";
import Button from "components/atoms/Button";
import InputGroup from "components/molecules/FormGroup/InputGroup";
import IconListItem from "components/molecules/IconListItem";
import PageSentence from "components/molecules/PageSentence";
import PageTemplate from "components/templates/PageTemplate";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import TextAreaGroup from "components/molecules/FormGroup/TextAreaGroup";

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
          <div className="place-self-start">
            <div className=" lg:text-left">
              <PageSentence
                title="Isi semua formulirnya buat memproses pendaftaran"
                badge={"REGISTER"}
              />
            </div>
          </div>
        </aside>
        <aside
          className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end"
          data-aos="fade-down-left"
        >
          <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
            <InputGroup
              label="Nama kamu"
              placeholder="contoh Sujatmiko Arufuru"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup
              label="Nomer WhatsApp"
              placeholder="contoh 628123456789"
              // defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup
              label="Email"
              placeholder="contoh Sujatmiko@gmail.com"
              // defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup
              label="Password"
              // type="password"
              // defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputGroup
              label="Ulangi Password"
              // type="password"
              // defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextAreaGroup
              label="Alamat"
              placeholder="contoh Kampung durian runtuh jl.InAjaDulu 21, Jakarta Selatan"
              // defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <Button value="Daftar" onClick={handleLogin} />
          </div>
        </aside>
      </section>
    </PageTemplate>
  );
};

export default Contact;
