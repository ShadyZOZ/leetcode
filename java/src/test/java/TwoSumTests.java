import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class TwoSumTests {
    @Test
    @DisplayName("nums = [2, 7, 11, 15], target = 9")
    void twoSum() {
        TwoSum twoSum = new TwoSum();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] res = twoSum.twoSum(nums, target);
        assertEquals(0, res[0], "res[0] should equal 0");
        assertEquals(1, res[1], "res[0] should equal 1");
    }
}
