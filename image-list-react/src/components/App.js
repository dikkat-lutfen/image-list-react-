import React from "react";
import SearchInput from "./SearchInput";
import axios from 'axios';
import ImageList from './ImagesList';

class App extends React.Component  {

    state={images:[]}

    onSearchSubmit= async (entry)=>  {
     const response =  await axios.get(`https://pixabay.com/api/?key=25959292-6b08e7c9822470e10a93dd77d&q=${entry}&image_type=phot`)   
    
     this.setState({images: response.data.hits})  
    } 

    render(){
    return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit= { this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>
    )
}
}
export default App;