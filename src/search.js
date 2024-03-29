import React, { useState } from "react";
import { FetchFunc } from "./searchComponent/fetch";
import { useNavigate } from "react-router-dom";
import "./style/style.css";
import Profile from "./images/profile.jpg";
import Logo from "./images/logo.png";
import Tia from "./images/tia.png";

function Search() {
  const [text, setText] = useState("");
  const history = useNavigate();
  const clear = () => {
    return (
      <i
        onClick={() => {
          setText("");
        }}
        className="fa-regular fa-x clear"
      ></i>
    );
  };
  return (
    <>
      <header>
        <div className="header">
          <div className="header-nav">
            <a
              href="https://mail.google.com/mail/&ogbl"
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>
            <a
              href="https://www.google.co.uz/imghp?hl=uz&ogbl"
              target="_blank"
              rel="noreferrer"
            >
              Rasmlar
            </a>
            <svg className="menu">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
            <img className="profile-image" src={Profile} alt="profile" />
          </div>
        </div>
      </header>
      <main>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="main-input">
          <div className="main-input-in">
            <div className="input">
              <svg
                className="searchIcon"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>

              <input
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && e.target.value) {
                    history("/search");
                    FetchFunc(text);
                  }
                }}
              />
              <div className="clear-div">{text ? clear() : undefined}</div>
              {/*eslint-disable-next-line jsx-a11y/alt-text*/}
              <img src={Tia} />
              <svg
                className="voice"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="main-center">
          <div className="buttons">
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#">Google Qidiruvi</a>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="#">Omadingizni sinang</a>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="langs">
            <p>
              Google xizmatlari quyidagi tillarda taqdim etiladi:{" "}
              <a href="https://www.google.com/setprefs?sig=0_zN4LvzR1XbgFn3B3mA_kKBoTqmQ%3D&hl=ru&source=homepage&sa=X&ved=0ahUKEwjt9qaj7NT1AhXq7rsIHT0sCHcQ2ZgBCBA">
                русский
              </a>
              <a href="https://www.google.com/setprefs?sig=0_zN4LvzR1XbgFn3B3mA_kKBoTqmQ%3D&hl=en&source=homepage&sa=X&ved=0ahUKEwjt9qaj7NT1AhXq7rsIHT0sCHcQ2ZgBCBE">
                English
              </a>
            </p>
          </div>
          <div className="footer-country">O'zbekiston</div>
          <div className="copyright">
            <div className="left-contents">
              <a href="https://about.google/?utm_source=google-UZ&utm_medium=referral&utm_campaign=hp-footer&fg=1">
                Google haqida
              </a>
              <a href="https://www.google.com/intl/uz_uz/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                Reklama
              </a>
              <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
                Biznes
              </a>
              <a href="https://google.com/search/howsearchworks/?fg=1">
                Qidiruv qanday ishlaydi
              </a>
            </div>
            <div className="right-contents">
              <a href="https://policies.google.com/privacy?hl=uz&fg=1">
                Maxfiylik
              </a>
              <a href="https://policies.google.com/terms?hl=uz&fg=1">
                Shartlar
              </a>
              {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
              <a href="#">Sozlamalar</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Search;
