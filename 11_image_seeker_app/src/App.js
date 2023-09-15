import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Header from './components/Header';
import searchImages from './api';

function App(){
    const [images, setImages] = useState([]);

    const handleSubmit = async (searchTerm) => {
        const results = await searchImages(searchTerm);
        setImages(results);
    };

    return (
        <main>
            <Header title="Image Seeker APP"/>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </main>
    );
};

export default App;