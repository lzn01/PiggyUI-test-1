import * as React from "react";
import Col from "../../../components/grid/index/Col";
import Row from '../../../components/grid/index/Row';
import './index.scss'

const GridDemo1 = () => {
    return (
        <div className="container" style={{ display: 'block' }}>
            <Row>
                <Col span={12}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#40a9ff' }}
                    >
                        Col-12
                    </div>
                </Col>
                <Col span={12}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#1890ff' }}
                    >
                        Col-12
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col span={8}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#40a9ff' }}
                    >
                        Col-8
                    </div>
                </Col>
                <Col span={8}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#1890ff' }}
                    >
                        Col-8
                    </div>
                </Col>
                <Col span={8}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#40a9ff' }}
                    >
                        Col-8
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col span={6}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#40a9ff' }}
                    >
                        Col-6
                    </div>
                </Col>
                <Col span={6}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#1890ff' }}
                    >
                        Col-6
                    </div>
                </Col>
                <Col span={6}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#40a9ff' }}
                    >
                        Col-6
                    </div>
                </Col>
                <Col span={6}>
                    <div
                        className="grid-demo"
                        style={{ backgroundColor: '#1890ff' }}
                    >
                        Col-6
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default GridDemo1;