"use client";
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className="row">
   
          <div className="col-md-4">
            <div className={styles.logo}>
              <img
                src="https://www.greenstechnologys.in/images/greens_logo.png"
                alt="Greens Technology"
                className={styles.logoImage}
              />
              <h4 className={styles.logoText}>Greens Technology</h4>
              <p className={styles.logoDescription}>
                Premier software training, placement center.
              </p>
              <p>Online/offline options</p>
              <p>Mon - Sun : 8.00am - 8.00pm</p>
              <p>+91 9943631660</p>
              <p>greenstechnologys.fsd@gmail.com</p>
            </div>
          </div>

      
          <div className="col-md-4">
            <h5 className={styles.sectionTitle}>Quick Links</h5>
            <ul className={styles.quickLinks}>
            <li><Link href="/">Home</Link></li>
<li><Link href="/courses">Course</Link></li>
<li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

       
          <div className="col-md-4">
            <h5 className={styles.sectionTitle}>Follow Us</h5>
            <div className={styles.socialMedia}>
            <Link href="#" className={styles.icon}>
  <FaFacebookF />
</Link>
<Link href="#" className={styles.icon}>
  <FaInstagram />
</Link>
<Link href="#" className={styles.icon}>
  <FaTwitter />
</Link>
<Link href="#" className={styles.icon}>
  <FaLinkedin />
</Link>

            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className={styles.footerBottom}>
              Copyrights ©2024 Greens Technologys
            </p>
            <ul className={styles.footerLinks}>
            <li>
  <Link href="/terms">Terms of Use</Link>
</li>
<li>
  <Link href="/privacy">Privacy Policy</Link>
</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
