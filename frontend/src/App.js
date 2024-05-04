import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.fontless.min.css';
import surveyJson from './json'


function App() {
  const survey = new Model(surveyJson);
  survey.onComplete.add(async function (sender , options){
    //console.log(sender.data);
    //console.log(options);

    const surveyData = sender.data;
    
    const response = await fetch('/api/surveys', {
      method: 'POST',
      body: JSON.stringify(surveyData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      console.log("there is an error")
    }
    if (response.ok) {
      console.log('survey created')
    }
  })
  return (
    <div className="App">
      <Survey model={survey} />
    </div>
  );
}

export default App;
