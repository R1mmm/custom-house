package Custom_HOUSE.CH.Controller;

import Custom_HOUSE.CH.Repository.MemberRepository;
import Custom_HOUSE.CH.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MemberController {

    @Autowired
    private MemberRepository repository;

    @PostMapping("/addMember")
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
}
