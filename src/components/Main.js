import React, { Component } from 'react';
import logo from '../logo.png';
import { Layout, Input, Row, Col } from 'antd';
import ProductCard from './ProductCard';
import { Redirect } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

        // this.handleChange =this.handleChange.bind(this);
        // this.updateList =this.props.updateList.bind(this);
        
    }

    setRedirect = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/results' />
        }
    }

    handleChange = (e) => {
        let term = e.target.value;
        this.props.updateTerm(term)
    }

    handleSearch = (term) => {
        let currentProducts = [];
        let newProducts = [];

        if(term !== ''){
            currentProducts = this.props.products;
            newProducts = currentProducts.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = term.toLowerCase();
                return lc.includes(filter)
            })
            this.props.updateList(newProducts, term)
        }else{
            newProducts = this.props.products;
            this.props.updateList(newProducts, term);
        }

        this.setRedirect();

    }

    render() {
        const { userName, products, term } = this.props;
        return (
            <Layout >
                <Header className="header">
                    <Row>
                        <Col xs={{ span: 5 }} lg={{ span: 3 }}>
                            <img src={logo} className="header-logo" alt="logo" />
                        </Col>
                        <Col xs={{ span: 19 }} lg={{ span: 16 }}>
                            <div className="header-search">
                                {this.renderRedirect()}
                                <Search
                                    placeholder="¿Que quieres comprar?"
                                    onSearch={ this.handleSearch }
                                    onChange={ this.handleChange}
                                    enterButton
                                />
                            </div>
                        </Col>
                        <Col xs={{ span: 0 }} lg={{ span: 5 }}>
                            <div className="header-greetings"> Bienvenido {userName}</div>
                        </Col>
                    </Row>

                </Header>
                <Content className="content">
                    <p>Basado en tu última búsqueda</p>
                    <Row>
                        {
                            products.map(prod => (
                                <Col key={prod.name} xs={{ span: 24 }} lg={{ span: 8 }}>
                                    <ProductCard product={prod} />
                                </Col>
                            ))
                        }
                    </Row>
                </Content>
                <Footer className="footer">
                    Footer
                </Footer>
            </Layout>
        )
    };
}