class MessageBoardApp {
  constructor(props) {
    this.view = props.view;

    this.messages = [
      { id: 1, body: "App message 1" },
      { id: 2, body: "App message 2" },
      { id: 3, body: "App message 3" },
    ];
  }

  run() {
    this.view.setState({
      messages: this.messages
    });
  }
}

export default MessageBoardApp;
