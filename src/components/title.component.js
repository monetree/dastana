import React from 'react';

class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            path:window.location.pathname
        }
    }

    render(){
        return (
            <div style={this.state.path === "/inventories" ? {} :{ marginTop:'5cm' }}>
                   
                   <p style={{ textAlign:'center' }}>Данные для отображения отсутствуют</p>
                    <h3 style={{ textAlign:'center' }}>Выберите условия в “Панели фильтров”</h3>
            </div>
        )
    }
}

export default Title;