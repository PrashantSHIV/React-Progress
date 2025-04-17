import { useEffect, useState } from "react";

export function ExpenseApp(){
    const [totalIncome,setIncome] = useState(0)
    const [Expense,setExpense] = useState(0)
    const [balance,setBalace] = useState(0)

    useEffect(() => {
        setBalace(totalIncome - Expense);
    }, [totalIncome, Expense]);

    let summaryCard = [
        {label: 'Total Income',value: totalIncome,},
        {label: 'Total Expense',value: Expense,},
        {label: 'Balance',value: balance,}
    ];

    const categories = ["Food", "Transport", "Shopping", "Health", "Bills", "Income","Entertainment", "Other"];

    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState(0)
    const [category, setCategory] = useState("")

    const [FormData, setFormData] = useState([]);
    
    function addExpense(e){
        e.preventDefault();
        if(!category) return alert('Please select a category');
        let date = new Date().toLocaleDateString()

        let data = [...FormData,{title: title,amount: amount, category: category, date:date}]

        if (category == 'Income'){
            let Tincome = totalIncome + amount
            setIncome(Tincome)
        }
        else{
            let Texpenses = Expense + amount
            setExpense(Texpenses)
        }
        setTitle('')
        setAmount(0)
        setCategory('')
        setFormData(data)
        console.log('Expense Added');
    }

    const [filter,setFilter] = useState('All')

    return(<>
        <div className="absolute left-1/2 top-1/2 -translate-1/2 flex gap-4" >
        <div className="filter p-7  shadow-xs shadow-neutral-900 rounded-2xl w-min translate">
            <h3 className="text-3xl font-[500] mb-8">Filters</h3>
            <label htmlFor="select" className="font-bold">Category:</label>
            <select onChange={(e)=> setFilter(e.target.value)} value={category} className="px-2 py-3 border-1 border-zinc-700 rounded-md text-xl mt-2 mb-8 w-full" name="category"> 
                <option >All</option>
                {categories.map((category)=>
                    <option key={category} value={category}>{category}</option>
                )}
            </select>
            <label htmlFor="input:d" className="font-bold">Choose Date:</label>
            <input type="date" className="mt-2 px-2 py-3 border-1 border-zinc-700 rounded-md text-xl" />

        </div>
        <main className="">
            <div className="shadow-xs shadow-neutral-900 p-8 rounded-2xl ">
                <h1 className="text-4xl text-zinc-600 font-[600]">Add Expense</h1>
                <form action="" onSubmit={addExpense} method="post" className="flex py-5 justify-between gap-4">
                    <input className="px-2 py-3 border-1 border-zinc-700 rounded-md text-xl" type="text" name="title" onChange={(e)=> setTitle(e.target.value)} value={title} placeholder="e.g. Groceries" required/>
                    <input className="px-2 py-3 border-1 border-zinc-700 rounded-md text-xl" type="number" name="amount" onChange={(e)=> setAmount(Number(e.target.value))} value={amount} placeholder="e.g. 50" min={0} required/>
                    <select onChange={(e)=> setCategory(e.target.value)} value={category} className="px-2 py-3 border-1 border-zinc-700 rounded-md text-xl" name="category">
                        <option value='' disabled>e.g. Food</option>
                        {categories.map((category)=>
                            <option key={category} value={category}>{category}</option>
                        )}
                    </select>
                    <button className="px-8 py-3 rounded-md text-xl bg-black text-white">Add</button>
                </form>
                <div className="h-100 overflow-y-auto">
                    {FormData.length > 0? <table className="w-full text-center mt-5">
                        <thead>
                            <tr className="text-2xl border-b border-gray-400">
                                <td className="pb-4">Title</td>
                                <td>Amount</td>
                                <td>Category</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody className="text-xl text-zinc-800">
                            {FormData.map((expense,id)=> <tr key={id} className="border-b border-gray-400">
                                    <td className="py-3">{expense.title}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.category}</td>
                                    <td>{expense.date}</td>
                                </tr>)}
                        </tbody>
                    </table>: <h1>Start Adding Your Expenses</h1>}
                </div>
            </div>

            <div className="shadow-xs shadow-neutral-900 p-8 rounded-2xl mt-8 flex justify-between ">
                {summaryCard.map((ob)=> <div key={ob.label} className="text-2xl font-[400]">
                    <h3>{ob.label}</h3>
                    <h2 className="text-3xl mt-5 font-[500]">${ob.value}</h2>
                </div> )}                
            </div>
        </main>
        </div>
    </>)
}