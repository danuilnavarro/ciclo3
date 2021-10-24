package co.ciclo3.ciclo3.service;

import co.ciclo3.ciclo3.model.Admin;
import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.repository.AdminRepository;
import co.ciclo3.ciclo3.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll(){
        return adminRepository.getAll();
    }
    public Optional<Admin> getAdmin(int idAdmin){
        return adminRepository.getAdmin(idAdmin);
    }

    public Admin save(Admin a){
        if(a.getIdAdmin()==null){
            return adminRepository.save(a);
        }else{
            Optional<Admin> aaux=adminRepository.getAdmin(a.getIdAdmin());
            if(aaux.isEmpty()){
                return adminRepository.save(a);
            }else{
                return a;
            }
        }
    }
    public Admin update(Admin a){
        if(a.getIdAdmin()!=null){
            Optional<Admin> h=adminRepository.getAdmin(a.getIdAdmin());
            if(!h.isEmpty()){
                if(a.getName()!=null){
                    h.get().setName(a.getName());
                }
                if(a.getPassword()!=null){
                    h.get().setPassword(a.getPassword());
                }

                return adminRepository.save(h.get());
            }
        }
        return a;
    }

    public boolean deleteAdmin(int idAdmin){
        Optional<Admin> a=getAdmin(idAdmin);
        if(!a.isEmpty()){
            adminRepository.delete(a.get());
            return true;
        }
        return false;
    }
}
