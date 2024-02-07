import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PokemonPage from "./pages/PokemonPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";



const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path="pokemon/:id" element={<PokemonPage/>}/>
        <Route path="search" element={<SearchPage/>}/>

        {/* Vamos a usar Outlet xq vamos a usar un componente que se va a renderizar en toods los componentes que va  a ser el header */}
      </Route>
      <Route path="*" element={<Navigate to ='/'/>}/>
    </Routes>
  );
};

export default AppRouter;
