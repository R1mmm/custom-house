package Custom_HOUSE.CH.Repository;

import Custom_HOUSE.CH.model.Member;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MemberRepository extends MongoRepository<Member, Integer> {

}
