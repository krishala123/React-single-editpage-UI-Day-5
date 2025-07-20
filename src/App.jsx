import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/components/create';
import Edit from './pages/components/Edit';
import Blog from './pages/Blog';
import LearningUseState  from './pages/components/LearningUseState';
import Single from './pages/components/Single';
import Editage from './pages/components/Editage';


function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home/>}/>
      <Route path="!" element={<Blog />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="@" element={<Create />} />
      <Route path='/create' element={<Create/>}/>
      <Route path="#" element={<Edit />} />
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/Single/:id' element={<Single/>}/>
      <Route path='/Editage' element={<Editage/>}/>
      

      <Route path='/LearningUseState' element={<LearningUseState/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;