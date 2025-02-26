import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'

export default function Registre() {

  const { register, loading } = useAuth();
    
    const navigate = useNavigate();

    const [isAccept, setIsAccpet] = useState(false)
    
    const [name, setName] =useState('')
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
  
  
    async function handleSubmit(e) {
      e.preventDefault(); // 🔥 Empêche le rechargement de la page
      if(password1 !== password2){
        alert("les deux mots de passes ne sont pas correspondant")
      } else{

        try {
          await register(name, email, password1); // 🔥 Attendre la connexion
          // Redirection après connexion réussie
          console.log('inscription reussie')
          navigate('/login')
        } catch (error) {
          alert("erreur d'inscription",error);
        }
        
      }

    }

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)"><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <input name="name" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Entrer votre nom" value={name} onChange={(e) => setName(e.target.value.trim())} required/>
            </div>
            <div>
              <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Entrer votre E-mail" value={email} onChange={(e) => setEmail(e.target.value.trim())} required/>
            </div>
            <div>
              <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Entrer votre mot de passe" required value={password1} onChange={(e) => setPassword1(e.target.value.trim ())} />
            </div>
            <div>
              <input name="cpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="confirmer votre mot de passe" required value={password2} onChange={(e) => setPassword2(e.target.value.trim())} />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" value={isAccept} checked={isAccept} onChange={() => setIsAccpet(!isAccept) }/>
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                j'accepte <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">les termes et les conditions</a>
              </label>
            </div>
          </div>

          <div className="mt-8">

            {
              isAccept && <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              S'inscrire
            </button>
            }
            
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Avez vous deja un compte? <Link to={'/login'} href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Se Connecter</Link></p>
        </form>
      </div>
    </div>
  )
}
