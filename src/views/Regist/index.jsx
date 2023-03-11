import { supabase } from "../../supabase";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
const Regist = () => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const navigate = useNavigate();

  const savePesertaM = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("user").insert([
        {
          nama: nama,
          kelas: kelas,
          wa: whatsapp,
        },
      ]);
      if (error) throw error;
      navigate("/peserta");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto my-24">
      <h1 className="text-[#FF7800] flex justify-center py-12 text-2xl font-semibold md:hidden">
        <span className="text-[#2E3BC4]">MAKRAB</span> : Malam Keakraban
      </h1>

      <div className="flex flex-wrap justify-center items-center">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="border-2 p-6 md:p-6 rounded-lg shadow-lg mb-12">
            <h1 className="text-center pb-2 text-2xl font-semibold">
              Registrasi
            </h1>
            <form onSubmit={savePesertaM}>
              <label htmlFor="" className="text-lg md:text-xl">
                Nama :
              </label>
              <div>
                <input
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  type="text"
                  className="bg-slate-200 rounded-lg p-1 mb-2"
                  placeholder="Nama...."
                />
              </div>
              <label htmlFor="" className="text-lg md:text-xl">
                Kelas :
              </label>
              <div>
                <input
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  type="text"
                  className="bg-slate-200 rounded-lg p-1 mb-2"
                  placeholder="Kelas...."
                />
              </div>
              <label htmlFor="" className="text-lg md:text-xl">
                Whats App :
              </label>
              <div>
                <input
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  type="text"
                  className="bg-slate-200 rounded-lg p-1"
                  placeholder="No Phone"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-[#313ED1] p-2 text-white rounded-lg mt-6">
                  Daftar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="">
            <div className="flex flex-wrap justify-center items-center">
              <h1 className="text-[#FF7800] py-12 text-2xl hidden md:block md:text-3xl lg:text-5xl font-semibold">
                <span className="text-[#2E3BC4]">MAKRAB</span> : Malam Keakraban
              </h1>
              <div className="flex justify-center items-end">
                <img
                  src="https://source.unsplash.com/350x350?man"
                  alt=""
                  className="rounded-lg"
                />
                <p className="z-50 absolute bg-black bg-opacity-40 text-white p-2 mb-2 rounded-lg max-w-xs">
                  MAKRAB adalah program berkumpul bersama dari himatif untuk
                  menjalin silaturahmi antara mahasiswa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regist;
