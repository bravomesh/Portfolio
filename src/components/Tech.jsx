import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
//gh'
const Tech = () => {
  return (
    <div className="flex flex-row gap-10 flex-wrap justify-center">
      {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '');