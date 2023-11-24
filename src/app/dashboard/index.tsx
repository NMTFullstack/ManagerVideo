"use client";

import { Button, Tabs } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, faceProvider, googleProvider } from "@/common/utils/firebase";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import type { TabsProps } from "antd";
import TabManager from "./components/content/index";
import { useUploadVideoYoutube } from "./components/content/hooks/uploadYoutube";
import { CheckOutlined } from "@ant-design/icons";
import {
  getFacebookLoginStatus,
  initFacebookSdk,
  fbLogin,
} from "@/common/utils/FacebookSDK";
export default function Home() {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then((result) => {
          // Lấy Access Token từ đối tượng UserCredential
          const userCredential = result;
          console.log(result);
          // const accessToken = userCredential.credential.accessToken;

          // Sử dụng Access Token để gọi Graph API của Facebook
          // ...
        })
        .catch((error) => {
          // Xử lý lỗi đăng nhập
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, faceProvider)
        .then((result) => {
          // Lấy Access Token từ đối tượng UserCredential
          const user = result.user;
          const credential = FacebookAuthProvider.credentialFromResult(result);
          // const accessToken = credential.accessToken;
          console.log(credential);
          // console.log(accessToken);
          // const accessToken = userCredential.credential.accessToken;

          // Sử dụng Access Token để gọi Graph API của Facebook
          // ...
        })
        .catch((error) => {
          // Xử lý lỗi đăng nhập
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const router = useRouter();
  const [getToken, setGetToken] = useState("");
  useEffect(() => {
    const unFollow = async () => {
      const fetcher = async () => {
        return await axios.post(
          "http://localhost:8000/api/qlc/videoai/getTokenYoutube"
        );
      };
      const data = await fetcher();
      setGetToken(data.data.data.url);
    };
    unFollow();
  }, []);
  const auth = getAuth();
  useEffect(() => {
    // Đăng ký lắng nghe sự kiện khi người dùng đăng nhập hoặc đăng xuất
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in:", user);
        // console.log(user?.accessToken);
        // Redirect hoặc thực hiện các hành động sau khi đăng nhập
      } else {
        console.log("User logged out");
      }
    });

    // Thoát khỏi lắng nghe khi component unmount
    return () => unsubscribe();
  }, []);
  const componentClicked = (response: any) => {
    console.log(response);
  };
  const responseFacebook = (response: any) => {
    console.log(response);
  };
  // useEffect(() => {
  //     console.log("Started use effect");
  //     initFacebookSdk().then(() => {
  //         console.log("running");
  //         getFacebookLoginStatus().then((response) => {
  //             if (response == null) {
  //                 console.log("No login status for the person");
  //             } else {
  //                 console.log(response);
  //             }
  //         });
  //     });
  // }, []);
  function login() {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      if (response.status === "connected") {
        console.log("Person is connected");
      } else {
        // something
      }
    });
  }
  return (
    <div>
      <div className="text-align-center mb-16">
        <h1>Quản lý đa phương tiện</h1>
      </div>
      <div
        className="fb-like"
        data-share="true"
        data-width="450"
        data-show-faces="true"
      ></div>
      <div className="flex flex-space-between mb-16">
        <div className="w-160px">
          <Button type="primary" block onClick={() => signInWithGoogle()}>
            Login Google <CheckOutlined />
          </Button>
        </div>{" "}
        <div className="w-160px">
          <Button type="primary" onClick={() => signInWithFacebook()} block>
            Login Facebook <CheckOutlined />
          </Button>
          {/* <FacebookLogin
                        appId="858866922389096"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                    /> */}
          ,
        </div>{" "}
        <div className="w-160px">
          <Button type="primary" block>
            {" "}
            Login Instagram <CheckOutlined />
          </Button>
        </div>{" "}
        <div className="w-160px">
          <Button type="primary" block>
            Login Twitter <CheckOutlined />
          </Button>
        </div>{" "}
        <div className="w-160px">
          <Button type="primary" block>
            Login Tiktok <CheckOutlined />
          </Button>
        </div>
      </div>
      {/* <button
                onClick={() => {
                    let windowWidth = 964;
                    let windowHeight = 560;

                    let windowLeft = (window.screen.width - windowWidth) / 2;
                    let windowTop = (window.screen.height - windowHeight) / 2;
                    window.open(
                        `${getToken}`,
                        "_blank",
                        "width=" +
                            windowWidth +
                            ", height=" +
                            windowHeight +
                            ", left=" +
                            windowLeft +
                            ", top=" +
                            windowTop
                    );
                }}
            >
                Sign in with Google
            </button> */}

      <div>
        <TabManager />
      </div>
    </div>
  );
}
