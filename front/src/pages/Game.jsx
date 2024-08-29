import one from '../assets/q1.png';
import two from '../assets/q2.png';
import three from '../assets/q3.png';
import four from '../assets/q4.png';
import five from '../assets/q5.png';
import six from '../assets/q6.png';
import seven from '../assets/q7.png';
import eight from '../assets/q8.png';
import nine from '../assets/q9.png';
import ten from '../assets/q10.png';

import backgroundImage from '../assets/bg.jpg';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const scenarios = [
  {
    image: one,
    question: 'What should you do before starting a hike in a natural area?',
    options: [
      { text: 'Leave your trash on the trail', isCorrect: false },
      { text: 'Check for local wildlife warnings and regulations', isCorrect: true },
      { text: 'Ignore park rules and regulations', isCorrect: false },
      { text: 'Feed the wildlife along the way', isCorrect: false }
    ]
  },
  {
    image: two,
    question: 'What is the best practice for camping in a national park?',
    options: [
      { text: 'Camp outside of designated areas', isCorrect: false },
      { text: 'Leave no trace and use established campsites', isCorrect: true },
      { text: 'Start a fire anywhere', isCorrect: false },
      { text: 'Dispose of waste in the park’s waterways', isCorrect: false }
    ]
  },
  {
    image: three,
    question: 'How can you minimize your environmental impact while traveling?',
    options: [
      { text: 'Use public transportation or bike when possible', isCorrect: true },
      { text: 'Always opt for single-use plastic products', isCorrect: false },
      { text: 'Ignore local conservation rules', isCorrect: false },
      { text: 'Travel during peak tourist seasons', isCorrect: false }
    ]
  },
  {
    image: four,
    question: 'What is a key principle of ecotourism?',
    options: [
      { text: 'Promoting mass tourism and large crowds', isCorrect: false },
      { text: 'Encouraging conservation and environmental awareness', isCorrect: true },
      { text: 'Exploiting natural resources for profit', isCorrect: false },
      { text: 'Ignoring local cultures and communities', isCorrect: false }
    ]
  },
  {
    image: five,
    question: 'What should you do if you encounter wildlife during your outdoor activities?',
    options: [
      { text: 'Approach and feed them', isCorrect: false },
      { text: 'Maintain a safe distance and observe quietly', isCorrect: true },
      { text: 'Disturb their habitat', isCorrect: false },
      { text: 'Take them as pets', isCorrect: false }
    ]
  },
  {
    image: six,
    question: 'How can you contribute to the preservation of natural habitats?',
    options: [
      { text: 'Pick and collect plants and rocks', isCorrect: false },
      { text: 'Follow marked trails and respect park boundaries', isCorrect: true },
      { text: 'Leave behind litter and waste', isCorrect: false },
      { text: 'Ignore wildlife protection laws', isCorrect: false }
    ]
  },
  {
    image: seven,
    question: 'What is an eco-friendly way to manage waste while camping?',
    options: [
      { text: 'Burn all trash in a campfire', isCorrect: false },
      { text: 'Use proper waste disposal facilities and pack out all trash', isCorrect: true },
      { text: 'Leave food waste in the wild', isCorrect: false },
      { text: 'Dispose of waste in natural water sources', isCorrect: false }
    ]
  },
  {
    image: eight,
    question: 'What is a sustainable way to support local communities while traveling?',
    options: [
      { text: 'Buy souvenirs from local artisans', isCorrect: true },
      { text: 'Avoid interacting with local communities', isCorrect: false },
      { text: 'Use only international chain stores', isCorrect: false },
      { text: 'Ignore local customs and traditions', isCorrect: false }
    ]
  },
  {
    image: nine,
    question: 'What is the importance of staying on marked trails during hikes?',
    options: [
      { text: 'To avoid getting lost in the wilderness', isCorrect: false },
      { text: 'To protect fragile plant life and prevent erosion', isCorrect: true },
      { text: 'To ensure a shorter hiking distance', isCorrect: false },
      { text: 'To find better spots for picnicking', isCorrect: false }
    ]
  },
  {
    image: ten,
    question: 'How can you reduce your carbon footprint when traveling?',
    options: [
      { text: 'Use energy-efficient accommodations and reduce air travel', isCorrect: true },
      { text: 'Opt for frequent flights and stay in high-energy-use hotels', isCorrect: false },
      { text: 'Travel by private car instead of public transport', isCorrect: false },
      { text: 'Ignore eco-certifications for accommodations', isCorrect: false }
    ]
  }
];

const Game = () => {
  const [scenario, setScenario] = useState(getRandomScenario());
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  function getRandomScenario() {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    return scenarios[randomIndex];
  }

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setFeedback('Correct! Well done.');
    } else {
      setFeedback('Incorrect. Try again!');
    }
    // Load a new scenario after a short delay
    setTimeout(() => {
      setScenario(getRandomScenario());
      setSelectedOption(null);
      setFeedback('');
    }, 2000);
  };

  return (
    <div>

      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 container mx-2 p-12">
        
        <div className="text-center mb-12">
        <img
          src={scenario.image}
          alt="Scenario"
          className="object-cover max-w-md mx-auto mb-6 rounded-xl shadow-lg size-48"
       />
          <div className='bg-white text-center mx-10 rounded shadow-md w-full max-w-screen-lg'>
            <p className="text-2xl font-semibold text-black mb-5 leading-relaxed">
              {scenario.question}
            </p>
          </div>  
          <div className="grid gap-6 lg:grid-cols-2">
            {scenario.options.map((option, index) => (
              <div
                key={index}
                className={`bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                  option.isCorrect ? 'hover:bg-green-500' : 'hover:bg-red-500'
                }`}
                onClick={() => handleOptionClick(option.isCorrect)}
              >
                <div className="p-4">
                  <p className="text-lg font-semibold text-white">{option.text}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
        
      </div>

    </div>
  );
}

export default Game;