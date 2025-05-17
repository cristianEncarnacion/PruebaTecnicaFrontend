const backButtonHandler=()=>{
    window.history.back()
}

const BackButton = () => {
  return (
    <button onClick={backButtonHandler} className='
    bg-[#0075C9] flex items-center gap-x-2  hover:cursor-pointer text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-[#005f99] transition duration-300 ease-in-out'>
  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>Volver</button>
  )
}

export default BackButton