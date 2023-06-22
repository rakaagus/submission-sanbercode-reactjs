import React from "react";
import { Link } from "react-router-dom";
import CardLoker from "../../component/CardLoker";
import Footer from "../../component/footer";
import Hero from "../../component/hero";

const Home = () => {
    return(
        <>
            <Hero />
            <div className="flex flex-col container mx-auto lg:px-16 mt-14 mb-14">
                <div className="flex flex-row gap-10 justify-between my-5">
                    <h1 className="font-bold">Daftar Loker</h1>
                    <Link to='/'>Tampilkan Semua Lowongan </Link>
                </div>
                <section className="flex flex-row gap-6 flex-wrap justify-center">
                    <CardLoker />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home