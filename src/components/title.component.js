import React from 'react';

class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                   
                   <p style={{ textAlign:'center' }}>Данные для отображения отсутствуют</p>
                    <h3 style={{ textAlign:'center' }}>Выберите условия в “Панели фильтров”</h3>
            </div>
        )
    }
}

export default Title;