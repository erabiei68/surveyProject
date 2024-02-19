import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import surveyJson from './json'


function App() {
  const survey = new Model(surveyJson);
  return (
    <div className="App">
      <Survey model={survey} />
    </div>
  );
}

export default App;
