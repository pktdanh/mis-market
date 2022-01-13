import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { Modal, Button } from 'antd';
import { MyContext } from '../../App';


function Home() {
    return (
        <div>
            home
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
          {context.status === true ? "Tim Don Hang" : "Bat trang thai shipper de tim don hang"}
        </Button>
        <Modal title="Don hang dang cho" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  };

export default Home
