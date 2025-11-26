

interface ClientStat {
  number: string;
  text: string;
}

export default function Client() {
  const data: ClientStat[] = [
    { number: "250+", text: "Phóng viên, nhà báo sử dụng hằng ngày" },
    { number: "10.000+", text: "Tin bài đã xuất bản thành công" },
    { number: "300+ giờ", text: "Làm việc được tiết kiệm mỗi tháng" },
  ];

  return (
    <div className="wall-container">
      <div className="container-client">
        <div className="section-client">
          <div className="navabar-client">
            {data.map((item, index) => (
              <div key={index} className="client-item">
                <h2 className="number">{item.number}</h2>
                <p className="desc">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
