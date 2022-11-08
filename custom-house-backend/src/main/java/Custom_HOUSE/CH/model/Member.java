package Custom_HOUSE.CH.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@Document(collection="Member")
public class Member {
    @Id
    private int num;
    private String name;
    private String id;
    private String password;
    private String gender;
    private String birth;
    private int household;

}
