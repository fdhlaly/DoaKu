"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import DoaCard from "./components/DoaCard";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Loader from "./components/Loader";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

function App() {
  const [doa, setDoa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData("http://localhost:4000");
        setDoa(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handlerGetDataById = async (id) => {
    setIsLoading(true);
    try {
      const data = await fetchData(`http://localhost:4000/${id}`);
      setModalContent(data[0]);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching data by ID:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="relative min-h-screen min-w-full flex flex-col gap-4 items-center bg-[#0f0f0f] text-white">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <main className="rounded shadow shadow-[#66fcf1] w-4/5 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-14">
          {doa.map((item) => (
            <DoaCard
              key={item.id}
              doa={item.doa}
              onClick={() => handlerGetDataById(item.id)}
            />
          ))}
        </main>
      )}
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}

export default App;
