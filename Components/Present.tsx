import styles from '../styles/Home.module.css';


export default function Present(){
    return (
        <div className={`${styles.main} ${styles.present}`} id='Presentation'>
            <h1>Hi, my name is Alfredo Bco.</h1>
            
            <p>
                {"I'm"} a passionate Argentinian developer who wants to keep learning new things every day.<br />
                This IT word is huge and I want to know most of it.<br/>
                Thats why {"I'm"} always looking for challenges and dare myself.
            </p>
            <span>{"Let's"} know more about me...</span>
        </div>
    )
}