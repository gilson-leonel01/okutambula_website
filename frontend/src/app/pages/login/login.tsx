import React, { useState, FormEvent } from 'react';
import { Eye, EyeOff, User } from 'lucide-react';

export default function Login(): React.JSX.Element  {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password, rememberMe });
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
              <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="forestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2d5016;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#3d601f;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4a7c2a;stop-opacity:1" />
                  </linearGradient>
                  <linearGradient id="cabinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b4513;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#a0522d;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#cd853f;stop-opacity:1" />
                  </linearGradient>
                </defs>
                
                <rect width="800" height="200" fill="#87ceeb"/>
                
                <rect width="800" height="400" y="200" fill="url(#forestGrad)"/>
                
                <polygon points="100,200 150,100 200,200" fill="#1a4a0a"/>
                <polygon points="200,200 250,80 300,200" fill="#2d5016"/>
                <polygon points="300,200 350,120 400,200" fill="#1a4a0a"/>
                <polygon points="500,200 550,90 600,200" fill="#2d5016"/>
                <polygon points="600,200 650,110 700,200" fill="#1a4a0a"/>
                
                <rect x="250" y="300" width="300" height="200" fill="url(#cabinGrad)"/>
                
                <polygon points="230,300 400,200 570,300" fill="#654321"/>
                
                <line x1="240" y1="290" x2="390" y2="210" stroke="#4a2c17" stroke-width="2"/>
                <line x1="250" y1="280" x2="380" y2="220" stroke="#4a2c17" stroke-width="2"/>
                <line x1="260" y1="270" x2="370" y2="230" stroke="#4a2c17" stroke-width="2"/>
                
                <rect x="360" y="420" width="80" height="80" fill="#5d4037"/>
                
                <rect x="280" y="340" width="60" height="50" fill="#333"/>
                
                <line x1="250" y1="320" x2="550" y2="320" stroke="#654321" stroke-width="3"/>
                <line x1="250" y1="340" x2="550" y2="340" stroke="#654321" stroke-width="3"/>
                <line x1="250" y1="360" x2="550" y2="360" stroke="#654321" stroke-width="3"/>
                <line x1="250" y1="380" x2="550" y2="380" stroke="#654321" stroke-width="3"/>
                <line x1="250" y1="400" x2="550" y2="400" stroke="#654321" stroke-width="3"/>
                
                <rect x="0" y="500" width="800" height="100" fill="#4a5d23"/>
                
                <rect x="0" y="480" width="800" height="20" fill="#5d7c2f"/>
              </svg>
            `)}`
                    }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                        Bem-vindo de volta
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Por favor entra com seus detalhes de cadastro
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <button
                            onClick={() => handleSocialLogin('Google')}
                            className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                        </button>

                        <button
                            onClick={() => handleSocialLogin('Facebook')}
                            className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="#1877f2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </button>

                        <button
                            onClick={() => handleSocialLogin('LinkedIn')}
                            className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="#0a66c2" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="text-center text-gray-500 mb-6">
                        <span>OU</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                    Lembra-me
                                </label>
                            </div>
                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:text-blue-500"
                            >
                                Esqueceu senha ?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Entrar
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-6">
                        Não possui uma conta ? {' '}
                        <button className="text-blue-600 hover:text-blue-500 font-semibold">
                            Cadastra-se
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}