import { FaUserAlt } from 'react-icons/fa'
import { GiPadlock } from 'react-icons/gi'

import consofLogo from '../img/consofCS.svg'
import circuloCS from '../img/circuloCS.svg'

import '../css/auth.css'

export const LoginPage = () => {
  return (
    <>
      <div className="body-login">
        <div className="container">
          <div className="img-login">
            <img src={consofLogo} className="logo-login" alt="Consof" />
            <img src={circuloCS} className="circle-login" alt="Consof" />
          </div>
          <div className="form-login">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">< FaUserAlt className="icon-login" /></span>
              <input type="text" className="form-control input-login" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group flex-nowrap mt-4">
              <span className="input-group-text" id="addon-wrapping">< GiPadlock className="icon-login" /></span>
              <input type="password" className="form-control input-login" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className="checkbox">
              <input className="checkbox-select mt-4" type="checkbox" value="" aria-label="Checkbox for following text input" />
              <span className="text-checkbox" id="addon-wrapping">Remember me</span>
              <button className="btn btn-link">Forgot password?</button>
            </div>
            <div>
            <button type="button" className="btn btn-outline-dark mt-4 col-12">LOGIN</button>
            <button type="button" className="btn btn-outline-dark mt-4 mb-4 col-12">REGISTER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
