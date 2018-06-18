import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_banner.scss';
import React from 'react';
import { Row, Col, Button, Select } from 'antd';
import { Link } from 'react-router-dom';

const Option = Select.Option;

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceSelected: '/'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      serviceSelected: value
    });
  }

  render() {
    const { listService } = this.props;
    const { serviceSelected } = this.state;

    return (
      <div className="wrapper-banner">
        <Row>
          <Col className="wrapper-banner-content" xs={24} sm={24} md={8} lg={8} xl={8}>
            <h2>Hello Charles,</h2>
            <p className="sous-titre">Que puis-je faire pour vous ?</p>
            <Row type="flex">
              <p className="text-select-before">Je veux</p>
              {listService && (
                <Select
                  placeholder="Choisir mon service"
                  className="text-select-after"
                  onChange={this.handleChange}
                >
                  {listService.map(({ name, path }, i) => (
                    <Option key={i} value={`service/${path}`}>
                      {name}
                    </Option>
                  ))}
                </Select>
              )}
              <Link to={serviceSelected}>GO</Link>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
