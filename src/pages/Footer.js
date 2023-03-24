import { Info } from '../data/Info'

const Footer = () => {
    return (
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', padding: '50px' }}>
            {Info.company}
            <address>{Info.address}</address>

        </div>
    )
}

export default Footer;