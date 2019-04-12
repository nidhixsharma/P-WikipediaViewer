import React,{Component} from 'react'
import './Mainpage.css'

//https://en.wikipedia.org/?curid=44926137;
class Mainpage extends Component{
    state={
        clicked:false,
        showIcon:true, 
        randomClick:false       
    }

clickIconHandler=()=>{
    const doesShow = this.state.showIcon
        this.setState({
            clicked:true,
            showIcon:!doesShow
        })
    }

    clickCloseHandler=()=>{
    this.setState({
        clicked:false,
        showIcon:true,
        
    })
    }

    randomClickHandler=()=>{
        this.setState({
            randomClick:true
        })
    }
    
 
    render(){
return(
    <div className="Mainpage">
     
       <p> <a href ="https://en.wikipedia.org/wiki/Special:Random" rel ="noopener noreferrer" target ="_blank" >click here for random article</a></p>
  
        {this.state.showIcon?
       <p onClick={this.clickIconHandler}><i className="fas fa-search" /></p>
        : null
        }

       {this.state.clicked
       ? <p><input  className="SearchBox" type="text" placeholder ="Search"  onChange={this.props.changed} onKeyPress={this.props.keyPress}/><i onClick={this.clickCloseHandler}className="fas fa-window-close FontAwesome"></i> </p>
       : <p>click icon to search</p>
       }
      
    
    </div>
);
}
}


export default Mainpage;