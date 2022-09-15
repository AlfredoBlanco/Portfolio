import { useEnglish } from '../context/englishContext';
import Card from './ProjectCard';

export default function Projects(){
    const { english } = useEnglish();
    return (
        <div className='flex flex-col items-center justify-between 
            min-h-screen w-screen md:w-[90%] bg-slate-200 border-t-2 border-sky-700' id='Projects'>
            <div className='flex items-center justify-center 
                h-[30vh] w-full bg-zinc-800 text-zinc-50'>
                <h1 className='text-5xl font-medium text-center p-2 border-x-2 border-sky-600 rounded-md '>
                    {
                        english
                        ? 'PROJECTS'
                        : 'PROYECTOS'
                    }
                </h1>
            </div>
            <div className=''>
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