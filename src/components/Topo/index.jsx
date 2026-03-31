import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                    <p>Homem aranha em julho nos cinemas!</p>
                </div>
            </div>

            <div className='topo'>
                <picture>
                    <a href='#'>
                        <img src='./marvelicon.png' />
                    </a>
                </picture>

                <nav>
                    <a href='#'>Home</a>
                    <a href='#'>Produtos</a>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Contato</a>
                </nav>
            </div>
        </header>
    )
}