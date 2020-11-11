import React from 'react';
import '../../assets/scss/footer.scss'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contents-wrapper">
        <div className="links">
          <span>이용약관</span>
          <span>개인정보취급방침</span>
          <span>고객센터</span>
        </div>
        <div className="company-info">
          <div className="help-center">고객센터<span>02-2166-7364</span></div>
          <div>서울 강서구 공항대로 453(등촌동)</div>
          <div>한진정보통신 주식회사 | 대표 박은호 | 사업자등록번호 201-81-46253</div>
          <div>© Hanjin Information & Telecommunication System</div>
        </div>
      </div>
    </div>
  )
}
