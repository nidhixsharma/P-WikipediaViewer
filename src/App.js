import React, { Component } from 'react';
import axios from 'axios'
import Mainpage from './components/MainPage/Mainpage'
import ResultPage from './components/ResultPage/ResultPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'



import './App.css'


class App extends Component {

  state={
    value: '',
    showResult:false,
    title:'',
    result:[],
    isLoading:true
    }

    inputChangeHandler =(event)=>{
          this.setState({
            value:event.target.value
          })
    }

    keyPressHandler=(event)=>{
      if(event.key==='Enter'){
      this.setState({
        showResult:true
      })
    }
    }

getResult=(searchValue)=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchValue}&format=json`)
        .then((response)=>{
          console.log(response.data);   
          console.log(response.data.query.search[0].title);
          console.log(response.data.query.search);
                
          this.setState({           
           result:response.data.query.search,
           isLoading:false,
            showResult:false
          }) 
        })
        .catch((error)=>{
          console.log(error);
          
        })
  }

   render() {
    if(this.state.showResult){
      this.getResult(this.state.value)
   }
       
    return (
      <div className="App">
      <Header />
    
      <Mainpage changed={this.inputChangeHandler} 
       keyPress ={this.keyPressHandler}
       /> 
    
            {this.state.result.length !==0 
            ?this.state.result.map((searchResult)=>{
              return ( <ResultPage 
                key={searchResult.pageid}
                title={searchResult.title} 
                snippet={searchResult.snippet}
                pageLink= {`https://en.wikipedia.org/?curid=${searchResult.pageid}`}
                />)
        
             })
             :null
            }
     
         
        
        <Footer />
      </div>
    );
  }
}

export default App;
