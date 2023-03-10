import { IconType } from "react-icons/lib";
import Card from "./Card";
import Cards from "./Cards";

interface TechCard {
    Icon: IconType,
    name: string
}

interface Props {
    technologies: TechCard[];
}

export default function AutoSlider({ technologies }: Props) {
    return (
        <div className="relative w-[10vw] h-full overflow-hidden hidden md:block">
            <div className="absolute left-0 flex flex-col justify-center h-[200%] animate-infVertScroll">
                {
                    [0, 1].map((e) => (
                        <div key={e} className="flex flex-col h-[50%] w-[10vw] justify-around items-center ">
                            {
                                technologies.map((e: TechCard) => (
                                    <Card key={e.name} Icon={e.Icon} name={e.name} />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}