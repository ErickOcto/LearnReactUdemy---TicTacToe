export default function Header({img, title}) {
  return (
    <header id="header">
        <img src={img} alt={title} />
        <h1>{title}</h1>
    </header>
  )
}
