package co.ciclo3.ciclo3.repository;

import co.ciclo3.ciclo3.model.Client;
import co.ciclo3.ciclo3.model.Reservation;
import co.ciclo3.ciclo3.model.custom.CountClient;
import co.ciclo3.ciclo3.repository.crud.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public List<Reservation> getAll(){
        return(List<Reservation>) reservationCrudRepository.findAll();
    }
    public Optional<Reservation> getReservation(int idReservation){ return reservationCrudRepository.findById(idReservation); }
    public Reservation save(Reservation r){
        return reservationCrudRepository.save(r);
    }
    public void delete(Reservation r){
        reservationCrudRepository.delete(r);
    }

    // Completadas y canceladas (reservas)
    public List<Reservation> getReservationsByStatus(String status){
        return reservationCrudRepository.findAllByStatus(status);
    }

    // Revervas en un periodo de fechas
    public List<Reservation> getReservationPeriod(Date dateOne, Date dateTwo){
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(dateOne,dateTwo);
    }

    // Contar top clients
    public List<CountClient> getTopClients(){
        List<CountClient> result=new ArrayList<>();

        List<Object[]> report=reservationCrudRepository.countTotalReservationByClient();
        for(int i=0;i<report.size();i++){

            result.add(new CountClient((Long) report.get(i)[1],(Client)report.get(i)[0] ));
        }
        return result;
    }
}
