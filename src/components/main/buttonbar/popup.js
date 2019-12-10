import React, {Component} from 'react';


let dialogStyles = {
    maxWidth: '40%',
    margin: '0 auto',
    position: 'relative',
    zIndex: '999',
    backgroundColor: '#eee',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
}

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
}

class Popup extends Component  {
    render(){
        let dialog = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>
                <div>{this.props.children}</div>
            </div>
            );
            if (! this.props.isOpen){
                dialog = null;
            }
            return (
                <div>
                    {dialog}
                </div>
        );
    }
}

export default Popup;