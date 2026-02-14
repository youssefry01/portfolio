import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const ProjectLightbox = ({ selectedProject, setSelectedProject }) => {

  return (
    <div className="fixed inset-0 text-white bg-black/50 flex items-center justify-center p-4 z-50 overflow-auto" onClick={() => setSelectedProject(null)}>
        <div className="bg-[#030303] rounded-xl w-full max-w-lg max-h-[75vh] lg:max-h-none mt-24 lg:mt-8 overflow-y-auto flex flex-col p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-white cursor-pointer hover:text-neutral-300" onClick={() => setSelectedProject(null)}>✕</button>
            
            <div className="flex flex-row justify-center items-center">
                <img className="size-12 lg:size-20 m-4" src={selectedProject.logo} alt={selectedProject.title} draggable="false"/>
                <h2 className="text-md lg:text-xl font-bold">{selectedProject.title}</h2>
            </div>

            <p className="text-xs lg:text-sm font-semibold m-6 whitespace-pre-line">{selectedProject.description}</p>

            <div className='flex flex-row mt-2'>
                {selectedProject.github && (    
                    <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white rounded-xl h-12 px-6 hover:bg-white hover:text-black transition-all duration-300"
                    >
                    <FaGithub />
                    GitHub Repo
                    </a>
                )}

                {selectedProject.live && (
                    <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center ml-auto justify-center gap-2 bg-white text-black rounded-xl h-12 px-6 hover:scale-105 transition-all duration-300"
                    >
                    Live Demo
                    </a>
                )}
            </div>
            
        </div>
    </div>
  )
}

export default ProjectLightbox;