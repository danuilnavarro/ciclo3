package co.ciclo3.ciclo3.service;

import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.model.Reservation;
import co.ciclo3.ciclo3.repository.DoctorRepository;
import co.ciclo3.ciclo3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }
    public Optional<Reservation> getReservation(int idReservation){
        return reservationRepository.getReservation(idReservation);
    }

    public Reservation save(Reservation r){
        if(r.getIdReservation()==null){
            return reservationRepository.save(r);
        }else{
            Optional<Reservation> raux=reservationRepository.getReservation(r.getIdReservation());
            if(raux.isEmpty()){
                return reservationRepository.save(r);
            }else{
                return r;
            }
        }
    }

    public Reservation update(Reservation r){
        if(r.getIdReservation()!=null){
            Optional<Reservation> k=reservationRepository.getReservation(r.getIdReservation());
            if(!k.isEmpty()){
                if(r.getStartDate()!=null){
                    k.get().setStartDate(r.getStartDate());
                }
                if(r.getDevolutionDate()!=null){
                    k.get().setDevolutionDate(r.getDevolutionDate());
                }
                if(r.getStatus()!=null){
                    k.get().setStatus(r.getStatus());
                }

                return reservationRepository.save(k.get());
            }
        }
        return r;
    }

    public boolean deleteReservation(int idReservation){
        Optional<Reservation> r=getReservation(idReservation);
        if(!r.isEmpty()){
            reservationRepository.delete(r.get());
            return true;
        }
        return false;
    }
}
