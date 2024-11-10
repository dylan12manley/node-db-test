import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.post('/posts', async (req, res) => {
  const {title, content, category} = req.body;
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});