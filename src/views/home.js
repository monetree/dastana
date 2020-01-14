import React from 'react';
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    

    render(){
        return (
            <div>
                <img src="bg.jpeg" alt="Snow" style={{  width:'100% ', height:'672px'}}></img>
                <div class="centered" style={{ background:'#1E1721',padding:'2cm', borderRadius:'5px' }}>
                    <img src="logo.png" style={{ width:'200px',marginBottom:'2cm' }} />
                    <Link to="/inventories"><p style={{ color:'#fff', textAlign:'center' }}>Электронный каталог</p></Link>
                    <Link to="/standards"><p style={{ color:'#fff',textAlign:'center' }}>Нормативы</p></Link>
                </div>
            </div>  
        )
    }
}


export default Home;