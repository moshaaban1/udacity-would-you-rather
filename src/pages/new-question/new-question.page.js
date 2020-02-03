import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { createNewQuestionAsync } from "../../redux/questions/questions.actions";
import { selectCurrentUser } from "../../redux/user/user.reselect";

import Button from "../../components/button/button.component";
import {
   FormContainer,
   Form,
   FormInput,
   FormHeader
} from "./new-question.styles";

const NewQuestionPage = ({ createQuestion, currentUser }) => {
   const history = useHistory();
   const [inputValues, setInputValues] = useState({
      optionOneText: "",
      optionTwoText: ""
   });

   const handleSubmit = () => {
      createQuestion({ ...inputValues, author: currentUser.id });
      setTimeout(() => {
         history.push("/");
      }, 2000);
   };

   const handleChange = e => {
      var { value, name } = e.target;
      setInputValues({ ...inputValues, [name]: value });
   };

   return (
      <FormContainer>
         <FormHeader>Create New Question</FormHeader>
         <Form>
            <h3 style={{ marginTop: 0 }}>Would you rather.....</h3>
            <FormInput
               type="text"
               name="optionOneText"
               placeholder="Enter Option One Text Here"
               onChange={handleChange}
            />
            <strong
               style={{ textAlign: "center", display: "block", padding: "5px" }}
            >
               OR
            </strong>
            <FormInput
               type="text"
               name="optionTwoText"
               placeholder="Enter Option Two Text Here"
               onChange={handleChange}
            />
            <Button
               full
               inverted
               style={{ marginTop: "10px" }}
               onClick={handleSubmit}
            >
               Submit
            </Button>
         </Form>
      </FormContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   createQuestion: payload => dispatch(createNewQuestionAsync(payload))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewQuestionPage);
