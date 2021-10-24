package co.ciclo3.ciclo3.repository;

import co.ciclo3.ciclo3.model.Score;
import co.ciclo3.ciclo3.repository.crud.ScoreCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ScoreRepository {

    @Autowired
    private ScoreCrudRepository scoreCrudRepository;

    public List<Score> getAll(){
        return(List<Score>) scoreCrudRepository.findAll();
    }
    public Optional<Score> getScore(int idScore){ return scoreCrudRepository.findById(idScore); }
    public Score save(Score sc){
        return scoreCrudRepository.save(sc);
    }
    public void delete(Score sc){
        scoreCrudRepository.delete(sc);
    }
}
