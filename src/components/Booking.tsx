import styles from './Booking.module.css';

export default function Booking() {
    return (
        <section id="book" className={`section-padding ${styles.booking}`}>
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.intro}>
                        <span className={styles.label}>Reservations</span>
                        <h2>Begin Your Journey</h2>
                        <p>
                            Select your preferred date and treatment. We'll handle the rest to ensure your arrival is seamless.
                        </p>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.grid}>
                            <div className={styles.group}>
                                <label>Name</label>
                                <input type="text" className={styles.input} />
                            </div>
                            <div className={styles.group}>
                                <label>Email</label>
                                <input type="email" className={styles.input} />
                            </div>
                            <div className={styles.group}>
                                <label>Treatment</label>
                                <select className={styles.select}>
                                    <option>Holistic Massage</option>
                                    <option>Radiance Facial</option>
                                    <option>Hydrotherapy</option>
                                    <option>Energy Healing</option>
                                </select>
                            </div>
                            <div className={styles.group}>
                                <label>Preferred Date</label>
                                <input type="date" className={styles.input} />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                            Request Appointment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
