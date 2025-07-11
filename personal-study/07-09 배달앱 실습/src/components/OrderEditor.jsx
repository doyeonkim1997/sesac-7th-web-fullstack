import { useState, useRef} from "react";

const OrderEditor = () => {
  const [form, setState] = useState({
    menu: "", // 메뉴
    address: "", // 주소
    request: "", // 요청 사항
  });
  const addressRef = useRef();



  const onChangeState = (event) => {
    const { name, value } = event.target;
    setState((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    if (!form.address) {
      addressRef.current.focus();
      return;
    }
    alert(`메뉴: ${form.menu}\n주소: ${form.address}\n요청사항: ${form.request}`);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          메뉴 선택
        </div>
        <select
          style={{ width: 300, padding: 5 }}
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 주소
        </div>
        <input
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          value={request}
          onChange={(e) => setRequest(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={onSubmit}
          style={{ width: 300, padding: 5 }}
        >
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
