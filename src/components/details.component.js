import React from 'react';

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                   <div className="row">
                       <div className="col-sm-8" style={{ background:'#C8FFF2', padding:'40px',color:'#000' }}>
                           <div>
                                <span style={{ float:'left', fontSize:'30px' }}>&#8592;</span>
                                <span style={{ float:'right' }}>Вернуться к списку</span>
                                <br/>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{background: '#3DBEDA', padding:'30px'}}>
                            <div>
                                <p style={{ color:'#fff' }}>Экспорт</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                       <div className="col-sm-8" style={{padding:'40px',color:'#000' }}>
                           <h3>{this.props.name}</h3>
                           <div style={{ width:'70%' }}>
                            <p>
                                {this.props.description}
                            </p>
 

                            </div>
                        </div>
                        <div className="col-sm-4" style={{background: '#C8FFF2'}}>
                            <div>
                                    <img style={{ width:'200px', margin:'auto', marginTop:'50%', marginBottom:'50%' }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                            </div>
      

                        </div>
                    </div>
            </div>
        )
    }
}

export default Details;