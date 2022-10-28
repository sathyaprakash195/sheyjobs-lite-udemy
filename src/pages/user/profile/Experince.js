import { Form, Row, Col } from "antd";
import React from "react";

function Experince() {
  return (
    <>
      <Form.List name="experinces">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[10, 10]} align="middle">
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, "company"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Company"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    {...restField}
                    name={[name, "designation"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Designation"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    {...restField}
                    name={[name, "duration"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Duration"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    {...restField}
                    name={[name, "location"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Location"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <i class="ri-delete-bin-line" onClick={() => remove(name)}></i>
              </Row>
            ))}
            <Form.Item>
              <button className="primary-outlined-btn" onClick={() => add()}>
                ADD EXPERINCE
              </button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[10, 10]} align="middle">
                <Col span={8}>
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Title"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>
                <Col span={10} className='mt-4'>
                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Description"
                  >
                    <textarea type="text" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    {...restField}
                    name={[name, "duration"]}
                    rules={[{ required: true, message: "required" }]}
                    label="Duration"
                  >
                    <input type="text" />
                  </Form.Item>
                </Col>

                <i class="ri-delete-bin-line" onClick={() => remove(name)}></i>
              </Row>
            ))}
            <Form.Item>
              <button className="primary-outlined-btn" onClick={() => add()}>
                ADD PROJECT
              </button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default Experince;
