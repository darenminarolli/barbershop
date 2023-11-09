import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="section_layout">
      <hgroup className="grid justify-center items-center">
        <h1 className="text_header">Rreth nesh</h1>
      </hgroup>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
        <div className="card_about  mt-6  rounded-md  text-black bg-slate-100">
          <div className="card_container">
            <h1 className="card_header">Ekperienc</h1>
            <div className="small_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Vite të shumta të ekspertizës në kujdesin e flokëve.</p>
            </div>
          </div>
          <div className="card_container">
            <h1 className="card_header">Cmimet me te mira</h1>
            <div className="small_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Shërbime të arsyeshme për buxhetin tuaj.</p>
            </div>
          </div>
          <div className="card_container">
            <h1 className="card_header">Profesionalizem</h1>
            <div className="small_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <p>Berberë të përkushtuar për rezultate cilësore.</p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/pexels-thgusstavo-santana-1813346.jpg"
          className="w-full img rounded-md shadow-md mt-6 "
          width={250}
          height={250}
          alt="photo"
        />
      </div>
      <br />
    </section>
  );
};

export default About;
