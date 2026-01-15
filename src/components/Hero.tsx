import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/hero.png"
                    alt="Serene Spa Interior"
                    fill
                    className={styles.image}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.pretitle}>Welcome to Your Sanctuary</span>
                    <h1 className={styles.title}>
                        Rejuvenate Your Body,<br />
                        <span className="text-earth">Calm Your Mind</span>
                    </h1>
                    <p className={styles.desc}>
                        Experience holistic healing therapies designed to restore balance and cultivate inner peace.
                    </p>
                    <div className={styles.actions}>
                        <a href="#book" className="btn btn-primary">Book Your Escape</a>
                        <a href="#treatments" className="btn btn-outline">View Treatments</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
