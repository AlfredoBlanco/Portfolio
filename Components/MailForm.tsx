


export default function Form() {
    return (
        <div className='flex flex-col items-center min-w-[30%] text-gray-50 gap-2'>
            <h1 className='uppercase text-xl'>Email me...</h1>
            <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[30%]">Name : </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'/>
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[30%]">Email : </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'/>
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[30%]">Phone : </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'/>
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[30%]">Subject : </label>
                <input type="text" className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'/>
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                <label className="w-[30%]">Body : </label>
                <textarea className='w-full bg-transparent border-2 border-sky-300 p-2 rounded-xl focus:outline-0'/>
            </div>
        </div>
    )
}