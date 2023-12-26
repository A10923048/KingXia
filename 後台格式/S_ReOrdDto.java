(歷史查詢-詳細資料)
package fecorp.biz.kingxia.Dto.SEA;
import java.time.LocalDateTime;
import java.util.List;

import lombok.*;

@Getter
@Setter
@Builder
public class S_ReOrdDto {
    private String orderNum;
    
    private Integer ticCount;
    
    private List<Traveler> travelers;
    
    @Getter
    @Setter
    @Builder
    public static class Traveler{
        private String id;
        
        private String tname;
        
        private String gender;
        
        private LocalDateTime birthday;
        //*LocalDateTime格式長成[2011,1,2,4時,16分,6秒]
        
        private String sbr;
        
        private String email;
        
        private String mobile;
        
        private String ticnum;
    }
}
