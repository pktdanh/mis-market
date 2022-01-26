import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'antd';
import { MyContext } from '../../App';


const TitleTag = styled.div`
    font-size: 16px;
    font-weight: 500;
    position: relative;
    border-left: 8px solid #FF6651;
    padding-left: 10px;
    margin: 30px 0px 10px 0px;
`;

function Home() {
    return (
        <div>
            <TitleTag>TRANG CHỦ</TitleTag>
            <FindInvoice></FindInvoice>
        </div>
    )
}

const FindInvoice = () => {
    let context = useContext(MyContext)
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
        if(context.status === false) return;
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
      <>
        <Button type="primary" onClick={showModal}>
          {context.status === true ? "TÌM ĐƠN HÀNG GẦN ĐÂY" : "BẬT TRẠNG THÁI SHIPPER ĐỂ NHẬN ĐƠN HÀNG"}
        </Button>
        <Button type="primary" onClick={showModal} style={{"margintLeft": "100px"}}>
          {context.status === true ? "TÌM TẤT CẢ ĐƠN HÀNG" : "BẬT TRẠNG THÁI SHIPPER ĐỂ NHẬN ĐƠN HÀNG"}
        </Button>
        <Modal title="ĐƠN HÀNG ĐANG CHỜ NHẬN" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  };

export default Home
