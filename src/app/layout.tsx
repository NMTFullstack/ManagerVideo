import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/common/styles/globals.css";
import "@/common/styles/index.scss";
import { ReduxProviders } from "@/common/redux/provider";
import Providers from "@/common/utils/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {" "}
                <ReduxProviders>
                    <Providers>{children}</Providers>
                </ReduxProviders>
            </body>
        </html>
    );
}