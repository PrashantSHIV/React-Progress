import { useState } from "react"

export function QuoteGen(){

    const [quote, setQuote] = useState("Arise again from the shadow");
    const [author, setAuthor] = useState('Me');

    function getQuote(){
        fetch('https://qapi.vercel.app/api/random')
            .then((data) => data.json())
            .then(data => { 
                setQuote(data.quote);
                setAuthor(data.author);
            })
            .catch(error => 
                alert('Error Occured during fetching')
            );
    }
    
    return <section className="bg-zinc-800 absolute top-1/2 left-1/2 -translate-1/2 p-20 rounded-md text-2xl text-white text-center">
        <h1 className="font-black mb-10 text-3xl whitespace-nowrap">Get a Random Inspirational and Motivational Quote</h1>
        <main className=" bg-zinc-700 p-5 rounded-md">
            <h1 className="mb-4">{quote}</h1>
            <h2 className="text-amber-300">{author}</h2>
            <button onClick={getQuote} className="bg-emerald-500 px-8 py-3 mt-5 rounded-xl">Get</button>
        </main>
    </section>
}