import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleClick = () => {
        console.log(this.inputRef.current.value);
    }
    
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}

export default RefsDemo;
