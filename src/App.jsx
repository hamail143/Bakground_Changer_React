
import './App.css'
import  {useState} from 'react'

function App() {
    const [color, setColor] = useState("olive")

    return ( < div className = "w-[1440px] h-[800px] duration-200 flex flex-col justify-end items-center"
        style = {
            { backgroundColor: color  }
        } >


            <div className='flex flex-row  w-[1200px] h-[30px]  bg-yellow-100 rounded-2xl justify-center mb-20 items-center gap-2' >
                <button onClick={()=>{setColor("red")}} className='w-20 h-6 hover:bg-sky-700 bg-red-700 rounded-2xl text-white'>Red</button>
                <button onClick={()=>{setColor("blue")}} className='w-20 h-6 hover:bg-sky-700 bg-blue-600 rounded-2xl text-white'>Blue</button>
                <button onClick={()=>{setColor("yellow")}} className='w-20 h-6 hover:bg-sky-700 bg-yellow-400 rounded-2xl text-white'>Yellow</button>
                <button onClick={()=>{setColor("green")}}className='w-20 hover:bg-sky-700 hover:bg-sky-700 h-6 bg-green-700 rounded-2xl text-white'>Green</button>
                <button onClick={()=>{setColor("purple")}}className='w-20 h-6 hover:bg-sky-700 bg-purple-600 rounded-2xl text-white'>Purple</button>

                
            </div>
            


        </div>
        

    )
}

export default App