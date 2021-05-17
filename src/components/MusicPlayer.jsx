import {
  MDBBtnGroup,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBJumbotron,
  MDBContainer,
} from 'mdbreact';
import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

let player = null;

const MusicPlayer = () => {
  const [volume, setVolume] = useState('0.5');

  useEffect(() => {
    return () => {
      if (player) {
        player.stop();
        player.unload();
        player = null;
      }
    };
  }, []);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (player) {
      player.volume(parseFloat(e.target.value));
    }
  };

  async function readFile() {
    const { filesApi, path } = electron;

    const result = await filesApi.showOpenDialog();

    if (result.canceled) {
      console.log('No file selected. User canceled');
    } else {
      // filePaths is an array that contains all the selected files
      const filename = result.filePaths[0];
      const ext = path.extname(filename);

      if (ext === '.mp3') {
        player = new Howl({
          src: [filename],
          html5: true,
          onload() {
            console.log('Sound is loaded.');
          },
          onloaderror(msg) {
            console.log('NO SOUND!!!', msg);
          },
        });
      }
    }
  }

  return (
    <MDBContainer
      className='mt-5 text-center'
      style={{
        marginTop: '20px',
      }}
    >
      <MDBRow>
        <MDBCol>
          <MDBJumbotron
            style={{
              backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)`,
            }}
          >
            <h2 className='h1 display-3'>Basic Music Player</h2>
            <p className='lead'>
              Please use below controls to select music file, play that file,
              pause playing and when you want, stop it.
            </p>
            <hr className='my-2' />
            <p>Control Buttons</p>
            <MDBBtnGroup vertical={false}>
              <MDBBtn href='#' onClick={readFile} color='primary'>
                <MDBIcon far icon='folder-open' />
              </MDBBtn>
              <MDBBtn
                href='#'
                onClick={() => {
                  if (player) {
                    player.play();
                    player.volume(parseFloat(volume));
                  }
                }}
                color='primary'
              >
                <MDBIcon icon='play' />
              </MDBBtn>
              <MDBBtn
                href='#'
                onClick={() => {
                  if (player) {
                    player.pause();
                  }
                }}
                color='primary'
              >
                <MDBIcon icon='pause' />
              </MDBBtn>
              <MDBBtn
                href='#'
                onClick={() => {
                  if (player) {
                    player.stop();
                  }
                }}
                color='primary'
              >
                <MDBIcon icon='stop' />
              </MDBBtn>
            </MDBBtnGroup>
            <div>
              <label htmlFor='customRange1'>Volume</label>
              <input
                type='range'
                id='customRange1'
                min='0.0'
                max='1.0'
                value={volume}
                step='0.1'
                onChange={handleVolumeChange}
              />
            </div>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MusicPlayer;
