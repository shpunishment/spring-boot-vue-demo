package com.shpun.mapper;

import com.shpun.model.User;
import org.apache.ibatis.annotations.Param;

/**
 * @Description:
 * @Author: sun
 * @Date: 2020/4/7 14:34
 */
public interface UserMapper {

    User getByUsername(@Param("username") String username);

    void insert(User user);

}
