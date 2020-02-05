import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getQuestionsAsync } from "../../redux/questions/questions.actions";
import { selectUserQuestions } from "../../redux/questions/questions.reselect";
import { selectCurrentUser } from "../../redux/user/user.reselect";

import QuestionPreview from "../../components/question-preview/question-preview.component";
import { QuestionsContainer, Tabs, Tab, TabPanels } from "./home.styles";

function TabPanel(props) {
   const { value, index, children } = props;
   return value === index ? children : null;
}

function HomePage(props) {
   const { userQuestions, getQuestions } = props;
   const { unansweredQuestions, answeredQuestions } = userQuestions;

   const [activeTab, setActiveTab] = useState(1);

   useEffect(() => {
      getQuestions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <QuestionsContainer>
         <Tabs>
            <Tab
               onClick={() => setActiveTab(0)}
               active={activeTab === 0 ? "active" : ""}
            >
               Answered Questions
            </Tab>
            <Tab
               onClick={() => setActiveTab(1)}
               active={activeTab === 1 ? "active" : ""}
            >
               Unanswered Questions
            </Tab>
         </Tabs>

         <TabPanels>
            <TabPanel value={activeTab} index={0}>
               {answeredQuestions.map(question => (
                  <QuestionPreview
                     key={question.id}
                     {...question}
                     headerLabel={question.name + " asked"}
                  />
               ))}
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
               {unansweredQuestions.map(question => (
                  <QuestionPreview
                     key={question.id}
                     {...question}
                     headerLabel={question.name + " asks"}
                  />
               ))}
            </TabPanel>
         </TabPanels>
      </QuestionsContainer>
   );
}

const mapStateToDispatch = dispatch => ({
   getQuestions: () => dispatch(getQuestionsAsync())
});

const mapStateToProps = state => ({
   userQuestions: selectUserQuestions(selectCurrentUser(state).id)(state)
});

export default connect(
   mapStateToProps,
   mapStateToDispatch
)(HomePage);
