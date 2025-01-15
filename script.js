const chatArea = document.getElementById('chat-area');
const dropdownArrow = document.getElementById('dropdown-arrow');
const dropdownContent = document.getElementById('dropdown-content');

function appendMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
  messageDiv.innerHTML = message;
  chatArea.appendChild(messageDiv);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function toggleDropdown() {
  dropdownContent.classList.toggle('show');
  dropdownArrow.classList.toggle('rotate');
}

function redirectTo(section) {
  const urls = {
    services: "https://sixdindia.com/services",
    sectors: "https://sixdindia.com/sectors",
    "case-studies": "https://sixdindia.com/case-studies",
    industry4: "https://sixdindia.com/industry4",
    about: "https://sixdindia.com/about",
    "contact-us": "https://sixdindia.com/contact"
  };
  appendMessage(section.charAt(0).toUpperCase() + section.slice(1), 'user');
  window.open(urls[section], '_blank');
  appendMessage('I have opened the tab for you, please check.', 'bot');
}

function askSector() {
  appendMessage("Your organisation belongs to which sector?", 'bot');
  const sectors = ['Oil & Gas', 'Steel', 'Power', 'Green Energy', 'Cement', 'Automobile', 'Others'];
  const sectorBtnContainer = document.createElement('div');
  sectorBtnContainer.classList.add('sector-btn-container');
  sectors.forEach(sector => {
    const sectorBtn = document.createElement('button');
    sectorBtn.classList.add('sector-btn');
    sectorBtn.textContent = sector;
    sectorBtn.onclick = () => selectSector(sector);
    sectorBtnContainer.appendChild(sectorBtn);
  });
  chatArea.appendChild(sectorBtnContainer);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function selectSector(sector) {
  appendMessage(sector, 'user');
  let contactMessage = "Please contact the following for more details:";
  if (sector === 'Oil & Gas' || sector === 'Green Energy' || sector === 'Automobile') {
    contactMessage = `Contact Her:<br>  
      Alfisha Khan<br>  
      <a class="email-link" href="javascript:void(0);" onclick="openComposeEmail('alfisha.khan@sixdindia.com')">alfisha.khan@sixdindia.com</a><br>  
      8800554157
    `;
  } else if (sector === 'Steel') {
    contactMessage = `Contact Her:<br>  
      Nidhi Bharti<br>  
      <a class="email-link" href="javascript:void(0);" onclick="openComposeEmail('nidhi@sixdindia.com')">nidhi@sixdindia.com</a><br>  
      8800797883
    `;
  } else if (sector === 'Power' || sector === 'Cement') {
    contactMessage = `Contact Her:<br>  
      Manmeet Kaur<br>  
      <a class="email-link" href="javascript:void(0);" onclick="openComposeEmail('manmeet.kaur@sixdindia.com')">manmeet.kaur@sixdindia.com</a><br>  
      8130110300
    `;
  } else if (sector === 'Others') {
    contactMessage = `Contact Him:<br>  
      Suraj Prakash Pandey<br>  
      <a class="email-link" href="javascript:void(0);" onclick="openComposeEmail('suraj.pandey@sixdindia.com')">suraj.pandey@sixdindia.com</a><br>  
      8448097512
    `;
  }
  appendMessage(contactMessage, 'bot');
}

function openComposeEmail(email) {
  const mailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;
  window.open(mailUrl, '_blank');
  appendMessage("The email compose tab has been opened. Please check.", 'bot');
}

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message) {
    appendMessage(message, 'user');
    appendMessage('I am just a bot. How can I assist you?', 'bot');
    userInput.value = '';
  }
}

function closeChatbot() {
  document.getElementById('chatbot-container').style.display = 'none';
}
