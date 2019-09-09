import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ReusedButton extends Component {

    submitEvent(){
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }


    render(){
        const { buttonText } = this.props;
        return(
            <button onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

ReusedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};



export default ReusedButton;