// ---------- Minimal markdown renderer (safe: escapes HTML first) ----------
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderMarkdown(raw) {
  let text = escapeHTML(raw);

  // Code blocks ```code```
  text = text.replace(/```([\s\S]*?)```/g, (_, code) => {
    return `<pre><code>${code.trim()}</code></pre>`;
  });

  // Inline code `code`
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Bold **text**
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Italic *text*
  text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Bullet lists: lines starting with "- " or "* "
  text = text.replace(/(^|\n)[-*] (.+)/g, "$1<li>$2</li>");
  text = text.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");

  // Numbered lists: lines starting with "1. "
  text = text.replace(/(^|\n)\d+\.\s(.+)/g, "$1<li>$2</li>");

  // Line breaks (skip inside <pre> blocks)
  text = text.replace(/\n/g, (match, offset, full) => {
    const before = full.slice(0, offset);
    const openPre = (before.match(/<pre>/g) || []).length;
    const closePre = (before.match(/<\/pre>/g) || []).length;
    return openPre > closePre ? "\n" : "<br>";
  });

  return text;
}

// ---------- Chat state ----------
let isWaiting = false;

function setInputState(disabled) {
  const input = document.getElementById("question");
  const sendBtn = document.querySelector(".chat-input button:last-child");
  input.disabled = disabled;
  if (sendBtn) sendBtn.disabled = disabled;
}

function scrollToBottom() {
  const chatBox = document.getElementById("chat-box");
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  if (isWaiting) return;

  const input = document.getElementById("question");
  const chatBox = document.getElementById("chat-box");
  const question = input.value.trim();

  if (question === "") return;

  // User message (safe: textContent, not innerHTML)
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = question;
  chatBox.appendChild(userMessage);

  input.value = "";
  scrollToBottom();

  // Typing indicator
  const aiMessage = document.createElement("div");
  aiMessage.className = "ai-message typing";
  aiMessage.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatBox.appendChild(aiMessage);
  scrollToBottom();

  isWaiting = true;
  setInputState(true);

  try {
    if (window.ask3AAI) {
      const answer = await window.ask3AAI(question);
      aiMessage.classList.remove("typing");
      aiMessage.innerHTML = renderMarkdown(answer);

      if (window.saveChat) {
        window.saveChat(question, answer);
      }
    } else {
      aiMessage.classList.remove("typing");
      aiMessage.textContent = "🌍 3A AI connection not ready.";
    }
  } catch (err) {
    console.log(err);
    aiMessage.classList.remove("typing");
    aiMessage.textContent = "🌍 3A AI is having trouble connecting. Please try again.";
  } finally {
    isWaiting = false;
    setInputState(false);
    input.focus();
    scrollToBottom();
  }
}

function newChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = `
    <div class="ai-message">
      👋 New chat started.
      <br><br>
      How can I help you today?
    </div>
  `;
}

// Allow pressing Enter to send
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("question");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }
});
