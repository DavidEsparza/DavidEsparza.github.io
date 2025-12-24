import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: process.env.REACT_APP_GEMINI_API_KEY,
});

function Chatter() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Call on load to initialize the chatbot with a greeting
  useEffect(() => {
    const initializeChatbot = async () => {
      try {
        const ownerInfo = {
          name: process.env.REACT_APP_OWNER_NAME || "the portfolio owner",
          role: process.env.REACT_APP_OWNER_ROLE || "a developer",
          bio: process.env.REACT_APP_OWNER_BIO || "",
          email: process.env.REACT_APP_OWNER_EMAIL || "",
        };

        const systemPrompt = `You are a helpful AI assistant on ${ownerInfo.name}'s personal portfolio website. 
        
Owner Information:
- Name: ${ownerInfo.name}
- Role: ${ownerInfo.role}
- Bio: ${ownerInfo.bio}
- Contact: ${ownerInfo.email}

Your role:
- Answer questions about ${ownerInfo.name}'s background, skills, and experience
- Guide visitors through the portfolio sections
- Be friendly, professional, and concise
- If you don't know something specific, be honest and direct visitors to the contact section

Introduce yourself in a friendly way (2-3 sentences max).`;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: systemPrompt,
        });

        setMessages([
          {
            role: "assistant",
            content: response.text,
          },
        ]);

        console.log("Chatbot initialized:", response.text);
      } catch (error) {
        console.error("Error initializing chatbot:", error);
        setMessages([
          {
            role: "assistant",
            content:
              "Hi! I'm here to help you learn more about this portfolio. Feel free to ask me anything!",
          },
        ]);
      }
    };

    initializeChatbot();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
      });

      const assistantMessage = {
        role: "assistant",
        content: response.text,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>💬 Chat Assistant</h3>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.role === "user" ? "user-message" : "assistant-message"
            }`}
          >
            <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && (
          <div className="message assistant-message">
            <strong>Assistant:</strong>
            <p>Typing...</p>
          </div>
        )}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatter;
