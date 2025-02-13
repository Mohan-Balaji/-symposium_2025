import { useEffect } from "react";
import "./landing_page.css"
// import cur from "../assets/cur.png";
import heroimg from "../assets/avinyaa.png";
import heroimg2 from "../assets/hero2.png";


const Landing_page = () => {
    useEffect(() => {
        const starCount = 300;
        const stars = [];
        const ufo = document.getElementById("ufo");
        const warpScreen = document.getElementById("warp-screen");
        const heroImage = document.getElementById("hero-img");

        for (let i = 0; i < starCount; i++) {
            let star = document.createElement("div");
            let size = Math.random() * 3 + 1;
            star.classList.add("star");
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            star.style.left = `${Math.random() * window.innerWidth}px`;
            document.body.appendChild(star);
            stars.push({ element: star, parallax: Math.random() * 15 + 5 });
        }

        const handleMouseMove = (e) => {
            let { clientX: x, clientY: y } = e;
            let centerX = window.innerWidth / 2;
            let centerY = window.innerHeight / 2;
            ufo.style.transform = `translate(${x - 30}px, ${y - 15}px)`;

            stars.forEach(starObj => {
                let { element, parallax } = starObj;
                let moveX = (x - centerX) / parallax;
                let moveY = (y - centerY) / parallax;
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        const handleClick = () => {
            warpScreen.style.display = "block";
            warpScreen.innerHTML = "";

            let warpInterval = setInterval(() => {
                for (let i = 0; i < 200; i++) {
                    let warpLine = document.createElement("div");
                    warpLine.classList.add("warp");
                    warpLine.style.left = `${Math.random() * window.innerWidth}px`;
                    warpLine.style.top = `${Math.random() * window.innerHeight}px`;
                    warpScreen.appendChild(warpLine);
                    setTimeout(() => {
                        warpLine.style.height = "100vh";
                        warpLine.style.width = "3px";
                        warpLine.style.opacity = "0";
                        warpLine.style.transform = `translateY(-${window.innerHeight}px)`;
                    }, 10);
                }
            }, 500);

            setTimeout(() => {
                clearInterval(warpInterval);
                window.location.href = "#events";
            }, 5000);
        };

        heroImage.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            heroImage.removeEventListener("click", handleClick);
        };
    }, []);

    return (

        <div className="container">
            <img className="ufo" id="ufo" />
            <div id="subtitle">
            <img src={heroimg} alt="Hero Image" className="hero" id="hero-img" />
           
            </div>
            <div >
            <img src={heroimg2} alt="Hero Image" className="px-12 py-12  w-1/2 animate-float hero" id="hero-img2" />
            </div>
            <div className="warp-screen" id="warp-screen"></div>
        </div>
       
    );
};

export default Landing_page;
