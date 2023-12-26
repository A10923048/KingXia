歷史查詢-光瑞傳給我

package fecorp.biz.kingxia.Dto.SEA;

import java.time.LocalDateTime;
import java.util.List;

import lombok.*;


/** 使用者查詢的訂單 */
@Getter
@Setter
@Builder
public class S_ReOrmDto {
    
    /** 訂購人姓名 */x
    private String orderName;
    
    /** 訂購人電話 */
    private String orderPhone;
    
    /** 訂購人身分證/護照號碼 */ 
    private String orderUid;
    
    
    
    /** 訂單內容 */
    private List<OrderClass> orms;
    
    @Getter
    @Setter
    @Builder
    public static class OrderClass{
        
        /** 航班 */
        private Integer pno;
        
        /** 訂購日期 *LocalDateTime格式長成[2011,1,2,4時,16分,6秒]/
        private LocalDateTime tDate;
        
        /** 開船時間 */
        private String bTime;
        
        /** 回來抵達港口時間 */
        private String eTime;
        
        /** 截止時間 */
        private String sTime;
        
        /** 從哪個港口出發 */
        private String port0;
        
        /** 回來到哪個港口 */
        private String port1;
        
        private Boolean sp;
    }
}
