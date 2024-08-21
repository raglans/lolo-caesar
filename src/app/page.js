import styles from "./page.module.css";
import Image from 'next/image';
import Caesar from '../../public/images/Caesar.jpg';
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.center} ${styles.our_approach}`}>
          <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin: '0', marginTop: '5%'}}>Happy 15th Anniversary</h3>
          <h1 className={styles.title}>LoLo® Caesar</h1>
        <div className={`${styles.center} ${styles.our_approach}`}>
          <Image style={{width: '35%', height: '35%'}} src={Caesar} />
          <p style={{margin: '7% 20% 3% 20%'}}>
            Our signature Caesar was created in 2009 under our moniker celebrating local creativity & small business independence.
          </p>
          <p style={{margin: '3% 20% 7% 20%'}}>
            June 1st, 2024
          </p>
          <a className={styles.button} href="https://www.raglans.ca/">Order Now</a>
        </div>
      </div>
    </main>
  );
}
