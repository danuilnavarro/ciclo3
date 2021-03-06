package co.ciclo3.ciclo3.web;


import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.model.Score;
import co.ciclo3.ciclo3.service.DoctorService;
import co.ciclo3.ciclo3.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Score")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @GetMapping("/all")
    public List<Score> getScores(){
        return scoreService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Score> getScore(@PathVariable("id") int idScore){
        return scoreService.getScore(idScore);
    }


    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Score save(@RequestBody Score sc){
        return scoreService.save(sc);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Score update(@RequestBody Score sc){
        return scoreService.update(sc);
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteScore(@PathVariable("id") int idScore){
        return scoreService.deleteScore(idScore);
    }
}
