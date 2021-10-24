package co.ciclo3.ciclo3.repository;

import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.repository.crud.DoctorCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DoctorRepository {

    @Autowired
    private DoctorCrudRepository doctorCrudRepository;

    public List<Doctor> getAll(){
        return (List<Doctor>) doctorCrudRepository.findAll();
    }
    public Optional<Doctor> getDoctor(int id){
        return doctorCrudRepository.findById(id);
    }
    public Doctor save(Doctor d){
        return doctorCrudRepository.save(d);
    }
    public void delete(Doctor d){
        doctorCrudRepository.delete(d);
    }
}
