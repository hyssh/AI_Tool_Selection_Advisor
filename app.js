// app.js
async function loadAIToolNavigator() {
    try {
      // Fetch the questionnaire JSON data
      const response = await fetch('questions.json');
      const data = await response.json();
      
      // add a new section for introduction
      const introSectionContainer = document.getElementById('intro-section');
      const navigatorContainer = document.getElementById('quiz-container');
      let currentQuestionIndex = 0;
      const answers = [];  // to store chosen answers for each question
      const scoreTotals = { "M365 Copilot": 0, "Copilot Studio": 0, "AI Foundry": 0 };
      
      // Flatten questions from both Business and Technical sections into one array
      const allQuestions = [...data["Business decision maker"], ...data["Technical decision maker"]];
      const introText = `Choosing the right AI tool depends on your data characteristics, use case, and requirements for scale, security, and customization. Use the decision criteria below (framed as a decision tree) to determine whether Microsoft 365 Copilot/Agents, Copilot Studio, or Azure AI Foundry is the best fit for your scenario. We'll consider the 5 Vs (Volume, Velocity, Variety, Veracity, Value), data ingestion/storage needs, AI application type, user experience, security, access control, and monitoring/auditing needs in each step.`;
      
      function renderQuestion(index) {
        const questionData = allQuestions[index];
        navigatorContainer.innerHTML = `
          <div class="navigator-container">
            <div class="progress-bar">
              <div class="progress" style="width: ${(index / allQuestions.length) * 100}%"></div>
            </div>
            
            <div class="question-content">
              <div class="question-header">
                <span class="question-number">Question ${index + 1} of ${allQuestions.length}</span>
                <div class="progress-text">${Math.round((index / allQuestions.length) * 100)}% Complete</div>
              </div>

              <div class="question-body">
                <h3 class="question-text">${questionData.question}</h3>
                <div class="options-grid">
                  ${questionData.options.map((opt, i) => `
                    <button class="option-btn" data-option-index="${i}">
                      <span class="option-number">${i + 1}</span>
                      <span class="option-text">${opt.answer}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
        
        document.querySelectorAll('.option-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const optIndex = btn.getAttribute('data-option-index');
            selectAnswer(index, parseInt(optIndex));
          });
        });
      }
      
      function selectAnswer(questionIndex, optionIndex) {
        const questionData = allQuestions[questionIndex];
        const selectedOption = questionData.options[optionIndex];
        answers[questionIndex] = selectedOption.answer;
        
        for (const [tool, pts] of Object.entries(selectedOption.scores)) {
          scoreTotals[tool] += pts;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < allQuestions.length) {
          renderQuestion(currentQuestionIndex);
        } else {
          showResults();
        }
      }
      
      function showResults() {
        const sortedTools = Object.entries(scoreTotals).sort((a, b) => b[1] - a[1]);
        const [topTool, topScore] = sortedTools[0];
        
        // Calculate percentage scores based on total possible score of 33
        const TOTAL_POSSIBLE_SCORE = 33;
        const percentages = sortedTools.map(([tool, score]) => ({
          tool,
          score,
          percentage: Math.round((score / TOTAL_POSSIBLE_SCORE) * 100)
        }));

        const resultsHTML = `
          <div class="results-container">
            <h2 class="results-header">Results Analysis</h2>
            <div class="top-recommendation">
              <h3>Recommended Solution</h3>
              <div class="recommendation-box">
                <h4>${topTool}</h4>
                <p>This solution best matches your requirements with a compatibility score of ${percentages[0].percentage}%</p>
              </div>
            </div>
            
            <div class="scores-breakdown">
              <h3>Detailed Scoring</h3>
              ${percentages.map(({tool, score, percentage}) => `
                <div class="score-item">
                  <div class="tool-name">${tool}</div>
                  <div class="score-bar-container">
                    <div class="score-bar" style="width: ${percentage}%">
                      <span class="score-label">${score} of ${TOTAL_POSSIBLE_SCORE} points (${percentage}%)</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="results-footer">
              <p>Note: Scores are calculated based on a total possible score of ${TOTAL_POSSIBLE_SCORE} points.</p>
            </div>
          </div>
        `;

        // Update the DOM
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = resultsHTML;
        resultContainer.style.display = 'block';
        navigatorContainer.style.display = 'none';
      }
      
      // Start the navigator by rendering the first question
      renderQuestion(currentQuestionIndex);
    } catch (error) {
      console.error('Error loading AI Tool Navigator data:', error);
    }
  }
  
  // Initialize the AI Tool Navigator on page load
  window.addEventListener('DOMContentLoaded', loadAIToolNavigator);
