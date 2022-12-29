import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserLoginForm from './LoginForm';

const Footer = () => {
    return (
        <footer className='homeBackground'>
            <Container style={{ height: '100px', margin:'auto' }}>
                <Row >
                    <Col xs={{ size: 1, offset: 0 }}>
                        {/* <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Directory</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            
                        </ul> */}
                    </Col>
                    <Col xs={{ size: 8, offset: 0 }} className='text-center'>
                        {/* <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a> */}
                    </Col>
                    <Col xs='3' className='text-center NoDecorationCardText list-unstyled unstyleLink inline'>
                        <Container className='inline NoDecorationCardText unstyleLink'>
                        {/* <UserLoginForm className='inline'/> */}
                        {/* <br /> */}
                         
                        <a
                            role='link'
                            className='btn btn-link NoDecorationCardText unstyleLink inline'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o NoDecorationCardText unstyleLink' /> Contact Us
                        </a>
                        
                        </Container>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;