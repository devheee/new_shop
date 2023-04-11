import { Info } from '../data/Info'

const Footer = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px 0' }} className='footer'>
            <strong>02-2082-1234</strong>
            <p>평일 오전 8:00 ~ 오후 5:00 / 점심시간 오후 12:00 ~ 1:00</p>
            <p>주말 및 공휴일은 CS센터 및 물류가 운영되지 않습니다.</p>
            <ul>
                <li><a href="">이용안내</a></li>
                <li><a href="">개인정보처리방침</a></li>
                <li><a href="">이용약관</a></li>
            </ul>
            <div className="copy">
                <ul>
                    <li>(주)그레이스클럽</li>
                    <li>장준탁</li>
                    <li>08378 서울특별시 구로구 구로3동 디지털로306, 대륭포스트타워 2차 316호</li>
                </ul>
                <ul>
                    <li>License: [106-86-15974]</li>
                    <li>Online License: [제2006-03033호]</li>
                    <li><a href="">[사업자정보확인]</a></li>
                </ul>
                <ul>
                    <li>제휴/마케팅 문의: cosnori_mkt@graceclub.com</li>
                    <li>해외수출문의(International Sales Inquiry): cosnori_biz@graceclub.com</li>
                </ul>
                <ul>
                    <li>C.P.O:bobbyrim@graceclub.com</li>
                    <li>호스팅 제공자:카페24(주)</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;