import { Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home.jsx';
import Missing from './components/General/Missing';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('Youssef Ramadan | Portfolio')

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        
          <Route index element={<Home />} />


          {/* <Route path='/:projectName'>
              <Route index element={<Project />} />
          </Route> */}
      </Route>

      <Route path='*' element={<Missing msg={'404'} msg2={`We can't find that page.`}/>} />

    </Routes>
  )
}

export default App
