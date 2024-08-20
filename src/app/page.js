import styles from "./page.module.css";
import Image from 'next/image';
import Caesar from '../../public/images/Caesar.jpg';
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.center} ${styles.our_approach}`}>
          <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin: '0'}}>Happy 15th Anniversary</h3>
          <h3 className={`${styles.subtitle} ${dancing_script.className}`} style={{margin: '0'}}>to the </h3>
          <h1 className={styles.title}>LoLo® Caesar</h1>
        <div className={`${styles.center} ${styles.our_approach}`}>
          <Image style={{marginTop: '15%', height: '55%', width: '55%'}} src={Caesar} />
          <p style={{margin: '15% 15%'}}>
            Our signature caesar was created in 2009 under our moniker celebrating local creativity & small business independence.
          </p>
          <a className={styles.button} href="https://www.raglans.ca/">Raglans</a>
        </div>
      </div>
    </main>
  );
}
