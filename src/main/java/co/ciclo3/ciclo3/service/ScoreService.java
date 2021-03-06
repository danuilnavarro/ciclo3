package co.ciclo3.ciclo3.service;

import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.model.Score;
import co.ciclo3.ciclo3.repository.DoctorRepository;
import co.ciclo3.ciclo3.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll(){
        return scoreRepository.getAll();
    }
    public Optional<Score> getScore(int idScore){
        return scoreRepository.getScore(idScore);
    }

    public Score save(Score sc){
        if(sc.getIdScore()==null){
            return scoreRepository.save(sc);
        }else{
            Optional<Score> scaux=scoreRepository.getScore(sc.getIdScore());
            if(scaux.isEmpty()){
                return scoreRepository.save(sc);
            }else{
                return sc;
            }
        }
    }

    public Score update(Score sc){
        if(sc.getIdScore()!=null){
            Optional<Score> l=scoreRepository.getScore(sc.getIdScore());
            if(!l.isEmpty()){
                if(sc.getScore()!=null){
                    l.get().setScore(sc.getScore());
                }
                if(sc.getMessageScore()!=null){
                    l.get().setMessageScore(sc.getMessageScore());
                }

                return scoreRepository.save(l.get());
            }
        }
        return sc;
    }

    public boolean deleteScore(int idScore){
        Optional<Score> sc=getScore(idScore);
        if(!sc.isEmpty()){
            scoreRepository.delete(sc.get());
            return true;
        }
        return false;
    }
}
