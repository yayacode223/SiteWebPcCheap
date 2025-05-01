import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';


export default function Registre() {

  const { register} = useAuth();
    
    const navigate = useNavigate();

    const [isAccept, setIsAccpet] = useState(false)
    
    const [name, setName] =useState('')
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    // l'etat du loader

    const [loading, setLoading] = useState(false); // Pour afficher un état de chargement

  
  
    async function handleSubmit(e) {
      e.preventDefault(); // 🔥 Empêche le rechargement de la page
      if(password1 !== password2){
        toast.error("les deux mots de passes ne sont pas correspondant")
      } else{
        setLoading(true)
        try {
          await register(name, email, password1); // 🔥 Attendre la connexion
          // Redirection après connexion réussie
          toast.success('inscription reussie')
          navigate('/login')
          setLoading(false)
        } catch (error) {
          toast.error("erreur d'inscription",error);
          setLoading(false)

        }

        
      }

    }

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border-gray-300 dark:bg-gray-700 shadow-xl rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className='text-gray-800 dark:text-gray-100 text-center text-2xl font-bold'>S'inscrire</h2>
          
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input name="name" type="text" className="w-full dark:bg-transparent dark:text-gray-200 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Entrer votre nom" value={name} onChange={(e) => setName(e.target.value.trim())} required/>
            </div>
            <div>
              <input name="email" type="text" className="w-full dark:bg-transparent dark:text-gray-200 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Entrer votre E-mail" value={email} onChange={(e) => setEmail(e.target.value.trim())} required/>
            </div>
            <div>
              <input name="password" type="password" className="w-full dark:bg-transparent dark:text-gray-200 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Entrer votre mot de passe" required value={password1} onChange={(e) => setPassword1(e.target.value.trim ())} />
            </div>
            <div>
              <input name="cpassword" type="password" className="w-full dark:bg-transparent dark:text-gray-200 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="confirmer votre mot de passe" required value={password2} onChange={(e) => setPassword2(e.target.value.trim())} />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" value={isAccept} checked={isAccept} onChange={() => setIsAccpet(!isAccept) }/>
              <label htmlFor="remember-me" className="text-gray-800 dark:text-gray-100 ml-3 block text-sm">
                j'accepte <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">les termes et les conditions</a>
              </label>
            </div>
          </div>


          {
            isAccept && 
            <div className="!mt-8">
              <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" 
                disabled={loading}
              >
                {loading ?
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 rounded-full animate-pulse bg-white"></div>
                    <div className="w-3 h-3 rounded-full animate-pulse bg-white"></div>
                    <div className="w-3 h-3 rounded-full animate-pulse bg-white"></div>
                  </div> 
                  : 
                  "S'inscrire"}
              </button>
            </div>
          }
            
          <p className="text-gray-800 dark:text-gray-100 text-sm mt-6 text-center">Avez vous deja un compte? <Link to={'/login'} href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Se Connecter</Link></p>
        </form>
      </div>
    </div>
  )
}
