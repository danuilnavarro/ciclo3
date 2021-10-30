package co.ciclo3.ciclo3.web;


import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.model.Reservation;
import co.ciclo3.ciclo3.model.custom.CountClient;
import co.ciclo3.ciclo3.model.custom.StatusAmount;
import co.ciclo3.ciclo3.service.DoctorService;
import co.ciclo3.ciclo3.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public List<Reservation> getReservations(){
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Reservation> getReservation(@PathVariable("id") int idReservation){
        return reservationService.getReservation(idReservation);
    }


    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation r){
        return reservationService.save(r);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation r){
        return reservationService.update(r);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteReservation(@PathVariable("id") int idReservation){ return reservationService.deleteReservation(idReservation); }

    @GetMapping("/report-status")
    public StatusAmount getReservationStatus(){
        return reservationService.getStatusReport();
    }
    @GetMapping("/report-clients")
    public List<CountClient> getCountClient(){
        return reservationService.getTopClients();
    }

    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getDatesReport(@PathVariable("dateOne")String d1, @PathVariable("dateTwo")String d2){
        return reservationService.getReservationPeriod(d1,d2);
    }

}
