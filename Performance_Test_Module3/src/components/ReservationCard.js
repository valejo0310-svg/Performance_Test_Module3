export default function ReservationCard(r,userRole){
return `<article class="border p-3 rounded">
<h3>${r.workspace}</h3>

<p>${r.date} - ${r.startHour}-${r.endHour}</p>
<br> 
<p>${r.reason}</p>
<br> 
<p>Estado: ${r.status}</p>
<br> 
${userRole==="admin" && r.status==="pending" ? `<button class="approve" data-id="${r.id}">Aprobar</button>
<button class="reject" data-id="${r.id}">Rechazar</button>`:""}
<br> 
${r.status==="pending" || userRole==="admin" ? `<button class="delete" data-id="${r.id}">Eliminar</button>`:""}
</article>`
}
