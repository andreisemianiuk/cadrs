import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {Login} from '../Login/Login'
import {RegisterPage} from '../Register/RegisterPage'
import {RecoveryPassword} from '../RecoveryPassword/RecoveryPassword'
import {Profile} from '../Profile/Profile'
import {NewPassword} from '../NewPassword/NewPassword'
import {SuperComponents} from '../SuperComponents/SuperComponents'


// all project paths
export const SIGN_IN_PATH = '/login'
export const PROFILE_PATH = '/profile'
export const REGISTER_PATH = '/register'
export const NEW_PATH = '/new-password'
export const RECOVERY_PATH = '/recovery'
export const TEST_PATH = '/test'


const Routes: React.FC = () => {
   return (
      <>
         <Route exact path={'/'} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

         <Route path={SIGN_IN_PATH} render={() => <Login/>}/>
         <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
         <Route path={NEW_PATH} render={() => <NewPassword/>}/>
         <Route path={RECOVERY_PATH} render={() => <RecoveryPassword/>}/>
         <Route path={PROFILE_PATH} render={() => <Profile/>}/>
         <Route path={TEST_PATH} render={() => <SuperComponents/>}/>
         <Route path={'/404'} render={() => <div>Error 404: Page not found!</div>}/>


      </>
   )
}

export default Routes
