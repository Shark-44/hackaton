import { Link } from "react-router-dom";
import "./CardHome.css";

const CardHome = () => {
  return (
    <>
      <div className="card-body">
        <div className="card">
          <h1 className="title-h1"> VOYAGES </h1>
          <br />
          <p>
            Provident itaque modi dolorum et quia accusantium. Voluptas eligendi
            perferendis error repellat magnam laborum dolor suscipit. Hic a
            voluptatem blanditiis modi et deserunt eius culpa veritatis. Et
            quaerat nostrum neque repudiandae maiores repudiandae laboriosam.
            Ducimus ex beatae. Voluptatem quia ut ea consequatur esse animi.
            Provident itaque modi dolorum et quia accusantium. Voluptas eligendi
          </p>
          <div className="divCardLinkStore">
            <button className="globBtn buttonhome">
              <Link to="/store">
                <div className="default-btn">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="#FFF"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle r="3" cy="12" cx="12"></circle>
                  </svg>
                  <span>Quick View</span>
                </div>
                <div className="hover-btn">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="#ffd300"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                  >
                    <circle r="1" cy="21" cx="9"></circle>
                    <circle r="1" cy="21" cx="20"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Shop Now</span>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHome;
