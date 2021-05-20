import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadFrom';
import ImageGrid from "./comps/GridImage"
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal SelectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
