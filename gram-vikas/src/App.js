<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GramVikas</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.0.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.0.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Noto Sans', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            overflow: hidden;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .tablet-container {
            width: 800px;
            height: 600px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            border-radius: 30px;
            box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
            overflow: hidden;
            position: relative;
        }

        .screen {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;
            transition: transform 0.5s ease, opacity 0.5s ease;
            transform: translateX(100%);
            opacity: 0;
        }

        .screen.active {
            transform: translateX(0);
            opacity: 1;
        }

        /* Logo Styles */
        .logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        .farmer-logo {
            width: 120px;
            height: 120px;
            position: relative;
            margin-bottom: 15px;
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .farmer-head {
            width: 40px;
            height: 40px;
            background-color: #f9d4ab;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border: 2px solid #e2b887;
            animation: blink 4s infinite;
        }

        @keyframes blink {
            0%, 90%, 100% { opacity: 1; }
            95% { opacity: 0.5; }
        }

        .farmer-body {
            width: 60px;
            height: 70px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            border-radius: 20px 20px 0 0;
            position: absolute;
            top: 35px;
            left: 50%;
            transform: translateX(-50%);
        }

        .farmer-hands {
            position: absolute;
            top: 45px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 30px;
            color: #f9d4ab;
            z-index: 10;
            animation: handsWave 2s ease-in-out infinite;
        }

        @keyframes handsWave {
            0%, 100% { transform: translateX(-50%) rotate(0deg); }
            50% { transform: translateX(-50%) rotate(10deg); }
        }

        .farmer-turban {
            width: 50px;
            height: 20px;
            background: linear-gradient(135deg, #e53935, #c62828);
            border-radius: 10px 10px 0 0;
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
        }

        .logo-text {
            font-size: 3.5rem;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Tractor Animation */
        .tractor-container {
            position: absolute;
            bottom: 100px;
            left: -150px;
            width: 100%;
            height: 120px;
        }

        .tractor {
            position: absolute;
            width: 150px;
            height: 100px;
            background-image: url('https://placehold.co/200x100/0066cc/ffffff?text=GramVikas');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            animation: driveTractor 8s forwards;
        }

        @keyframes driveTractor {
            0% { left: -150px; }
            100% { left: calc(100% + 50px); }
        }

        .field {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(180deg, #8BC34A, #689F38);
            border-top: 5px solid #558B2F;
        }

        .field::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px);
            animation: fieldMove 10s linear infinite;
        }

        @keyframes fieldMove {
            0% { background-position: 0 0; }
            100% { background-position: 40px 0; }
        }

        /* Help Option */
        .help-option {
            position: absolute;
            bottom: 200px;
            right: 50px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            color: #555;
            padding: 15px 25px;
            border-radius: 30px;
            font-size: 1.2rem;
            box-shadow: 3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff;
            opacity: 0;
            transition: all 0.5s ease;
        }

        .help-option.show {
            opacity: 1;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
            100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }

        .help-option i {
            margin-right: 10px;
            color: #4CAF50;
        }

        /* Welcome Screen */
        .welcome-screen {
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
        }

        .welcome-screen h2 {
            font-size: 2.5rem;
            color: #2E7D32;
            margin-bottom: 20px;
            animation: fadeInDown 1s ease-out;
        }

        .welcome-screen p {
            font-size: 1.3rem;
            margin-bottom: 30px;
            color: #555;
            animation: fadeIn 1s ease-out 0.3s both;
        }

        /* Green Language Buttons */
        .language-options {
            display: flex;
            gap: 15px;
            width: 100%;
            max-width: 600px;
            animation: fadeInUp 1s ease-out 0.6s both;
        }

        .language-btn {
            background: linear-gradient(145deg, #4CAF50, #2E7D32);
            border: 2px solid #388E3C;
            border-radius: 15px;
            padding: 15px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .language-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }

        .language-btn i {
            font-size: 2rem;
            color: white;
            margin-bottom: 8px;
            transition: transform 0.3s ease;
        }

        .language-btn:hover i {
            transform: scale(1.2);
        }

        .language-btn span {
            font-weight: bold;
            color: white;
        }

        /* Main Menu */
        .main-menu {
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
        }

        .main-menu h2 {
            font-size: 2.2rem;
            color: #2E7D32;
            margin-bottom: 40px;
            animation: fadeInDown 1s ease-out;
        }

        .menu-options {
            display: flex;
            flex-direction: column;
            gap: 30px;
            width: 100%;
            max-width: 500px;
        }

        .menu-btn {
            background: linear-gradient(145deg, #4CAF50, #2E7D32);
            border: none;
            border-radius: 20px;
            padding: 25px;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
            box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .menu-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s ease;
        }

        .menu-btn:hover::before {
            left: 100%;
        }

        .menu-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }

        .menu-btn i {
            font-size: 2rem;
            color: white;
            margin-right: 15px;
            transition: all 0.3s ease;
        }

        .menu-btn:hover i {
            transform: scale(1.2);
        }

        .demo-phone {
            position: absolute;
            top: 20px;
            right: 20px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            color: #555;
            padding: 10px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            box-shadow: 3px 3px 6px #d1d1d1, -3px -3px 6px #ffffff;
        }

        .kisha-avatar {
            position: absolute;
            bottom: 30px;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #FF9AA2, #FFB7B2);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.5s ease;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .kisha-avatar.active {
            transform: translateY(-20px);
            animation: bounce 1s infinite;
        }

        .kisha-message {
            position: absolute;
            bottom: 140px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            padding: 15px 20px;
            border-radius: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            opacity: 0;
            transition: all 0.5s ease;
        }

        .kisha-message.active {
            opacity: 1;
        }

        .kisha-message:after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px 8px 0;
            border-style: solid;
            border-color: #ffffff transparent transparent;
        }

        /* Detailed Information */
        .info-screen {
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
        }

        .info-screen h2 {
            font-size: 2rem;
            color: #2E7D32;
            margin-bottom: 30px;
            animation: fadeInDown 1s ease-out;
        }

        .info-tiles {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 100%;
            max-width: 600px;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .info-tile {
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .info-tile::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #4CAF50, #2E7D32);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }

        .info-tile:hover::before {
            transform: translateX(0);
        }

        .info-tile:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .info-tile i {
            font-size: 2.5rem;
            color: #4CAF50;
            margin-bottom: 10px;
            transition: transform 0.3s ease;
        }

        .info-tile:hover i {
            transform: scale(1.2) rotate(10deg);
        }

        .info-tile h3 {
            font-size: 1.3rem;
            margin-bottom: 10px;
            color: #333;
        }

        .info-tile p {
            font-size: 0.9rem;
            color: #666;
            text-align: center;
        }

        .back-btn {
            position: absolute;
            top: 20px;
            left: 20px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .back-btn:hover {
            background: linear-gradient(135deg, #2E7D32, #1B5E20);
            transform: scale(1.1) rotate(15deg);
        }

        /* Chatbot Screen */
        .chatbot-screen {
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
            flex-direction: column;
        }

        .chatbot-header {
            width: 100%;
            padding: 20px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            display: flex;
            align-items: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .chatbot-header i {
            font-size: 2rem;
            margin-right: 15px;
            animation: pulse 2s infinite;
        }

        .chat-container {
            flex: 1;
            width: 100%;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }

        .message {
            max-width: 70%;
            margin-bottom: 15px;
            padding: 15px;
            line-height: 1.5;
            animation: messageSlide 0.5s ease-out;
        }

        @keyframes messageSlide {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .bot-message {
            align-self: flex-start;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            border-bottom-left-radius: 5px;
            box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
        }

        .user-message {
            align-self: flex-end;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            border-bottom-right-radius: 5px;
        }

        .chat-input-container {
            width: 100%;
            padding: 20px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            display: flex;
            align-items: center;
            box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.05);
        }

        .voice-indicator {
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            opacity: 0;
            transition: all 0.3s ease;
        }

        .voice-indicator.active {
            opacity: 1;
            animation: pulse 2s infinite;
        }

        .voice-indicator::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px 8px 0;
            border-style: solid;
            border-color: #4CAF50 transparent transparent;
        }

        .chat-input {
            flex: 1;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 30px;
            font-size: 1.1rem;
            outline: none;
            transition: all 0.3s ease;
            box-shadow: inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff;
        }

        .chat-input:focus {
            border-color: #4CAF50;
            box-shadow: inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff, 0 0 0 3px rgba(76, 175, 80, 0.2);
        }

        .input-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            border: none;
            margin-left: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
        }

        .input-btn:hover {
            background: linear-gradient(135deg, #2E7D32, #1B5E20);
            transform: scale(1.1);
        }

        .input-btn:active {
            transform: scale(0.95);
        }

        .input-btn i {
            font-size: 1.5rem;
        }

        .photo-btn {
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
        }

        /* Thank You Screen */
        .thank-you-screen {
            background: linear-gradient(135deg, #a8e063, #56ab2f);
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .thank-you-screen h2 {
            font-size: 3rem;
            margin-bottom: 20px;
            animation: fadeInDown 1s ease-out;
        }

        .thank-you-screen p {
            font-size: 1.5rem;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .kisha-avatar-thanks {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #FF9AA2, #FFB7B2);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 30px;
            animation: bounce 2s infinite;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .kisha-avatar-thanks i {
            font-size: 4rem;
            color: white;
            animation: rotate 10s linear infinite;
        }

        .countdown {
            font-size: 1.2rem;
            margin-top: 20px;
            animation: fadeIn 1s ease-out 0.6s both;
        }

        /* Video Modal */
        .video-modal {
            position: fixed;
top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .video-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .video-container {
            width: 80%;
            max-width: 800px;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            animation: modalSlideIn 0.5s ease-out;
        }

        .video-header {
            padding: 15px 20px;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .video-header i {
            font-size: 1.5rem;
        }

        .video-content {
            padding: 20px;
            text-align: center;
        }

        .video-placeholder {
            width: 100%;
            height: 300px;
            background: linear-gradient(145deg, #f0f0f0, #e0e0e0);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        .video-placeholder i {
            font-size: 5rem;
            color: #4CAF50;
            animation: pulse 2s infinite;
        }

        .video-description {
            font-size: 0.9rem;
            color: #666;
        }

        .close-video {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .close-video:hover {
            transform: rotate(90deg);
        }
    </style>
</head>
<body>
    <div class="tablet-container">
        <!-- Splash Screen -->
        <div class="screen splash-screen active" id="splash-screen">
            <div class="logo">
                <div class="farmer-logo">
                    <div className="farmer-turban"></div>
                    <div className="farmer-head"></div>
                    <div className="farmer-body"></div>
                    <div className="farmer-hands">
                        <i className="fas fa-hands"></i>
                    </div>
                </div>
                <h1 className="logo-text">GramVikas</h1>
            </div>
            <p>Your Digital Farming Companion</p>
            
            <!-- Tractor Animation -->
            <div class="tractor-container">
                <div className="tractor"></div>
            </div>
            <div class="field"></div>
            
            <!-- Help Option -->
            <div class="help-option" id="help-option">
                <i className="fas fa-hands-helping"></i>
                What can I help?
            </div>
            
            <div class="tap-instruction">
                <i className="fas fa-hand-pointer"></i>
                <p>Tap anywhere on the screen</p>
            </div>
        </div>
        
        <!-- Welcome & Language Selection -->
        <div class="screen welcome-screen" id="welcome-screen">
            <h2>Namaskar 👋</h2>
            <p>Welcome to GramVikas - Your farming assistant</p>
            <p>Select your language</p>
            <div class="language-options">
                <button class="language-btn" data-lang="hi">
                    <i className="fas fa-language"></i>
                    <span>Hindi</span>
                </button>
                <button class="language-btn" data-lang="en">
                    <i className="fas fa-language"></i>
                    <span>English</span>
                </button>
                <button class="language-btn" data-lang="mr">
                    <i className="fas fa-language"></i>
                    <span>Marathi</span>
                </button>
                <button class="language-btn" data-lang="ta">
                    <i className="fas fa-language"></i>
                    <span>Tamil</span>
                </button>
            </div>
        </div>
        
        <!-- Main Menu -->
        <div class="screen main-menu" id="main-menu">
            <div class="logo">
                <div className="farmer-logo">
                    <div className="farmer-turban"></div>
                    <div className="farmer-head"></div>
                    <div className="farmer-body"></div>
                    <div className="farmer-hands">
                        <i className="fas fa-hands"></i>
                    </div>
                </div>
                <h2 className="logo-text">GramVikas</h2>
            </div>
            <div class="menu-options">
                <button class="menu-btn" id="detailed-info-btn">
                    <i className="fas fa-info-circle"></i>
                    <span>Detailed Information</span>
                </button>
                <button class="menu-btn" id="seek-advice-btn">
                    <i className="fas fa-comments"></i>
                    <span>Seek Advice</span>
                </button>
            </div>
            <div class="demo-phone">
                <i className="fas fa-phone-alt mr-2"></i>+91 9876543210
            </div>
            <div class="kisha-avatar" id="kisha-avatar">
                <i className="fas fa-robot"></i>
            </div>
            <div class="kisha-message" id="kisha-message">
                Namaskar! How can I help you today?
            </div>
        </div>
        
        <!-- Detailed Information Module -->
        <div class="screen info-screen" id="info-screen">
            <button class="back-btn" id="info-back-btn">
                <i className="fas fa-arrow-left mr-2"></i> Back
            </button>
            <h2>Detailed Information</h2>
            <div class="info-tiles">
                <div class="info-tile" data-topic="crop">
                    <i className="fas fa-seedling"></i>
                    <h3>Crop Management</h3>
                    <p>Learn best practices for growing healthy crops.</p>
                </div>
                <div class="info-tile" data-topic="soil">
                    <i className="fas fa-mountain"></i>
                    <h3>Soil Health</h3>
                    <p>Improve soil fertility and structure.</p>
                </div>
                <div class="info-tile" data-topic="pest">
                    <i className="fas fa-bug"></i>
                    <h3>Pest Control</h3>
                    <p>Identify and manage common pests.</p>
                </div>
                <div class="info-tile" data-topic="water">
                    <i className="fas fa-tint"></i>
                    <h3>Water Management</h3>
                    <p>Efficient irrigation techniques.</p>
                </div>
            </div>
        </div>
        
        <!-- Seek Advice Module -->
        <div class="screen chatbot-screen" id="seek-advice">
            <div class="chatbot-header">
                <i className="fas fa-robot"></i>
                <h2>Kisha - Your Farming Assistant</h2>
            </div>
            <div class="chat-container" id="chat-container">
                <div class="message bot-message">
                    Hello! I'm Kisha, your farming assistant. How can I help you today?
                </div>
            </div>
            <div class="chat-input-container">
                <div class="voice-indicator" id="voice-indicator">
                    <i className="fas fa-microphone"></i> Listening...
                </div>
                <input type="text" class="chat-input" id="chat-input" placeholder="Ask about crops, weather, soil, or market prices...">
                <button class="input-btn" id="voice-btn">
                    <i className="fas fa-microphone"></i>
                </button>
                <button class="input-btn" id="send-btn">
                    <i className="fas fa-paper-plane"></i>
                </button>
                <button class="input-btn" id="photo-btn">
                    <i className="fas fa-camera"></i>
                </button>
            </div>
        </div>
        
        <!-- Session Closure and Loop -->
        <div class="screen thank-you-screen" id="thank-you-screen">
            <div class="kisha-avatar-thanks">
                <i className="fas fa-robot"></i>
            </div>
            <h2>Thank You!</h2>
            <p>For using GramVikas services</p>
            <div class="countdown" id="countdown">Returning to start in 10 seconds...</div>
        </div>
        
        <!-- Video Modal -->
        <div class="video-modal" id="video-modal">
            <div class="video-container">
                <div class="video-header">
                    <h3 id="video-title">Video Title</h3>
                    <button class="close-video" id="close-video">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div class="video-content">
                    <div class="video-placeholder">
                        <i className="fas fa-play-circle"></i>
                    </div>
                    <p id="video-description">Video description would appear here.</p>
                </div>
            </div>
        </div>
    </body>
</html>