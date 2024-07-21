import React,{useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

/**
 * Renders the authentication layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to render.
 * @param {boolean} [props.authenticate=true] - Flag indicating whether authentication is required.
 * @returns {ReactNode} The rendered authentication layout component.
 */

function authLayout({children , authenticate = true}) {
    const authstatus = useSelector((state) => state.auth.status);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      if (authenticate && authstatus !== authenticate) {
        navigate("/login");
      } else if(!authenticate && authstatus !== authenticate){
        navigate("/");
      }
      setLoading(false);
    }, [authstatus, authenticate, navigate]);
    
  return (
    loading ? <h1>Loading</h1>:<>{children}</>
  )
}

export default authLayout   