function Hero ({ setIsGuestBookOpen, setIsSurveyOpen }) {
    return(
        <>
        <div className="relative bg-primary h-[45vh] rounded-b-[30%] flex flex-col items-center justify-center">
            <div className="absolute bottom-0 bg-primary-light opacity-20 w-[70%] lg:w-[40%] h-[90%] rounded-t-full"></div>
            <h1 className="md:text-4xl text-white text-center font-bold w-[70%] lg:w-[40%]  md:-translate-y-full">SISTEM INFORMASI BUKU TAMU & SURVEI LAYANAN</h1>
            <p className="md:text-xl max-w-[70%] text-center text-white mt-4 md:mt-0 md:-translate-y-full">Catat dan Dokumentasikan Kunjungan Anda</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-5 md:mt-0">
            <Card bg='bg-accent-green' bgbtn='bg-white' tittle='Buku Tamu' desc='Silakan isi buku tamu untuk mencatat kunjungan Anda.' textbtn='Isi Buku Tamu' onClick={() => setIsGuestBookOpen(true)}></Card>
            <Card bg='bg-white' bgbtn='bg-accent-green' tittle='Survey' desc='Berikan nilai dan masukan untuk perbaikan layanan.' textbtn='Mulai Survei' onClick={() => setIsSurveyOpen(true)}></Card>
        </div>
        </>
    )
}

function Card ({bg, bgbtn, tittle, desc, textbtn, onClick }){
    return (
        <div className={`flex w-60 h-30 md:w-100 md:h-50 lg:w-120 lg:h-60 md:-translate-y-1/2 ${bg} border-4 border-accent-green rounded-xl shadow-2xl`}>
            <div className="w-fit h-full flex items-center px-6">
                <div className="bg-gray-300 rounded-full h-1/2 w-15 md:w-25 lg:w-30"></div>
            </div>
            <div className=" flex flex-col gap-2 lg:gap-4 py-4 px-2 md:py-8 md:px-6 justify-center w-full">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold ">{tittle}</h1>
                    <p className="hidden md:block text-base lg:text-lg">{desc}</p>
                    <button className={` text-xs md:text-sm lg:text-base border-solid border-2 border-primary-light ${bgbtn} rounded-full h-full `} onClick={onClick}>{textbtn}</button>
            </div>
        </div>
    )
}

export default Hero