import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SwiperCore, { } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, FreeMode]);


const newsData = [
    {
        image: "/img/slide1.png",
        title:
            "Việt Nam và nước cờ địa chính trị trên mặt biển: Khi các bến cảng trở thành tiền đồn chiến lược",
        description:
            "Nhiều người đã quên đi câu nói ấy, phát ra tại một hội trường nhỏ bên bờ biển Đình Vũ cách đây hơn hai thập kỷ...",
    },
    {
        image: "/img/slide2.png",
        title: "Từ tăng trưởng nóng đến tái cấu trúc thị trường",
        description:
            "Sau hơn một thập kỷ mở rộng ồ ạt, thị trường thực phẩm – đồ uống (F&B) Việt Nam bước vào giai đoạn 2024...",
    },
    {
        image: "/img/slide3.png",
        title: "Nghệ thuật đặt câu hỏi phỏng vấn cùng AI",
        description:
            "Hub kiến thức chuyên môn đầu tiên tại Việt Nam dành cho Solo Expert về Kinh Doanh & Truyền Thông.",
    },
    {
        image: "/img/slide2.png",
        title: "Startup Việt bứt phá với công nghệ năng lượng sạch",
        description:
            "Doanh nghiệp Việt đang dẫn đầu xu hướng xanh hóa sản xuất, hướng đến mục tiêu phát thải ròng bằng 0.",
    },
];
export const blogData = {
    button: {
        text: "Xem thêm",
    },
};
export default function Blog() {
    const swiperRef = useRef<SwiperType | null>(null);
    const cardTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    useEffect(() => {
        // Đợi tất cả font chữ load xong
        document.fonts.ready.then(() => {
            const titles = document.querySelectorAll<HTMLElement>(".title-blog");

            let maxHeight = 0;

            titles.forEach((item) => {
                const h = item.offsetHeight;
                if (h > maxHeight) maxHeight = h;
            });

            titles.forEach((item) => {
                item.style.height = `${maxHeight}px`;
            });

            console.log("Chiều cao lớn nhất:", maxHeight);
        });
    }, []);


    return (
        <div className="wall-container">
            <div className="container-blog">
                <div className="header-container">
                    <div className="left-header-blog">
                        <div className="title-header sf-48">Blog</div>
                        <div className="subtitle-header sf-24">Tri thức MetaPress</div>
                    </div>
                    <div className="right-header-blog sf-16">Những bản tin mới nhất về AI, chuyển đổi số và công nghệ trong lĩnh vực báo chí, được MetaPress tự động sản xuất tới quý vị bạn đọc hàng ngày</div>
                </div>
                <div className="section-container-blog">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Pagination, Autoplay]}
                        className="blog-swiper"
                        slidesPerView={3}
                        spaceBetween={24}

                        grabCursor={true}
                        speed={300}
                        freeMode={false}
                        pagination={{
                            clickable: true,
                            el: ".blog__pagination",
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                        }}
                        loop={true}

                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                                freeMode: false
                            },
                            768: {
                                slidesPerView: 'auto',
                                spaceBetween: 14,
                            },
                            0: {
                                slidesPerView: 'auto',
                                spaceBetween: 14,
                            },

                        }}
                    >
                        {newsData.map((item, index) => (
                            <SwiperSlide key={index} className="blog__card-container">
                                <div className="card-blog ">
                                    <img src={item.image} className="blog-img" alt={item.title} />
                                    <div className="content-card">
                                        <h3 className="title-blog sf-16" ref={(el) => { cardTitleRefs.current[index] = el; }} >{item.title}</h3>
                                        <p className="subtile-blog clamp-2 ">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="blog__pagination"></div>
                    <div className="blog__button" onClick={() => window.location.href = ""}>
                        <div className="text">{blogData.button.text}</div>
                        <div className="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#0E0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}