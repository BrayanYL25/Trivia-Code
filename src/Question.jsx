import './styles/Questions.css'

export default function Question ({ question }) {
  return (
    <header className='p-2 border border-black'>
      <h3>{question}</h3>
    </header>
  )
}
