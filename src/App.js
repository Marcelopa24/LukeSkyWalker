import './App.css';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import ButtonSelect from './components/selectButton';
import LukeApi from './components/lukeInfo';


const App = () => {



  return (
    <div className="App">
      <ButtonSelect/> 
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route path="/:Category/:id" exact render={(routeProps) => <LukeApi {...routeProps} />} />
            <Route path="/:idPeople"  exact render={(routeProps) => <LukeApi {...routeProps} />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
