import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    removeNbsp = (str) => {
        console.log(str.replace("nbsp", ""))
        return str
    }

    render(){
        let datas = this.props.right_side_list
        return (
            <div>
                <h3 style={{ color:'#000' }}>Найдено результатов: {datas ? datas.length : 0}</h3>
                <div>
                    {
                        datas.length ? 
                        (
                            <div>
                                           {
                                datas.map(data => (
                                    <div style={{ margin:'auto', color:'#000', marginTop:'2cm' }}>
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input onClick={() => this.props.handleDetails(data)} type="checkbox" class="form-check-input" value="" /><span style={{ color:'#000', fontSize:'25px' }}>{data.name}</span>
                                            </label>
                                            <p>
                                                {data.description.replace(/<[^>]*>?/gm, '')}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        ):(
                            ''
                        )
                    }
                </div>

                
            </div>
        )
    }
}

export default List;