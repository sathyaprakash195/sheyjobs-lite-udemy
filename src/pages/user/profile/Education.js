import { Form, Input, Space, Button, Row, Col } from "antd";
import React from "react";

function Education() {
  return (
    <>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[10, 10]} align="middle">
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, "degree"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Degree"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, "institution"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Institution"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    {...restField}
                    name={[name, "percentage"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Percentage"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <i class="ri-delete-bin-line" onClick={() => remove(name)}></i>
              </Row>
            ))}
            <Form.Item>
              <button className="primary-outlined-btn" onClick={() => add()}>
                ADD EDUCATION
              </button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[10, 10]} align="middle">
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, "technology"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Technology"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, "rating"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Rating"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>

                <i class="ri-delete-bin-line" onClick={() => remove(name)}></i>
              </Row>
            ))}
            <Form.Item>
              <button className="primary-outlined-btn" onClick={() => add()}>
                ADD SKILLS
              </button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default Education;
