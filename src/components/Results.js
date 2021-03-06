import React, { Component } from 'react';
import logo from '../logo.png';
import { Layout, Input, Row, Col } from 'antd';
import ProductCard from './ProductCard';
import {Redirect} from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

export default class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    handleChange= (e) => {
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

    }

    render() {
        const { userName,results } = this.props;
        return (
            <Layout >
                <Header className="header">
                    <Row>
                        <Col xs={{span:5}} lg={{span:3}}>
                            { this.renderRedirect()}
                            <img src={logo} className="header-logo" alt="logo" onClick={this.setRedirect} />
                        </Col>
                        <Col xs={{span:19}} lg={{span:16}}>
                           <div className="header-search">
                               <Search
                                 onSearch={ this.handleSearch }
                                 onChange={ this.handleChange}
                                 enterButton
                               />
                           </div>
                        </Col>
                        <Col xs={{span:0}} lg={{span:5}}>
                            <div className="header-greetings"> Bienvenido {userName}</div>
                        </Col>
                    </Row>
                   
                </Header>
                <Content className="content">
                    <p>Resultados</p>
                    <Row>
                        {
                            results.map(prod => (
                            <Col key={prod.name} xs={{ span:24 }} lg={{span:24}}>
                                <ProductCard product={prod}/>
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