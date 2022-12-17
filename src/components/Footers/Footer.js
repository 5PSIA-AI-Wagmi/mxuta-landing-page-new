import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray text-white pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap flex-row justify-between">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src="https://mxutastore.my.id/img/logo.png"
                style={{ height: 32 }}
                alt="logo"
              />

              <h6 className="font-bold mx-3">Mxuta Store</h6>
            </div>

            <div className="flex flex-wrap items-top justify-end">
              <a
                href="https://www.instagram.com/mxutastore/"
                className="bg-black text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <hr className="my-6 border-blueGray-300" />

          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Mxuta Store.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
