export function Item({expense}){

    return <tr className="border-b border-gray-400">
    <td className="py-3">{expense.title}</td>
    <td>{expense.amount}</td>
    <td>{expense.category}</td>
    <td>{expense.date}</td>
</tr>
}

export function SummaryItem({ob}){

    return <div className="text-2xl font-[400]">
    <h3>{ob.label}</h3>
    <h2 className="text-3xl mt-5 font-[500]">${ob.value}</h2>
</div> 
}