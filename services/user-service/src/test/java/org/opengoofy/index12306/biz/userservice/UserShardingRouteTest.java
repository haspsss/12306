package org.opengoofy.index12306.biz.userservice;

import org.junit.jupiter.api.Test;
import org.opengoofy.index12306.biz.userservice.dao.entity.UserDO;
import org.opengoofy.index12306.biz.userservice.dao.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserShardingRouteTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    void testQueryWithoutUsernameShardingKey() {
        Long userId = 2107349298067800064L;

        UserDO user = userMapper.selectById(userId);

        System.out.println("查询结果：" + user);
    }
}