import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p>Conheça nossos produtos e escolha o que mais combina com você! Perfeitos para acompanhar você em todas as ocasiôes, nossos produtos são feitos com materiais de alta qualidade e design moderno.</p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="Sadália marrom" />
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    
                     <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="Sadália marrom" />
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                    

                     <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="Sadália pink" />
                           
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Pink</h3>
                            <p className='preco'>249,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    
                     <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt="Tamanco" />
                            <span className='badge-venda'>Lançamento</span>
                        </div>
                        <div className='card-info'>
                            <h3>Tamanco</h3>
                            <p className='preco'>250,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                     <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt="Bolsa Vermelho" />
                        </div>
                        <div className='card-info'>
                            <h3>Bolsa Vermelha</h3>
                            <p className='preco'>150,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                     <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt="Tenis Preto" />
                            <span className='badge-venda'>Ultima oportunidade</span>
                        </div>
                        <div className='card-info'>
                            <h3>Tenis Preto</h3>
                            <p className='preco'>349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






