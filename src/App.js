import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import FontStyle from './Screen/FontStyle';
import FontColor from './Screen/FontColor';
import ButtonsStyle from './Screen/ButtonsStyle';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

history.listen(_ => {
  window.scrollTo(0, 0)  
}); 
var  DomainName = process.env.PUBLIC_URL+'/';
class App extends React.Component{
	render()
	{
  return (
  <>
  <ul>
    <li> <a href={DomainName}> FontStyle </a> </li>
    <li> <a href={DomainName+"FontColor"}> FontColor </a> </li>
    <li> <a href={DomainName+"ButtonsStyle"}> ButtonsStyle </a> </li>
  </ul>
  <BrowserRouter>
        <Route exact path={DomainName} component={FontStyle} />
        <Route  path={DomainName+"FontColor"} component={FontColor} />
        <Route  path={DomainName+"ButtonsStyle"} component={ButtonsStyle} />
  </BrowserRouter>   
  </> 
)
  }
}
export default App;
