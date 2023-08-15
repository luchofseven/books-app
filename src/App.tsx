import Footer from './components/Footer'
import ListOfBooks from './components/ListOfBooks'

export default function App (): JSX.Element {
  return (
    <>
      <main className="main-container">
        <h1 className="main-title">Libros Sorbil</h1>
        <section className="background-section">
          <ListOfBooks />
        </section>
      </main>
      <Footer />
    </>
  )
}
