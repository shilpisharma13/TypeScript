import './App.css'
import Message from './components/Message'
import Alert from './components/Alert'
import ListGroup from './components/ListGroup'
import Button from './components/Button'
import { useEffect, useState } from 'react'
import Like from './components/Like'
import ExpandableText from './components/ExpandableText'
import Form from './components/Form'

function App() {
  const [alert, setAlert] = useState(false)
  const handleClick = () => setAlert(true)

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 5000)
  }, [alert])

  return (
    <>
      <div>
        <Message>
          We are learning <span className='text-info-emphasis'>React</span>
        </Message>
        {alert && (
          <Alert message='You have an alert' onClose={() => setAlert(false)} />
        )}
        <ListGroup />
        <Button color='primary' name='Click Me' handleClick={handleClick} />
        <Like />
        <ExpandableText maxChars={50}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptas, suscipit sit optio inventore illo. Labore, dolorum?
          Veritatis libero cumque aliquam quo error a? Eaque aliquid natus
          officiis expedita neque? Autem sint, id, laboriosam atque non quia quo
          ex quidem assumenda maxime facere magni nostrum odio impedit ducimus
          obcaecati reiciendis provident. Dolore illo ex quibusdam! Neque
          sapiente velit expedita quis!
        </ExpandableText>
        <Form />
      </div>
    </>
  )
}

export default App
