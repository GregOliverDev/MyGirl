"use client";
import HomePageComp from "@/app/components/Home/HomePageComp";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HomePageComp />
    </main>
  );
}
