import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ButtonSelect = () => {


    const [id, setid] = useState("");
    const [Category, setCategory] = useState("");
    const [SelectStarApi, setSelectStarApi] = useState([])
    const [valid, setvalid] = useState("");
    const [validCategory, setvalidCategory] = useState("");


    useEffect(() => {
        console.log("INICIANDO");
        axios.get("https://swapi.dev/api/")
            .then(result => result.data)
            .then(response => {
                // console.log(response);
                // console.log(Object.keys(response));
                setSelectStarApi(Object.keys(response));
            })
    }, [])
    
    


    const SearchById = e => {
        e.preventDefault();
        console.log("validando");
        let itsValid= true;
        let num = Number.isInteger(parseInt(id));
        console.log(num);
        if(num === false ){         
            // console.log(num);
            setvalid('debes ingresar un numero ');
            itsValid = false
        } else{
            setvalid('');
        }
        if( Category === ''  ){
            setvalidCategory('debes escoger una catgoria ');
            itsValid = false
        }else{
            setvalidCategory('');
        }

        if(itsValid === true){
            window.location.href ='/'+Category+'/'+id;
        }
    


    }
        
    

    return (
        <div className='container '>
            <div className=' col -6 mt-3 text-black '>
                <h2> Conoce un poco mas sobre el universo de STAR WARS</h2>
                <h4>Escoge una categoría y un numero para poder conocer <br/> mas datos interesantes </h4>
            </div>
            <form onSubmit={SearchById} className="row justify-content-around border border-4 rounded-3" >
                <div className='col-5 mt-5 '>
                <h2>Search For:</h2>
                <select className="form-select form-select-lg mb-3 col-6 p-2" aria-label=".form-select-lg example" onChange={(e) => setCategory(e.target.value)}>
                    <option value={0} hidden >Selecciona una categoria</option>
                    {SelectStarApi.map(elemento =>
                        <option value={elemento} key={elemento} >{elemento}</option>
                    )}
                </select>
                {
                        validCategory !== '' ?
                        <p style={{color:'red'}}>{ validCategory }</p> :
                        ''
                    } 
                </div>
                <div className='col-5 mt-5 '>
                    <label htmlFor="idroute" className="form-label text-black"><h2>ID:</h2></label>
                    <div className='d-flex '>
                        <input type="text" className="form-control " id="idroute" value={id} onChange={(e) => setid(e.target.value)} />  
                        <button type="submit"  className="btn btn-primary">Buscar</button>
                        {/* disabled={Category ? "" : "disabled"} */}
                    </div>
                        {
                        valid !== '' ?
                        <p style={{color:'red'}}>{ valid }</p> :
                        ''
                    } 
                </div>
            </form>
        </div>
    )


}

export default ButtonSelect;