import '../assets/styles/main.css'

export default function Main(){
    return(
        <>
            <main className="size-full h-[88px] h-screen bg-[#424242]">
                <div className="mx-auto w-[95%] h-[220px] bg-[url('../night_city.jpg')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
                    <p className='text-white text-[100px] bg-black px-[8px] py-[4px]'>Radio Test</p>
                </div>
            </main>
        </>
    )
}