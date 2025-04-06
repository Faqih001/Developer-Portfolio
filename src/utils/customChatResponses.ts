
interface ResponsePattern {
  patterns: RegExp[];
  responses: string[];
  getPriority?: () => number;
}

// Generate a random response from the available options
const getRandomResponse = (responses: string[]): string => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

// Collection of response patterns and their possible answers
export const responsePatterns: ResponsePattern[] = [
  {
    patterns: [/hi|hello|hey|greetings/i],
    responses: [
      "Hello there! How can I help you today?",
      "Hi! I'm your virtual assistant. What can I do for you?",
      "Hey! How can I assist you today?",
      "Greetings! What brings you here today?"
    ],
  },
  {
    patterns: [/how are you|how('s| is) it going|what('s| is) up/i],
    responses: [
      "I'm doing great! Thanks for asking. How can I assist you?",
      "I'm here and ready to help! What can I do for you?",
      "All systems operational! What do you need help with?",
      "I'm good! What can I help you with today?"
    ],
  },
  {
    patterns: [/bye|goodbye|see you|farewell/i],
    responses: [
      "Goodbye! Feel free to chat again anytime.",
      "See you later! Have a great day!",
      "Farewell! Don't hesitate to return if you need assistance.",
      "Bye for now! Come back soon!"
    ],
  },
  {
    patterns: [/thank(s| you)|appreciate|grateful/i],
    responses: [
      "You're welcome! Is there anything else I can help with?",
      "Happy to help! Let me know if you need anything else.",
      "Anytime! What else can I assist you with?",
      "My pleasure! Feel free to ask if you need more assistance."
    ],
  },
  {
    patterns: [/portfolio|project|work|experience/i],
    responses: [
      "This portfolio showcases various projects and skills. Feel free to explore the different sections!",
      "You can find details about projects, skills, and experience in the respective sections of this portfolio.",
      "The portfolio highlights professional accomplishments, skills, and projects. Take a look around!",
      "Check out the Projects section to see some of the notable work displayed in this portfolio."
    ],
  },
  {
    patterns: [/contact|reach|email|message/i],
    responses: [
      "You can use the contact form in the Contact section to send a message.",
      "The best way to get in touch is through the contact form or the provided social links.",
      "Feel free to reach out using the contact information available in the Contact section.",
      "To connect, please use the contact form or the social media links provided."
    ],
  },
  {
    patterns: [/skill|technology|tech stack|language/i],
    responses: [
      "The Skills section showcases various technologies and expertise levels.",
      "You can find a comprehensive list of skills and technologies in the Skills section.",
      "The portfolio highlights proficiency in various programming languages and technologies in the Skills area.",
      "Check out the Skills section to learn about the various technologies and tools used."
    ],
  },
  {
    patterns: [/education|study|degree|university|college/i],
    responses: [
      "Educational background and qualifications can be found in the Education section.",
      "Details about academic achievements are available in the Education section.",
      "The Education section provides information about academic background and qualifications.",
      "You can learn about educational history and achievements in the dedicated Education area."
    ],
  },
  {
    patterns: [/help|assist|support|guidance/i],
    responses: [
      "I'm here to help! What specific information are you looking for?",
      "I'd be happy to assist. What would you like to know about?",
      "How can I help you today? Feel free to ask about any section of the portfolio.",
      "I'm your virtual assistant. What kind of information do you need?"
    ],
  },
  {
    patterns: [/./],
    responses: [
      "I'm not sure I understand. Could you please rephrase your question?",
      "I don't have that information at the moment. Is there something else I can help with?",
      "That's an interesting question. Could you provide more details so I can assist better?",
      "I'm sorry, I don't have a specific answer for that. Is there another way I can help you?",
      "I'm still learning! Could you try asking in a different way or about something else?"
    ],
    getPriority: () => 0, // Lowest priority as this is a fallback
  },
];

export function generateResponse(message: string): string {
  // Find all matching patterns
  const matchingPatterns = responsePatterns.filter(pattern => 
    pattern.patterns.some(regex => regex.test(message))
  );
  
  // Sort by priority if available (higher priority first)
  const sortedMatches = matchingPatterns.sort((a, b) => {
    const priorityA = a.getPriority ? a.getPriority() : 1;
    const priorityB = b.getPriority ? b.getPriority() : 1;
    return priorityB - priorityA;
  });
  
  // Get the highest priority match or fallback
  const bestMatch = sortedMatches.length > 0 
    ? sortedMatches[0] 
    : responsePatterns[responsePatterns.length - 1]; // Fallback to last pattern
  
  return getRandomResponse(bestMatch.responses);
}
