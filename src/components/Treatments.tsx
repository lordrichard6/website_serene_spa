import styles from './Treatments.module.css';
import { Flower, Droplets, Sparkles, Sun } from 'lucide-react';

const treatments = [
    {
        icon: Flower,
        title: "Holistic Massage",
        desc: "A rhythmic massage using essential oils to release tension and restore flow.",
        price: "$120 / 60 min"
    },
    {
        icon: Sparkles,
        title: "Radiance Facial",
        desc: "Organic botanical skincare tailored to your unique complexion for a healthy glow.",
        price: "$140 / 75 min"
    },
    {
        icon: Droplets,
        title: "Hydrotherapy",
        desc: "Therapeutic water circuits designed to stimulate circulation and detoxification.",
        price: "$85 / 45 min"
    },
    {
        icon: Sun,
        title: "Energy Healing",
        desc: "Reiki and chakra balancing sessions to harmonize your energetic body.",
        price: "$95 / 60 min"
    },
];

export default function Treatments() {
    return (
        <section id="treatments" className={`section-padding ${styles.treatments}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Our Menu</span>
                    <h2>Healing Therapies</h2>
                    <p>Curated treatments for deep relaxation and renewal.</p>
                </div>

                <div className={styles.grid}>
                    {treatments.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <t.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{t.title}</h3>
                            <p className={styles.cardDesc}>{t.desc}</p>
                            <span className={styles.price}>{t.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
