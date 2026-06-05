import { loginController } from "@/controllers/login.controller";

export default function loginView() {
  setTimeout(() => {
    loginController();
  });

  return `
 <div class="min-h-screen w-full flex items-center justify-center">
    <div class="w-full max-w-md mx-4">
      <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-14 h-0 ">
          
          </div>
          <h1 class="text-2xl font-bold text-indigo-800">Workspace Reservation System SPA</h1>
          <p class="text-indigo-900 text-sm mt-1">Inicia sesión para continuar</p>
        </div>
        <form id="loginForm" class="space-y-4">
          <div>
            <label class="block text-indigo-800 text-sm font-medium mb-1" for="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="manager@test.com"
              required
              class="w-full bg-white/10 border border-blue/20 text-blue placeholder-blue/40 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent transition"
            />
          </div>
          <div>
            <label class="block text-indigo-800 text-sm font-medium mb-1" for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••"
              required
              class="w-full bg-white/10 border border-blue/20 text-blue placeholder-blue/40 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
          </div>

          <button
            id="loginBtn"
            type="submit"
            class="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm mt-2"
          >
            <span id="loginLoader" class="hidden">Cargando...</span>
            <span id="loginText">Iniciar sesión</span>
          </button>
        </form>
      </div>
    </div>
  </div>`;
}
