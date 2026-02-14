import HomeSection from '../components/Home/HomeSection.jsx';
import About from '../components/Home/About.jsx';
import Experience from '../components/Home/Experience.jsx';
import Projects from '../components/Home/Projects.jsx';
import Contact from '../components/Home/Contact.jsx';

const Home = () => {

  return (
    <main className='flex flex-col bg-[#f7f7f8] grow mt-20 dark:bg-[#0e0e10] z-50 font-family-poppins'>
      <HomeSection />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default Home;