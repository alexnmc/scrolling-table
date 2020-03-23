import React , {Component} from 'react';
import './App.css';


class Data extends Component{
    constructor(props){
      super(props)
      this.state = {
        scrolling: "off",
        data: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      }
    }


    handleScroll = (e) =>  {
      if (e.currentTarget.scrollLeft || e.currentTarget.scrollRight) {
          this.setState({scrolling: "on"})
          
       } else if (e.currentTarget.scrollTop || e.currentTarget.scrollDown) {
        this.setState({scrolling: "off"})
    }
    }

    componentDidMount(){
        if(this.state.data.length > 100){
            throw new Error()
         }
    }
     
    render(){
      return(
        
        <div style = {{with: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div className = "table">
            <div className = "header">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
            </div>
            <div className = "container" onScroll = {this.handleScroll}>
              {this.state.data.map(item => {
                 
                return(
                    <div className = "listContainer" key ={Math.random()}>
                     
                      <div className = "fixedDiv"  style = {{position: this.state.scrolling === "on" ? "fixed" : "relative"}}>
                        <p>1</p>
                        <p>2</p>
                      </div>
                      
                      <div className = "list">
                        {this.state.scrolling === "on" ? <div style = {{width: "270px"}}></div> : null}
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                      </div>
                     
                    </div>
                  )}
              )}
            </div>
          </div>
        </div>
       
      )
    }
}

export default Data;
