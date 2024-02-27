import { ReactNode } from "react";

interface LiSectionProps {
    title:string;
    refSection?:React.RefObject<HTMLDivElement> | undefined;
    children:ReactNode;

}

function LiSectionsDocs({title, refSection, children}:LiSectionProps) {
  return (
    <li className='space-y-5 font-light'>
        <h2 className="text-[25px] font-bold text-neutral-700" ref={refSection}>{title}</h2>
        {children}
    </li>
  )
}

export default LiSectionsDocs