import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {NEW_PATH, PROFILE_PATH, RECOVERY_PATH, REGISTER_PATH, SIGN_IN_PATH} from '../Routes/Routes'
import styles from './Header.module.scss'

export const Header: FC = () => {

   return (
      <div className={styles.header}>
         <NavLink to={SIGN_IN_PATH}>login</NavLink>
         <NavLink to={REGISTER_PATH}>register</NavLink>
         <NavLink to={RECOVERY_PATH}>recovery</NavLink>
         <NavLink to={NEW_PATH}>newPath</NavLink>
         <NavLink to={PROFILE_PATH}>profile</NavLink>
      </div>
   )
}
