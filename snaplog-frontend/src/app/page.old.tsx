"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          placerat diam eget sapien iaculis, at auctor arcu aliquet. Proin
          elementum justo eget odio finibus fringilla. Integer lorem erat,
          pellentesque nec congue nec, efficitur vitae lorem. Praesent ut
          dignissim mauris. Suspendisse finibus dolor ac massa blandit, eget
          blandit nibh semper. Fusce in enim elit. Ut cursus, felis sed
          elementum vulputate, turpis diam tincidunt ante, vitae vehicula enim
          odio et mi. Sed sollicitudin, ipsum dictum dictum pulvinar, est magna
          imperdiet magna, id consectetur ipsum velit ac orci. Vivamus ut risus
          scelerisque massa pharetra convallis vel ac metus. Nam dictum mauris
          rutrum, imperdiet nulla sit amet, laoreet est.
        </div>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
