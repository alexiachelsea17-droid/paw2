<<<<<<< HEAD
import { Moon,Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const[isDark, setIsDark] = useState(false)
=======
import { Moon, Sun, SunIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const [isDark,setIsDark] = useState(false)
>>>>>>> f9ef652ded7c533d54abeb6a675d39a78431f956

    const handleTheme = () => {
        setIsDark(!isDark)
    }
<<<<<<< HEAD
    useEffect(()=> {
        document.documentElement.dataset.theme = isDark ? 'cupcake' : 'light'
    },[isDark])

    if(isDark){
        return <button className="btn btn-circle" onClick={handleTheme} >
          <Sun/>
    </button>

    }
    return <button className="btn btn-circle" onClick={handleTheme}>
           <Moon/>
        </button>
    
  }

export default ThemeSwap
=======

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? 'abyss' : 'valentine'
    },[isDark])

    if(isDark){
        return <button className='btn btn-circle' onClick={handleTheme}>
            <Sun/>
        </button>
    }

    return (
    <div>   
        <button className='btn btn-circle'onClick={handleTheme}>
            <Moon/>
        </button>
    </div>

  )
}

export default ThemeSwap
>>>>>>> f9ef652ded7c533d54abeb6a675d39a78431f956
