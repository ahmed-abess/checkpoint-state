import React from 'react';
import './App.css';
import Profile from './components/Profile'


class App extends React.Component{
 state={
   person:
     {Fullname:"Ahmed Ben Abdallah",
       Bio:"uand il a fallu faire le choix des études supérieures, je me suis naturellement dirigé vers un DUT Réseaux informatique et Télécommunications à Annecy ; pour compléter mon expérience \"terrain\", je souhaitais acquérir de larges connaissances théoriques.\n" +
           "\n" +
           "Et, pour donner plus de sens encore à mon passage à l'IUT d'Annecy (puisque, ne nous le cachons pas... j'aime les challenges !), une idée m'est venue : remettre sur pied le gala annuel de l'école, tombé aux oubliettes depuis 19 ans !",
       profession:"Devoloppeur php/symfony",
     img:"avatar.png",
     isVisible:false
     }

 }
 handleToggle=()=>{
     const person={...this.state.person, isVisible: !this.state.person.isVisible}
     console.log(person)
    this.setState({
        person:person
    })
     console.log(this.state.person)
 }

render() {
  return (
      <div className="App">
        <Profile Person={this.state.person} handleToggle={this.handleToggle}/>
      </div>
  );
}
}

export default App;
