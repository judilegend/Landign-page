import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import MainNav from "./navbars/main-nav";

const ClientLayout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.75,
      easing: (t) => 1 - Math.pow(3, -10 * t),
    });

    function update(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <main className="w-full dark:bg-stone-950">
      <MainNav />
      <Outlet />
    </main>
  );
};

export default ClientLayout;
