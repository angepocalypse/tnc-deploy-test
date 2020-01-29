import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bdfd777950425a0b01b5ee9da6fac1db367463c77f1ea383b666dcd757d3dcb8"
  }
});
