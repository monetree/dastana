import React from 'react';

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }



    replaceHtml = (str) => {
        str = str.replace(/<[^>]*>?/gm, '');
        str = str.replace("nbsp", "");
        return str
    }

    render(){
    let image = this.props.image
    if(image){
        image = image.split("/")[2];
    }
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
                                {this.replaceHtml(this.props.description)}
                            </p>
 

                            </div>
                        </div>
                        <div className="col-sm-4" style={{background: '#C8FFF2'}}>
                            <div>
                                    <img style={{ width:'200px', margin:'auto', marginTop:'50%', marginBottom:'50%' }} src={`image/${image}`} />
                            </div>
      

                        </div>
                    </div>
            </div>
        )
    }
}

export default Details;