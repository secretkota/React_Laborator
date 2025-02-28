export default function Header() {
    return (
        <header className="font-mono bg-[#5b5b5b] h-[7vh] flex justify-around items-center border-b border-black">
            <div className="text-[20px]">Logo</div>
            <ul className="flex gap-[10px] list-none p-0 m-0 text-[16px]">
                <li>
                    <a href="#" className="inline-block mr-[3px]">
                        <button className="rounded-[5px] text-center px-[8px] py-[4px] bg-[#2e3239] text-white text-[16px] hover:bg-[#0a1222] hover:shadow-[0_0_0_2px_#cbd6ee]">
                            Main
                        </button>
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-block mr-[3px]">
                        <button className="rounded-[5px] text-center px-[8px] py-[4px] bg-[#2e3239] text-white text-[16px] hover:bg-[#0a1222] hover:shadow-[0_0_0_2px_#cbd6ee]">
                            About
                        </button>
                    </a>
                </li>
                <li>
                    <a href="#" className="inline-block mr-[3px]">
                        <button className="rounded-[5px] text-center px-[8px] py-[4px] bg-[#2e3239] text-white text-[16px] hover:bg-[#0a1222] hover:shadow-[0_0_0_2px_#cbd6ee]">
                            Login
                        </button>
                    </a>
                </li>
            </ul>
        </header>
    );
}