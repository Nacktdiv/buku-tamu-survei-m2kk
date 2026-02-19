import { useState, useEffect } from "react"
import Navbar from "./navbar"
import Hero from "./hero"
import Form from "./form";
import Chart from "./chart";
import Footer from "./footer";
import getSurvey from "./api/getSurvey";
import createSurvey from "./api/createSurvey";
import "./App.css"
import createBukuTamu from "./api/createBukuTamu";
import { use } from "react";

export default function App () {
  const [isGuestBookOpen, setIsGuestBookOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [guestBookData, setGuestBookData] = useState({
    nama: '',
    email: '',
    nomor_telepon: '',
    kategori: '',
    alamat: '',
    keterangan: ''
  });
  const [surveyData, setSurveyData] = useState({ kategori: ''});
  const [surveyResults, setSurveyResults] = useState();

  useEffect(() => {
    if (!guestBookData.nama || !guestBookData.email || !guestBookData.nomor_telepon || !guestBookData.kategori || !guestBookData.alamat) return
    createBukuTamu(guestBookData);
    console.log("Data Buku Tamu:", guestBookData);
  }, [guestBookData]);
  
  useEffect(() => {
    if (!surveyData.kategori) return
    createSurvey(surveyData);
    console.log("Data Survey:", surveyData);
  }, [surveyData]);

  useEffect( () => {
      const fetchSurvey = async () => {
        const data = await getSurvey();
        setSurveyResults(data.data);
      }
      fetchSurvey()
  }, [])

  const guestBookFields = [
  {
    name: 'nama',
    label: 'Nama',
    type: 'text',
    placeholder: 'Masukkan nama lengkap',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Alamat email',
    required: true
  },
  {
    name: 'nomor_telepon',
    label: 'No WhatsApp',
    type: 'number',
    placeholder: 'Nomor WhatsApp aktif',
    required: true
  },
  {
    name: 'kategori',
    label: 'Kategori',
    type: 'select',
    options: [
      { value: '', label: 'Pilih Kategori' },
      { value: 'Umum', label: 'Umum' },
      { value: 'Penting', label: 'Penting' },
      { value: 'Janji Temu', label: 'Janji Temu' },
      { value: 'Buat Temu', label: 'Buat Temu' },
      { value: 'Legalisir', label: 'Legalisir' },
      { value: 'Observasi', label: 'Observasi' },
      { value: 'Surat', label: 'Surat' },
      { value: 'PPDBM', label: 'PPDBM' },
      { value: 'Antar barang', label: 'Antar Barang' },
      { value: 'Lainnya', label: 'Lainnya' }
    ],
    required: true
  },
  {
    name: 'alamat',
    label: 'Alamat',
    type: 'textarea',
    placeholder: 'Alamat lengkap',
    required: true
  },
  {
    name: 'keterangan',
    label: 'Keterangan',
    type: 'textarea',
    placeholder: 'Tambahkan keterangan tambahan',
    required: false
  }
];


const surveyFields = [
  {
    name: 'kategori',
    label: 'Tingkat Kepuasan Pelayanan PTSP',
    type: 'select',
    options: [
      { value: '', label: 'Pilih Kepuasan' },
      { value: 'Tidak Puas', label: 'Tidak Puas' },
      { value: 'Cukup Puas', label: 'Cukup Puas' },
      { value: 'Puas', label: 'Puas' },
      { value: 'Sangat Puas', label: 'Sangat Puas' }
    ],
    required: true
  }
];

return (
  <>
    <Navbar></Navbar>
    <Hero setIsGuestBookOpen={setIsGuestBookOpen} setIsSurveyOpen={setIsSurveyOpen}></Hero>
    <Form 
      isOpen={isGuestBookOpen} 
      onClose={() => setIsGuestBookOpen(false)}
      fields={guestBookFields} 
      onSubmit={setGuestBookData} 
      title="Form Buku Tamu"
    />
    <Form 
      isOpen={isSurveyOpen} 
      onClose={() => setIsSurveyOpen(false)} 
      fields={surveyFields} 
      onSubmit={setSurveyData} 
      title="Form Survey Kepuasan"
    />  
    <Chart dataext={surveyResults}/>
    <Footer/>
  </>  
)
}