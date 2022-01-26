import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import axios from "axios";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Thêm bình luận
      </Button>
    </Form.Item>
  </>
);

class UserComment extends React.Component {
  constructor(props) {
    super(props);
    console.log("hehe:", this.props.numberCart);
    this.state = {
      comments: [],
      submitting: false,
      value: '',
    };
  }
  // state = {
  //   comments: [],
  //   submitting: false,
  //   value: '',
  // };

  handleSubmit = () => {
    let value = {
      "maSP": this.props.productID,
      "avgRating": this.props.rating,
    }
    console.log("value ne:",value)
    if (!this.state.value) {
      return;
    }

    axios({
      method: "post",
      url: "https://localhost:44352/api/product/rating",
      data: value,
    })
      .then(function (res) {
          console.log("rating ne: ", res.data);
      })
      .catch(function (err) {
          console.log(err);
      });
    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={
            <Editor 
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}
export default UserComment