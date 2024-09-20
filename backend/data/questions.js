const questions = [
    [
      {
        "id": 1,
        "question": "What should you do if you receive an unexpected email asking for your login credentials?",
        "options": [
          "Ignore the email",
          "Forward it to IT security",
          "Provide the requested information"
        ]
      },
      {
        "id": 2,
        "question": "Which of the following is a common sign of a phishing attempt?",
        "options": [
          "An email with grammatical errors",
          "A well-written company newsletter",
          "An email from a known colleague"
        ]
      },
      {
        "id": 3,
        "question": "Why is it important to use a secure password manager?",
        "options": [
          "To store passwords safely",
          "To automatically update software",
          "To improve computer performance"
        ]
      },
      {
        "id": 4,
        "question": "What is the best practice when creating a password?",
        "options": [
          "Use a mix of letters, numbers, and symbols",
          "Use your birthdate for easy recall",
          "Use 'password' for all accounts"
        ]
      },
      {
        "id": 5,
        "question": "What should you do if you suspect a security breach in your system?",
        "options": [
          "Immediately report to IT security",
          "Try to fix the issue yourself",
          "Ignore it and continue working"
        ]
      },
      {
        "id": 6,
        "question": "Why is two-factor authentication important?",
        "options": [
          "It provides an extra layer of security",
          "It speeds up login processes",
          "It replaces the need for passwords"
        ]
      },
      {
        "id": 7,
        "question": "What should you do with a USB drive found in the office?",
        "options": [
          "Report it to IT security",
          "Plug it into your computer to check its contents",
          "Throw it away"
        ]
      },
      {
        "id": 8,
        "question": "Why is it important to lock your computer when stepping away?",
        "options": [
          "To prevent unauthorized access",
          "To save battery life",
          "To speed up your computer"
        ]
      },
      {
        "id": 9,
        "question": "Which of the following is considered a secure method of sending sensitive information?",
        "options": [
          "Encrypted email",
          "Regular email",
          "Social media message"
        ]
      },
      {
        "id": 10,
        "question": "What is the role of cybersecurity awareness in a financial institution?",
        "options": [
          "To protect sensitive financial data",
          "To increase customer satisfaction",
          "To speed up financial transactions"
        ]
      }
    ],
    [
      {
        "id": 11,
        "question": "What action should you take if you notice unusual activity on your bank's network?",
        "options": [
          "Report it to the IT department",
          "Ignore it",
          "Discuss it with your colleagues"
        ]
      },
      {
        "id": 12,
        "question": "How can phishing attacks be recognized?",
        "options": [
          "Suspicious links or attachments",
          "Emails from known contacts",
          "Messages with proper formatting"
        ]
      },
      {
        "id": 13,
        "question": "What is a secure way to handle sensitive customer data?",
        "options": [
          "Encrypting the data before storage",
          "Storing it in a public folder",
          "Sharing it over unsecured networks"
        ]
      },
      {
        "id": 14,
        "question": "Which of the following practices can help in preventing data breaches?",
        "options": [
          "Regularly updating software",
          "Using outdated software",
          "Ignoring software updates"
        ]
      },
      {
        "id": 15,
        "question": "Why should you avoid using public Wi-Fi for work-related tasks?",
        "options": [
          "Public Wi-Fi is less secure",
          "It is slower than private networks",
          "It drains your battery faster"
        ]
      },
      {
        "id": 16,
        "question": "What should you do if your password is compromised?",
        "options": [
          "Change it immediately",
          "Keep using it",
          "Share it with a colleague"
        ]
      },
      {
        "id": 17,
        "question": "Why is it important to use different passwords for different accounts?",
        "options": [
          "To minimize the risk if one password is compromised",
          "To make it easier to remember passwords",
          "To confuse attackers"
        ]
      },
      {
        "id": 18,
        "question": "What is the best course of action if you receive a suspicious file from a known contact?",
        "options": [
          "Verify with the sender before opening",
          "Open it immediately",
          "Delete it without informing anyone"
        ]
      },
      {
        "id": 19,
        "question": "Which of the following can be a result of a successful cyber attack on a financial institution?",
        "options": [
          "Financial loss",
          "Increased network speed",
          "Improved customer service"
        ]
      },
      {
        "id": 20,
        "question": "How often should you update your passwords?",
        "options": [
          "Regularly, every few months",
          "Once a year",
          "Never, unless there’s a breach"
        ]
      }
    ],
    [
        {
          "id": 21,
          "question": "What is a common tactic used by attackers to gain access to sensitive financial information?",
          "options": [
            "Phishing emails",
            "Regular company newsletters",
            "Official bank notices"
          ]
        },
        {
          "id": 22,
          "question": "Which type of malware is designed to lock users out of their systems until a ransom is paid?",
          "options": [
            "Ransomware",
            "Adware",
            "Spyware"
          ]
        },
        {
          "id": 23,
          "question": "Why should you avoid downloading unauthorized software on your work computer?",
          "options": [
            "It could contain malware",
            "It might be slow",
            "It could be expensive"
          ]
        },
        {
          "id": 24,
          "question": "What should you do if you accidentally click on a suspicious link?",
          "options": [
            "Report it to IT immediately",
            "Ignore it and continue working",
            "Restart your computer"
          ]
        },
        {
          "id": 25,
          "question": "Which of the following is a secure practice when dealing with customer financial data?",
          "options": [
            "Encrypting data before storage",
            "Sharing passwords with colleagues",
            "Using default passwords"
          ]
        },
        {
          "id": 26,
          "question": "Why is it important to regularly back up financial data?",
          "options": [
            "To prevent data loss in case of a breach",
            "To save storage space",
            "To make data more accessible"
          ]
        },
        {
          "id": 27,
          "question": "What is the purpose of a security audit in a financial institution?",
          "options": [
            "To identify and mitigate security risks",
            "To increase transaction speed",
            "To improve customer satisfaction"
          ]
        },
        {
          "id": 28,
          "question": "What should you do if you notice unauthorized transactions in a client’s account?",
          "options": [
            "Report it to your supervisor immediately",
            "Ignore it",
            "Notify the client directly"
          ]
        },
        {
          "id": 29,
          "question": "Which of the following is a best practice for handling sensitive information on a mobile device?",
          "options": [
            "Using a VPN when accessing work data",
            "Connecting to public Wi-Fi",
            "Disabling device encryption"
          ]
        },
        {
          "id": 30,
          "question": "What is the role of encryption in protecting financial data?",
          "options": [
            "To ensure data privacy and security",
            "To make data easier to share",
            "To speed up data transmission"
          ]
        }
      ],
      [
        {
          "id": 31,
          "question": "What should you do if you receive a suspicious phone call asking for sensitive information?",
          "options": [
            "Hang up and report it to IT security",
            "Provide the requested information",
            "Ask the caller to email you instead"
          ]
        },
        {
          "id": 32,
          "question": "Why is it risky to use the same password across multiple accounts?",
          "options": [
            "If one account is compromised, all accounts are at risk",
            "It makes logging in slower",
            "It can confuse attackers"
          ]
        },
        {
          "id": 33,
          "question": "What is the best action to take if you lose a device containing work-related data?",
          "options": [
            "Report the loss immediately to IT",
            "Search for the device before reporting",
            "Wait to see if the device is found"
          ]
        },
        {
          "id": 34,
          "question": "Which of the following is a secure way to dispose of sensitive documents?",
          "options": [
            "Shredding them",
            "Throwing them in the trash",
            "Recycling them"
          ]
        },
        {
          "id": 35,
          "question": "How can you protect your work accounts from being hacked?",
          "options": [
            "By using strong, unique passwords",
            "By sharing passwords with trusted colleagues",
            "By using the same password for all accounts"
          ]
        },
        {
          "id": 36,
          "question": "Why is it important to verify the sender’s identity before opening an email attachment?",
          "options": [
            "Attachments can contain malware",
            "It’s a company policy",
            "It could be a large file"
          ]
        },
        {
          "id": 37,
          "question": "What should you do if you suspect that your computer has been infected with malware?",
          "options": [
            "Disconnect from the network and inform IT",
            "Continue working and hope it resolves itself",
            "Ignore it and wait for IT to notice"
          ]
        },
        {
          "id": 38,
          "question": "Which of the following should you do to secure your online banking accounts?",
          "options": [
            "Enable two-factor authentication",
            "Use the same password as your email",
            "Avoid changing your password"
          ]
        },
        {
          "id": 39,
          "question": "What is the safest way to access work-related data remotely?",
          "options": [
            "Using a company-provided VPN",
            "Connecting directly through public Wi-Fi",
            "Accessing via a personal email account"
          ]
        },
        {
          "id": 40,
          "question": "Why is it important to log out of your accounts when using shared devices?",
          "options": [
            "To prevent unauthorized access",
            "To make the device faster",
            "To save battery life"
          ]
        }
      ],
      [
        {
          "id": 41,
          "question": "What should you do if you receive an email from a known contact asking for sensitive information urgently?",
          "options": [
            "Verify the request via a different communication method",
            "Respond with the requested information immediately",
            "Ignore the email"
          ]
        },
        {
          "id": 42,
          "question": "Which of the following actions can help protect against ransomware attacks?",
          "options": [
            "Regularly backing up your data",
            "Clicking on suspicious links",
            "Ignoring software updates"
          ]
        },
        {
          "id": 43,
          "question": "Why is it important to regularly update your antivirus software?",
          "options": [
            "To ensure it can protect against the latest threats",
            "To speed up your computer",
            "To free up storage space"
          ]
        },
        {
          "id": 44,
          "question": "What is the safest way to store sensitive customer data?",
          "options": [
            "Encrypting the data and storing it in a secure location",
            "Saving it on your desktop",
            "Sharing it via email"
          ]
        },
        {
          "id": 45,
          "question": "Which of the following is a strong security practice when using mobile devices for work?",
          "options": [
            "Enabling remote wipe capabilities",
            "Leaving your device unlocked",
            "Sharing your device with others"
          ]
        },
        {
          "id": 46,
          "question": "What should you do if you discover a colleague's computer is left unlocked?",
          "options": [
            "Lock the computer and inform them",
            "Browse their files",
            "Ignore it and walk away"
          ]
        },
        {
          "id": 47,
          "question": "Why is it important to recognize and report suspicious activity in the workplace?",
          "options": [
            "To prevent potential security breaches",
            "To increase your workload",
            "To impress your supervisor"
          ]
        },
        {
          "id": 48,
          "question": "Which of the following is an example of a secure password?",
          "options": [
            "R@nd0mP@$$w0rd!",
            "12345",
            "password"
          ]
        },
        {
          "id": 49,
          "question": "What is a potential consequence of a successful phishing attack on a financial institution?",
          "options": [
            "Financial loss and reputational damage",
            "Increased network efficiency",
            "Enhanced customer loyalty"
          ]
        },
        {
          "id": 50,
          "question": "What should you do if you are unsure whether an email is legitimate?",
          "options": [
            "Report it to IT for verification",
            "Delete it without reporting",
            "Forward it to your colleagues"
          ]
        }
      ],
      [
        {
          "id": 51,
          "question": "Why should you avoid using the same password for your work and personal accounts?",
          "options": [
            "To minimize risk if one account is compromised",
            "To make it easier to remember passwords",
            "To speed up login times"
          ]
        },
        {
          "id": 52,
          "question": "Which of the following is a good practice when accessing work systems remotely?",
          "options": [
            "Using a secure VPN connection",
            "Using a public Wi-Fi without protection",
            "Saving your credentials in the browser"
          ]
        },
        {
          "id": 53,
          "question": "What is the best way to handle a suspicious file sent by a customer?",
          "options": [
            "Scan it with antivirus software before opening",
            "Open it immediately to see what's inside",
            "Ignore it and continue with your work"
          ]
        },
        {
          "id": 54,
          "question": "Why is it important to use encryption when transmitting sensitive data?",
          "options": [
            "To protect the data from being intercepted by unauthorized parties",
            "To make the data easier to share",
            "To reduce the size of the data"
          ]
        },
        {
          "id": 55,
          "question": "What is the most secure way to share sensitive information with a colleague?",
          "options": [
            "Using encrypted email or a secure file-sharing service",
            "Sending it via text message",
            "Posting it on a shared social media platform"
          ]
        },
        {
          "id": 56,
          "question": "What should you do if your work device is lost or stolen?",
          "options": [
            "Report it immediately to IT and your supervisor",
            "Wait a few days to see if it turns up",
            "Replace it with a personal device"
          ]
        },
        {
          "id": 57,
          "question": "Which of the following is a sign that your computer may be infected with malware?",
          "options": [
            "Unusually slow performance or frequent crashes",
            "Increased battery life",
            "Improved internet speed"
          ]
        },
        {
          "id": 58,
          "question": "What is the purpose of using a password manager?",
          "options": [
            "To securely store and manage multiple passwords",
            "To automatically fill out forms",
            "To remember a single password for all accounts"
          ]
        },
        {
          "id": 59,
          "question": "Why is it important to report a lost or stolen access badge immediately?",
          "options": [
            "To prevent unauthorized access to secure areas",
            "To avoid paying a replacement fee",
            "To get a new badge quickly"
          ]
        },
        {
          "id": 60,
          "question": "What is the best way to prevent unauthorized access to your work computer?",
          "options": [
            "Use a simple, easy-to-remember password",
            "Lock your computer whenever you leave your desk",
            "Share your password only with trusted colleagues"
          ]
        }
      ]
  ]

  export default questions

  export const answers = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  ]
