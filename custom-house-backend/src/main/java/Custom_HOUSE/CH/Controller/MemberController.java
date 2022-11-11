package Custom_HOUSE.CH.Controller;

import Custom_HOUSE.CH.Repository.MemberRepository;
import Custom_HOUSE.CH.Repository.UserRepository;
import Custom_HOUSE.CH.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class MemberController {

    @Autowired
    private MemberRepository repository;

    @Autowired
    private UserRepository urepository;

    @PostMapping("/api/new-member")
    public String saveMember(@RequestBody Member member) {
        repository.save(member);
        return "Added member with id: " + member.getId();
    }

    @GetMapping("/findAllMembers")
    public List<Member> getMembers() {
        return repository.findAll();
    }

    @GetMapping("/findAllMembers/{id}")
    public Optional<Member> getMember(@PathVariable int id) {
        return repository.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMember(@PathVariable int id) {
        repository.deleteById(id);
        return "Deleted member with id: " + id;
    }

    @PostMapping("api/id")
    public String findId(@RequestParam("name") String name,
                               @RequestParam("birth") String birth){
        return urepository.findByNameAndBirth(name, birth).getId();
    }

    @PostMapping("api/pw")
    public String findPw(@RequestParam("id") String id,
                               @RequestParam("name") String name){
        return urepository.findByIdAndName(id, name).getPassword();
    }
}

