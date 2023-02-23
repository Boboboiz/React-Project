import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./thunk";

const Signin = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({ taiKhoan: "", matKhau: "" });
  const handleChange = (evt) => {
    setLoginInfo({ ...loginInfo, [evt.target.name]: evt.target.value });
  };

  // sau khi login => backend trả về data user => dispatch lên store
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInfo);
    // dispatch async action login
    dispatch(login(loginInfo));
  };
  return (
    <form
      className="flex justify-center items-center mt-40"
      onSubmit={handleSubmit}
    >
      <div>
        <div>
          <label className="block mb-2 font-semibold">Username</label>
          <input
            className="w-60 p-3 mb-2"
            type="text"
            name="taiKhoan"
            placeholder="Tài khoản"
            onChange={handleChange}
            value={loginInfo.taiKhoan}
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Password</label>
          <input
            className="w-60 p-3 mb-2"
            type="password"
            name="matKhau"
            placeholder="Mật khẩu"
            onChange={handleChange}
            value={loginInfo.matKhau}
          />
        </div>
        <Button htmlType="submit" type="primary" className="mt-2">
          {" "}
          Login
        </Button>
      </div>
    </form>
  );
};

export default Signin;
