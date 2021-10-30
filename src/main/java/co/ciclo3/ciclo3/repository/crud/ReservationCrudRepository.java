package co.ciclo3.ciclo3.repository.crud;

import co.ciclo3.ciclo3.model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {

    // Contar top clients JPQL

    @Query("select c.client, COUNT(c.client) from Reservation AS c group by c.client order by COUNT(c.client) desc")
    public List<Object[]> countTotalReservationByClient();

    // Revervas en un periodo de fechas  QUERY methods
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);

    // Completadas y canceladas (reservas)
    public List<Reservation> findAllByStatus(String status);
}
