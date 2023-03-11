import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import { useNavigate, useParams } from "react-router-dom";
const Peserta = () => {
  const [peserta_makrab, setPesertaMakrab] = useState([]);

  useEffect(() => {
    getPeserta_makrab();
  }, []);

  const getPeserta_makrab = async () => {
    const res = await supabase.from("user").select();
    setPesertaMakrab(res.data);
  };
  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="text-center max-w-md mx-auto md:w-full">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 bg-clip-text text-transparent">
            ABSENSI PESERTA MAKRAB
          </h1>
        </div>

        <div className="px-4 mx-auto md:w-full">
          <div className="my-6 flex justify-center mx-4">
            <table className="border-2 border-teal-900 shadow-sm">
              <thead className="border-b-2 border-teal-900 bg-gradient-to-tr from-teal-900 via-teal-800 to-teal-900">
                <tr className="text-white">
                  <th className=" py-3 px-2 lg:px-9">No</th>
                  <th className=" py-3 px-2 lg:px-9">Name</th>
                  <th className=" py-3 px-2 lg:px-9">Kelas</th>
                  <th className=" py-3 px-2 lg:px-9">Whatsapp</th>
                  <th className=" py-3 px-2 lg:px-9">Keterangan</th>
                  <th className=" py-3 px-2 lg:px-9">Action</th>
                </tr>
              </thead>
              <tbody>
                {peserta_makrab &&
                  peserta_makrab.length > 0 &&
                  peserta_makrab.map((peserta, index) => (
                    <tr key={peserta.id} className="text-teal-900">
                      <td className="py-3 px-2 lg:px-9">{index + 1}</td>
                      <td className="py-3 px-2 lg:px-9">{peserta.nama}</td>
                      <td className="py-3 px-2 lg:px-9">{peserta.kelas}</td>
                      <td className="py-3 px-2 lg:px-9">{peserta.wa}</td>
                      <td className="py-3 px-2 lg:px-9">
                        {peserta.pembayaran == "lunas"
                          ? "Lunas"
                          : peserta.pembayaran == "belum"
                          ? "Belum Lunas"
                          : "Belum Bayar"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peserta;
