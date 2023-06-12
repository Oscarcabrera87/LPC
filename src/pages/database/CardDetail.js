import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const play = useLoaderData()

  return (
    <div className="card-details">
      <h2>Career Details for {play.title}</h2>
      <div className="details">
        <h3>The Play</h3>
        <p>This play is about {play.about}</p>
        <p>It has this many characters: {play.char}</p>
        <p>The play is set in {play.set}</p>
        <br></br>
        <h3>The Playwright</h3>
        <p>{play.firstN}</p>
        <p>{play.lastN}</p>
        <p>{play.email}</p>
        <p>{play.bio}</p>
        
      </div>
    </div>
  )
}

// data loader
export const cardDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/results/' + id)

  if (!res.ok) {
    throw Error('Could not find that career.')
  }

  return res.json()
}