import styles from './Button.module.css';

const Content = () => {
    return (
        <main style={{
            flex: 1,
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            marginLeft: '20px'
        }}>
            <h2 className='myHeader'>Welcome to Our Site</h2>
            <article style={{ marginBottom: '20px' }}>
                <h3>Latest News</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>

            <article>
                <h3>Featured Content</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</p>
                {/* <button className={`${styles.mybutton} ${styles.primary}`}>My Primary Button</button>
                <button className={`${styles.mybutton} ${styles.secondary}`}>My Secondary Button</button> */}
                <button className={styles.primary}>My Primary Button</button>
                <button className={styles.secondary}>My Secondary Button</button>
            </article>
        </main>
    );
}

export default Content;
