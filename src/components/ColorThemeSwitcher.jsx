export function ColorThemeSwitcher({state,changeTheme}){
    

    return <main className={`${state && 'text-white'} absolute top-[50%] left-[50%] translate-[-50%] `}>
        <button className="border-2 px-8 py-2 mb-20" onClick={()=>{changeTheme()}}>Switch</button>
        <div className="cards flex gap-30 text-3xl">
            <div className={`card flex justify-center items-center w-[200px] h-[200px] shadow-xs shadow-zinc-${state? 200:900} rounded-[20px] ${state && 'bg-black'}`}>Jai</div>
            <div className={`card flex justify-center items-center w-[200px] h-[200px] shadow-xs shadow-zinc-${state? 200:900} rounded-[20px] ${state && 'bg-black'}`}>Shree</div>
            <div className={`card flex justify-center items-center w-[200px] h-[200px] shadow-xs shadow-zinc-${state? 200:900} rounded-[20px] ${state && 'bg-black'}`}>Ram!</div>
        </div>
    </main>
}