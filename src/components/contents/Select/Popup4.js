import React, {Component} from 'react';
import PopupDom from './PopupDom';
import '../../../css/contents/Popup.css'
import select from '../../../assets/select.png'

class PopupContent extends Component {
    
    arr = this.props.arr;

    state = {
        value : 0,
    }

    changeValue = () => {
        this.props.changeValue();

        this.setState({
            value : this.props.value,
        });  
    }

    render(){
        return(
            <div className="abc">
                <div className="def">
                    <div className="eee">
                        <div>
                            <button type="button" className="hijk" onClick={this.props.onClose} >x</button>
                        </div>
                        <div className="lmn">{this.arr[this.state.value]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

class Popup extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            isOpenPopup: false,
        }
 
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
 
    openPopup(){
        this.setState({
            isOpenPopup: true,
        })
    }
 
    closePopup(){
        this.setState({
            isOpenPopup: false,
        })
    }

    arr = ['독수리', '꽝', '꿩', '까치'];
    
    state = {
        value:0,
    }

    changeValue = () => {
        this.setState({
          value : parseInt(Math.random() * 4),
        });
    }
 
    render(){
        return(
            <div className="ert">
                <div className="random-container">
                    <div type="button"
                            id="mmm"
                            onClick={this.openPopup}
                    >
                        
                    </div>
                    {this.state.isOpenPopup &&
                        <PopupDom>
                            <PopupContent arr = {this.arr} value = {this.state.value} changeValue = {this.changeValue} onClose={this.closePopup}/>
                        </PopupDom>
                    }
                    <img className="qqq" src={select}/>
                </div>
            </div>
        );
    }
}
 
export default Popup;