"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBlackground from "./main-header-background";
import { usePathname } from "next/navigation";
function MainHeader() {
  const path = usePathname();
  console.log(path);
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
                <Link
                  href="/meals"
                  className={path.startsWith("/meals") ? classes.active : null}
                >
                  Browse Meals
                </Link>
              </li>

              <li>
                <Link
                  href="/community"
                  className={
                    path.startsWith("/community") ? classes.active : null
                  }
                >
                  Foodies Community
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
