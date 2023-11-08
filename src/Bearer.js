const bearer = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3ZmIwYTc3Y2RhYTAwMTQ2ZGYzODMiLCJpYXQiOjE2OTkzODE0MDMsImV4cCI6MTcwMDU5MTAwM30.7BUU94eKni7ti8_8TzubJ5MmMT_knLi5uCvQqxSylNY";
const getMethod = {
  method: "GET",
  headers: {
    Authorization: bearer,
  },
};
const postMethod = {
    method: "POST",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  }
  const putMethod = {
    method: "PUT",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment: newComment, rate: newRate }),
  }
  const deleteMethod = {
    method: "DELETE",
    headers: {
      Authorization: bearer,
      "Content-Type": "application/json",
    }
  }


export { bearer, getMethod,postMethod, putMethod, deleteMethod };

