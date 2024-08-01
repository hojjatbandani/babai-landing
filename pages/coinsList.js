import React from "react";
import MainLayout from "@/components/MainLayout/MainLayout";
import CoinsList from "@/components/CoinsList/CoinsList";


export default function Home() {
    return (
        <MainLayout >
            <CoinsList />
        </MainLayout>
    )
}