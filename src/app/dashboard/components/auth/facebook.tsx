"use client";
import { Button } from "antd";
import { useEffect, useState } from "react";
import {
    getFacebookLoginStatus,
    initFacebookSdk,
    fbLogin,
} from "@/common/utils/FacebookSDK";

export default function FacebookAuth() {
    useEffect(() => {
        console.log("Started use effect");
        initFacebookSdk().then(() => {
            console.log("running");
            getFacebookLoginStatus().then((response) => {
                if (response == null) {
                    console.log("No login status for the person");
                } else {
                    console.log(response);
                }
            });
        });
    }, []);
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
        <div className="text-align-center">
            <div className="my-20">
                <h3>Facebook</h3>
            </div>
            <div className="my-20 w-140px">
                <Button size="large" block onClick={() => login()}>
                    Timviec
                </Button>
            </div>
            <div className="my-20 w-140px" onClick={() => login()}>
                <Button size="large" block>
                    Work
                </Button>
            </div>
        </div>
    );
}
