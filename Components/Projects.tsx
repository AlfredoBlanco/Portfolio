import styles from '../styles/Home.module.css';
import Card from './ProjectCard';

export default function Projects(){
    return (
        <div className={styles.main} id='Projects'>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.grid}>
                <Card name='PI-Dogs'
                    img= {require('../images/piDogs.png')}
                    url= 'https://pi-dogs-beryl.vercel.app/'
                    tech={['Node', 'Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize']}
                    linkedin= 'https://www.linkedin.com/feed/update/urn:li:activity:6911770620061958144/'
                />
            
                <Card name='NFTickets'
                    img= {require('../images/NFTicket.png')}
                    url= 'https://nftickets.netlify.app/'
                    tech={['Solidity', 'Web3', 'Next', 'Typescript', 'Prisma', 'Chakra-UI']}
                    linkedin= 'https://www.linkedin.com/feed/update/urn:li:activity:6925467693730934786/'
                />  
            </div>
        </div>
    )
}