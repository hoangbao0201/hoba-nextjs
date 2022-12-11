import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import classNames from "classnames/bind";
import styles from "../styles/Home.module.scss";
const cx = classNames.bind(styles);

import CardPlacehoders from "../components/Layout/Placehoders/CardPlacehoders";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home - HoBa</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header />
                <div className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <div className={cx("content")}>
                            <CardPlacehoders />
                            <CardPlacehoders />
                            <CardPlacehoders />
                            <CardPlacehoders />
                            <CardPlacehoders />
                            <CardPlacehoders />
                            <CardPlacehoders />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
