import { useState } from "react";
import "./styles.css";

const cardData = [
    { id: 1, text: " 1", image: "https://via.placeholder.com/300" },
    { id: 2, text: "Card 2", image: "https://via.placeholder.com/300" },
    { id: 3, text: "Card 3", image: "https://via.placeholder.com/300" },
    { id: 4, text: "Card 4", image: "https://via.placeholder.com/300" }
];

const Scrollport = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const expandCard = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="container" onClick={() => setExpandedIndex(null)}>
            <h1 className="title">Avinya</h1>
            <section className="scrollport" onClick={(e) => e.stopPropagation()}>
                {cardData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`card ${expandedIndex === index ? "expanded" : ""} ${expandedIndex !== null && expandedIndex !== index ? "blur" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            expandCard(index);
                        }}
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className="card-content">
                            <p>{card.text}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Scrollport;
