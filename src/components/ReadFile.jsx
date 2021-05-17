import { MDBBtn, MDBInput } from 'mdbreact';
import React, { useState } from 'react';
import { Howl } from 'howler';

const ReadFile = () => {
  const [text, setText] = useState('');

  const readFile = async () => {
    const { filesApi, fs, path } = electron;

    const result = await filesApi.showOpenDialog();

    if (result.canceled) {
      console.log('No file selected. User canceled');
    } else {
      // filePaths is an array that contains all the selected files
      const filename = result.filePaths[0];

      const ext = path.extname(filename);

      if (ext === '.mp3') {
        const sound = new Howl({
          src: [filename],
          html5: true,
          onload() {
            console.log('Sound is loaded.');
          },
          onloaderror(msg) {
            console.log('NO SOUND!!!', msg);
          },
        });
        sound.play();
      } else {
        fs.readFile(filename, 'utf-8', (err, data) => {
          if (err) {
            alert('An error ocurred reading the file: ' + err.message);
            return;
          }
          setText(data);
        });
      }
    }
  };

  return (
    <div>
      <MDBBtn onClick={readFile} className='mb-4' style={{ marginTop: '20px' }}>
        Read the File
      </MDBBtn>
      <MDBInput type='textarea' label='File Content' rows='8' value={text} />
    </div>
  );
};

export default ReadFile;
