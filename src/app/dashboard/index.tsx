"use client";
import TabManager from "./components/content/index";

import ListAuth from "./components/auth";
export default function Home() {
    return (
        <div>
            <div className="text-align-center mb-16">
                <h1>Quản lý đa phương tiện</h1>
            </div>
            <ListAuth />
            <div>
                <TabManager />
            </div>
        </div>
    );
}
