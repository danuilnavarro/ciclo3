package co.ciclo3.ciclo3.service;

import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.model.Reservation;
import co.ciclo3.ciclo3.model.custom.CountClient;
import co.ciclo3.ciclo3.model.custom.StatusAmount;
import co.ciclo3.ciclo3.repository.DoctorRepository;
import co.ciclo3.ciclo3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

    // Contar top clients
    public List<CountClient> getTopClients(){
        return reservationRepository.getTopClients();
    }

    // Completadas y canceladas (reservas)
    public StatusAmount getStatusReport(){
        List<Reservation> completed=reservationRepository.getReservationsByStatus("completed");
        List<Reservation> cancelled=reservationRepository.getReservationsByStatus("cancelled");

        StatusAmount stsAmt=new StatusAmount(completed.size(),cancelled.size());
        return stsAmt;
    }

    // Revervas en un periodo de fechas
    public List<Reservation> getReservationPeriod(String d1, String d2){

        // yyyy-MM-dd
        SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");
        Date dateOne=new Date();
        Date dateTwo=new Date()
        ;
        try {
            dateOne=parser.parse(d1);
            dateTwo=parser.parse(d2);
        }catch (ParseException e) {
            e.printStackTrace();
        }
        if(dateOne.before(dateTwo)){
            return reservationRepository.getReservationPeriod(dateOne,dateTwo);
        }else{
            return new ArrayList<>();
        }
    }
}

