import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { routes } from './app/routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    {routes.map(({path, component: Component}, children) => {
      return (
        <Route path={path} element={< Component />} > 
        {/* {children?.map( ({path, component: Component}) => {
          return (
            <Route path={path} element={< Component />}  />
          )
        })} */}
        </Route>
      )
    })}
    {/* component: Component (gọi là Alias) */} 
    </Routes>  
    
    </BrowserRouter>
  );
}

export default App;
