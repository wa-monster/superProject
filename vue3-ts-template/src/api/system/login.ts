import request from "@utils/request"

export const login = (data: any) => {
  return request({
    url: "/user/login",
    method: "post",
    data,
  })
}
