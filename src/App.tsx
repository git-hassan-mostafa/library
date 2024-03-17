import './App.css'
import Alert from './components/Alert/Alert'
import React, { useState } from 'react'
import notification from './components/assets/notification.wav'
import Container from './components/Container/Container'
import Flex from './components/Flex/Flex'
import Draggable from './components/Draggable/Draggable'
import Close from './components/assets/Close'
import Modal from './components/Modal/Modal'
import MouseDownEffect from './components/MouseDownEffect/MouseDownEffect'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'

function App() {

  const [open, setOpen] = useState(false)
  // console.log(open)
  return (
    <>
      {/* <Input
      //  icon={<div>hello world</div>}
      // placeholder='type your text'
      // type='text'
      className=''
      onChange={()=>{}}
      /> */}

      {/* <button onClick={() => setOpen(prev => !prev)}>open</button>
      {open && <Alert
        position='bottom-left'
        toast={true}
        onClose={() => setOpen(false)}
        variant='contained'
        severity='secondary'
        text='danger'
        sound={notification} />} */}

      {/* <Container size='xl' >
          hello world
        </Container> */}

      {/* <Flex style={{
          backgroundColor:'red'
        }} properties={{
          gap:20,
        }}>
          <div style={{flex:1}}>hello</div>
          <div>world</div>
        </Flex> */}

      {/* <Draggable position={{top:10,left:200}} delay={100} >
          <button>hello</button>
        </Draggable> */}
      {/* <Draggable delay={30} position={'center'} >
        <MouseDownEffect scale={98}>
          <Modal
            rounded={0}
            backgroundColor='white'
            titleColor='orange'
            buttonsColor='orange'
            closeColor='orange'
            messageColor='grey'
            confirm
            // center
            title={'deleting message'}
            message={'hello world from hassan mostafa , are you sure you want to go ahead and delete , this operation may cause unwanted behavior'}
            onOk={() => console.log('hello world')}
          />
        </MouseDownEffect>
      </Draggable> */}

      {/* <Header
        padding='20px'
        backgroundColor='red'
        gap={100}
        navigantionAlignment='to-right'
        direction='ltr'
        iconBar={{
          gap: 20,
          elements: <>
            <a href=''>icon</a>
          </>
        }}
        navigationBar={{
          gap: 20,
          elements: <>
            <div>home</div>
            <div>projects</div>
            <div className='hello'>about</div>
            <div>conact</div>
          </>
        }} featuresBar={{
          gap: 10,
          elements:<>
            <Close width={30} height={30} onClose={function () {
              throw new Error('Function not implemented.')
            } } />
            <div>login</div>
          </>
        }} /> */}

        {/* <SideBar>
          hello world
        </SideBar> */}


    </>
  )
}

export default App
