package fecorp.biz.kingxia.Dto.SEA;

import lombok.Data;
import java.util.List;

/** 從前端接收的退票資訊 */
@Data
public class S_BKDto {
    
    private String orderNum;
    
    private String orderUid;
    
    private String orderPhone;
    
    private Boolean sp;
    
    private List<Tickets> tickets;
    
    @Data
    public static class Tickets{
        private String ticNum;
        
    }
}
