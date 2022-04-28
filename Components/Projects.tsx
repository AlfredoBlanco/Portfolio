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
                    linkedin= 'https://www.linkedin.com/feed/update/urn:li:activity:6924699098465902592/?commentUrn=urn%3Ali%3Acomment%3A(ugcPost%3A6924698331977818112%2C6924795654066114560)'
                />  
            </div>
        </div>
    )
}