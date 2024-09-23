import fetch from "node-fetch";
const API = "https://doa-doa-api-ahmadramadhan.fly.dev/api";

const getAllDoa = async (req, res) => {
  if (!API) {
    return res
      .status(500)
      .json({ error: "API_URL is not defined in environment variables" });
  }
  try {
    const response = await fetch(API);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getDoaById = async (req, res) => {
  if (!API) {
    return res
      .status(500)
      .json({ error: "API_URL is not defined in environment variables" });
  }

  try {
    const { id } = req.params;
    const response = await fetch(`${API}/${id}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getDoaByName = async (req, res) => {
  if (!API) {
    return res
      .status(500)
      .json({ error: "API_URL is not defined in environment variables" });
  }

  try {
    const { name } = req.params;
    const response = await fetch(`${API}/doa/${name}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { getAllDoa, getDoaById, getDoaByName };
