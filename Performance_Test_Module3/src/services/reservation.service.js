import { http } from "@/api/http";

export const getReservation = () =>
  http.get("/reservations");

export const createReservation = (data) =>
  http.post("/reservations", data);

export const updateReservation=(id,data)=>
  http.patch(`/reservations/${id}`,data);

export const deleteReservation=(id)=>
  http.delete(`/reservations/${id}`);
