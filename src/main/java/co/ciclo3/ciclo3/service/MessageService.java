package co.ciclo3.ciclo3.service;

import co.ciclo3.ciclo3.model.Doctor;
import co.ciclo3.ciclo3.model.Message;
import co.ciclo3.ciclo3.repository.DoctorRepository;
import co.ciclo3.ciclo3.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }
    public Optional<Message> getMessage(int idMessage){
        return messageRepository.getMessage(idMessage);
    }

    public Message save(Message m){
        if(m.getIdMessage()==null){
            return messageRepository.save(m);
        }else{
            Optional<Message> maux=messageRepository.getMessage(m.getIdMessage());
            if(maux.isEmpty()){
                return messageRepository.save(m);
            }else{
                return m;
            }
        }
    }
}