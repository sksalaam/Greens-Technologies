"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <img
            src="https://www.greenstechnologys.in/images/greens_logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>Reviews</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>Curriculum</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>Features</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>Mentors</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#" className={styles.navLink}>FAQ</Link>
          </li>
          <li className={styles.navItem}>
            <button className={styles.applyButton}>Apply Now</button>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
