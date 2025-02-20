import React from 'react'

export default function Registre() {
  return (
    <div class="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div class="text-center mb-12">
          <a href="javascript:void(0)"><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-40 inline-block' />
          </a>
        </div>

        <form>
          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email</label>
              <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Mot de Pass</label>
              <input name="password" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Confirmez Mot de Pass</label>
              <input name="cpassword" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div>

            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label for="remember-me" class="text-gray-800 ml-3 block text-sm">
                j'accepte <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">les termes et les conditions</a>
              </label>
            </div>
          </div>

          <div class="!mt-8">
            <button type="button" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              S'inscrire
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Avez vous deja un compte? <a href="javascript:void(0);" class="text-blue-600 font-semibold hover:underline ml-1">Se Connecter</a></p>
        </form>
      </div>
    </div>
  )
}
