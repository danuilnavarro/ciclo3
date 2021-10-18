package co.ciclo3.ciclo3.repository;

import co.ciclo3.ciclo3.model.Admin;
import co.ciclo3.ciclo3.repository.crud.AdminCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminRepository {

    @Autowired
    private AdminCrudRepository adminCrudRepository;

    public List<Admin> getAll(){
        return(List<Admin>) adminCrudRepository.findAll();
    }
    public Optional<Admin> getAdmin(int idAdmin){
        return adminCrudRepository.findById(idAdmin);
    }
    public Admin save(Admin a){
        return adminCrudRepository.save(a);
    }
}

