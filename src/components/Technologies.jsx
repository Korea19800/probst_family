import {RiReactjsLine} from "react-icons/ri"; // react icon 갖고오기
import {TbBrandNextjs} from "react-icons/tb"; // react icon 갖고오기
import {SiMongodb} from "react-icons/si"; // react icon 갖고오기
import {DiRedis} from "react-icons/di"; // react icon 갖고오기
import {FaNodeJs} from "react-icons/fa"; // react icon 갖고오기
import {BiLogoPostgresql} from "react-icons/bi"; // react icon 갖고오기
import { SiCplusplus } from "react-icons/si"; // Import C++ icon from Simple Icons set
import { SiSpring } from "react-icons/si"; // Import Spring icon from Simple Icons set
import { SiDocker } from "react-icons/si"; // Import Docker icon from Simple Icons set
import { SiMysql } from "react-icons/si"; // Import MySQL icon from Simple Icons set
import { SiPython } from "react-icons/si"; // Import Python icon from Simple Icons set
import { SiAndroid } from "react-icons/si"; // Import Android icon from Simple Icons set
import { SiFlutter } from "react-icons/si"; // Import Flutter icon from Simple Icons set
import { SiMicrosoftazure } from "react-icons/si"; // Import Azure icon from Simple Icons set


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        
        {/* 아래는 테크스택 아이콘들 */} 

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCplusplus className="text-7xl text-blue-700"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiSpring className="text-7xl text-green-700"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className="text-7xl text-yellow-300"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiDocker className="text-7xl text-cyan-300"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className="text-7xl text-red-500"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMicrosoftazure className="text-7xl text-cyan-200"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiFlutter className="text-7xl text-cyan-400"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiAndroid className="text-7xl text-green-300"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className="text-7xl text-green-500"/>
        </div>

      </div>
      
    </div>
  )
}

export default Technologies
