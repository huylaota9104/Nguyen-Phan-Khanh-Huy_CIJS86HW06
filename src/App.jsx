import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    birthDate: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Họ tên",
      errorMessage: "Họ tên không được để trống!",
      label: "Họ tên",
      required: true,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Số điện thoại",
      errorMessage: "Số điện thoại không được để trống!",
      label: "Số điện thoại",
      required: true,
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Địa chỉ",
      errorMessage: "Địa chỉ không được để trống!",
      label: "Địa chỉ",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email không hợp lệ!",
      label: "Email",
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      required: true,
    },
    {
      id: 5,
      name: "birthDate",
      type: "date",
      placeholder: "Ngày sinh",
      label: "Ngày sinh",
      required: true,
    },
  ];

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    inputs.forEach((input) => {
      if (input.required && !values[input.name]) {
        formErrors[input.name] = input.errorMessage;
      } else if (input.pattern && !input.pattern.test(values[input.name])) {
        formErrors[input.name] = input.errorMessage;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      alert("Thông tin người dùng đã nhập:\n" + JSON.stringify(values, null, 2));
    } else {
      setErrors(formErrors);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Thông Tin Cá Nhân</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
