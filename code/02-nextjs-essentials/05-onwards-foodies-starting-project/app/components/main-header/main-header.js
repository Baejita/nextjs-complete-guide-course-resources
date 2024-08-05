"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBlackground from "./main-header-background";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";
function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBlackground background />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg}
            width={200}
            height={200}
            alt="A plate with food"
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <div>
            <ul>
              <li>
                <Navigation href="/meals">Browse Meals</Navigation>
              </li>

              <li>
                <Navigation href="/community">Foodies Community</Navigation>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
