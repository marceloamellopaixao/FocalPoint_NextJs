"use client";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ui/mode-toogle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import "@/styles/home.css";

import Logo from "@/assets/logo.svg";
import LogoDark from "@/assets/logoDark.svg";

function useThemeLogo() {
  const [logo, setLogo] = useState(Logo);
  useEffect(() => {
    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setLogo(isDarkMode ? LogoDark : Logo);
    };

    handleThemeChange(); // Set initial logo based on current theme
    window.addEventListener("themechange", handleThemeChange);

    return () => {
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  return logo;
}

export default function Home() {
  const logo = useThemeLogo();
  const username = "User";

  return (
    <div className="container-principal">
      <header className="bg-background text-foreground header-menu">
        <nav className="nav-menu">
          <ul className="ul-menu">
            <Image src={logo} alt="Logo" className="logo" />
            <li className="user-menu">Bem vindo de volta, {username}</li>
            <li className="datetime-menu">Segunda, 01 de dezembro de 2025</li>
          </ul>
        </nav>
        <ModeToggle />
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Suas tarefas de hoje</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
