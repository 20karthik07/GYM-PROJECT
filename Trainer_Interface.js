document.addEventListener('DOMContentLoaded', () => {
      const tabs = document.querySelectorAll('nav ul li');
      const sections = document.querySelectorAll('.tab');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');

          const target = tab.getAttribute('data-tab');
          sections.forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === target) sec.classList.add('active');
          });
        });
      });
    });



    const chatData = {
    Lakshmi: [
      { text: "Hi Trainer, I need a new meal plan.", type: "incoming" },
      { text: "Sure! I will send you one by evening.", type: "outgoing" },
      { text: "Thanks! Also, can we move yoga to morning?", type: "incoming" },
      { text: "Yes, 7:00 AM works?", type: "outgoing" }
    ],
    Harika: [
      { text: "Is Zumba on Thursday confirmed?", type: "incoming" },
      { text: "Yes, it’s locked in at 7AM.", type: "outgoing" }
    ],
    Divya: [
      { text: "My progress improved a lot! 💪", type: "incoming" },
      { text: "That's awesome! Keep going!", type: "outgoing" }
    ],
    Srinivas: [
      { text: "I feel low stamina lately.", type: "incoming" },
      { text: "Let’s tweak your endurance workouts.", type: "outgoing" }
    ],
    Rajesh: [
      { text: "CrossFit was great today!", type: "incoming" },
      { text: "Glad you liked it. Keep up!", type: "outgoing" }
    ],
    Vikram: [
      { text: "Move Yoga to morning please.", type: "incoming" },
      { text: "Done! It's updated to 6AM.", type: "outgoing" }
    ],
    Meghana: [
      { text: "What should I eat after workout?", type: "incoming" },
      { text: "Protein smoothie + banana is great.", type: "outgoing" }
    ]
  };
   
  

  let currentUser = "Lakshmi";

  function loadChat(user) {
    currentUser = user;
    document.getElementById("chatName").innerText = user;

    document.querySelectorAll(".contact").forEach(c => c.classList.remove("active"));
    [...document.querySelectorAll(".contact")].find(c => c.textContent === user).classList.add("active");

    const messages = document.getElementById("messages");
    messages.innerHTML = "";

    chatData[user].forEach(msg => {
      const div = document.createElement("div");
      div.className = "message-bubble";
      div.textContent = msg.text;
      div.style.maxWidth = "75%";
      div.style.padding = "10px 15px";
      div.style.borderRadius = "7px";
      div.style.background = msg.type === "incoming" ? "white" : "#dcf8c6";
      div.style.alignSelf = msg.type === "incoming" ? "flex-start" : "flex-end";
      div.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
      div.style.fontSize = "14px";
      messages.appendChild(div);
    });

    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage() {
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (!text) return;

    chatData[currentUser].push({ text, type: "outgoing" });
    input.value = "";
    loadChat(currentUser);
  }

  window.onload = () => loadChat("Lakshmi");



  document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



  document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

 document.addEventListener("keydown", function(e) {
    if (e.key === "d") {
      document.body.classList.toggle("dark-mode");
    }
  });
