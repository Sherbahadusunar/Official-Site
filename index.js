const questions = [
    { question: "नेपालको राजधानी के हो?", answer: "काठमाडौँ" },
{ question: "सगरमाथाको उचाइ कति छ?", answer: "८,८४८ मिटर" },
{ question: "नेपालको राष्ट्रिय जनावर के हो?", answer: "गाई" },
{ question: "नेपालको पहिलो राजा को हुन्?", answer: "राजा पृथ्वीनारायण शाह" },
{ question: "नेपालमा कूल कति प्रदेश छन्?", answer: "७" },
{ question: "नेपालको सबैभन्दा ठूलो ताल कुन हो?", answer: "रारा ताल" },
{ question: "नेपालको राष्ट्रिय फूल के हो?", answer: "लालीगुराँस" },
{ question: "नेपालको संविधान कहिले जारी भएको हो?", answer: "२०७२ साल असोज ३ गते" },
{ question: "नेपालको पहिलो राष्ट्रपति को हुन्?", answer: "डा. रामवरण यादव" },
{ question: "नेपालको राष्ट्रिय खेल के हो?", answer: "भलिबल" },
{ question: "नेपालको राष्ट्रिय पक्षी के हो?", answer: "डाँफे" },
{ question: "नेपालको सबैभन्दा लामो नदी कुन हो?", answer: "घुम्ती" },
{ question: "नेपालमा कूल कति जिल्ला छन्?", answer: "७७" },
{ question: "नेपालको पहिलो प्रधानमन्त्री को हुन्?", answer: "भिमसेन थापा" },
{ question: "नेपालको राष्ट्रिय गीत के हो?", answer: "सयौं थुँगा फूलका" },
{ question: "नेपालको सबैभन्दा अग्लो पर्वत कुन हो?", answer: "सगरमाथा" },
{ question: "नेपालको पुरानो नाम के थियो?", answer: "नेपाल मण्डल" },
{ question: "नेपालमा कूल कति जातजाति छन्?", answer: "१२५" },
{ question: "नेपालको सबैभन्दा ठूलो जिल्ला कुन हो?", answer: "डोल्पा" },
{ question: "नेपालको सबैभन्दा सानो जिल्ला कुन हो?", answer: "भक्तपुर" },
{ question: "नेपालको पहिलो नेपाली उपग्रहको नाम के हो?", answer: "नेपालीस्याट-१" },
{ question: "नेपालको पहिलो महिला राष्ट्रपति को हुन्?", answer: "विद्यादेवी भण्डारी" },
{ question: "नेपालको पुरानो पत्रिका कुन हो?", answer: "गोरखापत्र" },
{ question: "नेपालको राष्ट्रिय गानका लेखक को हुन्?", answer: "प्रदीपकुमार राई (व्याकुल माइलु)" },
{ question: "नेपालको सबैभन्दा ठूलो वन कुन हो?", answer: "चितवन राष्ट्रिय निकुञ्ज" },
{ question: "नेपालको पहिलो महिला प्रधानमन्त्री को हुन्?", answer: "भएका छैनन्" },
{ question: "नेपालको पहिलो अन्तरिक्ष यात्री को हुन्?", answer: "राजेन्द्रकुमार पोखरेल" },
{ question: "नेपालको पहिलो एयरपोर्ट कुन हो?", answer: "त्रिभुवन अन्तर्राष्ट्रिय विमानस्थल" },
{ question: "नेपालको पहिलो रेल सेवा कहिले सुरु भएको हो?", answer: "२००४ साल" },
{ question: "नेपालको सबैभन्दा ठूलो धार्मिक स्थल कुन हो?", answer: "पशुपतिनाथ मन्दिर" },
{ question: "नेपालको पहिलो विश्वविद्यालय कुन हो?", answer: "त्रिभुवन विश्वविद्यालय" },
{ question: "नेपालको पुरानो शहर कुन हो?", answer: "भक्तपुर" },
{ question: "नेपालको पहिलो महिला पाइलट को हुन्?", answer: "प्रभा देसाई" },
{ question: "नेपालको पहिलो आधुनिक कवि को हुन्?", answer: "महाकवि लक्ष्मीप्रसाद देवकोटा" },
{ question: "नेपालको सबैभन्दा लामो पुल कुन हो?", answer: "कोशी पुल" },
{ question: "नेपालको सबैभन्दा अग्लो भवन कुन हो?", answer: "धरहरा" },
{ question: "नेपालको सबैभन्दा पुरानो मन्दिर कुन हो?", answer: "चाँगुनारायण मन्दिर" },
{ question: "नेपालको पहिलो फिल्म कुन हो?", answer: "सत्य हरिश्चन्द्र" },
{ question: "नेपालको पुरानो दरबार कुन हो?", answer: "हनुमानढोका दरबार" },
{ question: "नेपालमा कूल कति हिमाल छन्?", answer: "३,२४०" },
{ question: "नेपालको सबैभन्दा ठूलो पुस्तकालय कुन हो?", answer: "काठमाडौँ पुस्तकालय" },
{ question: "नेपालको सबैभन्दा पुरानो स्कूल कुन हो?", answer: "दरबार हाई स्कूल" },
{ question: "नेपालको पहिलो हवाई उडान कहिले भएको हो?", answer: "१९५०" },
{ question: "नेपालको पहिलो राष्ट्रिय उद्यान कुन हो?", answer: "चितवन राष्ट्रिय निकुञ्ज" },
{ question: "नेपालको पहिलो महिला सांसद को हुन्?", answer: "धनसरी देउवा" },
{ question: "नेपालको सबैभन्दा ठूलो पर्व कुन हो?", answer: "दशैं" },
{ question: "नेपालको राष्ट्रिय मुद्रा के हो?", answer: "नेपाली रूपैयाँ" },
{ question: "नेपालको पहिलो अन्तर्राष्ट्रिय क्रिकेट मैदान कुन हो?", answer: "कीर्तिपुर मैदान" },
{ question: "नेपालको पहिलो टेलिभिजन च्यानल कुन हो?", answer: "नेपाल टेलिभिजन" },
{ question: "नेपालको राष्ट्रिय नदी कुन हो?", answer: "कर्णाली" },
{ question: "नेपालको सबैभन्दा पुरानो संग्रहालय कुन हो?", answer: "राष्ट्रिय संग्रहालय" },
{ question: "नेपालको पहिलो औद्योगिक क्षेत्र कुन हो?", answer: "वीरगन्ज औद्योगिक क्षेत्र" },
{ question: "नेपालको पहिलो पुस्तक कसले लेखेका हुन्?", answer: "भानुभक्त आचार्य" },
{ question: "नेपालको सबैभन्दा अग्लो झरना कुन हो?", answer: "रुप्से झरना" },
{ question: "नेपालको पहिलो चलचित्र निर्देशक को हुन्?", answer: "हिम्मतबहादुर राणा" },
{ question: "नेपालको पहिलो महिला एभरेस्ट आरोही को हुन्?", answer: "पासाङ ल्हामु शेर्पा" },
{ question: "नेपालको पहिलो बैंक कुन हो?", answer: "नेपाल बैंक लिमिटेड" },
{ question: "नेपालको पहिलो अन्तर्राष्ट्रिय हवाई मार्ग कुन हो?", answer: "काठमाडौँ-दिल्ली" },
{ question: "नेपालको सबैभन्दा पुरानो अस्पताल कुन हो?", answer: "वीर अस्पताल" },
{ question: "नेपालको पहिलो विज्ञान केन्द्र कुन हो?", answer: "नेपाल विज्ञान तथा प्रविधि प्रतिष्ठान (NAST)" },
{ question: "नेपालको सबैभन्दा ठूलो चिडियाखाना कुन हो?", answer: "जावलाखेल चिडियाखाना" },
{ question: "नेपालको पहिलो प्रिन्टिङ प्रेस कुन हो?", answer: "गोपीकृष्ण प्रिन्टिङ प्रेस" },
{ question: "नेपालको पहिलो महिला मेयर को हुन्?", answer: "कमला दाहाल" },
{ question: "नेपालको पहिलो सिँचाइ परियोजना कुन हो?", answer: "सागर सिँचाइ परियोजना" },
{ question: "नेपालको सबैभन्दा पुरानो साहित्यिक पुरस्कार के हो?", answer: "मदन पुरस्कार" },
{ question: "नेपालको पहिलो संविधान सभा कहिले गठन भएको थियो?", answer: "२०६४ साल" },
{ question: "नेपालको सबैभन्दा पुरानो विश्वविद्यालय कुन हो?", answer: "त्रिभुवन विश्वविद्यालय" },
{ question: "नेपालको पहिलो राष्ट्रिय खेलकुद पुरस्कार के हो?", answer: "राजपत्रित खेलाडी पुरस्कार" },
{ question: "नेपालको पहिलो जलविद्युत आयोजना कुन हो?", answer: "फर्पिङ जलविद्युत आयोजना" },
{ question: "नेपालको सबैभन्दा पुरानो सडक कुन हो?", answer: "त्रिभुवन राजपथ" },
{ question: "नेपालको पहिलो महिलाले गरेको ट्रेकिङ कुन हो?", answer: "पथिभरा ट्रेक" },
{ question: "नेपालको पहिलो महिला गृहमन्त्री को हुन्?", answer: "बिमला राई पौडेल" },
{ question: "नेपालको सबैभन्दा ठूलो बजेट कुन वर्षमा थियो?", answer: "२०७८/७९" },
{ question: "नेपालको पहिलो टेलिफोन सेवा कहिले सुरु भएको हो?", answer: "१९७५" },
{ question: "नेपालको सबैभन्दा लामो राजमार्ग कुन हो?", answer: "महिन्द्र राजमार्ग" },
{ question: "नेपालको पहिलो रेडियो स्टेशन कुन हो?", answer: "रेडियो नेपाल" },
{ question: "नेपालको पहिलो महिला पत्रकार को हुन्?", answer: "भारती शाह" },
{ question: "नेपालको पहिलो इन्टरनेट सेवा प्रदायक कुन हो?", answer: "Mercantile Communication" },
{ question: "नेपालको पहिलो मोबाइल सेवा प्रदायक कुन हो?", answer: "NTC (नेपाल टेलिकम)" }
];

let gameTime = new Audio("./sounds/gametime.mp3");
let correct = new Audio("./sounds/correct.mp3");
let timeout = new Audio("./sounds/timeout.mp3");

let usedQuestions = new Set();
let currentQuestionIndex = null;
let timer; // Declare the timer globally
let countdown = 60;
let currentUserIndex = 0;
let lastAction = "";

const users = [
    { name: "Bikash Thapa", score:'' },
    { name: "Kamal Kc", score: '' },
    { name: "Hira Kumar", score: '' },
    { name: "Sita Baniya", score: '' },
    { name: "Hari Thapa", score: '' },
    { name: "Syam Rana", score: '' },
];

const questionElement = document.getElementById("question");
const timerElement = document.getElementById("timer");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const gridContainer = document.getElementById("gridContainer");
const activeUserElement = document.getElementById("activeUser");
const profileNameElement = document.getElementById("profileName");
const profileScoreElement = document.getElementById("profileScore");
const userRankListElement = document.getElementById("rankingList");

function initializeGrid() {
    for (let i = 1; i <= questions.length; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.textContent = i;
        gridItem.onclick = () => selectQuestion(i);
        gridContainer.appendChild(gridItem);
    }
}


setTimeout(function () {
    gameTime.play();
});

document.getElementById("btnRight").addEventListener("click", rightAnswer);
document.getElementById("btnShow").addEventListener("click", showAnswer);
document.getElementById("btnPass").addEventListener("click", passQuestion);
document.getElementById("btnNextUser").addEventListener("click", nextUser);
document.getElementById("btnscore1").addEventListener("click", Score1);

document.getElementById("btnRight").disabled = true;
document.getElementById("btnPass").disabled = true;
document.getElementById("btnShow").disabled = true;
document.getElementById("btnscore1").disabled = true;
document.getElementById("btnNextUser").disabled = true;


function startTimer(seconds, onFinish) {
    countdown = seconds;
    clearInterval(timer); // Clear any existing timer before starting a new one

    const timerLine = document.getElementById('timerLine');
    
    timer = setInterval(() => {
        countdown--;

        // Update the timer text
        document.getElementById('timer').innerText = `Remaining Time: ${countdown}s`;

        // Calculate the width percentage of the green bar
        const widthPercentage = (countdown / seconds) * 100;
        timerLine.style.width = widthPercentage + "%";

        // Calculate the color transition from green (0, 255, 0) to red (255, 0, 0)
        const redValue = Math.floor(255 * (1 - countdown / seconds)); // Red value increases as time decreases
        const greenValue = Math.floor(255 * (countdown / seconds)); // Green value decreases as time decreases
        timerLine.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`; // Bar changes color from green to red

        if (countdown <= 0) {
            clearInterval(timer);
            gameTime.pause();
            timeout.play();
            onFinish();
        }
    }, 1000);
}

function showAnswer() {
    clearInterval(timer);
    showPopup(`Answer: ${questions[currentQuestionIndex].answer}`);
    disableQuestionSelect();
    currentQuestionIndex=questions.currentQuestionIndex;
    document.getElementById("btnRight").disabled = true;
    document.getElementById("btnPass").disabled = true;
    document.getElementById("btnscore1").disabled = true;
    document.getElementById("btnNextUser").disabled = false;
    document.getElementById("btnShow").disabled = false;
    gameTime.pause();
    correct.play();
}

function passQuestion() {
    clearInterval(timer); // Stop the current timer when "Pass" is clicked
    gameTime.play();
    // lastAction = "pass";
    nextUser();
    // Start a new timer for the next user with 30 seconds
    startTimer(30, () => showPopup("Time Out!"));
    // Disable the selected question
    disableQuestionSelect(); // Disable selection for all questions

    document.getElementById("btnRight").disabled = true;
    document.getElementById("btnShow").disabled = false;
    document.getElementById("btnPass").disabled = false;
    document.getElementById("btnscore1").disabled = false;

    // Disable "Pass" button for the last user
   
}
function rightAnswer() {
    updateRank();
    updateUserProfile();
    setTimeout(function () {
        clearInterval(timer);
        showPopup(`Correct Answer: ${questions[currentQuestionIndex].answer}\nScore: +2`);
        users[currentUserIndex].score = (parseInt(users[currentUserIndex].score) || 0) + 2;
        updateUserProfile();
        updateRank();
        document.getElementById("btnRight").disabled = true;
        document.getElementById("btnPass").disabled = true;
        document.getElementById("btnscore1").disabled = true;
        document.getElementById("btnShow").disabled = true;
        document.getElementById("btnNextUser").disabled = false;


        setTimeout(function () {
            gameTime.pause();
            correct.play();
        }, 500);
    });
}

function Score1() {
    if(lastAction=== selectQuestion()){
        document.getElementById("btnscore1").disabled = true;
    }
    clearInterval(timer);
    setTimeout(function () {
        showPopup(`Correct Answer: ${questions[currentQuestionIndex].answer}\nScore: +1`);
        users[currentUserIndex].score = (parseInt(users[currentUserIndex].score) || 0) + 1;
        updateUserProfile();
        updateRank();
        disableQuestionSelect();
        document.getElementById("btnRight").disabled = true;
        document.getElementById("btnPass").disabled = true;
        document.getElementById("btnShow").disabled = false;
        document.getElementById("btnscore1").disabled = true;
        document.getElementById("btnNextUser").disabled = false;
        gameTime.pause();
        correct.play();
        
    }, 500);
}
// Function to update button states and apply styles
function setButtonState(buttonId, isEnabled) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.disabled = !isEnabled;
        if (isEnabled) {
            button.classList.remove("disabled-button"); // Remove the disabled style
        } else {
            button.classList.add("disabled-button"); // Add the disabled style
        }
    }
}

function nextUser() {
    clearInterval(timer); // Clear the timer when moving to the next user
        currentUserIndex = (currentUserIndex + 1) % users.length; 
        if(currentQuestionIndex < 0){
            return;
        }    
        updateRank();
        updateUserProfile();
        enableQuestionSelect();
        document.getElementById("btnRight").disabled = true;
        document.getElementById("btnPass").disabled = true;
        document.getElementById("btnscore1").disabled = true;
        document.getElementById("btnShow").disabled = true;
        document.getElementById("btnNextUser").disabled = false;
    
    
}


function selectQuestion(index) {
    // if (document.getElementById("btnRight").disabled || document.getElementById("btnPass").disabled) {
    //     return; // Do nothing if buttons are disabled
    // }
    questionElement.innerText = 'Loading Question.... Please Wait !';
    setTimeout(function() {
        gameTime.play();
        currentQuestionIndex = index - 1;
        const question = questions[currentQuestionIndex];
       
        questionElement.innerText = question.question;

        // Disable the selected question
        usedQuestions.add(index);
        disableQuestionSelect(); // Disable selection for all questions
        
        document.getElementById("btnRight").disabled = false;
        document.getElementById("btnPass").disabled = false;
        document.getElementById("btnShow").disabled = false;
        document.getElementById("btnNextUser").disabled = false;

        startTimer(60, () => showPopup("Time Out !"));
    }, 1000);
}


function disableQuestionSelect() {
    for (let item of gridContainer.children) {
        item.classList.add("disabled");
    }
}

function enableQuestionSelect() {
    for (let item of gridContainer.children) {
        if (!usedQuestions.has(parseInt(item.textContent))) {
            item.classList.remove("disabled");
        }
    }
}

function updateUserProfile() {
    const user = users[currentUserIndex];
    profileNameElement.innerText = user.name;
    profileScoreElement.innerText = `Score: ${user.score}`;
    activeUserElement.innerText = `Active User: ${user.name}`;
    animateScore();
}


function updateRank() {
    userRankListElement.innerHTML = users
        .sort((a, b) => b.score - a.score) // Sort users by score in descending order
        .map(user => `<li>${user.name} - ${user.score}</li>`) // Format the list item
        .join(""); // Join all list items into a single HTML string
}


function showPopup(message) {
    popupMessage.innerText = message;
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
    questionElement.innerText = "Select a question from the left";
}

function animateScore() {
    profileScoreElement.style.transform = "scale(1.3)";
    setTimeout(() => {
        profileScoreElement.style.transform = "scale(1)";
    }, 300);
}

function initializeProfiles() {
    updateUserProfile();
    updateRank();
}
setButtonState();
initializeGrid();
initializeProfiles();
