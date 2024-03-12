import './styles/Answer.css'

export default function Answer ({ option, clickHandle }) {
  return (
    <button className='option my-2 p-2 border border-black' onClick={clickHandle}>
      {option}
    </button>
  )
}
