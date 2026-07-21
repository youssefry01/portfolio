import Home from '../components/Home/Home.jsx';
import Experience from '../components/Home/Experience.jsx';
import Projects from '../components/Home/Projects.jsx';
import Contact from '../components/Home/Contact.jsx';

const Index = () => {

  return (
    <main className='flex flex-col grow w-full mt-20'>
      <Home />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}

export default Index;