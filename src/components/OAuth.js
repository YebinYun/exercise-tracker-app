import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grantType = "authorization_code";
    const CLIENT_ID = `${process.env.REACT_APP_REST_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REST_API_URI}`;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);

        const { access_token } = res.data;
        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )

          .then((res) => {
            console.log("2번째", res);
            console.log(res.data.properties.nickname);
            sessionStorage.setItem("username", res.data.properties.nickname);
            navigate("./main");
          });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  return <div>OAuth</div>;
}

export default OAuth;
