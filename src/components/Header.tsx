import Link from 'next/link';
import styles from './Header.module.css';
import { Leaf } from 'lucide-react';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Leaf size={24} className={styles.icon} />
                    <span>SERENE SPA</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#treatments" className={styles.link}>Treatments</Link>
                    <Link href="#journey" className={styles.link}>Our Journey</Link>
                    <Link href="#retreats" className={styles.link}>Retreats</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </nav>

                <Link href="#book" className="btn btn-primary">
                    Book Appointment
                </Link>
            </div>
        </header>
    );
}
