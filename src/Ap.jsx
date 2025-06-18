import image from "./image_fx.jpg";
import "./assets/Ap.css";

function Ap() {
  return (
    <div className="apartamento">
      <img src={image} alt="apt" />
      <header>
        <div itemScope itemType="https://schema.org/Product">
          <h1 itemProp="name">Apartamento Moderno</h1>

          <div itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.5" />
            <meta itemProp="reviewCount" content="62" />
            <svg
              width="23.22px"
              height="22.22px"
              fill="gold"
              viewBox="0 0 20 20"
            >
              <path d="M12 2 L15 9 L22 9 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9 L9 9 Z" />
            </svg>
            <span> 4.5( 62 Avaliacoes )</span>
          </div>
          <div
            itemProp="description"
            style={{ fontSize: "15px", color: "#6E6E6E" }}
          >
            <p style={{ marginBottom: "20px", marginTop: "0px" }}>
              Apartamento de Luxo, com 4 quartos com uma linda visão
            </p>
            <div className="descricao">
              <div className="item">
                <svg
                  fill="#b4b1b1"
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.22px"
                  height="22.22px"
                >
                  <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
                </svg>
                <span> 2 camas</span>
              </div>

              <div className="item">
                <svg
                  fill="#b4b1b1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                >
                  <path d="M20,16.18V7.82A3,3,0,1,0,16.18,4H7.82A3,3,0,1,0,4,7.82v8.36A3,3,0,1,0,7.82,20h8.36A3,3,0,1,0,20,16.18ZM19,4a1,1,0,1,1-1,1A1,1,0,0,1,19,4ZM5,4A1,1,0,1,1,4,5,1,1,0,0,1,5,4ZM5,20a1,1,0,1,1,1-1A1,1,0,0,1,5,20Zm11.18-2H7.82A3,3,0,0,0,6,16.18V7.82A3,3,0,0,0,7.82,6h8.36A3,3,0,0,0,18,7.82v8.36A3,3,0,0,0,16.18,18ZM19,20a1,1,0,1,1,1-1A1,1,0,0,1,19,20Z"></path>
                </svg>
                <span>85m²</span>
              </div>

              <div className="item">
                <svg
                  width="23.22px"
                  height="22.22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.826 6.07601C11.4937 6.38186 10.5 7.57488 10.5 9V9.75H16.5V9C16.5 7.6504 15.6088 6.50894 14.3828 6.132C14.6183 5.61186 15.1419 5.25 15.75 5.25C16.5784 5.25 17.25 5.92157 17.25 6.75L17.25 12.75H4.5V14.25H5.25L5.25 18C5.25 19.2426 6.25736 20.25 7.5 20.25L16.5 20.25C17.7426 20.25 18.75 19.2426 18.75 18V14.25H19.5V12.75H18.75L18.75 6.75C18.75 5.09315 17.4069 3.75 15.75 3.75C14.3249 3.75 13.1319 4.7437 12.826 6.07601ZM6.75 14.25H17.25V18C17.25 18.4142 16.9142 18.75 16.5 18.75L7.5 18.75C7.08579 18.75 6.75 18.4142 6.75 18L6.75 14.25ZM13.5 7.5C14.0552 7.5 14.54 7.80165 14.7993 8.25H12.2007C12.46 7.80165 12.9448 7.5 13.5 7.5Z"
                    fill="#b4b1b1"
                  />
                </svg>
                <span>1 banheiro</span>
              </div>

              <div className="item">
                <svg
                  fill="#b4b1b1"
                  width="23.22px"
                  height="22.22px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.76l.65.56.65-.56C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z"></path>
                  <circle cx="12" cy="10" r="2"></circle>
                </svg>
                <span> Vista para o mar</span>
              </div>

              <div className="imovel">
                <span>Varanda</span>
                <span>Mobilhado</span>
                <span>Pet Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="conteudo">
        <div
          className="preco"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span itemprop="price" content="1000.00">
            2500,00
          </span>
          <span itemprop="priceCurrency" content="USD">
            $
          </span>
        </div>
        <div
          className="acoes"
          itemProp="potentialAction"
          itemScope
          itemType="https://schema.org/BuyAction"
        >
          <button
            className="visitar"
            itemProp="target"
            content="https://schema.org/Offer"
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://schema.org/Offer"
            >
              Agendar Visita
            </a>
          </button>

          <button
            className="visitar"
            itemProp="target"
            content="https://schema.org/Offer"
            onClick={() => {
              window.location.href = "https://schema.org/Offer";
            }}
          >
            Comprar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Ap;
