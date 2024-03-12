// Hooks
// import { useRef }
// Styles
import './styles/StateBox.css'

export default function StateBox ({ isOk }) {
  let content = ''
  if (isOk === true) {
    content = '✔'
  } else if (isOk === false) {
    content = '❌'
  } else {
    content = '?'
  }
  return (
    <div className='questionBox border border-black m-2 p-3'>
      {content}
    </div>
  )
}
