import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import store from '../store'
import 'react-quill/dist/quill.snow.css';
import Axios from 'axios';
class BoardWrite extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            buser:'',
            btitle:'',
            text: '' 
        }  
        console.log(props)

    }

    componentDidMount(){
        if(!store.getState().islogin){
            return this.props.history.push("/login")
        }
        let {userInfo} = store.getState()
        this.setState({
            buser:userInfo.u_id
        })
    }

    handleChange=(value)=> {
        this.setState({ text: value })
    }
    handleTitleChange=(e)=>{
        this.setState({ btitle: e.target.value })

    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        if(this.state.btitle.trim()==='' || this.state.text.trim()===''){
            alert("글을 입력해주세요")
            return false
        }
        //비동기통신
        let resData = this.state
        Axios.post("/board/write",resData)
        .then(r=>{
            let {msg,code} =r.data
            alert(msg)
            if(code===1){
                this.props.history.push("/board")
            }

        }).catch(err=>{
            alert(err)
        })
        
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    제목 : <input type="text" onChange={this.handleTitleChange}></input>
                    <ReactQuill value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </>
        )
    }
}
export default BoardWrite;