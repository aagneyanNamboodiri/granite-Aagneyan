import React, { useState } from "react";
import Container from "components/Container";
import Form from "./Form";
import tasksApi from "apis/tasks";

const Create = ({ history }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      await tasksApi.create(task: { title });
      setLoading(false);
      history.push("/dashboard");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form setTitle={setTitle} loading={loading} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default Create;
