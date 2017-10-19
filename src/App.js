import React, { Component } from 'react';
import Header from "./Header" ;

class App extends React.Component{
    constructor ()
    {
        super();
        this.state = {name:"Mik"};
    }
    render(){
       const title = 'hello ken';
        return (

       <div>
       <Header n={title}/>
       {/*<Header title={'Other title'}/>*/}
         </div>
         )
    }
}
//const App = ()=>"Hello Love"

export default App;
