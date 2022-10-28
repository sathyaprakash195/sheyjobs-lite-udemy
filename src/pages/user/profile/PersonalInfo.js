import { Col, Form, Row } from "antd";
import React from "react";

function PersonalInfo() {
  return (
    <Row gutter={[10, 10]}>
      <Col span={8}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: "required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="Portfolio"
          name="portfolio"
          rules={[{ required: true, message: "required" }]}
        >
          <input type="text" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="Carrier Objective"
          name="carrierObjective"
          rules={[{ required: true, message: "required" }]}
        >
          <textarea type="text" rows={4} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Address" name="address">
          <textarea type="text" rows={4} />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default PersonalInfo;
