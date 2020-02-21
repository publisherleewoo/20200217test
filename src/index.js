import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import axios from 'axios'



class Test extends React.Component  {
    constructor(){
        super()
        this.state={
            a:'hi'
        }
        console.log('1.컨스트럭터')
    }

    componentDidMount(){
        console.log('3.컴포넌트 디드마운트')
    }
   
    shouldComponentUpdate(prevProps,prevState){
        console.log('업데이트되었을때슈드',prevState)
        return true
    }
    componentDidUpdate(props,nowstate){
        console.log('업데이트되었을때1',nowstate)
    }
    componentWillUnmount(){
        console.log('제거되었을때')

    }


    render(){
        console.log('2.render')
        return <>
            <button onClick={()=>{this.setState({
                a:'b'
            })}}>테스트</button>
        </>
    }
}


axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('root'));
 