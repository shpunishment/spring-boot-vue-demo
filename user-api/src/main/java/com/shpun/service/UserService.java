package com.shpun.service;

import com.shpun.model.User;

/**
 * @Description:
 * @Author: sun
 * @Date: 2020/4/7 14:46
 */
public interface UserService {

    User getByUsername(String username);

}
