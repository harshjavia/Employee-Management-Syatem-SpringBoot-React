import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }     
        
    render() {
        return (
            <div>
                <header className='header'>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div className='container-fluid'>
                             <span className='navbar-brand'>Employee Management App</span>    
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent