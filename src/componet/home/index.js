import {React,Component} from "react";
import './home.css';
import img from './1.jpg';
import img1 from './874891105_a41klklk2040b79_b.png';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { imgPath: img  };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.imgPath===img){
        this.setState({ imgPath: img1})
      }
      else{
        this.setState({ imgPath:img})
      }
     
    }, 9000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
    render() {
     
       
      
        return(
            
        <div className="Home" style={{"background": `url(${this.state.imgPath}) center center/cover no-repeat`}}>
           
            
    <div className="container" >
    <div className="title">
              <h2>اهلا بك فى موقع النصيحة</h2>
              
            </div>
    </div>
        </div>);
    }
  }

export default Home;