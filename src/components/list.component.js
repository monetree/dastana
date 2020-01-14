import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }



    replaceHtml = (str) => {
        str = str.replace(/<[^>]*>?/gm, '');
        str = str.replace(/&nbsp;/g, '')
        str = str.replace(/&ndash;/g, '')
        return str
    }

    render(){
        let datas = this.props.right_side_list
        return (
            <div style={{ height:'650px', overflowY:'auto' }}>
                {
                    datas.length ? 
                    (
                        <h3 style={{ color:'#000', marginTop:"1cm" }}>Найдено результатов: {datas ? datas.length : 0}</h3>
                    ):(
                        ''
                    )
                }
               
                <div>
                    {
                        datas.length ? 
                        (
                            <div>
                                           {
                                datas.map(data => (
                                    <div style={{ color:'#000', marginTop:'2cm', border:'2px solid #508FD9', width:'40%' }}>
                                        <center><img style={{ width:'200px', marginTop:'1cm', marginBottom:'1cm'}} src={`image/${data.image.split("/")[2]}`} /></center>
                                        
                                        <div class="form-check">
                                            <label class="form-check-label">
                                            <span style={{ color:'#000', fontSize:'25px' }}>{data.name}</span>
                                            </label>
                                            <p style={{ marginRight:'1cm' }}>
                                                {this.replaceHtml(data.description)}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        ):(
                            <h3 style={{ marginTop:'7cm',textAlign:'center' }}>Нет результатов
                            </h3>
                        )
                    }
                </div>

                
            </div>
        )
    }
}

export default List;