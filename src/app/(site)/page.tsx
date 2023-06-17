import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const page = () => {
  return (
    <view>
        <Header />
        <Hero />
        <ContactForm />
        <Footer />
    </view>
  )
}

export default page