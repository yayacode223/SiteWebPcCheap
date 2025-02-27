import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Pour afficher un état de chargement

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password); // 🔥 Attendre la connexion
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  // ✅ Redirection après mise à jour de `user`
  useEffect(() => {
    if(user){
      if (user.roles.includes('ROLE_ADMIN')) {
        navigate('/admin/dashboard'); // 🚀 Redirection dès que `user` est défini
      }
      else{
        navigate('/')
      }
    }
  }, [user, navigate]);

  return (
    <div className="bg-gray-50 font-[sans-serif] dark:bg-slate-800 dark:text-white">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <a href="#"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 mb-8 mx-auto block' /></a>

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Connexion</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                    placeholder="Enter user name" 
                    value={email} onChange={(e) => setEmail(e.target.value.trim() )}  
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Mot de Passe</label>
                <div className="relative flex items-center">
                  <input type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" 
                    placeholder="Enter password" 
                    value={password} onChange={(e) => setPassword(e.target.value.trim())} 
                  />
                </div>
              </div>

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
                    "Se Connecter"}
                </button>
              </div>

              <p className="text-gray-800 text-sm !mt-8 text-center">
                Avez-vous déjà un compte ? 
                <Link to={'/register'} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">S'inscrire</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
