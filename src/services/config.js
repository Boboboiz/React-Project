import axios from "axios";

const BASE_URL = "https://movienew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y"

export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
  
});


// refresh token vs finger print (FE + BE khác domain) vs cookies (BE + FE deploy cùng 1 domain)

// cách 1
// hieu.vercel.com FE
// movienew.cybersoft.edu.vn BE
// FE login => BE tạo token => trả lên FE => FE lưu localstorage
// FE call api => đính token vào request

// cách 2
// zalopay.social.vn/ui => FE login => BE tạo token => set token vào cookie của FE
// FE call api => cookie sẽ tự động được đính kèm vào request
// zalopay.social.vn/api
