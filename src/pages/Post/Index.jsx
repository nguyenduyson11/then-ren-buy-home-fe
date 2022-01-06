import React, { useEffect, useState } from "react";
import "./styles.css";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Upload,
  message,
} from "antd";
import { createItem, getCategory } from "../../api/itemApi";
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const listDirection = ["Hướng Đông", "Hướng Nam"];
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Index = () => {
  const   formRef = React.createRef();
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeFiles = (e) => {
    if (e.target.files.length > 0) {
      setFiles(e.target.files);
    }
    console.log(e.target.files);
  };
  const getListCategory = async () => {
    try {
      const response = await getCategory();
      setCategory(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getListCategory();
  }, []);
  const onFinish = async (values) => {
    try {
      setLoading(true)
      const {
        title,
        description,
        direction,
        address,
        acreage,
        bathroom,
        bedroom,
        price,
        categoryId,
      } = values.post;
      console.log(bathroom, bedroom)
      let images = [];
      const form = new FormData();
      for(let i =0; i<files.length; i++){
        form.append("images", files[i]);
      }
      form.append("title", title);
      form.append("description", description);
      form.append("direction", direction);
      form.append("address", address);
      form.append("acreage", acreage);
      form.append("bathroom", bathroom);
      form.append("bedroom", bedroom);
      form.append("price", price);
      form.append("categoryId", categoryId);
      form.append("images", images);
      const post  = await createItem(
        form
      )
      message.success('Tạo thành công');
      setLoading(false)
    } catch (error) {
      message.error('Tạo thất bại');
      setLoading(false)
    }
  };
  return (
    <div className="form-create-post">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        ref={formRef}
      >
        <Form.Item
          name={["post", "title"]}
          label="Tên nhà"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["post", "categoryId"]} label="Quận" rules={[{ required: true }]}>
          <Select
            placeholder="Chọn quận"
            allowClear
          >
            {category.map(data =>  <Option key={data._id} value={data._id}>{data.title}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          name={["post", "address"]}
          label="Địa chỉ"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["post", "acreage"]}
          label="Diện tích"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["post", "direction"]}
          label="Hướng nhà"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["post", "bathroom"]}
          label="Phòng vệ sinh"
          rules={[{ type: "number", min: 0, max: 10 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["post", "bedroom"]}
          label="Phòng ngủ"
          rules={[{ type: "number", min: 0, max: 10 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["post", "price"]}
          label="Giá"
          rules={[{ type: "number", min: 1000000, max: 10000000000 }]}
        >
          <InputNumber />
        </Form.Item>
       
        <Form.Item name={["post", "images"]} label="Hình ảnh">
          <input
            type="file"
            multiple="multiple"
            onChange={onChangeFiles}
            name="files"
          />
        </Form.Item>
        <Form.Item name={["post", "description"]} label="Mô tả">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
