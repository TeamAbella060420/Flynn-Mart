
import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'

const useAuth = () => {

    const [current , setCurrentUser] = useState({})
        return (
            <div>useAuth</div>
        )
}

export default useAuth