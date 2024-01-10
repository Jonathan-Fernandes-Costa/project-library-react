import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { LoginForm } from '../types/login.d';
import { login } from '../services/chamadasAPI';
import { useNavigate } from 'react-router-dom';
import { debounce } from '../services/debounce';
function Login() {
    const navigation = useNavigate();
    const { register, handleSubmit } = useForm<LoginForm>();
    const [isLoading, setIsLoading] = useState(false);
    const debouncedLogin = debounce(HandleLogin, 1000)
    async function HandleLogin(data: LoginForm) {
        try {
            const token = await login(data);
            localStorage.setItem("token", token.token);
            if (token.token != undefined) {
                navigation("/livros");
            }
        } finally {
          setIsLoading(false);
        }
      }

    const onSubmit = async (data: LoginForm) => {
        setIsLoading(true);
        debouncedLogin(data)

    };


    document.body.style.backgroundColor = "white";
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('email', { required: true })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>

                            </div>
                            <div className="mt-2">
                                <input

                                    {...register('password', { required: true })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {isLoading ? (
                                    <>
                                        <ClipLoader className='my-auto mr-1' size={14} color={"#ffffff"} loading={true} />
                                        Logando
                                    </>
                                ) : 'Fazer login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login