
import Marquee from "react-fast-marquee";
export default function Partner() {
    const logos = [
        "../img/drone1.png",
        "../img/Vector.png",
        "../img/drone2.png",
        "../img/Vector.png",
        "../img/drone3.png",
        "../img/Vector.png",
        "../img/drone4.png",
        "../img/Vector.png",
        "../img/drone5.png",
        "../img/Vector.png",

    ];
    return (
        <div className="partner">
            <div className="container-trusted">
                <div className="tilte-trusted">Được tin tưởng bởi</div>

                <Marquee
                    speed={60}          // tốc độ
                    gradient={false}    // tắt hiệu ứng mờ 2 đầu
                    loop={0}            // lặp vô hạn
                    pauseOnHover={false}
                    style={{
                        width: "100%",
                        transform: "none"
                    }}

                >
                    {Array.from({ length: 50 })
                        .flatMap(() => logos)
                        .map((logo, idx) => (
                            <img className={`logo-partner ${logo.includes("Vector") ? "logo-vector" : ""}`}
                                key={idx}
                                src={logo}
                                alt={`logo-${idx}`}
                                style={{



                                }}
                            />
                        ))}
                </Marquee>


            </div>
        </div>
    )
}