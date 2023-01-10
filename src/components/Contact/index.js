import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_tn4vjlc',
      'template_ys1n1yk',
      refForm.current,
      'mrSJ6T9l2inTozUjq'
    )
    .then( () => {
      alert('Message successfully sent')
      window.location.reload(false)
    },
    () => {
      alert('Failed to send the message')
    })
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in a job position as a junior full stack developer.
            However, if you have other request or question, don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='user_name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='user_email' placeholder='Email' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li><input type='submit' className='flat-button' value='SEND'></input></li>
                </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
        Manuel Senatore,
        <br />
        Italy,
        <br />
        Cava De Tirreni 84013 SA <br/>
        <span>manuelsenatore8@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[40.723224, 14.695919]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[40.723224, 14.695919]} >
            <Popup> Manuel lives here, come over for a cup of coffee :)</Popup>
          </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
