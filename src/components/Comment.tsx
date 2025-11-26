

interface CommentItem {
    id: number;
    title?: string; // For the bold text above the quote (e.g., "Seamless Integration...")
    quote: string;
    authorName: string;
    authorPosition: string;
    avatar: string;
}

const commentDataLeft: CommentItem[] = [
    {
        id: 1,
        quote: "MetaPress đã giúp tòa soạn tôi rút ngắn thời gian sản xuất tin tức, đồng thời nâng cao tính đa dạng và chất lượng sản phẩm báo chí",
        authorName: "Sarah Johnson",
        authorPosition: "Thời Báo Kinh Tế Sài Gòn",
        avatar: "../img/image 7.png" // Placeholder
    },
    {
        id: 2,
        title: "Seamless Integration, Instant Results",
        quote: "Integrating NexaAI into our legacy systems was effortless. Within days we automated critical workflows, reduced errors, and freed our team to focus on strategic initiatives. Simply outstanding.",
        authorName: "Priya Kumar",
        authorPosition: "VP of Operations, Meridian Financial",
        avatar: "../img/image.png" // Placeholder
    }
];

const commentDataRight: CommentItem[] = [
    {
        id: 3,
        quote: "Là người làm nội dung phân tích tài chính, một lĩnh vực hết sức đặc thù, tôi từng nghĩ AI sẽ chẳng giúp gì được đâu. Nhưng tôi đã nhầm. Metapress như một trợ lý giỏi của tôi, giúp tôi sắp xếp những suy nghĩ, ý tưởng đang lộn xộn thành một câu chuyện ngay ngắn, hấp dẫn. Ngay từ video đầu tiên khi kênh vừa ra mắt, nhờ sự hỗ trợ của Metapress, kênh của tôi đã đạt lượng view khủng với thời gian xem hàng nghìn giờ, giúp kênh trở thành đối tác của YouTube ngay sau video đầu tiên",
        authorName: "Ms. Minh Thư",
        authorPosition: "Host, Thu's Show - kênh tin tức tài chính & kinh doanh",
        avatar: "../img/image.png" // Placeholder
    },
    {
        id: 4,
        title: "Scalable AI That Grows with Us",
        quote: "As a fast-growing startup, we needed an AI partner that could scale. NexaAI's modular platform expanded alongside our business—delivering enterprise-grade features.",
        authorName: "Carlos Ramirez",
        authorPosition: "CEO, NovaSolutions",
        avatar: "../img/image.png" // Placeholder
    }
];

const CommentCard = ({ item }: { item: CommentItem }) => (
    <div className="section-comment">
        <div className="title-section-comment">
            {item.title && <div className="comment-healing">{item.title}</div>}
            <div className="comment-quote">{item.quote}</div>
        </div>
        <div className="inf-section-author">
            <img src={item.avatar} className="comment-avar" alt={item.authorName} />
            <div className="comment-author-inf">
                <div className="comment-name">{item.authorName}</div>
                <div className="comment-position">{item.authorPosition}</div>
            </div>
        </div>
    </div>
);

export default function Comment() {
    return (
        <div className="wall-container">
            <div className="navbar-container-comment">
                <div className="header-comment">
                    <div className="title-header-comment">Niềm tin được xây dựng <br /> từ hiệu quả vận hành thực tế</div>
                    <div className="note-header-comment">Mỗi lời chia sẻ là một minh chứng cho hiệu quả vận hành mà MetaPress mang lại.</div>
                </div>
                <div className="body-container-comment">
                    <div className="left-container-comment">
                        {commentDataLeft.map(item => (
                            <CommentCard key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="right-container-comment">
                        {commentDataRight.map(item => (
                            <CommentCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
