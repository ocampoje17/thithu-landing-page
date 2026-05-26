import { useEffect, useState } from 'react';
import './App.css';

interface VersionInfo {
  version: string;
  pub_date: string;
  download_url: string;
}

const VERSION_INFO_URL = "https://thithu.laychu.com/version.json";
const DOWNLOAD_PAGE_URL = "https://laychu.com";

function App() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo>({
    version: "0.5.1",
    pub_date: "2026-05-26T17:25:00+07:00",
    download_url: DOWNLOAD_PAGE_URL
  });
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    fetch(VERSION_INFO_URL)
      .then(res => {
        if (!res.ok) throw new Error('Cannot fetch version info');
        return res.json();
      })
      .then((data: Partial<VersionInfo>) => {
        setVersionInfo(prev => ({
          version: data.version || prev.version,
          pub_date: data.pub_date || prev.pub_date,
          download_url: data.download_url || prev.download_url
        }));
      })
      .catch(err => {
        console.warn('Error loading version info, using fallback defaults:', err);
      });
  }, []);

  return (
    <div className="app-container">
      {/* Ambient glowing stripes in header */}
      <div className="stripe-container">
        <div className="stripe stripe-1"></div>
        <div className="stripe stripe-2"></div>
        <div className="stripe stripe-3"></div>
      </div>

      {/* Navigation Header */}
      <nav className="primary-nav">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <img src="/app_icon.png" alt="Thi Thử Logo" onError={(e) => { e.currentTarget.src = 'https://placehold.co/64x64/0d0d0d/ffffff?text=TT' }} />
            <span>Thi Thử</span>
          </a>
          <div className="nav-links">
            <a href="#features" className="nav-link">Tính năng</a>
            <a href="#update" className="nav-link">Cập nhật</a>
            <a href="#contact" className="nav-link">Liên hệ</a>
          </div>
          <a href="#update" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Tải về
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container hero-section">
        <div className="hero-content">

          <h1 className="hero-title">
            Ôn thi hiệu quả,<br />
            Chinh phục mọi <span>Kỳ thi</span>
          </h1>
          <p className="hero-subtitle">
            Ứng dụng <strong>Thi Thử</strong> là công cụ trắc nghiệm tối giản, mạnh mẽ chạy trực tiếp trên máy tính và điện thoại. Giúp bạn chủ động ôn tập đề thi, lưu trữ kết quả và tiến bộ vượt bậc từng ngày.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn-primary">
              Khám phá tính năng
            </a>
          </div>
        </div>

        {/* Hero Interactive App Mockup */}
        <div className="hero-mockup">
          <div className="mockup-container">
            <div className="mockup-sidebar">
              <div className="mockup-mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="mockup-nav" style={{marginTop: '20px'}}>
                <div className="mockup-nav-item active"><div className="mockup-nav-bar"></div></div>
                <div className="mockup-nav-item" style={{opacity: 0.5}}><div className="mockup-nav-bar" style={{width: '45%'}}></div></div>
                <div className="mockup-nav-item" style={{opacity: 0.5}}><div className="mockup-nav-bar" style={{width: '70%'}}></div></div>
                <div className="mockup-nav-item" style={{opacity: 0.5}}><div className="mockup-nav-bar" style={{width: '55%'}}></div></div>
              </div>
            </div>
            <div className="mockup-content">
              <div className="mockup-header">
                <div className="mockup-title-bar"></div>
                <div className="mockup-search-bar"></div>
              </div>
              <div style={{fontSize: '0.75rem', fontWeight: 600, color: 'var(--mute)', marginBottom: '-10px'}}>DANH SÁCH BỘ ĐỀ THI</div>
              <div className="mockup-grid">
                <div className="mockup-card" style={{borderColor: 'rgba(87, 193, 255, 0.3)', background: 'linear-gradient(to bottom, #0d0d0d, rgba(87, 193, 255, 0.02))'}}>
                  <div className="mockup-card-title" style={{backgroundColor: 'var(--accent-blue)', opacity: 0.8}}></div>
                  <div className="mockup-card-text"></div>
                  <div className="mockup-card-text short"></div>
                  <div className="mockup-card-btn" style={{backgroundColor: 'var(--accent-blue-soft)', borderColor: 'var(--accent-blue)', borderWidth: '1px', borderStyle: 'solid'}}></div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-card-title"></div>
                  <div className="mockup-card-text"></div>
                  <div className="mockup-card-text short"></div>
                  <div className="mockup-card-btn"></div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-card-title"></div>
                  <div className="mockup-card-text"></div>
                  <div className="mockup-card-text short"></div>
                  <div className="mockup-card-btn"></div>
                </div>
                <div className="mockup-card">
                  <div className="mockup-card-title"></div>
                  <div className="mockup-card-text"></div>
                  <div className="mockup-card-text short"></div>
                  <div className="mockup-card-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trải nghiệm thi thử đỉnh cao</h2>
            <p className="section-subtitle">Ứng dụng được thiết kế tối ưu, tập trung vào hiệu quả ôn tập của người học, loại bỏ hoàn toàn các phiền toái thường gặp.</p>
          </div>
          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="feature-card-title">Học & Thi thử theo bộ đề</h3>
              <p className="feature-card-desc">Hệ thống quản lý đề thi khoa học, giúp bạn ôn luyện chi tiết từng phần, làm bài thi thử sát với thực tế để tự tin đạt điểm số cao nhất.</p>
            </div>
            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3 className="feature-card-title">Làm bài & Chấm điểm tức thì</h3>
              <p className="feature-card-desc">Thi thử mô phỏng thời gian thực. Hệ thống tự động lưu kết quả làm bài, phân tích đáp án đúng/sai chi tiết giúp bạn sửa đổi nhanh chóng.</p>
            </div>
            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="feature-card-title">Chia sẻ dễ dàng với file .2td</h3>
              <p className="feature-card-desc">Hỗ trợ định dạng đóng gói bộ đề thi chuyên dụng `.2td` đã mã hóa. Dễ dàng import bộ đề mới từ bạn bè hay xuất bản đề thi của riêng bạn.</p>
            </div>
            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="feature-card-title">Cực nhẹ & Tối ưu phần cứng</h3>
              <p className="feature-card-desc">Ứng dụng được tối ưu hóa vượt trội, khởi động tức thì dưới 1 giây, hoạt động vô cùng mượt mà và tiêu tốn cực kỳ ít dung lượng ổ cứng cũng như bộ nhớ.</p>
            </div>
            {/* Feature 5 */}
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="feature-card-title">Offline & Bảo mật tuyệt đối</h3>
              <p className="feature-card-desc">Ứng dụng hoạt động hoàn toàn offline. Mọi dữ liệu thi cử và lịch sử ôn tập chỉ được lưu trữ trực tiếp trên thiết bị của bạn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Update & Changelog Section */}
      <section id="update" className="update-section">
        <div className="container">
          <div className="update-box">
            <div className="update-left">
              <h3>Tải phiên bản mới nhất</h3>
              <p>Mỗi phiên bản mới đều mang lại các nâng cấp về hiệu năng và bổ sung các tính năng hữu ích để hỗ trợ tối đa việc luyện thi. Ứng dụng hỗ trợ các nền tảng Windows và Android.</p>
              
              <div className="platform-badges">
                <span className="platform-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.55h9.75v9.45L0 20.551v-8zM10.95 1.95L24 0v11.55H10.95V1.95zM10.95 12.55H24v11.45l-13.05-1.95v-9.5z"/>
                  </svg>
                  Windows
                </span>
                <span className="platform-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993c.5512 0 .9994.4482.9994.9993s-.4482.9993-.9994.9993m-11.046 0c-.5511 0-.9993-.4482-.9993-.9993s.4482-.9993.9993-.9993c.5512 0 .9994.4482.9994.9993s-.4482.9993-.9994.9993m11.248-5.8987l1.9663-3.4057c.0984-.1705.0401-.3879-.1304-.4863-.1707-.0984-.3881-.04-.4865.1305l-1.9961 3.4572C15.5457 8.5283 13.8447 8 12 8c-1.8447 0-3.5457.5283-5.0783 1.4384L4.9256 5.9812c-.0984-.1705-.3158-.2289-.4865-.1305-.1705.0984-.2288.3158-.1304.4863l1.9663 3.4057C3.1367 11.218 1.1558 13.7842 1.011 16.82h21.978c-.1448-3.0358-2.1257-5.602-5.215-7.3773"/>
                  </svg>
                  Android
                </span>
              </div>

              <a href={versionInfo.download_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Tải xuống (v{versionInfo.version})
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer-section">
        {/* Subtle bottom stripe gradient echo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(to right, transparent, var(--hero-stripe-start), var(--hero-stripe-end), transparent)',
          opacity: 0.3
        }}></div>

        <div className="container footer-grid">
          <div className="footer-left">
            <div className="footer-brand">
              <img src="/app_icon.png" alt="Thi Thử Logo" onError={(e) => { e.currentTarget.src = 'https://placehold.co/64x64/0d0d0d/ffffff?text=TT' }} />
              <span>Thi Thử App</span>
            </div>
            <p className="footer-desc">
              Học tập chủ động, ôn tập tối giản, thi thử thông minh.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Liên hệ nhà phát triển</h4>
            <ul className="footer-links">
              <li className="footer-link-item">
                <a href="mailto:namqhong@gmail.com">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  namqhong@gmail.com
                </a>
              </li>
              <li className="footer-link-item">
                <a href="https://t.me/namhnz" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle'}}>
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Telegram: @namhnz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Thi Thử. Thiết kế tối giản, hiệu quả tối đa.</p>
          <div className="footer-bottom-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); setActiveModal('privacy'); }}>Chính sách riêng tư</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); setActiveModal('terms'); }}>Điều khoản sử dụng</a>
            <a href="https://laychu.com" target="_blank" rel="noopener noreferrer">laychu.com</a>
          </div>
        </div>
      </footer>

      {/* Modal overlays */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{activeModal === 'privacy' ? 'Chính sách riêng tư' : 'Điều khoản sử dụng'}</h3>
              <button className="modal-close" onClick={() => setActiveModal(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              {activeModal === 'privacy' ? (
                <>
                  <p>Chào mừng bạn đến với ứng dụng <strong>Thi Thử</strong>. Chúng tôi cực kỳ coi trọng sự riêng tư và bảo mật thông tin của người dùng. Dưới đây là các chính sách chi tiết:</p>
                  
                  <h4>1. Hoạt động offline 100%</h4>
                  <p>Ứng dụng được thiết kế để chạy trực tiếp trên thiết bị của bạn mà không cần kết nối mạng để hoạt động (trừ thao tác kiểm tra cập nhật phiên bản nếu được yêu cầu). Không có bất kỳ dữ liệu nào được gửi về máy chủ của chúng tôi.</p>
                  
                  <h4>2. Lưu trữ dữ liệu cục bộ</h4>
                  <p>Tất cả các dữ liệu bao gồm bộ đề thi ôn luyện (.2td), tiến trình học tập, lịch sử thi thử và kết quả điểm số đều được lưu trữ hoàn toàn cục bộ trên ổ cứng máy tính hoặc thiết bị di động cá nhân của bạn.</p>
                  
                  <h4>3. Không thu thập thông tin cá nhân</h4>
                  <p>Chúng tôi không yêu cầu tài khoản đăng nhập, không thu thập họ tên, email, số điện thoại hay bất kỳ thông tin nhận dạng cá nhân nào khác của người sử dụng.</p>

                  <h4>4. Quyền truy cập thiết bị</h4>
                  <p>Ứng dụng chỉ yêu cầu các quyền truy cập tệp tin cơ bản để có thể đọc/ghi các bộ đề thi `.2td` do bạn chọn mở. Chúng tôi hoàn toàn không truy cập trái phép các thư mục riêng tư khác của bạn.</p>
                </>
              ) : (
                <>
                  <p>Bằng việc tải xuống và sử dụng ứng dụng <strong>Thi Thử</strong>, bạn đồng ý với các điều khoản sử dụng sau đây:</p>
                  
                  <h4>1. Mục đích sử dụng</h4>
                  <p>Ứng dụng được cung cấp miễn phí nhằm hỗ trợ học sinh, sinh viên và người tự học ôn luyện các đề thi trắc nghiệm, nâng cao kiến thức cá nhân.</p>
                  
                  <h4>2. Bản quyền bộ đề thi</h4>
                  <p>Định dạng tệp `.2td` được dùng để đóng gói và chia sẻ đề thi. Bạn hoàn toàn tự chịu trách nhiệm về tính pháp lý cũng như bản quyền của các nội dung đề thi do bạn tự nhập, tạo lập hoặc import từ các nguồn bên ngoài vào ứng dụng.</p>
                  
                  <h4>3. Giới hạn trách nhiệm</h4>
                  <p>Ứng dụng chỉ là công cụ hỗ trợ giả lập phòng thi và luyện đề. Chúng tôi không chịu trách nhiệm pháp lý đối với bất kỳ sai sót nào trong nội dung đề thi tự chọn, hoặc kết quả thi thực tế của bạn tại các kỳ thi chính thức.</p>

                  <h4>4. Thay đổi điều khoản</h4>
                  <p>Chúng tôi giữ quyền cập nhật các điều khoản này khi phát hành các phiên bản mới của ứng dụng để đảm bảo phù hợp với luật pháp và trải nghiệm sử dụng an toàn.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
