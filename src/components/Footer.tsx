import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaMailBulk, FaFilePdf, FaMailchimp, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
function Footer() {
  return (
    <div className="bg-white py-4 sm:pt-10 sm:pb-6 p-8 mx-auto">
      <div className="container mx-auto grid gap-y-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
          <nav>
            <h3 className="text-lg font-bold text-[#001F3F] mb-4">İletişim Bilgileri</h3>
            <div className="flex flex-col">
              <span className="font-semibold ">Yunus Gürevin</span>
              <div className="flex flex-row justify-start items-center">
                <FaEnvelope />
                <a href="mailto:yunusgurevin@akgurglobal.com" className="ml-3">yunusgurevin@akgurglobal.com</a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <FaPhone />
                <a href="tel:+90 544 654 34 08 " className="ml-3">+90 544 654 34 08</a>
              </div>

            </div>
            <div className="flex flex-col mt-4">
              <span className="font-semibold ">Yücel Akyüz</span>
              <div className="flex flex-row justify-start items-center">
                <FaEnvelope />
                <a href="mailto:yunusgurevin@akgurglobal.com" className="ml-3">yucelakyuz@akgurglobal.com</a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <FaPhone />
                <a href="tel:+90 543 940 06 46 " className="ml-3">+90 543 940 06 46</a>
              </div>

            </div>
          </nav>
          <nav>
            <h3 className="text-lg  text-[#001F3F] mb-4 font-semibold">Katalog</h3>
            <div className="flex flex-col justify-center text-gray-800 text-m">
              <a href="#" key={`kablo`} className="font-semibold">Kablo</a>
              <a href="#" key={`elbiseler`} className="font-semibold">İş Güvenliği Elbiseleri</a>
            </div>
          </nav>
          <nav>
            
            
          </nav>
        </div>
        <div className="h-[1px] bg-gray-100"></div>
        <div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
          <div className="flex gap-x-4 text-gray-700">
            &copy; 2023 Akgur Global
          </div>
          <nav className="flex gap-x-2 items-center">
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 "
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 "
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 "
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-purple-50 "
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
