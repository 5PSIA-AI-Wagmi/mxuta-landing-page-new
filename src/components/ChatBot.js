import { useEffect, useState } from "react";
import { Launcher } from "react-chat-window";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
import * as axios from "../axios";

export default function ChatBot() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState("");

  const { speak, voices } = useSpeechSynthesis();

  const voice = voices[56] || null;

  const getSpeechResponse = async (speech) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/record`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: speech }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          speak({ text: result.answer, voice });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const { listen, listening, stop } = useSpeechRecognition({
    onEnd: () => {
      getSpeechResponse(text);
      setText("");
    },
    onResult: (result, test) => {
      setText(result);
    },
  });

  const iconSize = listening ? "3.75rem" : "1.75rem";

  useEffect(() => {
    setMessageList([
      ...messageList,
      {
        author: "them",
        type: "text",
        data: {
          text: "Hai, selamat datang di Mxuta Store! Ada yang bisa kami bantu?",
        },
      },
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async (text) => {
    if (text.length > 0) {
      try {
        const { data } = await axios.predictChat(text);
        const { answer } = data;

        setMessageList((prevState) => [
          ...prevState,
          {
            author: "them",
            type: "text",
            data: { text: answer },
          },
        ]);
      } catch (error) {}
    }
  };

  const onMessageWasSent = (message) => {
    setMessageList((prevState) => [...prevState, message]);
    sendMessage(message.data.text);
  };

  return (
    <div style={{ position: "absolute", zIndex: 9999 }}>
      <div
        style={{
          display: "grid",
          right: 0,
          height: "100vh",
          width: "100%",
          zIndex: 9999,
        }}
      >
        <button
          onMouseDown={() => listen({ lang: "id-ID" })}
          onMouseUp={stop}
          className={`bg-primary text-white rounded-full text-3xl ${
            listening ? "p-1" : "p-4"
          }`}
          style={{
            position: "fixed",
            bottom: 100,
            right: 25,
            cursor: "pointer",
          }}
        >
          <img
            src={
              listening
                ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2FkGoC6Ck6GlHeLq367H%2Fgiphy.gif&f=1&nofb=1&ipt=a41c644004425a5bf5f54492254d33c2abc3eeab4e300c150785b4fcaf8e62fe&ipo=images"
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fmicrophone-xxl.png&f=1&nofb=1&ipt=5c0fb7154245b125981078c6e808059ad5d718f8db71b6a94fbd92229d96afcf&ipo=images"
            }
            alt="icon"
            style={{ height: iconSize, width: iconSize }}
          />
        </button>
      </div>

      <div style={{ position: "absolute", zIndex: 9999 }}>
        <Launcher
          agentProfile={{
            teamName: "Mxuta Store Chat Bot",
            imageUrl:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Ft%2Frobot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style-robot-icon-chat-bot-sign-support-service-124978456.jpg&f=1&nofb=1&ipt=2f0f273aa056b5172afa11b34024deb7b47fe786a05097ee14d06dc460225bc3&ipo=images",
          }}
          onMessageWasSent={onMessageWasSent}
          messageList={messageList}
        />
      </div>
    </div>
  );
}
