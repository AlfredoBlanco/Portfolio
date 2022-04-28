import styles from '../styles/Home.module.css';
import { FaNodeJs, FaReact} from 'react-icons/fa';
import { SiSolidity, SiNextdotjs, SiRedux, SiExpress, SiPostgresql, SiSequelize, SiTypescript} from 'react-icons/si';
import Cards from './Cards';

export default function Tech(){
    return (
        <div className={styles.main} id='Tech'>
            <h1 className={styles.title}>Technologies</h1>
            <div className={styles.grid}>
                <Cards Icon={FaNodeJs} name={'Node.js'} />
                <Cards Icon={FaReact} name={'React.js'} />
                <Cards Icon={SiNextdotjs} name={'Next.js'} />
                <Cards Icon={SiSolidity} name={'Solidity'} />
                <Cards Icon={SiRedux} name={'Redux'} />
                <Cards Icon={SiExpress} name={'Express'} />
                <Cards Icon={SiPostgresql} name={'PostgreSQL'} />
                <Cards Icon={SiSequelize} name={'Sequelize'} />
                            
            </div>

            <h6 className={styles.description}> 
                Now learning:
            </h6>
            <div className={styles.grid}>
                <Cards Icon={SiTypescript} name={'Typescript'} />
                
            </div>
                
            
        </div>
    )
}