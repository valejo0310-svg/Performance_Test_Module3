import Sidebar from "@/components/Sidebar";
import { getSession } from "@/utils";
import { homeController } from "@/controllers/home.controller";


export default function homeView() {
  const user = getSession();

  setTimeout(() => {
    homeController();
  });

  return `
  <div class="flex">${Sidebar()}
    
  <main class="p-4 flex-1">

    <h1>Bienvenido ${user.name}</h1>

    <p>Rol: ${user.role}</p>

    <form id="reservationForm" class="mb-4">

      <input name="workspace" placeholder="Espacio" required>

      <input type="date" name="date" required>

      <input name="start" placeholder="08:00" required>

      <input name="end" placeholder="09:00" required>

      <input name="reason" placeholder="Motivo" required>

      <button>Crear reserva</button>

    </form>

    <div id="reservationsContainer"></div>

  </main>
  </div>`;
}
