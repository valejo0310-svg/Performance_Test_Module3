import ReservationCard from "@components/ReservationCard";
import { getReservation,createReservation,updateReservation,deleteReservation } from "@services/reservation.service";
import { getSession } from "@/utils";

export const homeController = async () => {

  const user = getSession();

  const container = document.querySelector("#reservationsContainer");

  const reservations = await getReservation();

  const data=user.role==="admin"?reservations:reservations.filter(r=>r.userId===user.id);

  container.innerHTML=data.map(r=>ReservationCard(r,user.role)).join("") || "No hay reservas";

  document.querySelector("#reservationForm")?.addEventListener("submit",async(e)=> {

  e.preventDefault();

  const f=e.target;

  const all=await getReservation();
  
  const dup=all.find(r=> r.workspace===f.workspace.value && r.date===f.date.value && r.startHour===f.start.value);
  if(dup){alert("Reserva duplicada");return;}

  await createReservation({userId:user.id,
                            workspace:f.workspace.value,
                            date:f.date.value,
                            startHour:f.start.value,
                            endHour:f.end.value,
                            reason:f.reason.value,
                            status:"pending"});

  location.reload();
  });

  document.querySelectorAll(".approve").forEach(b=>b.onclick=async()=>{
  await updateReservation(b.dataset.id,{status:"approved"});
});

  document.querySelectorAll(".reject").forEach(b=>b.onclick=async()=>{
  await updateReservation(b.dataset.id,{status:"rejected"});
});

  document.querySelectorAll(".delete").forEach(b=>b.onclick=async()=>{
  await deleteReservation(b.dataset.id);
});

  document.querySelectorAll(".edit").forEach(b=>b.onclick=async()=>{
    const reservation = reservations.find(r => String(r.id) === String(b.dataset.id));
    if(!reservation) return;

    const workspace = prompt("Espacio de trabajo:", reservation.workspace);
    const date = prompt("Fecha:", reservation.date);
    const startHour = prompt("Hora inicio:", reservation.startHour);
    const endHour = prompt("Hora fin:", reservation.endHour);
    const reason = prompt("Motivo:", reservation.reason);

    if (!workspace || !date || !startHour || !endHour || !reason) return;

    await updateReservation(b.dataset.id, {
      workspace,
      date,
      startHour,
      endHour,
      reason
    });

    location.reload();
  });
};
