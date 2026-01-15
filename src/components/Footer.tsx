import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>SERENE SPA</span>
                        <p>Sanctuary for the Soul</p>
                    </div>

                    <div className={styles.links}>
                        <Link href="#">Treatments</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Gift Cards</Link>
                    </div>

                    <div className={styles.contact}>
                        <p>123 Wellness Way</p>
                        <p>Sedona, AZ 86336</p>
                        <p className={styles.phone}>hello@serenespa.com</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Serene Spa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
