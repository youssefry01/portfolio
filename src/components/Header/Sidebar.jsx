import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const titleStyle = 'font-JosefinSans font-normal text-lg m-4 text-[#605E5E] hover:text-[#A0A09F]';
  const activeLinkStyle = 'text-black';

  const handleClick = () => {
    if (location.pathname === "/") {
      // Already on home → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/");
    } else {
      // Not on home → navigate to home page
      navigate("/");
    }
  };

  return (
    <>
    {isSidebarVisible && (
      <div className="flex flex-col fixed bottom-0 right-0 z-50 w-1/2 h-screen p-4 overflow-y-auto overflow-x-clip bg-white dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
        <ul className="flex flex-col mt-6 text-center" onClick={() => setIsSidebarVisible(false)}>
          <li className=" text-black text-2xl cursor-pointer focus:text-neutral-300" onClick={() => setIsSidebarVisible(false)}>✕</li>
        </ul>
        
        <ul className='flex flex-col justify-start items-center pt-14 text-black font-normal'>
            <li className={`${titleStyle} ${location.hash === '' ? activeLinkStyle : ''}`} onClick={handleClick}>HOME</li>
            <li className={titleStyle} ><a href='#about' className={`${titleStyle} ${location.hash === '#about' ? activeLinkStyle : ''}`}>ABOUT</a> </li>
            <li className={titleStyle} ><a href='#projects' className={`${titleStyle} ${location.hash === '#projects' ? activeLinkStyle : ''}`}>PROJECTS</a> </li>
            <li className={titleStyle} ><a href='#experience' className={`${titleStyle} ${location.hash === '#experience' ? activeLinkStyle : ''}`}>EXPERIENCE</a> </li>
            <li className={titleStyle} ><a href='#contact' className={`${titleStyle} ${location.hash === '#contact' ? activeLinkStyle : ''}`}>CONTACT</a> </li>
        </ul>

      </div>
    )}
    </>
  );
};

export default Sidebar;
